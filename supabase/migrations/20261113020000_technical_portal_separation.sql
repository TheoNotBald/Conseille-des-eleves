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
        and access.role = 'admin'
    );
$$;

notify pgrst, 'reload schema';
