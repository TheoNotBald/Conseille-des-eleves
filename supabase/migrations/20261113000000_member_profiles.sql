create table if not exists public.member_profiles (
  slot_key text primary key check (
    slot_key ~ '^(assembly-(president|vice-president|secretary|treasurer|administrative-spokesperson|student-spokesperson)|secondary-[1-5]|class-[1-5]-[1-5])$'
  ),
  display_name text not null check (char_length(display_name) between 1 and 100),
  group_label text not null check (char_length(group_label) between 1 and 80),
  group_name text default '' check (char_length(group_name) <= 80),
  role_label text check (role_label is null or char_length(role_label) between 1 and 80),
  photo_path text,
  created_at timestamptz not null default now(),
  check (
    photo_path is null or photo_path ~ (
      '^members/' || slot_key || '/[0-9a-f-]{36}[.](jpg|png|webp)$'
    )
  )
);

alter table public.member_profiles enable row level security;
revoke all on public.member_profiles from anon, authenticated;
grant select on public.member_profiles to anon, authenticated;
grant insert, update on public.member_profiles to authenticated;
grant delete on public.member_profiles to authenticated;

drop policy if exists "Anyone can read member profiles" on public.member_profiles;
create policy "Anyone can read member profiles"
on public.member_profiles for select to anon, authenticated
using (true);

drop policy if exists "Gmail admins can create member profiles" on public.member_profiles;
create policy "Gmail admins can create member profiles"
on public.member_profiles for insert to authenticated
with check (public.is_cdecc_admin());

drop policy if exists "Gmail admins can update member profiles" on public.member_profiles;
create policy "Gmail admins can update member profiles"
on public.member_profiles for update to authenticated
using (public.is_cdecc_admin())
with check (public.is_cdecc_admin());

drop policy if exists "Gmail admins can delete member profiles" on public.member_profiles;
create policy "Gmail admins can delete member profiles"
on public.member_profiles for delete to authenticated
using (public.is_cdecc_admin());

drop trigger if exists member_profiles_audit on public.member_profiles;
create trigger member_profiles_audit
after insert or update or delete on public.member_profiles
for each row execute function public.write_admin_audit_log();

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('member-photos', 'member-photos', true, 52428800, array['image/jpeg', 'image/png', 'image/webp'])
on conflict (id) do update
set public = excluded.public,
    file_size_limit = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Anyone can read member photos" on storage.objects;
create policy "Anyone can read member photos"
on storage.objects for select to anon, authenticated
using (bucket_id = 'member-photos');

drop policy if exists "Gmail admins can upload member photos" on storage.objects;
create policy "Gmail admins can upload member photos"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'member-photos'
  and public.is_cdecc_admin()
  and name ~ '^members/(assembly-(president|vice-president|secretary|treasurer|administrative-spokesperson|student-spokesperson)|secondary-[1-5]|class-[1-5]-[1-5])/[0-9a-f-]{36}[.](jpg|png|webp)$'
);

drop policy if exists "Gmail admins can delete member photos" on storage.objects;
create policy "Gmail admins can delete member photos"
on storage.objects for delete to authenticated
using (bucket_id = 'member-photos' and public.is_cdecc_admin());
