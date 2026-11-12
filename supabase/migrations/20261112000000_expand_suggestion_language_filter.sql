create or replace function public.flag_suggestion_profanity()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  terms text[] := array[
    'fuck','fucking','fucked','shit','bullshit','bitch','bastard','asshole','assholes','damn','dick','dumbass','piss','crap','motherfucker',
    'cunt','twat','wanker','prick','cock','pussy','whore','slut','douche','arse','arsehole','bollocks',
    'merde','putain','pute','con','connard','connasse','salope','salaud','enculer','encule','foutre','bordel','chiant','chier',
    'nigger','nigga','faggot','fag','dyke','kike','spic','chink','gook','wetback','raghead','retard','tranny','coon','bougnoule','tapette','pede',
    'natehiggers'
  ];
  normalized_terms text[];
  words text[];
  candidate text;
  word_count integer;
  start_index integer;
  end_index integer;
begin
  if tg_op = 'UPDATE' and new.priority_override then
    return new;
  end if;

  candidate := lower(extensions.unaccent(coalesce(new.title, '') || ' ' || coalesce(new.details, '')));
  candidate := translate(candidate, 'аесорхуіјкмтвн', 'aecopxuijkmtbh');
  candidate := translate(candidate, 'αβϲεηικμνορτυχω', 'abcehikmnoptuxo');
  candidate := translate(candidate, '0123456789', 'oizeasgtbg');
  words := regexp_split_to_array(candidate, '[^a-z0-9]+');
  select array_agg(regexp_replace(term, '(.)\1+', '\1', 'g'))
    into normalized_terms
    from (
      select term
        from unnest(terms) as listed_terms(term)
      union
      select substr(term, 1, missing_index - 1) || substr(term, missing_index + 1)
        from unnest(terms) as listed_terms(term),
             lateral generate_series(1, length(term)) as missing(missing_index)
       where length(term) >= 4
    ) as expanded_terms;
  word_count := coalesce(array_length(words, 1), 0);

  if word_count > 0 then
    for start_index in 1..word_count loop
      candidate := '';
      for end_index in start_index..least(start_index + 15, word_count) loop
        if words[end_index] <> '' then
          candidate := candidate || words[end_index];
          candidate := regexp_replace(candidate, '(.)\1+', '\1', 'g');
          if candidate = any(normalized_terms) then
            new.priority := 'red';
            new.priority_reason := 'priorityReasonLanguage';
            new.priority_override := false;
            return new;
          end if;
        end if;
      end loop;
    end loop;
  end if;

  new.priority := 'normal';
  new.priority_reason := 'priorityReasonSchool';
  new.priority_override := false;
  return new;
end;
$$;
