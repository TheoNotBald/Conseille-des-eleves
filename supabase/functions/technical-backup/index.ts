import { createClient, type SupabaseClient } from "https://esm.sh/@supabase/supabase-js@2";

const projectUrl = Deno.env.get("SUPABASE_URL");
const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
const backedUpBuckets = ["candidate-photos", "project-images", "member-photos"];
const backupBucket = "technical-backups";
const corsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "authorization, x-client-info, apikey, content-type",
  "access-control-allow-methods": "POST, OPTIONS"
};

if (!projectUrl || !anonKey || !serviceRoleKey) {
  throw new Error("Missing Supabase environment variables for technical backups");
}

const serviceClient = createClient(projectUrl, serviceRoleKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});

type Authorization = {
  client: SupabaseClient;
  email: string;
  service: boolean;
};

type ManifestEntry = {
  bucket: string;
  path: string;
  backupPath: string;
  contentType: string;
};

const jsonResponse = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "content-type": "application/json; charset=utf-8" }
  });

const authorize = async (request: Request): Promise<Authorization | Response> => {
  const authorization = request.headers.get("authorization") || "";
  if (authorization === `Bearer ${serviceRoleKey}`) {
    return { client: serviceClient, email: "Scheduled service", service: true };
  }
  if (!authorization.startsWith("Bearer ")) {
    return jsonResponse(401, { error: "Google sign-in is required." });
  }

  const userClient = createClient(projectUrl!, anonKey!, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: { headers: { Authorization: authorization } }
  });
  const { data: userData, error: userError } = await userClient.auth.getUser();
  if (userError || !userData.user) {
    return jsonResponse(401, { error: "The sign-in session could not be verified." });
  }
  const { data: allowed, error: accessError } = await userClient.rpc("is_cdecc_technical_admin");
  if (accessError || allowed !== true) {
    return jsonResponse(403, { error: "Technical Panel access is not allowed." });
  }
  return { client: userClient, email: userData.user.email || "Technical administrator", service: false };
};

const listBucketFiles = async (bucket: string, prefix = ""): Promise<string[]> => {
  const files: string[] = [];
  let offset = 0;
  while (true) {
    const { data, error } = await serviceClient.storage.from(bucket).list(prefix, {
      limit: 100,
      offset,
      sortBy: { column: "name", order: "asc" }
    });
    if (error) throw new Error(`Could not list ${bucket}: ${error.message}`);
    for (const item of data || []) {
      const path = prefix ? `${prefix}/${item.name}` : item.name;
      if (item.id === null) {
        files.push(...await listBucketFiles(bucket, path));
      } else {
        files.push(path);
      }
    }
    if (!data || data.length < 100) break;
    offset += data.length;
  }
  return files;
};

const removeBackupFiles = async (manifest: ManifestEntry[]) => {
  const paths = manifest.map(entry => entry.backupPath);
  for (let index = 0; index < paths.length; index += 100) {
    const { error } = await serviceClient.storage
      .from(backupBucket)
      .remove(paths.slice(index, index + 100));
    if (error) throw new Error(`Could not remove backup files: ${error.message}`);
  }
};

const removeBackup = async (id: string) => {
  const { data: backup, error: readError } = await serviceClient
    .from("technical_backups")
    .select("manifest")
    .eq("id", id)
    .maybeSingle();
  if (readError) throw new Error(`Could not load backup: ${readError.message}`);
  if (!backup) return;
  await removeBackupFiles(Array.isArray(backup.manifest) ? backup.manifest : []);
  const { error } = await serviceClient.from("technical_backups").delete().eq("id", id);
  if (error) throw new Error(`Could not delete backup record: ${error.message}`);
};

const enforceBackupRetention = async () => {
  const { data: settings, error: settingsError } = await serviceClient
    .from("technical_settings")
    .select("backup_retention")
    .eq("singleton", true)
    .single();
  if (settingsError) throw new Error(`Backup completed, but retention could not be checked: ${settingsError.message}`);
  const { data: backups, error: backupsError } = await serviceClient
    .from("technical_backups")
    .select("id")
    .eq("status", "complete")
    .order("created_at", { ascending: false });
  if (backupsError) throw new Error(`Backup completed, but retention could not be checked: ${backupsError.message}`);
  for (const expired of (backups || []).slice(settings.backup_retention)) {
    await removeBackup(expired.id);
  }
  const { error: failedError } = await serviceClient.from("technical_backups")
    .delete().eq("status", "failed").lt("created_at", new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString());
  if (failedError) throw new Error(`Could not remove expired failed-backup records: ${failedError.message}`);
};

