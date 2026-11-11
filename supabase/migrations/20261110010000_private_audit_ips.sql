create or replace function public.request_client_ip()
returns inet
language plpgsql
stable
security invoker
set search_path = ''
as $$
declare
  request_headers jsonb;
  forwarded_ip text;
begin
  request_headers := nullif(current_setting('request.headers', true), '')::jsonb;
  forwarded_ip := coalesce(
    nullif(request_headers ->> 'cf-connecting-ip', ''),
    nullif(request_headers ->> 'x-real-ip', ''),
    nullif(split_part(request_headers ->> 'x-forwarded-for', ',', 1), '')
  );
  if forwarded_ip is null then
    return null;
  end if;
  return btrim(forwarded_ip)::inet;
exception
  when invalid_text_representation then
    return null;
end;
$$;

revoke all on function public.request_client_ip() from public, anon, authenticated;

alter table public.admin_audit_logs
  add column if not exists actor_ip inet;

comment on column public.admin_audit_logs.actor_ip is
  'IP address from request headers provided to PostgREST; NULL if unavailable or invalid.';

create or replace function public.write_admin_audit_log()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  old_data jsonb;
  new_data jsonb;
  changed_fields jsonb;
  row_id text;
begin
  if tg_op <> 'INSERT' then
    old_data := to_jsonb(old);
  end if;
  if tg_op <> 'DELETE' then
    new_data := to_jsonb(new);
  end if;

  row_id := coalesce(new_data ->> 'id', old_data ->> 'id', 'vote-settings');
  if tg_op = 'UPDATE' then
    select coalesce(jsonb_object_agg(key, jsonb_build_object('before', old_data -> key, 'after', value)), '{}'::jsonb)
      into changed_fields
      from jsonb_each(new_data)
      where old_data -> key is distinct from value
        and key not in ('updated_at', 'updated_by');
  else
    changed_fields := jsonb_build_object('operation', lower(tg_op));
  end if;

  insert into public.admin_audit_logs (actor_id, actor_email, actor_ip, action, entity, entity_id, details)
  values (
    auth.uid(),
    coalesce(auth.jwt() ->> 'email', 'Public submission'),
    public.request_client_ip(),
    lower(tg_op),
    tg_table_name,
    row_id,
    changed_fields
  );

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

create or replace function public.write_storage_audit_log()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  affected_bucket text;
  affected_name text;
begin
  if tg_op = 'DELETE' then
    affected_bucket := old.bucket_id;
    affected_name := old.name;
  else
    affected_bucket := new.bucket_id;
    affected_name := new.name;
  end if;

  if tg_op = 'UPDATE'
    and old.bucket_id not in ('candidate-photos', 'project-images')
    and new.bucket_id not in ('candidate-photos', 'project-images') then
    return new;
  elsif tg_op <> 'UPDATE'
    and affected_bucket not in ('candidate-photos', 'project-images') then
    if tg_op = 'DELETE' then
      return old;
    end if;
    return new;
  end if;

  insert into public.admin_audit_logs (actor_id, actor_email, actor_ip, action, entity, entity_id, details)
  values (
    auth.uid(),
    coalesce(auth.jwt() ->> 'email', 'Public submission'),
    public.request_client_ip(),
    lower(tg_op),
    'storage.objects',
    affected_name,
    jsonb_build_object('bucket_id', affected_bucket, 'object_name', affected_name)
  );

  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

drop trigger if exists storage_objects_audit on storage.objects;
create trigger storage_objects_audit
after insert or update or delete on storage.objects
for each row execute function public.write_storage_audit_log();

create or replace function public.record_admin_sign_in()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_admin() then
    raise exception 'Admin access is not allowed for this account';
  end if;
  insert into public.admin_audit_logs (actor_id, actor_email, actor_ip, action, entity, details)
  values (auth.uid(), auth.jwt() ->> 'email', public.request_client_ip(), 'sign_in', 'authentication', '{}'::jsonb);
end;
$$;

create or replace function public.record_admin_sign_out()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_admin() then
    raise exception 'Admin access is not allowed for this account';
  end if;
  insert into public.admin_audit_logs (actor_id, actor_email, actor_ip, action, entity, details)
  values (auth.uid(), auth.jwt() ->> 'email', public.request_client_ip(), 'sign_out', 'authentication', '{}'::jsonb);
end;
$$;

revoke all on public.admin_audit_logs from anon, authenticated;
drop policy if exists "Gmail admins can read audit logs" on public.admin_audit_logs;

notify pgrst, 'reload schema';
