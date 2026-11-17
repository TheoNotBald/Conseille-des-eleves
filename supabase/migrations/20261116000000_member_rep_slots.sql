alter table public.member_profiles
  add column if not exists is_published boolean not null default true,
  add column if not exists is_deleted boolean not null default false;

alter table public.member_profiles
  drop constraint if exists member_profiles_slot_key_check;

alter table public.member_profiles
  add constraint member_profiles_slot_key_check
  check (
    slot_key ~ '^(assembly-(president|vice-president|secretary|treasurer|administrative-spokesperson|student-spokesperson)|secondary-[1-5](-([2-9]|[12][0-9]|30))?|class-[1-5]-([1-9]|[12][0-9]|30))$'
  );

create or replace function public.enforce_member_profiles_category_limit()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  active_count integer;
begin
  new.is_published := coalesce(new.is_published, true);
  new.is_deleted := coalesce(new.is_deleted, false);

  if new.is_deleted then
    return new;
  end if;

  if new.slot_key ~ '^secondary-' then
    perform pg_advisory_xact_lock(1397046833, 1);
    select count(*) into active_count
    from public.member_profiles
    where slot_key ~ '^secondary-'
      and not is_deleted
      and slot_key <> new.slot_key;
  elsif new.slot_key ~ '^class-' then
    perform pg_advisory_xact_lock(1397046833, 2);
    select count(*) into active_count
    from public.member_profiles
    where slot_key ~ '^class-'
      and not is_deleted
      and slot_key <> new.slot_key;
  else
    return new;
  end if;

  if active_count >= 30 then
    raise exception 'member_profiles_category_limit_exceeded'
      using errcode = '23514';
  end if;

  return new;
end;
$$;

drop trigger if exists member_profiles_category_limit on public.member_profiles;
create trigger member_profiles_category_limit
before insert or update on public.member_profiles
for each row execute function public.enforce_member_profiles_category_limit();

drop policy if exists "Gmail admins can upload member photos" on storage.objects;
create policy "Gmail admins can upload member photos"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'member-photos'
  and public.is_cdecc_admin()
  and name ~ '^members/(assembly-(president|vice-president|secretary|treasurer|administrative-spokesperson|student-spokesperson)|secondary-[1-5](-([2-9]|[12][0-9]|30))?|class-[1-5]-([1-9]|[12][0-9]|30))/[0-9a-f-]{36}[.](jpg|png|webp)$'
);