const createBackup = async (actor: Authorization, applyRetention = true) => {
  const { data: snapshot, error: snapshotError } = await serviceClient.rpc("capture_technical_backup_data");
  if (snapshotError) throw new Error(`Could not capture site data: ${snapshotError.message}`);

  const id = crypto.randomUUID();
  const manifest: ManifestEntry[] = [];
  try {
    for (const bucket of backedUpBuckets) {
      for (const path of await listBucketFiles(bucket)) {
        const { data: file, error: downloadError } = await serviceClient.storage.from(bucket).download(path);
        if (downloadError || !file) {
          throw new Error(`Could not read ${bucket}/${path}: ${downloadError?.message || "file unavailable"}`);
        }
        const backupPath = `${id}/${bucket}/${path}`;
        const { error: uploadError } = await serviceClient.storage.from(backupBucket).upload(backupPath, file, {
          contentType: file.type || "application/octet-stream",
          upsert: false
        });
        if (uploadError) throw new Error(`Could not archive ${bucket}/${path}: ${uploadError.message}`);
        manifest.push({ bucket, path, backupPath, contentType: file.type || "application/octet-stream" });
      }
    }

    const { error: insertError } = await serviceClient.from("technical_backups").insert({
      id,
      created_by: actor.email,
      status: "complete",
      payload: snapshot,
      manifest
    });
    if (insertError) throw new Error(`Could not save backup record: ${insertError.message}`);
  } catch (error) {
    try {
      await removeBackupFiles(manifest);
    } catch (cleanupError) {
      console.error("Could not clean up incomplete backup files:", cleanupError);
    }
    const message = error instanceof Error ? error.message : "Backup failed.";
    const { error: recordError } = await serviceClient.from("technical_backups").insert({
      id,
      created_by: actor.email,
      status: "failed",
      payload: null,
      manifest: [],
      error_message: message.slice(0, 1000)
    });
    if (recordError) console.error("Could not record backup failure:", recordError);
    throw error;
  }

  if (applyRetention) await enforceBackupRetention();

  return id;
};

const restoreSnapshot = async (snapshot: {
  id: string;
  payload: Record<string, unknown>;
  manifest: ManifestEntry[];
}) => {
  for (const bucket of backedUpBuckets) {
    const bucketManifest = snapshot.manifest.filter(entry => entry.bucket === bucket);
    const expectedPaths = new Set(bucketManifest.map(entry => entry.path));
    const currentPaths = await listBucketFiles(bucket);
    const obsoletePaths = currentPaths.filter(path => !expectedPaths.has(path));
    for (let index = 0; index < obsoletePaths.length; index += 100) {
      const { error } = await serviceClient.storage.from(bucket).remove(obsoletePaths.slice(index, index + 100));
      if (error) throw new Error(`Could not remove post-backup files from ${bucket}: ${error.message}`);
    }

    for (const entry of bucketManifest) {
      if (!entry.backupPath.startsWith(`${snapshot.id}/`)) {
        throw new Error("Backup manifest contains an invalid storage path.");
      }
      const { data: file, error: downloadError } = await serviceClient.storage
        .from(backupBucket)
        .download(entry.backupPath);
      if (downloadError || !file) {
        throw new Error(`Could not read archived file: ${downloadError?.message || entry.path}`);
      }
      const { error: uploadError } = await serviceClient.storage.from(bucket).upload(entry.path, file, {
        contentType: entry.contentType,
        upsert: true
      });
      if (uploadError) throw new Error(`Could not restore ${bucket}/${entry.path}: ${uploadError.message}`);
    }
  }

  const { error } = await serviceClient.rpc("restore_technical_backup_data", {
    p_payload: snapshot.payload
  });
  if (error) throw new Error(`Could not restore app data: ${error.message}`);
};

