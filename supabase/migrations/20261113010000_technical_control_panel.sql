create schema if not exists extensions;
create schema if not exists vault;
create extension if not exists pg_cron;
create extension if not exists pg_net with schema extensions;
create extension if not exists supabase_vault with schema vault;

create table if not exists public.technical_access_control (
  email text primary key,
  role text not null check (role in ('admin', 'technical')),
  created_at timestamptz not null default now(),
  created_by text not null default 'Initial setup'
);

alter table public.technical_access_control enable row level security;
revoke all on public.technical_access_control from public, anon, authenticated;

create table if not exists public.technical_settings (
  singleton boolean primary key default true check (singleton),
  ideas_open boolean not null default true,
  candidacies_open boolean not null default true,
  site_visuals jsonb not null default '{
    "forest":"#233d33","deep":"#1a2e2a","green":"#4a6d60","lime":"#d9d7a5",
    "paper":"#f7f3ee","ink":"#1f2a26","muted":"#67756d","line":"#e3ddd2",
    "soft":"#efe7dc","gold":"#f0dca8","logo_url":"","hero_url":"",
    "slogan":"Être · Faire · Agir"
  }'::jsonb,
  backup_enabled boolean not null default false,
  backup_frequency text not null default 'daily' check (backup_frequency in ('daily', 'weekly', 'monthly')),
  backup_time time not null default '02:00',
  backup_retention integer not null default 10 check (backup_retention between 10 and 100),
  updated_at timestamptz not null default now(),
  updated_by text
);

insert into public.technical_settings (singleton)
values (true)
on conflict (singleton) do nothing;

alter table public.technical_settings enable row level security;
revoke all on public.technical_settings from public, anon, authenticated;

create table if not exists public.technical_backup_schedule_runs (
  period_key text primary key,
  queued_at timestamptz not null default now()
);

alter table public.technical_backup_schedule_runs enable row level security;
revoke all on public.technical_backup_schedule_runs from public, anon, authenticated;

create or replace function public.dispatch_technical_backup_if_due()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  local_now timestamp without time zone := timezone('America/Toronto', now());
  config record;
  period_start date;
  scheduled_key text;
  request_id bigint;
begin
  perform pg_advisory_xact_lock(hashtext('cdecc-technical-backup-dispatch'));

  select backup_enabled, backup_frequency, backup_time
  into config
  from public.technical_settings
  where singleton;
  if not found or not config.backup_enabled or local_now::time < config.backup_time then
    return;
  end if;
  if config.backup_frequency = 'weekly' and extract(dow from local_now) <> 0 then
    return;
  end if;
  if config.backup_frequency = 'monthly' and extract(day from local_now) <> 1 then
    return;
  end if;

  period_start := case config.backup_frequency
    when 'weekly' then date_trunc('week', local_now)::date
    when 'monthly' then date_trunc('month', local_now)::date
    else local_now::date
  end;
  scheduled_key := format('%s:%s:%s', config.backup_frequency, config.backup_time, period_start);
  if exists (
    select 1
    from public.technical_backup_schedule_runs schedule_run
    where schedule_run.period_key = dispatch_technical_backup_if_due.scheduled_key
  ) then
    return;
  end if;

  select net.http_post(
    url := (
      select rtrim(decrypted_secret, '/') || '/functions/v1/technical-backup'
      from vault.decrypted_secrets where name = 'supabase_project_url'
    ),
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' ||
        (select decrypted_secret from vault.decrypted_secrets where name = 'supabase_service_role_key'),
      'apikey',
        (select decrypted_secret from vault.decrypted_secrets where name = 'supabase_service_role_key'),
      'Content-Type', 'application/json'
    ),
    body := '{"action":"scheduled"}'::jsonb
  ) into request_id;

  if request_id is not null then
    insert into public.technical_backup_schedule_runs(period_key)
    values (scheduled_key)
    on conflict do nothing;
  end if;
end;
$$;

create or replace function public.is_cdecc_technical_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select
    auth.role() = 'authenticated'
    and coalesce(auth.jwt() -> 'app_metadata' ->> 'provider', '') = 'google'
    and exists (
      select 1
      from public.technical_access_control access
      where access.email = lower(coalesce(auth.jwt() ->> 'email', ''))
        and access.role = 'technical'
    );
