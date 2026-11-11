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
  select nullif(btrim(split_part(value, ',', 1)), '')
    into forwarded_ip
    from jsonb_each_text(coalesce(request_headers, '{}'::jsonb))
    where lower(key) = 'x-forwarded-for'
    limit 1;

  if forwarded_ip is null then
    return null;
  end if;
  return forwarded_ip::inet;
exception
  when invalid_text_representation then
    return null;
end;
$$;

revoke all on function public.request_client_ip() from public, anon, authenticated;

comment on function public.request_client_ip() is
  'Reads the first address in the X-Forwarded-For request header supplied by Supabase PostgREST; returns NULL when unavailable or invalid.';