Deno.serve(async request => {
  if (request.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  if (request.method !== "POST") return jsonResponse(405, { error: "Use POST." });
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(400, { error: "Request must contain valid JSON." });
  }
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return jsonResponse(400, { error: "Request must contain a JSON object." });
  }

  const authorization = await authorize(request);
  if (authorization instanceof Response) return authorization;
  const action = String(body.action || "");

  try {
    if (action === "health") {
      const { data: buckets, error: bucketsError } = await serviceClient.storage.listBuckets();
      if (bucketsError) throw new Error(`Could not verify backup storage: ${bucketsError.message}`);
      const requiredBuckets = [...backedUpBuckets, backupBucket];
      const availableBuckets = new Set((buckets || []).map(bucket => bucket.name));
      const missingBuckets = requiredBuckets.filter(bucket => !availableBuckets.has(bucket));
      if (missingBuckets.length) {
        throw new Error(`Required storage buckets are missing: ${missingBuckets.join(", ")}`);
      }
      const { error: backupsTableError } = await serviceClient
        .from("technical_backups")
        .select("id", { head: true, count: "exact" });
      if (backupsTableError) {
        throw new Error(`Could not verify backup database access: ${backupsTableError.message}`);
      }
      return jsonResponse(200, { ready: true });
    }

    if (action === "scheduled") {
      if (!authorization.service) return jsonResponse(403, { error: "Scheduled action is restricted." });
      const { error: retentionError } = await serviceClient.rpc("cleanup_technical_logs");
      if (retentionError) throw new Error(`Could not apply log retention: ${retentionError.message}`);
      const { data: settings, error } = await serviceClient
        .from("technical_settings")
        .select("backup_enabled")
        .eq("singleton", true)
        .single();
      if (error) throw new Error(`Could not read backup settings: ${error.message}`);
      if (!settings.backup_enabled) return jsonResponse(200, { skipped: true });
      const id = await createBackup(authorization);
      const { error: auditError } = await serviceClient.rpc("record_technical_event", {
        p_action: "scheduled_backup",
        p_entity: "technical_backups",
        p_entity_id: id,
        p_details: {},
        p_actor_email: "Scheduled service"
      });
      if (auditError) throw new Error(`Backup completed, but its audit record failed: ${auditError.message}`);
      return jsonResponse(200, { id });
    }

    if (action === "create") {
      const id = await createBackup(authorization);
      const { error } = await authorization.client.rpc("record_technical_event", {
        p_action: "backup",
        p_entity: "technical_backups",
        p_entity_id: id,
        p_details: { operation: "created" }
      });
      if (error) throw new Error(`Backup completed, but its audit record failed: ${error.message}`);
      return jsonResponse(200, { id });
    }

    const id = String(body.id || "");
    if (!/^[0-9a-f-]{36}$/i.test(id)) return jsonResponse(400, { error: "A valid backup ID is required." });

    if (action === "delete") {
      await removeBackup(id);
      const { error } = await authorization.client.rpc("record_technical_event", {
        p_action: "backup",
        p_entity: "technical_backups",
        p_entity_id: id,
        p_details: { operation: "deleted" }
      });
      if (error) throw new Error(`Backup was deleted, but its audit record failed: ${error.message}`);
      return jsonResponse(200, { id });
    }

    if (action === "restore") {
      const { data: backup, error } = await serviceClient
        .from("technical_backups")
        .select("payload,manifest,status")
        .eq("id", id)
        .maybeSingle();
      if (error) throw new Error(`Could not load backup: ${error.message}`);
      if (!backup || backup.status !== "complete" || !backup.payload) {
        return jsonResponse(404, { error: "A complete backup with that ID was not found." });
      }
      const selectedSnapshot = {
        id,
        payload: backup.payload as Record<string, unknown>,
        manifest: (Array.isArray(backup.manifest) ? backup.manifest : []) as ManifestEntry[]
      };
      const rollbackId = await createBackup(authorization, false);
      const { data: rollback, error: rollbackError } = await serviceClient
        .from("technical_backups")
        .select("payload,manifest")
        .eq("id", rollbackId)
        .single();
      if (rollbackError || !rollback) {
        throw new Error(`A pre-restore safety backup was created, but could not be loaded: ${rollbackError?.message || "unknown error"}`);
      }
      const rollbackSnapshot = {
        id: rollbackId,
        payload: rollback.payload as Record<string, unknown>,
        manifest: (Array.isArray(rollback.manifest) ? rollback.manifest : []) as ManifestEntry[]
      };
      try {
        await restoreSnapshot(selectedSnapshot);
      } catch (restoreError) {
        try {
          await restoreSnapshot(rollbackSnapshot);
        } catch (rollbackFailure) {
          throw new Error(
            `Restore failed (${restoreError instanceof Error ? restoreError.message : "unknown error"}); ` +
            `automatic rollback also failed (${rollbackFailure instanceof Error ? rollbackFailure.message : "unknown error"}).`
          );
        }
        throw new Error(
          `Restore failed and the pre-restore backup was restored: ` +
          `${restoreError instanceof Error ? restoreError.message : "unknown error"}`
        );
      }
      const { error: auditError } = await authorization.client.rpc("record_technical_event", {
        p_action: "restore",
        p_entity: "technical_backups",
        p_entity_id: id,
        p_details: { operation: "app data and storage restored" }
      });
      if (auditError) throw new Error(`Restore succeeded, but its audit record failed: ${auditError.message}`);
      await enforceBackupRetention();
      return jsonResponse(200, { id });
    }

    return jsonResponse(400, { error: "Unknown technical backup action." });
  } catch (error) {
    console.error("Technical backup operation failed:", error);
    return jsonResponse(500, {
      error: error instanceof Error ? error.message : "Technical backup operation failed."
    });
  }
});
