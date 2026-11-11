alter table public.suggestions
  drop constraint if exists suggestions_title_check;

alter table public.suggestions
  add constraint suggestions_title_check
  check (char_length(title) between 1 and 160);
