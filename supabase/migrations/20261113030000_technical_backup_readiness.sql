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
    exists (
      select 1 from vault.decrypted_secrets
      where name = 'supabase_project_url' and nullif(trim(decrypted_secret), '') is not null
    )
      and exists (
        select 1 from vault.decrypted_secrets
        where name = 'supabase_service_role_key' and nullif(trim(decrypted_secret), '') is not null
      ),
    'backup_schedule_configured',
    exists (
      select 1 from cron.job
      where jobname = 'cdecc-technical-backup' and active
    )
  );
end;
$$;

notify pgrst, 'reload schema';
