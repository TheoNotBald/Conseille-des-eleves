alter table public.suggestions
  add column if not exists grade text not null default 'general'
  check (grade in ('1', '2', '3', '4', '5', 'general'));

notify pgrst, 'reload schema';
