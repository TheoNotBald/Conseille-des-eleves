alter table public.suggestions
  add column if not exists home_placement text,
  add column if not exists image_path text;

update public.suggestions
set home_placement = 'completed'
where home_placement = 'projects';

alter table public.suggestions
  drop constraint if exists suggestions_home_placement_check;

alter table public.suggestions
  add constraint suggestions_home_placement_check
  check (home_placement is null or home_placement in ('none', 'featured', 'completed'));

create or replace function public.update_suggestion_presentation(
  p_suggestion_id uuid,
  p_home_placement text,
  p_image_path text default null,
  p_update_image boolean default false
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

  if p_update_image and p_image_path is not null
    and p_image_path !~ ('^projects/' || p_suggestion_id::text || '/[0-9a-f-]{36}[.](jpg|png|webp)$') then
    raise exception 'Invalid project image path';
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
      image_path = case when p_update_image then p_image_path else image_path end
  where id = p_suggestion_id
    and status = 'approved';
end;
$$;

revoke all on function public.update_suggestion_presentation(uuid, text, text, boolean) from public, anon;
grant execute on function public.update_suggestion_presentation(uuid, text, text, boolean) to authenticated;
