create schema if not exists extensions;
create extension if not exists unaccent with schema extensions;

create or replace function public.is_cdecc_admin()
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select
    auth.role() = 'authenticated'
    and lower(coalesce(auth.jwt() ->> 'email', '')) ~ '^[a-z0-9._%+-]+@gmail[.]com$'
    and coalesce(auth.jwt() -> 'app_metadata' ->> 'provider', '') = 'google';
$$;

create table if not exists public.suggestions (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(title) between 1 and 100),
  details text not null check (char_length(details) between 1 and 1200),
  category text not null check (char_length(category) between 1 and 40),
  created_at timestamptz not null default now(),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  priority text not null default 'normal' check (priority in ('normal', 'yellow', 'red')),
  priority_reason text not null default 'priorityReasonUnclear',
  priority_override boolean not null default false,
  approved_at timestamptz,
  completed_at timestamptz
);

create or replace function public.flag_suggestion_profanity()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  terms text[] := array[
    'fuck','fucking','fucked','shit','bullshit','bitch','bastard','asshole','assholes','damn','dick','dumbass','piss','crap','motherfucker',
    'merde','putain','pute','con','connard','connasse','salope','salaud','enculer','encule','foutre','bordel','chiant','chier'
  ];
  words text[];
begin
  if tg_op = 'UPDATE' and new.priority_override then
    return new;
  end if;

  words := regexp_split_to_array(
    extensions.unaccent(lower(coalesce(new.title, '') || ' ' || coalesce(new.details, ''))),
    '[^a-z0-9]+'
  );
  if words && terms then
    new.priority := 'red';
    new.priority_reason := 'priorityReasonLanguage';
  else
    new.priority := 'normal';
    new.priority_reason := 'priorityReasonSchool';
  end if;
  new.priority_override := false;
  return new;
end;
$$;

drop trigger if exists suggestions_flag_profanity on public.suggestions;
create trigger suggestions_flag_profanity
before insert or update on public.suggestions
for each row execute function public.flag_suggestion_profanity();

create table if not exists public.candidacies (
  id uuid primary key default gen_random_uuid(),
  team_name text not null check (char_length(team_name) between 1 and 80),
  roster text not null check (char_length(roster) between 1 and 1200),
  ideas text not null check (char_length(ideas) between 1 and 2000),
  photo_path text not null,
  background text not null default '#396d59' check (background ~ '^#[0-9A-Fa-f]{6}$'),
  foreground text not null default '#ffffff' check (foreground ~ '^#[0-9A-Fa-f]{6}$'),
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  approved_at timestamptz
);

create table if not exists public.vote_settings (
  singleton boolean primary key default true check (singleton),
  form_url text not null default '',
  starts_at timestamptz,
  ends_at timestamptz,
  updated_at timestamptz not null default now(),
  updated_by uuid
);

insert into public.vote_settings (singleton)
values (true)
on conflict (singleton) do nothing;

