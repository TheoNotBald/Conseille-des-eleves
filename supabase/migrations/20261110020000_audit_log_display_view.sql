create or replace view public.admin_audit_logs_display
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
where public.is_cdecc_admin();

revoke all on public.admin_audit_logs from anon, authenticated;
revoke all on public.admin_audit_logs_display from public, anon, authenticated;
grant select on public.admin_audit_logs_display to authenticated;

notify pgrst, 'reload schema';
