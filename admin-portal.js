(()=>{
  const admin=document.getElementById('page-admin');
  if(!admin)return;

  const french=document.documentElement.lang!=='en';
  const messages=french?{
    title:'Administration du site',
    intro:'Gérez les propositions, le vote et les candidatures.',
    notice:'Prototype : l’accès est ouvert à tout compte Google avec une adresse Gmail. Ne publiez pas de renseignements confidentiels.',
    configMissing:'L’administration est verrouillée : configurez Supabase avant de vous connecter.',
    signIn:'Continuer avec Google',
    signOut:'Se déconnecter',
    authError:'La connexion n’a pas pu être vérifiée.',
    tabs:['Proposition','Vote','Candidature','Journaux'],
    search:'Rechercher une proposition',
    statuses:{pending:'À examiner',approved:'Approuvée',rejected:'Refusée'},
    approve:'Accepter et publier',
    reject:'Refuser',
    reopen:'Remettre à examiner',
    edit:'Modifier',
    save:'Enregistrer',
    cancel:'Annuler',
    delete:'Supprimer',
    noSuggestions:'Aucune proposition à afficher.',
    noCandidates:'Aucune candidature reçue.',
    loadError:'Les données n’ont pas pu être chargées.',
    saveError:'La modification n’a pas pu être enregistrée.',
    confirmDelete:'Supprimer définitivement cet élément ?',
    titleField:'Titre',
    details:'Description',
    category:'Catégorie',
    priority:'Priorité',
    priorityOptions:['Normale','À vérifier','Langage inapproprié'],
    candidateTitle:'Candidature',
    teamName:'Nom du parti ou de l’équipe',
    roster:'Membres et postes',
    ideas:'Propositions',
    photo:'Photo',
    background:'Couleur de fond',
    foreground:'Couleur du texte',
    upload:'Choisir une nouvelle photo (50 Mo maximum)',
    members:'Membres de l’équipe',
    voteTitle:'Paramètres du vote',
    voteNotice:'Ces paramètres sont enregistrés dans Supabase et partagés avec le site public.',
    voteUrl:'Lien du formulaire de vote',
    voteStarts:'Date et heure d’ouverture',
    voteEnds:'Date et heure de fermeture (facultatif)',
    voteSave:'Enregistrer les paramètres',
    voteSaved:'Paramètres du vote enregistrés.',
    voteInvalid:'Le lien doit utiliser HTTPS et les dates doivent être valides.',
    logTime:'Date et heure',
    logUser:'Compte',
    logAction:'Action',
    logEntity:'Élément',
    logDetails:'Champs modifiés',
    noLogs:'Aucune activité enregistrée.',
    publicSubmission:'Soumission publique',
    photoError:'Choisissez une image JPG, PNG ou WebP de 50 Mo maximum.',
    acceptedLabel:'Équipe acceptée : elle apparaît sur la page Vote.',
    rejectedLabel:'Candidature refusée',
    pendingLabel:'À examiner',
    proposalsTab:'Propositions',
    candidatesTab:'Candidatures'
  }:{
    title:'Site administration',
    intro:'Manage suggestions, voting, and candidacies.',
    notice:'Prototype: access is open to any Google account with a Gmail address. Do not publish confidential information.',
    configMissing:'Administration is locked. Configure Supabase before signing in.',
    signIn:'Continue with Google',
    signOut:'Sign out',
    authError:'Could not verify the sign-in.',
    tabs:['Proposals','Vote','Candidacies','Logs'],
    search:'Search proposals',
    statuses:{pending:'Needs review',approved:'Approved',rejected:'Declined'},
    approve:'Accept and publish',
    reject:'Decline',
    reopen:'Reopen for review',
    edit:'Edit',
    save:'Save',
    cancel:'Cancel',
    delete:'Delete',
    noSuggestions:'No proposals to display.',
    noCandidates:'No candidacies received.',
    loadError:'Could not load the data.',
    saveError:'Could not save the change.',
    confirmDelete:'Permanently delete this item?',
    titleField:'Title',
    details:'Description',
    category:'Category',
    priority:'Priority',
    priorityOptions:['Normal','Review','Profanity detected'],
    candidateTitle:'Candidacy',
    teamName:'Party or team name',
    roster:'Members and positions',
    ideas:'Proposals',
    photo:'Photo',
    background:'Background color',
    foreground:'Text color',
    upload:'Choose a new photo (50 MB max)',
    members:'Team members',
    voteTitle:'Voting settings',
    voteNotice:'These settings are stored in Supabase and shared with the public site.',
    voteUrl:'Voting form link',
    voteStarts:'Opening date and time',
    voteEnds:'Closing date and time (optional)',
    voteSave:'Save voting settings',
    voteSaved:'Voting settings saved.',
    voteInvalid:'The link must use HTTPS and dates must be valid.',
    logTime:'Date and time',
    logUser:'Account',
    logAction:'Action',
    logEntity:'Item',
    logDetails:'Changed fields',
    noLogs:'No activity recorded.',
    publicSubmission:'Public submission',
    photoError:'Choose a JPG, PNG, or WebP image up to 50 MB.',
    acceptedLabel:'Accepted team: now listed on the Vote page.',
    rejectedLabel:'Candidacy declined',
    pendingLabel:'Needs review',
    proposalsTab:'Proposals',
    candidatesTab:'Candidacies'
  };
  const make=(tag,className='',content='')=>{
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(content)node.textContent=content;
    return node;
  };
  const button=(label,action,className='secondary')=>{
    const node=make('button',className,label);
    node.type='button';
    node.dataset.portalAction=action;
    return node;
  };
  const setError=(node,error)=>{
    node.textContent=error?.message||messages.saveError;
    node.hidden=false;
    node.dataset.kind='error';
  };
  const setSuccess=(node,message)=>{
    node.textContent=message;
    node.hidden=false;
    node.dataset.kind='success';
  };
  const reportError=error=>console.error('Admin portal:',error);
  const config=window.CDECC_SUPABASE_CONFIG;
  const ready=Boolean(
    config&&
    typeof config.url==='string'&&/^https:\/\/[^/]+\.supabase\.co$/.test(config.url)&&
    typeof config.anonKey==='string'&&config.anonKey.length>20&&
    window.supabase?.createClient
  );
  const shell=make('div','admin-portal');
  const heading=make('header','admin-portal-heading');
  heading.append(make('div','eyebrow','CDECC'),make('h1','',messages.title),make('p','',messages.intro));
  const securityNotice=make('p','site-admin-note',messages.notice);
  const authBar=make('div','admin-portal-auth');
  const authIdentity=make('span','admin-portal-identity');
  const authError=make('p','site-status');
  authError.hidden=true;
  authError.setAttribute('role','status');
  authError.setAttribute('aria-live','polite');
  const signIn=button(messages.signIn,'sign-in','primary');
  const signOut=button(messages.signOut,'sign-out');
  authBar.append(authIdentity,authError,signIn,signOut);
  const tabs=make('div','admin-portal-tabs');
  tabs.setAttribute('role','tablist');
  tabs.setAttribute('aria-label',messages.title);
  const panelNames=['proposals','vote','candidates','logs'];
  const panels=Object.fromEntries(panelNames.map(name=>[name,make('section','admin-portal-panel')]));
  const panelNodes=make('div','admin-portal-panels');
  panelNames.forEach((name,index)=>{
    const tab=button(messages.tabs[index],'tab','admin-portal-tab');
    tab.dataset.tab=name;
    tab.id=`admin-tab-${name}`;
    tab.setAttribute('role','tab');
    tab.setAttribute('aria-controls',`admin-panel-${name}`);
    tab.setAttribute('aria-selected',String(index===0));
    tab.tabIndex=index===0?0:-1;
    tabs.append(tab);
    const panel=panels[name];
    panel.id=`admin-panel-${name}`;
    panel.setAttribute('role','tabpanel');
    panel.setAttribute('aria-labelledby',tab.id);
    panel.tabIndex=0;
    panel.hidden=index!==0;
    panelNodes.append(panel);
  });
  const state=make('p','site-status');
  state.hidden=true;
  state.setAttribute('role','status');
  state.setAttribute('aria-live','polite');
  const loginRequired=make('div','admin-portal-login');
  loginRequired.append(make('h2','',messages.configMissing));
  shell.append(tabs,heading,securityNotice,authBar,state,loginRequired,panelNodes);
  admin.replaceChildren(shell);
  const client=ready?window.supabase.createClient(config.url,config.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
  window.cdeccSupabase=client;
  if(ready){
    const candidateIntro=document.querySelector('.candidate-intro-blob p');
    const candidatePrivacy=document.querySelector('.candidate-form .site-privacy-note');
    if(candidateIntro)candidateIntro.textContent=french
      ?'Présente ton équipe, ses membres et ses idées. La candidature sera envoyée dans un espace partagé pour examen par l’administration.'
      :'Introduce your team, its members, and its ideas. The application will be sent to a shared space for administrative review.';
    if(candidatePrivacy)candidatePrivacy.textContent=french
      ?'Cette candidature est transmise au système partagé de l’école. N’ajoute pas de renseignements personnels sensibles.'
      :'This application is sent to the school’s shared system. Do not include sensitive personal information.';
  }
  let currentTab='proposals';
  let proposalFilter='pending';
  let proposalQuery='';
  let currentUser=null;
  const tables={
    proposals:make('div','admin-portal-list'),
    candidates:make('div','admin-portal-list'),
    logs:make('div','admin-portal-logs')
  };

  const switchTab=name=>{
    if(!panelNames.includes(name))return;
    currentTab=name;
    tabs.querySelectorAll('[data-tab]').forEach(tab=>{
      const selected=tab.dataset.tab===name;
      tab.setAttribute('aria-selected',String(selected));
      tab.tabIndex=selected?0:-1;
    });
    panelNames.forEach(key=>{panels[key].hidden=key!==name});
    if(currentUser)loadPanel(name);
  };
  const formatDate=value=>{
    if(!value)return '';
    const date=new Date(value);
    return Number.isNaN(date.getTime())?'':new Intl.DateTimeFormat(french?'fr-CA':'en-CA',{dateStyle:'medium',timeStyle:'short'}).format(date);
  };
  const showEmpty=(container,message)=>{
    container.replaceChildren(make('p','site-empty-state',message));
  };
  const requireClient=()=>{
    if(!client)throw new Error(messages.configMissing);
    return client;
  };
  const renderProposalResults=async()=>{
    const {data,error}=await requireClient().from('suggestions').select('*').order('created_at',{ascending:false});
    if(error)throw error;
    const records=(data||[]).filter(item=>item.status===proposalFilter&&
      (!proposalQuery||`${item.title} ${item.details} ${item.category}`.toLocaleLowerCase().includes(proposalQuery)));
    if(!records.length){showEmpty(tables.proposals,messages.noSuggestions);return}
    tables.proposals.replaceChildren(...records.map(renderProposal));
  };
  const loadProposals=async()=>{
    const panel=panels.proposals;
    panel.replaceChildren();
    const toolbar=make('div','site-review-toolbar');
    const searchLabel=make('label','admin-search-label');
    searchLabel.append(make('span','',messages.search));
    const search=document.createElement('input');
    search.type='search';
    search.className='admin-search';
    search.value=proposalQuery;
    searchLabel.append(search);
    const filters=make('div','site-review-filters');
    Object.entries(messages.statuses).forEach(([status,label])=>{
      const filter=button(label,`filter-${status}`,`site-filter${proposalFilter===status?' active':''}`);
      filter.setAttribute('aria-pressed',String(proposalFilter===status));
      filters.append(filter);
    });
    toolbar.append(searchLabel,filters);
    panel.append(toolbar,tables.proposals);
    search.addEventListener('input',()=>{
      proposalQuery=search.value.trim().toLocaleLowerCase();
      renderProposalResults().catch(error=>{setError(state,error);reportError(error)});
    });
    filters.addEventListener('click',event=>{
      const filter=event.target.closest('[data-portal-action^="filter-"]');
      if(!filter)return;
      proposalFilter=filter.dataset.portalAction.slice('filter-'.length);
      loadProposals().catch(reportError);
    });
    await renderProposalResults();
  };
  const renderProposal=item=>{
    const card=make('article','card site-review-card');
    const meta=make('div','site-review-meta');
    meta.append(make('span','pill',messages.statuses[item.status]||item.status),make('time','site-date',formatDate(item.created_at)));
    const prioritySelect=document.createElement('select');
    prioritySelect.setAttribute('aria-label',messages.priority);
    ['normal','yellow','red'].forEach((value,index)=>{
      const option=make('option','',messages.priorityOptions[index]);
      option.value=value;
      option.selected=item.priority===value;
      prioritySelect.append(option);
    });
    prioritySelect.addEventListener('change',async()=>{
      const result=await requireClient().from('suggestions').update({
        priority:prioritySelect.value,priority_reason:'priorityManual',priority_override:true
      }).eq('id',item.id);
      if(result.error){setError(state,result.error);reportError(result.error)}
      else loadProposals().catch(error=>{setError(state,error);reportError(error)});
    });
    const edit=button(messages.edit,'edit-proposal');
    const deleteButton=button(messages.delete,'delete-proposal');
    const actions=make('div','site-review-actions');
    if(item.status!=='approved')actions.append(button(messages.approve,'approve-proposal','approve'));
    if(item.status!=='rejected')actions.append(button(messages.reject,'reject-proposal','reject'));
    if(item.status!=='pending')actions.append(button(messages.reopen,'reopen-proposal'));
    actions.append(edit,deleteButton);
    card.append(meta,make('h3','',item.title),make('p','',item.details),make('span','muted',item.category||''),make('label','site-priority-control',messages.priority),prioritySelect,actions);
    edit.addEventListener('click',()=>editProposal(card,item));
    actions.addEventListener('click',async event=>{
      const action=event.target.closest('[data-portal-action]');
      if(!action||action===edit||action===deleteButton)return;
      if(action.dataset.portalAction==='delete-proposal'&&!window.confirm(messages.confirmDelete))return;
      const update={};
      if(action.dataset.portalAction==='approve-proposal'){update.status='approved';update.approved_at=new Date().toISOString()}
      else if(action.dataset.portalAction==='reject-proposal'){update.status='rejected';update.approved_at=null;update.completed_at=null}
      else if(action.dataset.portalAction==='reopen-proposal'){update.status='pending';update.approved_at=null;update.completed_at=null}
      if(action.dataset.portalAction==='delete-proposal'){
        const result=await requireClient().from('suggestions').delete().eq('id',item.id);
        if(result.error){setError(state,result.error);reportError(result.error);return}
      }else{
        const result=await requireClient().from('suggestions').update(update).eq('id',item.id);
        if(result.error){setError(state,result.error);reportError(result.error);return}
      }
      await loadProposals();
      await loadLogs();
      await refreshPublicIdeas();
    });
    return card;
  };
  const editProposal=(card,item)=>{
    const form=make('form','admin-portal-edit-form');
    const fields=[
      ['title',messages.titleField,'text',item.title,100],
      ['details',messages.details,'textarea',item.details,1200],
      ['category',messages.category,'text',item.category,40]
    ];
    fields.forEach(([key,label,type,value,max])=>{
      const wrapper=make('label','');
      wrapper.append(make('span','',label));
      const input=type==='textarea'?document.createElement('textarea'):document.createElement('input');
      if(type!=='textarea')input.type=type;
      input.name=key;
      input.value=value||'';
      input.maxLength=max;
      input.required=true;
      wrapper.append(input);
      form.append(wrapper);
    });
    const save=button(messages.save,'save','primary');
    save.type='submit';
    form.append(save,button(messages.cancel,'cancel'));
    card.append(form);
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      event.stopPropagation();
      const values=Object.fromEntries(new FormData(form));
      const {error}=await requireClient().from('suggestions').update(values).eq('id',item.id);
      if(error){setError(state,error);reportError(error);return}
      await loadProposals();
      await loadLogs();
      await refreshPublicIdeas();
    });
    form.querySelector('[data-portal-action="cancel"]').addEventListener('click',()=>form.remove());
  };

  const renderCandidate=item=>{
    const card=make('article','card admin-candidate-card');
    const photo=client.storage.from('candidate-photos').getPublicUrl(item.photo_path).data.publicUrl;
    const image=document.createElement('img');
    image.src=photo;
    image.alt='';
    image.loading='lazy';
    image.className='admin-candidate-photo';
    const statusText=item.status==='approved'?messages.acceptedLabel:item.status==='rejected'?messages.rejectedLabel:messages.pendingLabel;
    card.append(make('span',`pill admin-candidate-status is-${item.status}`,statusText));
    const form=make('form','admin-portal-edit-form');
    const fields=[
      ['team_name',messages.teamName,'text',item.team_name,80],
      ['roster',messages.roster,'textarea',item.roster,1200],
      ['ideas',messages.ideas,'textarea',item.ideas,2000]
    ];
    fields.forEach(([key,label,type,value,max])=>{
      const wrapper=make('label','');
      wrapper.append(make('span','',label));
      const input=type==='textarea'?document.createElement('textarea'):document.createElement('input');
      if(type!=='textarea')input.type=type;
      input.name=key;
      input.value=value||'';
      input.maxLength=max;
      input.required=true;
      wrapper.append(input);
      form.append(wrapper);
    });
    for(const [key,label,value] of [
      ['background',messages.background,item.background],
      ['foreground',messages.foreground,item.foreground]
    ]){
      const wrapper=make('label','admin-color-field');
      wrapper.append(make('span','',label));
      const input=document.createElement('input');
      input.type='color';
      input.name=key;
      input.value=value;
      wrapper.append(input);
      form.append(wrapper);
    }
    const photoLabel=make('label','');
    photoLabel.append(make('span','',messages.upload));
    const photoInput=document.createElement('input');
    photoInput.type='file';
    photoInput.accept='image/jpeg,image/png,image/webp';
    photoLabel.append(photoInput);
    form.append(photoLabel);
    const save=button(messages.save,'save-candidacy','primary');
    save.type='submit';
    form.append(save);
    const actions=make('div','site-review-actions');
    if(item.status!=='approved')actions.append(button(messages.approve,'approve-candidacy','approve'));
    if(item.status!=='rejected')actions.append(button(messages.reject,'reject-candidacy','reject'));
    if(item.status!=='pending')actions.append(button(messages.reopen,'reopen-candidacy'));
    card.append(make('time','site-date',formatDate(item.created_at)),make('h3','',messages.members),image,form,actions);
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      event.stopPropagation();
      await saveCandidacy(card,item,form,photoInput.files[0]);
    });
    actions.addEventListener('click',async event=>{
      const action=event.target.closest('[data-portal-action]');
      if(!action)return;
      const status=action.dataset.portalAction==='approve-candidacy'?'approved':
        action.dataset.portalAction==='reject-candidacy'?'rejected':
        action.dataset.portalAction==='reopen-candidacy'?'pending':'';
      if(!status)return;
      const {error}=await requireClient().from('candidacies').update({
        status,approved_at:status==='approved'?new Date().toISOString():null,updated_at:new Date().toISOString()
      }).eq('id',item.id);
      if(error){setError(state,error);reportError(error);return}
      await loadCandidates();
      await loadLogs();
      await refreshPublicCandidates();
    });
    card.prepend(make('h2','',item.team_name));
    return card;
  };
  const saveCandidacy=async(card,item,form,newPhoto)=>{
    const values=Object.fromEntries(new FormData(form));
    const patch={
      team_name:String(values.team_name).trim(),
      roster:String(values.roster).trim(),
      ideas:String(values.ideas).trim(),
      background:values.background,
      foreground:values.foreground,
      updated_at:new Date().toISOString()
    };
    if(!patch.team_name||!patch.roster||!patch.ideas){setError(state,new Error(messages.saveError));return}
    let uploadedPath='';
    if(newPhoto){
      if(newPhoto.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(newPhoto.type)){
        setError(state,new Error(messages.photoError));return;
      }
      const ext={ 'image/jpeg':'jpg','image/png':'png','image/webp':'webp' }[newPhoto.type];
      uploadedPath=`candidacies/${item.id}/${crypto.randomUUID()}.${ext}`;
      const upload=await client.storage.from('candidate-photos').upload(uploadedPath,newPhoto,{contentType:newPhoto.type,upsert:false});
      if(upload.error){setError(state,upload.error);reportError(upload.error);return}
      patch.photo_path=uploadedPath;
    }
    const {error}=await client.from('candidacies').update(patch).eq('id',item.id);
    if(error){
      setError(state,error);
      reportError(error);
      if(uploadedPath)await client.storage.from('candidate-photos').remove([uploadedPath]);
      return;
    }
    await loadCandidates();
    await loadLogs();
    await refreshPublicCandidates();
  };
  const loadCandidates=async()=>{
    const {data,error}=await requireClient().from('candidacies').select('*').order('created_at',{ascending:false});
    if(error)throw error;
    panels.candidates.replaceChildren(tables.candidates);
    if(!data?.length){showEmpty(tables.candidates,messages.noCandidates);return}
    tables.candidates.replaceChildren(...data.map(renderCandidate));
  };
  const localDateTime=value=>{
    if(!value)return '';
    const date=new Date(value);
    if(Number.isNaN(date.getTime()))return '';
    const local=new Date(date.getTime()-date.getTimezoneOffset()*60000);
    return local.toISOString().slice(0,16);
  };
  const isoDateTime=value=>value?new Date(value).toISOString():null;
  const loadVoteSettings=async()=>{
    const panel=panels.vote;
    const {data,error}=await requireClient().from('vote_settings').select('*').eq('singleton',true).maybeSingle();
    if(error)throw error;
    const record=data||{form_url:'',starts_at:null,ends_at:null};
    const form=make('form','card admin-vote-settings admin-portal-edit-form');
    form.append(make('h2','',messages.voteTitle),make('p','site-admin-note',messages.voteNotice));
    const addField=(name,label,type,value)=>{
      const wrapper=make('label','');
      wrapper.append(make('span','',label));
      const input=document.createElement('input');
      input.type=type;
      input.name=name;
      input.value=value||'';
      if(type==='url')input.placeholder='https://forms.google.com/...';
      wrapper.append(input);
      form.append(wrapper);
      return input;
    };
    const formUrl=addField('form_url',messages.voteUrl,'url',record.form_url);
    const startsAt=addField('starts_at',messages.voteStarts,'datetime-local',localDateTime(record.starts_at));
    const endsAt=addField('ends_at',messages.voteEnds,'datetime-local',localDateTime(record.ends_at));
    const feedback=make('p','site-status');
    feedback.hidden=true;
    const submit=button(messages.voteSave,'save-vote','primary');
    submit.type='submit';
    form.append(feedback,submit);
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      event.stopPropagation();
      const url=formUrl.value.trim();
      let parsedUrl;
      try{parsedUrl=new URL(url)}catch{}
      const start=startsAt.value?isoDateTime(startsAt.value):null;
      const end=endsAt.value?isoDateTime(endsAt.value):null;
      if((url&&parsedUrl?.protocol!=='https:')||(!url&&start)||(start&&end&&Date.parse(end)<=Date.parse(start))){
        setError(feedback,new Error(messages.voteInvalid));return;
      }
      const next={singleton:true,form_url:url,starts_at:start,ends_at:end,updated_at:new Date().toISOString(),updated_by:currentUser.id};
      const result=await client.from('vote_settings').update(next).eq('singleton',true);
      if(result.error){setError(feedback,result.error);reportError(result.error);return}
      window.cdeccApplyRemoteVoteSettings?.({formUrl:url,startsAt:start||'',endsAt:end||''});
      setSuccess(feedback,messages.voteSaved);
      await loadLogs();
    });
    panel.replaceChildren(form);
  };
  const loadLogs=async()=>{
    if(!client||!currentUser)return;
    const {data,error}=await client.from('admin_audit_logs').select('*').order('occurred_at',{ascending:false}).limit(300);
    if(error)throw error;
    const table=make('table','admin-audit-table');
    const head=document.createElement('thead');
    const headerRow=document.createElement('tr');
    [messages.logTime,messages.logUser,messages.logAction,messages.logEntity,messages.logDetails].forEach(label=>headerRow.append(make('th','',label)));
    head.append(headerRow);
    const body=document.createElement('tbody');
    (data||[]).forEach(entry=>{
      const row=document.createElement('tr');
      const details=entry.details&&typeof entry.details==='object'
        ?Object.entries(entry.details).map(([field,change])=>{
          if(change&&typeof change==='object'&&('before' in change||'after' in change)){
            return `${field}: ${JSON.stringify(change.before??null)} → ${JSON.stringify(change.after??null)}`;
          }
          return `${field}: ${JSON.stringify(change)}`;
        }).join('; ')
        :'';
      const actionLabel={
        sign_in:french?'Connexion Google':'Google sign-in',
        sign_out:french?'Déconnexion':'Signed out',
        insert:french?'Création':'Created',
        update:french?'Modification':'Updated',
        delete:french?'Suppression':'Deleted'
      }[entry.action]||entry.action;
      const entityLabel={
        suggestions:messages.proposalsTab,
        candidacies:messages.candidatesTab,
        vote_settings:messages.voteTitle,
        authentication:french?'Authentification':'Authentication'
      }[entry.entity]||entry.entity;
      [
        formatDate(entry.occurred_at),
        entry.actor_email=== 'Public submission'?messages.publicSubmission:entry.actor_email,
        actionLabel,
        entityLabel,
        details
      ].forEach(value=>row.append(make('td','',String(value||''))));
      body.append(row);
    });
    table.append(head,body);
    if(data?.length){
      const wrapper=make('div','admin-audit-table-wrap');
      wrapper.append(table);
      tables.logs.replaceChildren(wrapper);
    }else tables.logs.replaceChildren(make('p','site-empty-state',messages.noLogs));
    panels.logs.replaceChildren(tables.logs);
  };
  const loadPanel=async name=>{
    try{
      state.hidden=true;
      if(name==='proposals')await loadProposals();
      else if(name==='vote')await loadVoteSettings();
      else if(name==='candidates')await loadCandidates();
      else if(name==='logs')await loadLogs();
    }catch(error){setError(state,error);reportError(error)}
  };
  const applyApprovedIdeas=records=>{
    const list=document.querySelector('#page-projects .site-project-list');
    if(!list)return;
    const items=(records||[]).filter(item=>item.status==='approved'&&!item.completed_at);
    const cards=items.map(item=>{
      const card=make('article','card site-project-card');
      const meta=make('div','site-project-meta');
      meta.append(make('span','pill',french?'Projet approuvé':'Approved project'),make('time','site-date',formatDate(item.approved_at||item.created_at)));
      card.append(meta,make('h3','',item.title),make('span','muted',item.category||''),make('p','',item.details));
      return card;
    });
    if(!cards.length)cards.push(make('p','site-empty-state',french?'Aucun projet approuvé pour le moment.':'No approved projects yet.'));
    list.replaceChildren(...cards);
  };
  const refreshPublicIdeas=async()=>{
    if(!client)return;
    const {data,error}=await client.from('suggestions').select('*').eq('status','approved').order('created_at',{ascending:false});
    if(error){reportError(error);return}
    applyApprovedIdeas(data);
  };
  const applyApprovedCandidates=records=>{
    const grid=document.querySelector('#page-vote .vote-team-grid');
    if(!grid)return;
    (records||[]).forEach(item=>{
      if(grid.querySelector(`[data-candidacy-id="${CSS.escape(item.id)}"]`))return;
      const card=make('article','vote-team-card');
      card.dataset.candidacyId=item.id;
      card.style.backgroundColor=item.background;
      card.style.color=item.foreground;
      const image=document.createElement('img');
      image.src=client.storage.from('candidate-photos').getPublicUrl(item.photo_path).data.publicUrl;
      image.alt=french?`Photo de ${item.team_name}`:`Photo of ${item.team_name}`;
      image.loading='lazy';
      const title=make('h2','',item.team_name);
      const detail=make('p','',item.ideas);
      card.append(title,image,detail);
      grid.append(card);
    });
  };
  const refreshPublicCandidates=async()=>{
    if(!client)return;
    const {data,error}=await client.from('candidacies').select('*').eq('status','approved').order('created_at',{ascending:false});
    if(error){reportError(error);return}
    applyApprovedCandidates(data);
  };
  const refreshPublicVoteSettings=async()=>{
    if(!client)return;
    const {data,error}=await client.from('vote_settings').select('*').eq('singleton',true).maybeSingle();
    if(error){reportError(error);return}
    if(data)window.cdeccApplyRemoteVoteSettings?.({
      formUrl:data.form_url,
      startsAt:data.starts_at||'',
      endsAt:data.ends_at||''
    });
  };
  document.addEventListener('submit',async event=>{
    const form=event.target;
    if(!(form instanceof HTMLFormElement)||form.id!=='suggestform'||!client)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const title=form.querySelector('#title')?.value.trim();
    const details=form.querySelector('#details')?.value.trim();
    const category=form.querySelector('#suggestion-category')?.value;
    const status=form.querySelector('.site-status');
    try{
      if(!title||!details||!category)throw new Error(messages.saveError);
      const {error}=await client.from('suggestions').insert({title,details,category});
      if(error)throw error;
      form.reset();
      if(status)setSuccess(status,french?'Proposition envoyée pour examen.':'Proposal submitted for review.');
    }catch(error){reportError(error);setError(status||state,error)}
  },true);
  document.addEventListener('submit',async event=>{
    const form=event.target;
    if(!(form instanceof HTMLFormElement)||!form.classList.contains('candidate-form')||!client)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    const feedback=form.querySelector('.site-status');
    const teamName=form.querySelector('#candidate-team')?.value.trim();
    const roster=form.querySelector('#candidate-roster')?.value.trim();
    const ideas=form.querySelector('#candidate-ideas')?.value.trim();
    const photo=form.querySelector('#candidate-picture')?.files?.[0];
    if(!teamName||!roster||!ideas){setError(feedback,new Error(messages.saveError));return}
    if(!photo||photo.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(photo.type)){
      setError(feedback,new Error(messages.photoError));return;
    }
    const id=crypto.randomUUID();
    const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[photo.type];
    const path=`candidacies/${id}/${crypto.randomUUID()}.${ext}`;
    try{
      const upload=await client.storage.from('candidate-photos').upload(path,photo,{contentType:photo.type,upsert:false});
      if(upload.error)throw upload.error;
      const result=await client.from('candidacies').insert({
        id,team_name:teamName,roster,ideas,photo_path:path,
        background:form.querySelector('#candidate-background').value,
        foreground:form.querySelector('#candidate-foreground').value
      });
      if(result.error){
        await client.storage.from('candidate-photos').remove([path]);
        throw result.error;
      }
      form.reset();
      setSuccess(feedback,french?'Candidature envoyée pour examen.':'Candidacy submitted for review.');
    }catch(error){reportError(error);setError(feedback,error)}
  },true);
  document.addEventListener('click',event=>{
    const tab=event.target.closest('[data-tab]');
    if(tab&&tabs.contains(tab)){switchTab(tab.dataset.tab);return}
    const login=event.target.closest('[data-portal-action="sign-in"]');
    if(login&&client){
      client.auth.signInWithOAuth({provider:'google',options:{redirectTo:window.location.href.split('#')[0]} }).then(({error})=>{
        if(error){setError(authError,error);reportError(error)}
      });
      return;
    }
    const logout=event.target.closest('[data-portal-action="sign-out"]');
    if(logout&&client){
      (async()=>{
        const {error:logError}=await client.rpc('record_admin_sign_out');
        if(logError){setError(authError,logError);reportError(logError)}
        const {error}=await client.auth.signOut();
        if(error){setError(authError,error);reportError(error)}
      })().catch(error=>{setError(authError,error);reportError(error)});
      return;
    }
  });
  tabs.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
    const items=Array.from(tabs.querySelectorAll('[role=tab]'));
    const index=items.indexOf(document.activeElement);
    const next=event.key==='Home'?0:event.key==='End'?items.length-1:
      (index+(event.key==='ArrowRight'?1:-1)+items.length)%items.length;
    items[next].focus();
    switchTab(items[next].dataset.tab);
  });
  const updateSignedIn=async(session,recordSignIn=false)=>{
    const user=session?.user;
    const isGmail=user&&/^[^@\s]+@gmail[.]com$/i.test(user.email||'')&&user.app_metadata?.provider==='google';
    if(user&&!isGmail){
      await client.auth.signOut();
      setError(authError,new Error(messages.authError));
      currentUser=null;
    }else currentUser=user||null;
    authIdentity.textContent=currentUser?.email||'';
    signIn.hidden=!ready||Boolean(currentUser);
    signOut.hidden=!currentUser;
    loginRequired.hidden=ready&&Boolean(currentUser);
    tabs.hidden=!currentUser;
    panelNodes.hidden=!currentUser;
    securityNotice.hidden=!ready;
    if(!ready){
      loginRequired.replaceChildren(make('h2','',messages.configMissing));
    }else if(!currentUser){
      loginRequired.replaceChildren(make('h2','',french?'Connexion requise':'Sign-in required'));
    }else{
      authError.hidden=true;
      try{
        if(recordSignIn){
          const {error}=await client.rpc('record_admin_sign_in');
          if(error)throw error;
        }
        await loadPanel(currentTab);
        await refreshPublicIdeas();
        await refreshPublicCandidates();
      }catch(error){setError(authError,error);reportError(error)}
    }
  };
  if(!ready){
    signIn.hidden=true;
    signOut.hidden=true;
    tabs.hidden=true;
    panelNodes.hidden=true;
    loginRequired.hidden=false;
    loginRequired.replaceChildren(make('h2','',messages.configMissing));
  }else{
    loginRequired.hidden=false;
    client.auth.onAuthStateChange((event,session)=>{window.setTimeout(()=>updateSignedIn(session,event==='SIGNED_IN'),0)});
    client.auth.getSession().then(({data,error})=>{
      if(error){setError(authError,error);reportError(error);return}
      updateSignedIn(data.session);
      refreshPublicIdeas();
      refreshPublicCandidates();
      refreshPublicVoteSettings();
    }).catch(error=>{setError(authError,error);reportError(error)});
  }
  document.addEventListener('click',event=>{
    const pageButton=event.target.closest('[data-page]');
    if(!pageButton)return;
    const page=pageButton.dataset.page;
    if(page==='projects')window.setTimeout(refreshPublicIdeas,0);
    if(page==='vote')window.setTimeout(refreshPublicCandidates,0);
  });
  window.addEventListener('cdecc:language-change',()=>{
    window.location.reload();
  });
})();
