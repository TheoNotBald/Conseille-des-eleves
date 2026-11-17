alter table public.technical_settings
  add column if not exists charter_content jsonb not null default '{}'::jsonb;

create or replace function public.update_technical_settings(p_settings jsonb)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  visuals jsonb;
  charter_value jsonb;
  article_value jsonb;
  section_value jsonb;
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

  if p_settings ? 'charter_content' then
    charter_value := p_settings -> 'charter_content';
    if jsonb_typeof(charter_value) is distinct from 'object'
       or jsonb_typeof(charter_value -> 'note') is distinct from 'object'
       or jsonb_typeof(charter_value -> 'articles') is distinct from 'array' then
      raise exception 'Invalid charter content';
    end if;
    if jsonb_array_length(charter_value -> 'articles') not between 1 and 30
       or length(coalesce(charter_value #>> '{note,fr}', '')) > 1000
       or length(coalesce(charter_value #>> '{note,en}', '')) > 1000 then
      raise exception 'Invalid charter content';
    end if;
    if jsonb_typeof(charter_value #> '{note,fr}') is distinct from 'string'
       or jsonb_typeof(charter_value #> '{note,en}') is distinct from 'string' then
      raise exception 'Charter note must be provided in French and English';
    end if;
    for article_value in
      select value from jsonb_array_elements(charter_value -> 'articles')
    loop
      if jsonb_typeof(article_value) is distinct from 'object'
         or jsonb_typeof(article_value -> 'title') is distinct from 'object'
         or jsonb_typeof(article_value -> 'sections') is distinct from 'array'
         or jsonb_array_length(article_value -> 'sections') not between 1 and 30
         or jsonb_typeof(article_value #> '{title,fr}') is distinct from 'string'
         or jsonb_typeof(article_value #> '{title,en}') is distinct from 'string'
         or length(btrim(coalesce(article_value #>> '{title,fr}', ''))) not between 1 and 160
         or length(btrim(coalesce(article_value #>> '{title,en}', ''))) not between 1 and 160 then
        raise exception 'Each charter article needs a French and English title and at least one section';
      end if;
      for section_value in
        select value from jsonb_array_elements(article_value -> 'sections')
      loop
        if jsonb_typeof(section_value) is distinct from 'object'
           or jsonb_typeof(section_value -> 'title') is distinct from 'object'
           or jsonb_typeof(section_value -> 'text') is distinct from 'object'
           or jsonb_typeof(section_value #> '{title,fr}') is distinct from 'string'
           or jsonb_typeof(section_value #> '{title,en}') is distinct from 'string'
           or jsonb_typeof(section_value #> '{text,fr}') is distinct from 'string'
           or jsonb_typeof(section_value #> '{text,en}') is distinct from 'string'
           or length(btrim(coalesce(section_value #>> '{title,fr}', ''))) not between 1 and 160
           or length(btrim(coalesce(section_value #>> '{title,en}', ''))) not between 1 and 160
           or length(coalesce(section_value #>> '{text,fr}', '')) > 10000
           or length(coalesce(section_value #>> '{text,en}', '')) > 10000 then
          raise exception 'Each charter section needs French and English titles and text';
        end if;
      end loop;
    end loop;
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
      charter_content = case when p_settings ? 'charter_content' then charter_value else charter_content end,
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

create or replace view public.site_public_settings
with (security_barrier = true)
as
select ideas_open, candidacies_open, site_visuals, charter_content
from public.technical_settings
where singleton;

revoke all on public.site_public_settings from public;
grant select on public.site_public_settings to anon, authenticated;

revoke all on function public.update_technical_settings(jsonb) from public, anon;
grant execute on function public.update_technical_settings(jsonb) to authenticated;

notify pgrst, 'reload schema';
