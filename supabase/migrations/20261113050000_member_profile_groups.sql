alter table public.member_profiles
  add column if not exists group_name text default '' check (char_length(group_name) <= 80),
  add column if not exists role_label text check (role_label is null or char_length(role_label) between 1 and 80);

update public.member_profiles
set role_label = group_label
where role_label is null
  and slot_key not like 'secondary-%';

update public.member_profiles
set group_name = group_label
where slot_key like 'secondary-%'
  and coalesce(group_name, '') = '';

grant insert, update on public.member_profiles to authenticated;

notify pgrst, 'reload schema';