$$;

create or replace function public.is_cdecc_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select
    auth.role() = 'authenticated'
    and coalesce(auth.jwt() -> 'app_metadata' ->> 'provider', '') = 'google'
    and exists (
      select 1
      from public.technical_access_control access
      where access.email = lower(coalesce(auth.jwt() ->> 'email', ''))
        and access.role in ('admin', 'technical')
    );
$$;

create or replace function public.get_cdecc_access()
returns jsonb
language sql
stable
security definer
set search_path = ''
as $$
  select jsonb_build_object(
    'is_admin', public.is_cdecc_admin(),
    'is_technical', public.is_cdecc_technical_admin()
  );
$$;

create or replace function public.get_technical_settings()
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  settings jsonb;
begin
  if not public.is_cdecc_technical_admin() then
    raise exception 'Technical access is not allowed for this account';
  end if;

  select to_jsonb(config) into settings
  from public.technical_settings config
  where config.singleton;

  return coalesce(settings, '{}'::jsonb) || jsonb_build_object(
    'scheduler_secrets_configured',
    exists (select 1 from vault.decrypted_secrets where name = 'supabase_project_url')
      and exists (select 1 from vault.decrypted_secrets where name = 'supabase_service_role_key')
  );
end;
$$;

create or replace function public.get_cdecc_access_list()
returns table(email text, role text, created_at timestamptz, created_by text)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_technical_admin() then
    raise exception 'Technical access is not allowed for this account';
  end if;

  return query
  select access.email, access.role, access.created_at, access.created_by
  from public.technical_access_control access
  order by access.role, access.email;
end;
$$;

create or replace function public.remove_technical_backup_schedule()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  job record;
begin
  if not public.is_cdecc_technical_admin() and auth.role() is distinct from 'service_role' then
    raise exception 'Technical access is not allowed for this account';
  end if;
  for job in select jobid from cron.job where jobname = 'cdecc-technical-backup' loop
    perform cron.unschedule(job.jobid);
  end loop;
end;
$$;

create or replace function public.refresh_technical_backup_schedule()
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  project_url text;
  service_key text;
  job record;
begin
  if not public.is_cdecc_technical_admin() and auth.role() is distinct from 'service_role' then
    raise exception 'Technical access is not allowed for this account';
  end if;

  select decrypted_secret into project_url
  from vault.decrypted_secrets where name = 'supabase_project_url' limit 1;
  select decrypted_secret into service_key
  from vault.decrypted_secrets where name = 'supabase_service_role_key' limit 1;
  if coalesce(project_url, '') = '' or coalesce(service_key, '') = '' then
    raise exception 'Backup scheduler is not configured. Add the Supabase project URL and service-role key to Vault first.';
  end if;

  if not exists (
    select 1 from public.technical_settings
    where singleton and backup_enabled
  ) then
    perform public.remove_technical_backup_schedule();
    return;
  end if;
  for job in select jobid from cron.job where jobname = 'cdecc-technical-backup' loop
    perform cron.unschedule(job.jobid);
  end loop;

  perform cron.schedule(
    'cdecc-technical-backup',
    '* * * * *',
    'select public.dispatch_technical_backup_if_due()'
  );
end;
$$;

create table if not exists public.technical_audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid,
  actor_email text not null,
  actor_ip inet,
  action text not null,
  entity text not null,
  entity_id text,
  details jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

alter table public.technical_audit_logs enable row level security;
revoke all on public.technical_audit_logs from public, anon, authenticated;