create table if not exists public.admin_audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid,
  actor_email text not null,
  action text not null,
  entity text not null,
  entity_id text,
  details jsonb not null default '{}'::jsonb,
  occurred_at timestamptz not null default now()
);

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

  insert into public.admin_audit_logs (actor_id, actor_email, action, entity, entity_id, details)
  values (
    auth.uid(),
    coalesce(auth.jwt() ->> 'email', 'Public submission'),
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

create or replace function public.prevent_audit_log_changes()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  raise exception 'Audit log entries cannot be changed or deleted';
end;
$$;

drop trigger if exists suggestions_audit on public.suggestions;
create trigger suggestions_audit
after insert or update or delete on public.suggestions
for each row execute function public.write_admin_audit_log();

drop trigger if exists candidacies_audit on public.candidacies;
create trigger candidacies_audit
after insert or update or delete on public.candidacies
for each row execute function public.write_admin_audit_log();

drop trigger if exists vote_settings_audit on public.vote_settings;
create trigger vote_settings_audit
after insert or update or delete on public.vote_settings
for each row execute function public.write_admin_audit_log();

drop trigger if exists audit_log_no_update on public.admin_audit_logs;
create trigger audit_log_no_update
before update or delete on public.admin_audit_logs
for each row execute function public.prevent_audit_log_changes();

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
  insert into public.admin_audit_logs (actor_id, actor_email, action, entity, details)
  values (auth.uid(), auth.jwt() ->> 'email', 'sign_in', 'authentication', '{}'::jsonb);
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
  insert into public.admin_audit_logs (actor_id, actor_email, action, entity, details)
  values (auth.uid(), auth.jwt() ->> 'email', 'sign_out', 'authentication', '{}'::jsonb);
end;
$$;

alter table public.suggestions enable row level security;
alter table public.candidacies enable row level security;
alter table public.vote_settings enable row level security;
alter table public.admin_audit_logs enable row level security;

revoke all on public.suggestions from anon, authenticated;
revoke all on public.candidacies from anon, authenticated;
revoke all on public.vote_settings from anon, authenticated;
revoke all on public.admin_audit_logs from anon, authenticated;

grant select on public.suggestions to anon, authenticated;
grant insert (title, details, category) on public.suggestions to anon, authenticated;
grant update, delete on public.suggestions to authenticated;

grant select on public.candidacies to anon, authenticated;
grant insert (id, team_name, roster, ideas, photo_path, background, foreground) on public.candidacies to anon, authenticated;
grant update, delete on public.candidacies to authenticated;

grant select on public.vote_settings to anon, authenticated;
grant update (form_url, starts_at, ends_at, updated_at, updated_by) on public.vote_settings to authenticated;

grant select on public.admin_audit_logs to authenticated;
revoke all on function public.record_admin_sign_in() from public, anon;
grant execute on function public.record_admin_sign_in() to authenticated;
revoke all on function public.record_admin_sign_out() from public, anon;
grant execute on function public.record_admin_sign_out() to authenticated;

drop policy if exists "Public can submit suggestions" on public.suggestions;
create policy "Public can submit suggestions"
on public.suggestions for insert to anon, authenticated
with check (status = 'pending' and priority_override = false);

drop policy if exists "Public can read approved suggestions" on public.suggestions;
create policy "Public can read approved suggestions"
on public.suggestions for select to anon, authenticated
using (status = 'approved');

drop policy if exists "Gmail admins can read all suggestions" on public.suggestions;
create policy "Gmail admins can read all suggestions"
on public.suggestions for select to authenticated
using (public.is_cdecc_admin());

drop policy if exists "Gmail admins can manage suggestions" on public.suggestions;
create policy "Gmail admins can manage suggestions"
on public.suggestions for update to authenticated
using (public.is_cdecc_admin())
with check (public.is_cdecc_admin());

drop policy if exists "Gmail admins can delete suggestions" on public.suggestions;
create policy "Gmail admins can delete suggestions"
on public.suggestions for delete to authenticated
using (public.is_cdecc_admin());

drop policy if exists "Public can submit candidacies" on public.candidacies;
create policy "Public can submit candidacies"
on public.candidacies for insert to anon, authenticated
with check (
  status = 'pending'
  and photo_path like 'candidacies/' || id::text || '/%'
);

drop policy if exists "Public can read approved candidacies" on public.candidacies;
create policy "Public can read approved candidacies"
on public.candidacies for select to anon, authenticated
using (status = 'approved');

drop policy if exists "Gmail admins can read all candidacies" on public.candidacies;
create policy "Gmail admins can read all candidacies"
on public.candidacies for select to authenticated
using (public.is_cdecc_admin());

drop policy if exists "Gmail admins can manage candidacies" on public.candidacies;
create policy "Gmail admins can manage candidacies"
on public.candidacies for update to authenticated
using (public.is_cdecc_admin())
with check (public.is_cdecc_admin());

drop policy if exists "Gmail admins can delete candidacies" on public.candidacies;
create policy "Gmail admins can delete candidacies"
on public.candidacies for delete to authenticated
using (public.is_cdecc_admin());

drop policy if exists "Public can read vote settings" on public.vote_settings;
create policy "Public can read vote settings"
on public.vote_settings for select to anon, authenticated
using (singleton = true);

drop policy if exists "Gmail admins can update vote settings" on public.vote_settings;
create policy "Gmail admins can update vote settings"
on public.vote_settings for update to authenticated
using (public.is_cdecc_admin())
with check (public.is_cdecc_admin());

drop policy if exists "Gmail admins can read audit logs" on public.admin_audit_logs;
create policy "Gmail admins can read audit logs"
on public.admin_audit_logs for select to authenticated
using (public.is_cdecc_admin());

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('candidate-photos', 'candidate-photos', true, 52428800, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can upload candidate photos" on storage.objects;
create policy "Public can upload candidate photos"
on storage.objects for insert to anon, authenticated
with check (
  bucket_id = 'candidate-photos'
  and name ~ '^candidacies/[0-9a-f-]{36}/[0-9a-f-]{36}[.](jpg|png|webp)$'
);

drop policy if exists "Anyone can read candidate photos" on storage.objects;
create policy "Anyone can read candidate photos"
on storage.objects for select to anon, authenticated
using (bucket_id = 'candidate-photos');

drop policy if exists "Gmail admins can update candidate photos" on storage.objects;
create policy "Gmail admins can update candidate photos"
on storage.objects for update to authenticated
using (bucket_id = 'candidate-photos' and public.is_cdecc_admin())
with check (bucket_id = 'candidate-photos' and public.is_cdecc_admin());

drop policy if exists "Gmail admins can delete candidate photos" on storage.objects;
create policy "Gmail admins can delete candidate photos"
on storage.objects for delete to authenticated
using (bucket_id = 'candidate-photos' and public.is_cdecc_admin());
