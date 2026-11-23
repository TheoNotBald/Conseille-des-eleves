alter table public.technical_access_control
  drop constraint if exists technical_access_control_role_check;

alter table public.technical_access_control
  add constraint technical_access_control_role_check
  check (role in ('admin', 'technical', 'both'));

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
        and access.role in ('technical', 'both')
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
        and access.role in ('admin', 'both')
    );
$$;

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
  if p_role is not null and p_role not in ('admin', 'technical', 'both') then
    raise exception 'Invalid access role';
  end if;
  if normalized_email = lower(coalesce(auth.jwt() ->> 'email', ''))
     and p_role is distinct from 'technical'
     and p_role is distinct from 'both' then
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
    select 1 from public.technical_access_control where role in ('technical', 'both')
  ) then
    raise exception 'At least one technical administrator must remain';
  end if;
end;
$$;

notify pgrst, 'reload schema';