create or replace function public.record_technical_event(
  p_action text,
  p_entity text,
  p_entity_id text default null,
  p_details jsonb default '{}'::jsonb,
  p_actor_email text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_technical_admin() and auth.role() is distinct from 'service_role' then
    raise exception 'Technical access is not allowed for this account';
  end if;
  insert into public.technical_audit_logs
    (actor_id, actor_email, actor_ip, action, entity, entity_id, details)
  values (
    auth.uid(),
    coalesce(auth.jwt() ->> 'email', p_actor_email, 'Scheduled service'),
    public.request_client_ip(),
    p_action,
    p_entity,
    p_entity_id,
    coalesce(p_details, '{}'::jsonb)
  );
end;
$$;

create or replace function public.prevent_audit_log_changes()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'DELETE'
     and current_setting('cdecc.allow_audit_cleanup', true) = 'on' then
    return old;
  end if;
  raise exception 'Audit log entries cannot be changed or deleted';
end;
$$;

drop trigger if exists technical_audit_log_no_update on public.technical_audit_logs;
create trigger technical_audit_log_no_update
before update or delete on public.technical_audit_logs
for each row execute function public.prevent_audit_log_changes();

create or replace function public.prune_expired_technical_logs()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform set_config('cdecc.allow_audit_cleanup', 'on', true);
  delete from public.admin_audit_logs
  where occurred_at < now() - interval '90 days';
  delete from public.technical_audit_logs
  where occurred_at < now() - interval '90 days';
  return null;
end;
$$;

drop trigger if exists admin_audit_log_retention on public.admin_audit_logs;
create trigger admin_audit_log_retention
after insert on public.admin_audit_logs
for each statement execute function public.prune_expired_technical_logs();

drop trigger if exists technical_audit_log_retention on public.technical_audit_logs;
create trigger technical_audit_log_retention
after insert on public.technical_audit_logs
for each statement execute function public.prune_expired_technical_logs();

create or replace function public.write_technical_access_audit_log()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  affected_email text;
  old_record jsonb;
  new_record jsonb;
begin
  if tg_op <> 'INSERT' then old_record := to_jsonb(old); end if;
  if tg_op <> 'DELETE' then new_record := to_jsonb(new); end if;
  affected_email := coalesce(new_record ->> 'email', old_record ->> 'email');

  insert into public.technical_audit_logs
    (actor_id, actor_email, actor_ip, action, entity, entity_id, details)
  values (
    auth.uid(),
    coalesce(auth.jwt() ->> 'email', 'Initial setup'),
    public.request_client_ip(),
    lower(tg_op),
    'technical_access_control',
    affected_email,
    jsonb_build_object('before', old_record, 'after', new_record)
  );

  if tg_op = 'DELETE' then return old; end if;
  return new;
end;
$$;

drop trigger if exists technical_access_control_audit on public.technical_access_control;
create trigger technical_access_control_audit
after insert or update or delete on public.technical_access_control
for each row execute function public.write_technical_access_audit_log();

create or replace function public.manage_cdecc_access(
  p_email text,
  p_role text default null
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  normalized_email text := lower(btrim(coalesce(p_email, '')));
begin
  if not public.is_cdecc_technical_admin() then
    raise exception 'Technical access is not allowed for this account';
  end if;
  if normalized_email !~ '^[^@[:space:]]+@[^@[:space:]]+[.][^@[:space:]]+$' then
    raise exception 'Enter a valid Google account email';
  end if;
  if p_role is not null and p_role not in ('admin', 'technical') then
    raise exception 'Invalid access role';
  end if;
  if normalized_email = lower(coalesce(auth.jwt() ->> 'email', ''))
     and p_role is distinct from 'technical' then
    raise exception 'A technical administrator cannot remove their own technical access';
  end if;

  if p_role is null then
    delete from public.technical_access_control where email = normalized_email;
  else
    insert into public.technical_access_control(email, role, created_by)
    values (normalized_email, p_role, coalesce(auth.jwt() ->> 'email', ''))
    on conflict (email) do update
      set role = excluded.role,
          created_by = excluded.created_by;
  end if;

  if not exists (
    select 1 from public.technical_access_control where role = 'technical'
  ) then
    raise exception 'At least one technical administrator must remain';
  end if;
end;
$$;

create or replace function public.update_technical_settings(p_settings jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  visuals jsonb;
  color_key text;
  backup_is_enabled boolean;
  backup_frequency_value text;
  backup_time_value time;
  backup_retention_value integer;
begin
  if not public.is_cdecc_technical_admin() then
    raise exception 'Technical access is not allowed for this account';
  end if;
  if jsonb_typeof(p_settings) <> 'object' then
    raise exception 'Invalid technical settings';
  end if;

  visuals := p_settings -> 'site_visuals';
  if jsonb_typeof(visuals) <> 'object' then
    raise exception 'Invalid site visuals';
  end if;
  foreach color_key in array array['forest','deep','green','lime','paper','ink','muted','line','soft','gold'] loop
    if coalesce(visuals ->> color_key, '') !~ '^#[0-9A-Fa-f]{6}$' then
      raise exception 'Invalid site color: %', color_key;
    end if;
  end loop;
  if length(coalesce(visuals ->> 'slogan', '')) > 120 then
    raise exception 'Slogan is too long';
  end if;
  if length(coalesce(visuals ->> 'logo_url', '')) > 1000
     or (coalesce(visuals ->> 'logo_url', '') <> ''
         and visuals ->> 'logo_url' !~ '^https://') then
    raise exception 'Logo URL must use HTTPS';
  end if;
  if length(coalesce(visuals ->> 'hero_url', '')) > 1000
     or (coalesce(visuals ->> 'hero_url', '') <> ''
         and visuals ->> 'hero_url' !~ '^https://') then
    raise exception 'Hero image URL must use HTTPS';
  end if;

  backup_is_enabled := coalesce((p_settings ->> 'backup_enabled')::boolean, false);
  backup_frequency_value := coalesce(p_settings ->> 'backup_frequency', 'daily');
  backup_time_value := coalesce((p_settings ->> 'backup_time')::time, '02:00');
  backup_retention_value := coalesce((p_settings ->> 'backup_retention')::integer, 10);
  if backup_frequency_value not in ('daily', 'weekly', 'monthly')
     or backup_retention_value not between 10 and 100 then
    raise exception 'Invalid backup settings';
  end if;

  update public.technical_settings
  set ideas_open = coalesce((p_settings ->> 'ideas_open')::boolean, true),
      candidacies_open = coalesce((p_settings ->> 'candidacies_open')::boolean, true),
      site_visuals = visuals,
      backup_enabled = backup_is_enabled,
      backup_frequency = backup_frequency_value,
      backup_time = backup_time_value,
      backup_retention = backup_retention_value,
      updated_at = now(),
      updated_by = lower(auth.jwt() ->> 'email')
  where singleton;

  if backup_is_enabled then
    perform public.refresh_technical_backup_schedule();
  else
    perform public.remove_technical_backup_schedule();
  end if;
end;
$$;

drop trigger if exists technical_settings_audit on public.technical_settings;
create trigger technical_settings_audit
after update on public.technical_settings
for each row execute function public.write_admin_audit_log();

create or replace view public.site_public_settings
with (security_barrier = true)
as
select ideas_open, candidacies_open, site_visuals
from public.technical_settings
where singleton;

revoke all on public.site_public_settings from public;
grant select on public.site_public_settings to anon, authenticated;

create or replace function public.prevent_closed_public_submissions()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  submissions_open boolean;
begin
  if auth.role() = 'service_role' then
    return new;
  end if;
  if tg_table_name = 'suggestions' then
    select ideas_open into submissions_open
    from public.technical_settings where singleton;
  else
    select candidacies_open into submissions_open
    from public.technical_settings where singleton;
  end if;
  if not coalesce(submissions_open, true) then
    raise exception 'Public submissions are temporarily closed';
  end if;
  return new;
end;
$$;

drop trigger if exists suggestions_check_submission_lock on public.suggestions;
create trigger suggestions_check_submission_lock
before insert on public.suggestions
for each row execute function public.prevent_closed_public_submissions();

drop trigger if exists candidacies_check_submission_lock on public.candidacies;
create trigger candidacies_check_submission_lock
before insert on public.candidacies
for each row execute function public.prevent_closed_public_submissions();

create or replace function public.get_technical_logs(p_limit integer default 300)
returns table(
  id text,
  actor_email text,
  actor_ip text,
  action text,
  entity text,
  entity_id text,
  details jsonb,
  occurred_at timestamptz
)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_technical_admin() then
    raise exception 'Technical access is not allowed for this account';
  end if;

  return query
  select event.id, event.actor_email, event.actor_ip, event.action,
         event.entity, event.entity_id, event.details, event.occurred_at
  from (
    select logs.id::text, logs.actor_email, logs.actor_ip::text, logs.action,
           logs.entity, logs.entity_id, logs.details, logs.occurred_at
    from public.admin_audit_logs logs
    where logs.occurred_at >= now() - interval '90 days'
    union all
    select logs.id::text, logs.actor_email, logs.actor_ip::text, logs.action,
           logs.entity, logs.entity_id, logs.details, logs.occurred_at
    from public.technical_audit_logs logs
    where logs.occurred_at >= now() - interval '90 days'
  ) event
  order by event.occurred_at desc
  limit greatest(1, least(coalesce(p_limit, 300), 500));
end;
$$;

create or replace function public.cleanup_technical_logs()
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_technical_admin() and auth.role() is distinct from 'service_role' then
    raise exception 'Technical access is not allowed for this account';
  end if;

  perform set_config('cdecc.allow_audit_cleanup', 'on', true);
  delete from public.admin_audit_logs
  where occurred_at < now() - interval '90 days';
  delete from public.technical_audit_logs
  where occurred_at < now() - interval '90 days';
end;
$$;

create table if not exists public.technical_backups (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  created_by text not null,
  status text not null check (status in ('complete', 'failed')),
  payload jsonb,
  manifest jsonb not null default '[]'::jsonb,
  error_message text
);

alter table public.technical_backups enable row level security;
revoke all on public.technical_backups from public, anon, authenticated;
grant select on public.technical_backups to authenticated;

drop policy if exists "Technical admins can view backups" on public.technical_backups;
create policy "Technical admins can view backups"
on public.technical_backups for select to authenticated
using (public.is_cdecc_technical_admin());

drop policy if exists "Technical admins can delete backups" on public.technical_backups;
create policy "Technical admins can delete backups"
on public.technical_backups for delete to authenticated
using (public.is_cdecc_technical_admin());

create or replace function public.capture_technical_backup_data()
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_cdecc_technical_admin() and auth.role() is distinct from 'service_role' then
    raise exception 'Technical access is not allowed for this account';
  end if;

  return jsonb_build_object(
    'version', 1,
    'created_at', now(),
    'suggestions', coalesce((select jsonb_agg(to_jsonb(row_data)) from public.suggestions row_data), '[]'::jsonb),
    'candidacies', coalesce((select jsonb_agg(to_jsonb(row_data)) from public.candidacies row_data), '[]'::jsonb),
    'vote_settings', coalesce((select jsonb_agg(to_jsonb(row_data)) from public.vote_settings row_data), '[]'::jsonb),
    'member_profiles', coalesce((select jsonb_agg(to_jsonb(row_data)) from public.member_profiles row_data), '[]'::jsonb),
    'technical_settings', coalesce((select jsonb_agg(to_jsonb(row_data)) from public.technical_settings row_data), '[]'::jsonb)
  );
end;
$$;

create or replace function public.restore_technical_backup_data(p_payload jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.role() is distinct from 'service_role' then
    raise exception 'Backup restore must run through the protected backup service';
  end if;
  if jsonb_typeof(p_payload) <> 'object' or p_payload ->> 'version' <> '1' then
    raise exception 'Unsupported backup format';
  end if;

  delete from public.suggestions;
  delete from public.candidacies;
  delete from public.member_profiles;
  delete from public.vote_settings;

  insert into public.suggestions
  select * from jsonb_populate_recordset(null::public.suggestions, p_payload -> 'suggestions');
  insert into public.candidacies
  select * from jsonb_populate_recordset(null::public.candidacies, p_payload -> 'candidacies');
  insert into public.member_profiles
  select * from jsonb_populate_recordset(null::public.member_profiles, p_payload -> 'member_profiles');
  insert into public.vote_settings
  select * from jsonb_populate_recordset(null::public.vote_settings, p_payload -> 'vote_settings')
  on conflict (singleton) do update
  set form_url = excluded.form_url,
      starts_at = excluded.starts_at,
      ends_at = excluded.ends_at,
      updated_at = excluded.updated_at,
      updated_by = excluded.updated_by;
  update public.technical_settings target
  set ideas_open = source.ideas_open,
      candidacies_open = source.candidacies_open,
      site_visuals = source.site_visuals,
      backup_enabled = false,
      backup_frequency = source.backup_frequency,
      backup_time = source.backup_time,
      backup_retention = source.backup_retention,
      updated_at = now(),
      updated_by = null
  from jsonb_populate_recordset(null::public.technical_settings, p_payload -> 'technical_settings') source
  where target.singleton;
  perform public.remove_technical_backup_schedule();
end;
$$;

insert into storage.buckets (id, name, public, file_size_limit)
values ('technical-backups', 'technical-backups', false, 52428800)
on conflict (id) do update
set public = false,
    file_size_limit = excluded.file_size_limit;

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
  insert into public.technical_audit_logs (actor_id, actor_email, actor_ip, action, entity, details)
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
  insert into public.technical_audit_logs (actor_id, actor_email, actor_ip, action, entity, details)
  values (auth.uid(), auth.jwt() ->> 'email', public.request_client_ip(), 'sign_out', 'authentication', '{}'::jsonb);
end;
$$;

drop view if exists public.admin_audit_logs_display;
create view public.admin_audit_logs_display
with (security_barrier = true)
as
select
  id,
  actor_email,
  action,
  entity,
  entity_id,
  details,
  occurred_at
from public.admin_audit_logs
where public.is_cdecc_admin()
  and entity not in ('authentication', 'technical_settings', 'technical_access_control', 'technical_backups');

revoke all on public.admin_audit_logs_display from public, anon, authenticated;
grant select on public.admin_audit_logs_display to authenticated;

revoke all on function public.is_cdecc_admin() from public, anon;
revoke all on function public.is_cdecc_technical_admin() from public, anon;
revoke all on function public.get_cdecc_access() from public, anon;
revoke all on function public.get_technical_settings() from public, anon;
revoke all on function public.get_cdecc_access_list() from public, anon;
revoke all on function public.manage_cdecc_access(text, text) from public, anon;
revoke all on function public.update_technical_settings(jsonb) from public, anon;
revoke all on function public.get_technical_logs(integer) from public, anon;
revoke all on function public.cleanup_technical_logs() from public, anon;
revoke all on function public.record_technical_event(text, text, text, jsonb, text) from public, anon;
revoke all on function public.prune_expired_technical_logs() from public, anon, authenticated;
revoke all on function public.capture_technical_backup_data() from public, anon, authenticated;
revoke all on function public.restore_technical_backup_data(jsonb) from public, anon, authenticated;
revoke all on function public.refresh_technical_backup_schedule() from public, anon;
revoke all on function public.remove_technical_backup_schedule() from public, anon;
revoke all on function public.dispatch_technical_backup_if_due() from public, anon, authenticated, service_role;
grant execute on function public.is_cdecc_admin() to authenticated;
grant execute on function public.is_cdecc_technical_admin() to authenticated;
grant execute on function public.get_cdecc_access() to authenticated;
grant execute on function public.get_technical_settings() to authenticated;
grant execute on function public.get_cdecc_access_list() to authenticated;
grant execute on function public.manage_cdecc_access(text, text) to authenticated;
grant execute on function public.update_technical_settings(jsonb) to authenticated;
grant execute on function public.get_technical_logs(integer) to authenticated;
grant execute on function public.cleanup_technical_logs() to authenticated, service_role;
grant execute on function public.record_technical_event(text, text, text, jsonb, text) to authenticated, service_role;
grant execute on function public.capture_technical_backup_data() to service_role;
grant execute on function public.restore_technical_backup_data(jsonb) to service_role;
grant execute on function public.refresh_technical_backup_schedule() to authenticated, service_role;
grant execute on function public.remove_technical_backup_schedule() to authenticated, service_role;

select set_config('cdecc.allow_audit_cleanup', 'on', true);
delete from public.admin_audit_logs where occurred_at < now() - interval '90 days';
delete from public.technical_audit_logs where occurred_at < now() - interval '90 days';

notify pgrst, 'reload schema';
