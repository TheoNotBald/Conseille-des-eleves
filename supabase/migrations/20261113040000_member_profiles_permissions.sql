grant insert, update on public.member_profiles to authenticated;

notify pgrst, 'reload schema';
