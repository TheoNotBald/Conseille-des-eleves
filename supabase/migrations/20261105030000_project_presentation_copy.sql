alter table public.suggestions
  add column if not exists home_placement text,
  add column if not exists image_path text,
  add column if not exists original_image_path text,
  add column if not exists presentation_title text,
  add column if not exists presentation_description text;

drop function if exists public.update_suggestion_presentation(uuid, text, text, boolean);
drop function if exists public.update_suggestion_presentation(uuid, text, text, text, boolean);
drop function if exists public.update_suggestion_presentation(uuid, text, text, text, boolean, text, text);

create function public.update_suggestion_presentation(
  p_suggestion_id uuid,
  p_home_placement text,
  p_image_path text,
  p_original_image_path text,
  p_update_image boolean,
  p_presentation_title text,
  p_presentation_description text
)
returns void
language plpgsql
security invoker
set search_path = ''
as $$
begin
  if not public.is_cdecc_admin() then
    raise exception 'Admin access is not allowed for this account';
  end if;

  if p_home_placement is null or p_home_placement not in ('none', 'featured', 'completed') then
    raise exception 'Invalid project placement';
  end if;

  if p_update_image and (
    p_image_path is null
    or p_image_path !~ ('^projects/' || p_suggestion_id::text || '/[0-9a-f-]{36}[.](jpg|png|webp)$')
    or p_original_image_path is null
    or p_original_image_path !~ ('^projects/' || p_suggestion_id::text || '/[0-9a-f-]{36}[.](jpg|png|webp)$')
  ) then
    raise exception 'Invalid project image path';
  end if;

  if p_presentation_title is not null and length(p_presentation_title) > 160 then
    raise exception 'Project display title is too long';
  end if;

  if p_presentation_description is not null and length(p_presentation_description) > 2000 then
    raise exception 'Project display description is too long';
  end if;

  if not exists (
    select 1
    from public.suggestions
    where id = p_suggestion_id and status = 'approved'
  ) then
    raise exception 'Only approved proposals can be published';
  end if;

  if p_home_placement = 'featured' then
    update public.suggestions
    set home_placement = 'completed'
    where status = 'approved'
      and home_placement = 'featured'
      and id <> p_suggestion_id;
  end if;

  update public.suggestions
  set home_placement = p_home_placement,
      image_path = case when p_update_image then p_image_path else image_path end,
      original_image_path = case when p_update_image then p_original_image_path else original_image_path end,
      presentation_title = p_presentation_title,
      presentation_description = p_presentation_description
  where id = p_suggestion_id
    and status = 'approved';
end;
$$;

revoke all on function public.update_suggestion_presentation(uuid, text, text, text, boolean, text, text) from public, anon;
grant execute on function public.update_suggestion_presentation(uuid, text, text, text, boolean, text, text) to authenticated;

notify pgrst, 'reload schema';
