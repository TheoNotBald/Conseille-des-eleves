(()=>{
  const admin=document.getElementById('page-admin');
  if(!admin)return;

  const french=document.documentElement.lang!=='en';
  const messages=french?{
    title:'Administration du site',
    intro:'Gérez les propositions, le vote et les candidatures.',
    notice:'Tout compte Google utilisant une adresse Gmail peut accéder à l’administration. Ne publiez pas de renseignements confidentiels.',
    configMissing:'L’administration est verrouillée : configurez Supabase avant de vous connecter.',
    signIn:'Continuer avec Google',
    signOut:'Se déconnecter',
    authError:'La connexion n’a pas pu être vérifiée.',
    loginEyebrow:'Espace d’administration',
    loginDescription:'Connectez-vous avec un compte Google utilisant une adresse Gmail pour gérer les propositions, le vote et les candidatures.',
    loginHelp:'Le portail est réservé à l’administration. Ne partagez pas votre session.',
    configDescription:'Le portail sera disponible après la configuration de la connexion Supabase.',
    signupDisabled:'Supabase bloque les nouvelles inscriptions. Dans Supabase, ouvrez Authentication → Sign In / Providers (ou Settings), activez « Allow new users to sign up », puis réessayez.',
    loginDenied:'La connexion Google a été refusée. Vérifiez le fournisseur Google dans Supabase et réessayez.',
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
    deleteCandidacy:'Supprimer complètement',
    confirmDeleteCandidacy:'Supprimer définitivement la candidature de « {team} » et toutes ses photos ? Cette action est irréversible.',
    candidacyDeleted:'La candidature et ses photos ont été supprimées.',
    candidacyDeletedPhotoError:'La candidature a été supprimée, mais certaines photos n’ont pas pu être effacées. Réessayez ou supprimez-les dans le stockage Supabase.',
    candidacyPhotoCleanupError:'La photo est mise à jour, mais l’ancienne photo n’a pas pu être supprimée.',
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
    editBlobHint:'Clique sur l’aperçu pour modifier le parti',
    background:'Couleur de fond',
    foreground:'Couleur du texte',
    upload:'Choisir une nouvelle photo (50 Mo maximum)',
    members:'Membres de l’équipe',
    candidateImageCropTitle:'Ajuster la photo pour la boîte',
    candidateImageCropToggle:'Modifier le cadrage',
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
    projectPlacement:'Afficher sur',
    projectPlacements:{none:'Ne pas publier',featured:'Accueil — À la une',completed:'Accueil — Projets terminés'},
    projectImageEditor:'Modifier l’image',
    projectImage:'Image du projet (JPG, PNG ou WebP, 50 Mo maximum)',
    projectDisplayTitle:'Titre affiché',
    projectDisplayDescription:'Description affichée',
    projectMigrationRequired:'La mise à jour Supabase manque. Exécutez 20261105030000_project_presentation_copy.sql dans SQL Editor, puis réessayez.',
    projectCropPreview:'Aperçu sur la page d’accueil',
    projectCropHelp:'Fais glisser l’image pour la déplacer. Fais glisser un coin pour ajuster le cadrage; les flèches la déplacent et +/− ajustent le zoom.',
    projectPreviewFeatured:'À la une',
    projectPreviewCompleted:'Projets terminés',
    projectPreviewMoreInfo:'Découvrir plus →',
    saveProjectDisplay:'Enregistrer l’affichage',
    projectDisplaySaved:'Affichage du projet enregistré.',
    projectImageError:'Choisissez une image JPG, PNG ou WebP de 50 Mo maximum.',
    projectImageCleanupError:'Le projet est enregistré, mais son ancienne image n’a pas pu être supprimée.',
    projectImagesDeletedError:'La proposition est supprimée, mais certaines images n’ont pas pu être effacées du stockage Supabase.',
    acceptedLabel:'Équipe acceptée : elle apparaît sur la page Vote.',
    rejectedLabel:'Candidature refusée',
    pendingLabel:'À examiner',
    proposalsTab:'Propositions',
    candidatesTab:'Candidatures'
  }:{
    title:'Site administration',
    intro:'Manage suggestions, voting, and candidacies.',
    notice:'Any Google account using a Gmail address can access administration. Do not publish confidential information.',
    configMissing:'Administration is locked. Configure Supabase before signing in.',
    signIn:'Continue with Google',
    signOut:'Sign out',
    authError:'Could not verify the sign-in.',
    loginEyebrow:'Administration portal',
    loginDescription:'Sign in with a Google account using a Gmail address to manage proposals, voting, and candidacies.',
    loginHelp:'This portal is for administrators. Do not share your signed-in session.',
    configDescription:'The portal will be available after Supabase sign-in is configured.',
    signupDisabled:'Supabase is blocking new sign-ups. In Supabase, open Authentication → Sign In / Providers (or Settings), enable “Allow new users to sign up,” then try again.',
    loginDenied:'Google sign-in was denied. Check the Google provider settings in Supabase and try again.',
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
    deleteCandidacy:'Delete permanently',
    confirmDeleteCandidacy:'Permanently delete the candidacy for “{team}” and all its photos? This cannot be undone.',
    candidacyDeleted:'The candidacy and its photos were deleted.',
    candidacyDeletedPhotoError:'The candidacy was deleted, but some photos could not be removed. Retry or delete them in Supabase Storage.',
    candidacyPhotoCleanupError:'The photo was updated, but its previous file could not be removed.',
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
    editBlobHint:'Click the preview to edit this party',
    background:'Background color',
    foreground:'Text color',
    upload:'Choose a new photo (50 MB max)',
    members:'Team members',
    candidateImageCropTitle:'Fit the photo to its frame',
    candidateImageCropToggle:'Adjust photo framing',
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
    projectPlacement:'Show on',
    projectPlacements:{none:'Do not publish',featured:'Home — Featured',completed:'Home — Completed projects'},
    projectImageEditor:'Edit image',
    projectImage:'Project image (JPG, PNG, or WebP, up to 50 MB)',
    projectDisplayTitle:'Display title',
    projectDisplayDescription:'Display description',
    projectMigrationRequired:'The Supabase update is missing. Run 20261105030000_project_presentation_copy.sql in SQL Editor, then try again.',
    projectCropPreview:'Home page preview',
    projectCropHelp:'Drag the image to reposition it. Drag a corner to resize the crop; arrow keys move it and +/− adjust zoom.',
    projectPreviewFeatured:'Featured',
    projectPreviewCompleted:'Completed projects',
    projectPreviewMoreInfo:'Discover more →',
    saveProjectDisplay:'Save project display',
    projectDisplaySaved:'Project display saved.',
    projectImageError:'Choose a JPG, PNG, or WebP image up to 50 MB.',
    projectImageCleanupError:'The project was saved, but its previous image could not be removed.',
    projectImagesDeletedError:'The proposal was deleted, but some images could not be removed from Supabase Storage.',
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
  authError.setAttribute('aria-atomic','true');
  const signIn=button(messages.signIn,'sign-in','primary');
  const signOut=button(messages.signOut,'sign-out');
  authBar.append(authIdentity,signOut);
  const tabs=make('div','admin-portal-tabs');
  tabs.setAttribute('role','tablist');
  tabs.setAttribute('aria-label',messages.title);
  const panelNames=['proposals','vote','candidates','logs'];
  const tabCounts=Object.fromEntries(panelNames.map(name=>[name,0]));
  const panels=Object.fromEntries(panelNames.map(name=>[name,make('section','admin-portal-panel')]));
  const panelNodes=make('div','admin-portal-panels');
  const setTabCount=(name,count)=>{
    const tab=tabs.querySelector(`[data-tab="${name}"]`);
    if(!tab)return;
    const shouldShow=name==='proposals'||name==='candidates';
    tabCounts[name]=Number(count)||0;
    let badge=tab.querySelector('.admin-portal-tab-count');
    if(!shouldShow){
      if(badge)badge.remove();
      return;
    }
    if(!badge){
      badge=document.createElement('span');
      badge.className='admin-portal-tab-count';
      tab.append(badge);
    }
    badge.textContent=String(tabCounts[name]);
    badge.setAttribute('aria-label',`${tab.textContent.trim()} ${tabCounts[name]}`);
  };
  const refreshTabCounts=async()=>{
    if(!client){
      Object.keys(tabCounts).forEach(name=>setTabCount(name,0));
      return;
    }
    try{
      const [suggestionsResult,candidaciesResult,logsResult]=await Promise.all([
        client.from('suggestions').select('*',{count:'exact',head:true}),
        client.from('candidacies').select('*',{count:'exact',head:true}),
        client.from('admin_audit_logs').select('*',{count:'exact',head:true})
      ]);
      setTabCount('proposals', suggestionsResult.count ?? 0);
      setTabCount('candidates', candidaciesResult.count ?? 0);
      setTabCount('logs', 0);
      setTabCount('vote', 0);
    }catch(error){
      reportError(error);
      Object.keys(tabCounts).forEach(name=>setTabCount(name,0));
    }
  };
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
    setTabCount(name,0);
  });
  const state=make('p','site-status');
  state.hidden=true;
  state.setAttribute('role','status');
  state.setAttribute('aria-live','polite');
  const loginRequired=make('div','admin-portal-login');
  const loginIntro=make('div','admin-portal-login-intro');
  const loginIcon=make('span','admin-portal-login-icon','C');
  loginIcon.setAttribute('aria-hidden','true');
  const loginCopy=make('div','admin-portal-login-copy');
  const loginEyebrow=make('div','eyebrow',messages.loginEyebrow);
  const loginTitle=make('h2','',messages.configMissing);
  const loginDescription=make('p','',messages.configDescription);
  loginCopy.append(loginEyebrow,loginTitle,loginDescription);
  loginIntro.append(loginIcon,loginCopy);
  const loginActions=make('div','admin-portal-login-actions');
  authError.classList.add('admin-portal-auth-error');
  const loginHelp=make('p','admin-portal-login-help',messages.loginHelp);
  loginActions.append(authError,signIn,loginHelp);
  loginRequired.append(loginIntro,loginActions);
  shell.append(tabs,heading,securityNotice,authBar,state,loginRequired,panelNodes);
  admin.replaceChildren(shell);
  const client=ready?window.supabase.createClient(config.url,config.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}}):null;
  window.cdeccSupabase=client;
  const authCallbackParams=new URLSearchParams(window.location.search);
  const authCallbackHashParams=new URLSearchParams(window.location.hash.replace(/^#/,''));
  const authCallbackError=authCallbackParams.get('error_code')||
    authCallbackHashParams.get('error_code')||
    authCallbackParams.get('error')||
    authCallbackHashParams.get('error');
  const showAuthCallbackError=()=>{
    const message=authCallbackError==='signup_disabled'?messages.signupDisabled:
      authCallbackError==='access_denied'?messages.loginDenied:messages.authError;
    setError(authError,new Error(message));
  };
  const cleanAuthCallbackUrl=()=>{
    const url=new URL(window.location.href);
    let changed=false;
    ['error','error_code','error_description','sb'].forEach(key=>{
      if(url.searchParams.has(key)){url.searchParams.delete(key);changed=true}
    });
    if(url.hash.includes('error=')||url.hash.includes('error_code=')){
      const params=new URLSearchParams(url.hash.replace(/^#/,''));
      ['error','error_code','error_description','sb'].forEach(key=>{
        if(params.has(key)){params.delete(key);changed=true}
      });
      url.hash=params.toString();
    }
    if(changed)window.history.replaceState(null,document.title,`${url.pathname}${url.search}${url.hash}`);
  };
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
  const openProjectImageEditors=new Set();
  let candidateFilter='pending';
  let currentUser=null;
  const tables={
    proposals:make('div','admin-portal-list'),
    candidates:make('div','admin-portal-list'),
    logs:make('div','admin-portal-logs')
  };
  let periodicRefreshTab=null;
  const hasAdminEditsInProgress=name=>{
    const panel=panels[name];
    if(!panel)return false;
    if(name==='proposals'&&openProjectImageEditors.size)return true;
    const activeElement=document.activeElement;
    if(panel.contains(activeElement)&&activeElement.matches('input,textarea,select'))return true;
    if(panel.querySelector('.admin-portal-edit-form:not([hidden]):not(.admin-vote-settings)'))return true;
    if(panel.querySelector('.admin-project-presentation[data-dirty="true"]'))return true;
    return Boolean(panel.querySelector('.admin-vote-settings[data-dirty="true"]'));
  };
  const shouldPausePeriodicRender=name=>periodicRefreshTab===name&&hasAdminEditsInProgress(name);

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
  const projectCropDimensions=placement=>placement==='featured'?{width:1600,height:615}:{width:1600,height:400};
  const getProjectCropMetrics=(image,canvas,zoom,positionX,positionY)=>{
    const scale=Math.max(canvas.width/image.naturalWidth,canvas.height/image.naturalHeight)*zoom;
    const width=canvas.width/scale;
    const height=canvas.height/scale;
    return {
      width,height,
      x:Math.max(0,Math.min(image.naturalWidth-width,image.naturalWidth*positionX-width/2)),
      y:Math.max(0,Math.min(image.naturalHeight-height,image.naturalHeight*positionY-height/2))
    };
  };
  const drawProjectCrop=(image,canvas,zoom,positionX,positionY,showHandles=false)=>{
    const context=canvas.getContext('2d');
    if(!context)throw new Error(messages.projectImageError);
    const crop=getProjectCropMetrics(image,canvas,zoom,positionX,positionY);
    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(image,crop.x,crop.y,crop.width,crop.height,0,0,canvas.width,canvas.height);
    if(showHandles){
      context.strokeStyle='rgba(255,255,255,.95)';
      context.lineWidth=3;
      context.strokeRect(2,2,canvas.width-4,canvas.height-4);
      const handleSize=Math.max(18,canvas.width/42);
      context.fillStyle='#fff';
      context.strokeStyle='#244f61';
      context.lineWidth=3;
      [[0,0],[canvas.width,0],[0,canvas.height],[canvas.width,canvas.height]].forEach(([x,y])=>{
        context.beginPath();
        context.rect(x-handleSize/2,y-handleSize/2,handleSize,handleSize);
        context.fill();
        context.stroke();
      });
    }
  };
  const encodeProjectCrop=(image,zoom,positionX,positionY,placement)=>{
    const dimensions=projectCropDimensions(placement);
    const canvas=document.createElement('canvas');
    canvas.width=dimensions.width;
    canvas.height=dimensions.height;
    drawProjectCrop(image,canvas,zoom,positionX,positionY);
    return new Promise((resolve,reject)=>{
      canvas.toBlob(blob=>{
        if(blob)resolve(blob);
        else reject(new Error(messages.projectImageError));
      },'image/webp',.9);
    });
  };
  const createCandidateImageCropEditor=(canvas,onChange)=>{
    canvas.width=1200;
    canvas.height=900;
    const previewCanvas=document.createElement('canvas');
    previewCanvas.width=canvas.width;
    previewCanvas.height=canvas.height;
    let sourceImage=null;
    let sourceUrl='';
    let zoom=1;
    let positionX=.5;
    let positionY=.5;
    let drag=null;
    let dirty=false;
    let renderFrame=0;
    const render=()=>{
      if(!sourceImage)return;
      cancelAnimationFrame(renderFrame);
      renderFrame=requestAnimationFrame(()=>{
        try{
          drawProjectCrop(sourceImage,canvas,zoom,positionX,positionY,true);
          drawProjectCrop(sourceImage,previewCanvas,zoom,positionX,positionY);
          onChange?.(previewCanvas);
        }catch(error){reportError(error)}
      });
    };
    const load=(blob,markDirty=true)=>new Promise((resolve,reject)=>{
      if(sourceUrl)URL.revokeObjectURL(sourceUrl);
      sourceUrl=URL.createObjectURL(blob);
      sourceImage=null;
      zoom=1;
      positionX=.5;
      positionY=.5;
      dirty=markDirty;
      const image=new Image();
      image.onload=()=>{sourceImage=image;render();resolve()};
      image.onerror=()=>reject(new Error(messages.photoError));
      image.src=sourceUrl;
    });
    canvas.addEventListener('pointerdown',event=>{
      if(!sourceImage)return;
      const rect=canvas.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width*canvas.width;
      const y=(event.clientY-rect.top)/rect.height*canvas.height;
      const edgeDistance=Math.min(
        Math.hypot(event.clientX-rect.left,event.clientY-rect.top),
        Math.hypot(event.clientX-rect.right,event.clientY-rect.top),
        Math.hypot(event.clientX-rect.left,event.clientY-rect.bottom),
        Math.hypot(event.clientX-rect.right,event.clientY-rect.bottom)
      );
      drag={
        mode:edgeDistance<=32?'resize':'move',
        pointerId:event.pointerId,
        startX:event.clientX,
        startY:event.clientY,
        startPositionX:positionX,
        startPositionY:positionY,
        startZoom:zoom,
        startDistance:Math.hypot(x-canvas.width/2,y-canvas.height/2),
        crop:getProjectCropMetrics(sourceImage,canvas,zoom,positionX,positionY)
      };
      canvas.setPointerCapture(event.pointerId);
      canvas.style.cursor=drag.mode==='resize'?'nwse-resize':'grabbing';
      event.preventDefault();
    });
    canvas.addEventListener('pointermove',event=>{
      if(!drag||drag.pointerId!==event.pointerId||!sourceImage)return;
      const rect=canvas.getBoundingClientRect();
      if(drag.mode==='move'){
        positionX=drag.startPositionX-
          (event.clientX-drag.startX)/rect.width*drag.crop.width/sourceImage.naturalWidth;
        positionY=drag.startPositionY-
          (event.clientY-drag.startY)/rect.height*drag.crop.height/sourceImage.naturalHeight;
      }else{
        const x=(event.clientX-rect.left)/rect.width*canvas.width;
        const y=(event.clientY-rect.top)/rect.height*canvas.height;
        zoom=Math.max(1,Math.min(4,drag.startZoom*Math.hypot(x-canvas.width/2,y-canvas.height/2)/Math.max(1,drag.startDistance)));
      }
      dirty=true;
      render();
    });
    const stopDrag=event=>{
      if(!drag||drag.pointerId!==event.pointerId)return;
      drag=null;
      canvas.style.cursor='grab';
    };
    canvas.addEventListener('pointerup',stopDrag);
    canvas.addEventListener('pointercancel',stopDrag);
    canvas.addEventListener('keydown',event=>{
      if(!sourceImage)return;
      const crop=getProjectCropMetrics(sourceImage,canvas,zoom,positionX,positionY);
      const movement=.02;
      if(event.key==='ArrowLeft')positionX+=crop.width/sourceImage.naturalWidth*movement;
      else if(event.key==='ArrowRight')positionX-=crop.width/sourceImage.naturalWidth*movement;
      else if(event.key==='ArrowUp')positionY+=crop.height/sourceImage.naturalHeight*movement;
      else if(event.key==='ArrowDown')positionY-=crop.height/sourceImage.naturalHeight*movement;
      else if(event.key==='+'||event.key==='=')zoom=Math.min(4,zoom+.1);
      else if(event.key==='-')zoom=Math.max(1,zoom-.1);
      else return;
      dirty=true;
      event.preventDefault();
      render();
    });
    return{
      load,
      get hasImage(){return Boolean(sourceImage)},
      get dirty(){return dirty},
      toBlob:()=>new Promise((resolve,reject)=>{
        if(!sourceImage){reject(new Error(messages.photoError));return}
        const output=document.createElement('canvas');
        output.width=canvas.width;
        output.height=canvas.height;
        try{drawProjectCrop(sourceImage,output,zoom,positionX,positionY)}
        catch(error){reject(error);return}
        output.toBlob(blob=>blob?resolve(blob):reject(new Error(messages.photoError)),'image/webp',.9);
      }),
      reset:()=>{
        cancelAnimationFrame(renderFrame);
        if(sourceUrl)URL.revokeObjectURL(sourceUrl);
        sourceUrl='';
        sourceImage=null;
        dirty=false;
        const context=canvas.getContext('2d');
        context?.clearRect(0,0,canvas.width,canvas.height);
        previewCanvas.getContext('2d')?.clearRect(0,0,previewCanvas.width,previewCanvas.height);
      },
      dispose:()=>{
        cancelAnimationFrame(renderFrame);
        if(sourceUrl)URL.revokeObjectURL(sourceUrl);
      }
    };
  };
  window.cdeccCreateCandidateImageCropEditor=createCandidateImageCropEditor;
  const showEmpty=(container,message)=>{
    container.replaceChildren(make('p','site-empty-state',message));
  };
  const requireClient=()=>{
    if(!client)throw new Error(messages.configMissing);
    return client;
  };
  const getStatusCounts=records=>{
    const counts={pending:0,approved:0,rejected:0};
    (records||[]).forEach(item=>{
      if(Object.prototype.hasOwnProperty.call(counts,item.status))counts[item.status]+=1;
    });
    return counts;
  };
  const syncFilterButtonCounts=(toolbar,statusCounts)=>{
    if(!toolbar)return;
    toolbar.querySelectorAll('[data-portal-action^="filter-"]').forEach(buttonNode=>{
      const status=buttonNode.dataset.portalAction.slice('filter-'.length);
      const countNode=buttonNode.querySelector('.site-filter-count');
      const count=statusCounts[status] ?? 0;
      if(!countNode){
        const badge=document.createElement('span');
        badge.className='site-filter-count';
        buttonNode.append(badge);
      }
      buttonNode.querySelector('.site-filter-count').textContent=String(count);
    });
  };
  const renderProposalResults=async()=>{
    const {data,error}=await requireClient().from('suggestions').select('*').order('created_at',{ascending:false});
    if(error)throw error;
    if(shouldPausePeriodicRender('proposals'))return;
    const statusCounts=getStatusCounts(data||[]);
    const toolbar=panels.proposals.querySelector('.site-review-toolbar');
    syncFilterButtonCounts(toolbar,statusCounts);
    const records=(data||[]).filter(item=>item.status===proposalFilter&&
      (!proposalQuery||`${item.title} ${item.details} ${item.category}`.toLocaleLowerCase().includes(proposalQuery)));
    const visibleIds=new Set(records.map(item=>item.id));
    openProjectImageEditors.forEach(id=>{
      if(!visibleIds.has(id))openProjectImageEditors.delete(id);
    });
    if(!records.length){showEmpty(tables.proposals,messages.noSuggestions);return}
    tables.proposals.replaceChildren(...records.map(renderProposal));
  };
  const loadProposals=async()=>{
    const panel=panels.proposals;
    let toolbar=panel.querySelector('.site-review-toolbar');
    if(!toolbar){
      toolbar=make('div','site-review-toolbar');
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
    }
    const searchInput=toolbar.querySelector('.admin-search');
    if(searchInput && searchInput.value!==proposalQuery){searchInput.value=proposalQuery;}
    const filterButtons=toolbar.querySelectorAll('[data-portal-action^="filter-"]');
    filterButtons.forEach(buttonNode=>{
      const matched=buttonNode.dataset.portalAction.slice('filter-'.length)===proposalFilter;
      buttonNode.setAttribute('aria-pressed',String(matched));
      buttonNode.classList.toggle('active',matched);
    });
    await renderProposalResults();
    await refreshTabCounts();
  };
  const getPriorityClass=value=>{
    if(value==='yellow')return 'site-priority-yellow';
    if(value==='red')return 'site-priority-red';
    return 'site-priority-green';
  };
  const getPriorityLabel=value=>{
    if(value==='yellow')return messages.priorityOptions[1]||messages.priorityOptions[0];
    if(value==='red')return messages.priorityOptions[2]||messages.priorityOptions[0];
    return messages.priorityOptions[0]||messages.statuses.pending;
  };
  const renderProposal=item=>{
    const card=make('article','card site-review-card');
    const meta=make('div','site-review-meta');
    meta.append(make('span','pill',messages.statuses[item.status]||item.status),make('time','site-date',formatDate(item.created_at)));
    const priorityBadge=make('span',`site-priority-badge ${getPriorityClass(item.priority)}`,getPriorityLabel(item.priority));
    meta.append(priorityBadge);
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
    if(item.status==='approved'){
      const presentation=make('form','admin-project-presentation');
      const placementLabel=make('label','');
      placementLabel.append(make('span','',messages.projectPlacement));
      const placement=document.createElement('select');
      placement.name='home_placement';
      Object.entries(messages.projectPlacements).forEach(([value,label])=>{
        const option=make('option','',label);
        option.value=value;
        option.selected=(item.home_placement||'completed')===value;
        placement.append(option);
      });
      placementLabel.append(placement);
      const displayTitleLabel=make('label','');
      displayTitleLabel.append(make('span','',messages.projectDisplayTitle));
      const displayTitle=document.createElement('input');
      displayTitle.name='presentation_title';
      displayTitle.type='text';
      displayTitle.maxLength=160;
      displayTitle.value=item.presentation_title||item.title;
      displayTitleLabel.append(displayTitle);
      const displayDescriptionLabel=make('label','');
      displayDescriptionLabel.append(make('span','',messages.projectDisplayDescription));
      const displayDescription=document.createElement('textarea');
      displayDescription.name='presentation_description';
      displayDescription.maxLength=2000;
      displayDescription.value=item.presentation_description||item.details;
      displayDescriptionLabel.append(displayDescription);
      const imageLabel=make('label','');
      imageLabel.append(make('span','',messages.projectImage));
      const imageInput=document.createElement('input');
      imageInput.type='file';
      imageInput.name='project_image';
      imageInput.accept='image/jpeg,image/png,image/webp';
      imageLabel.append(imageInput);
      const imageEditorToggle=button(messages.projectImageEditor,'toggle-project-image-editor','admin-project-image-editor-toggle');
      const imageEditorContent=make('div','admin-project-image-editor-content');
      imageEditorContent.id=`project-image-editor-${item.id}`;
      imageEditorContent.hidden=!openProjectImageEditors.has(item.id);
      imageEditorToggle.setAttribute('aria-expanded',String(!imageEditorContent.hidden));
      imageEditorToggle.setAttribute('aria-controls',imageEditorContent.id);
      imageEditorToggle.addEventListener('click',()=>{
        imageEditorContent.hidden=!imageEditorContent.hidden;
        imageEditorToggle.setAttribute('aria-expanded',String(!imageEditorContent.hidden));
        if(imageEditorContent.hidden){
          openProjectImageEditors.delete(item.id);
          cropLoadVersion++;
        }
        else{
          openProjectImageEditors.add(item.id);
          if(item.image_path&&!cropSourceImage){
            loadExistingCrop().catch(error=>{
              reportError(error);
              setError(displayStatus,error);
            });
          }
        }
      });
      const cropEditor=make('div','admin-project-crop-editor');
      cropEditor.hidden=true;
      cropEditor.append(make('p','admin-project-crop-title',messages.projectCropPreview));
      const cropPreview=make('div','admin-project-preview');
      const initialPreviewPlacement=placement.value==='featured'?'featured':'completed';
      cropPreview.dataset.placement=initialPreviewPlacement;
      const cropCanvas=document.createElement('canvas');
      cropCanvas.className='admin-project-crop-canvas';
      cropCanvas.width=960;
      const initialCropDimensions=projectCropDimensions(placement.value);
      cropCanvas.height=Math.round(cropCanvas.width*initialCropDimensions.height/initialCropDimensions.width);
      cropCanvas.setAttribute('role','img');
      cropCanvas.tabIndex=0;
      cropCanvas.setAttribute('aria-label',messages.projectCropHelp);
      const previewCopy=make('div','admin-project-preview-copy');
      const previewLabel=make('span','admin-project-preview-label',initialPreviewPlacement==='featured'?messages.projectPreviewFeatured:messages.projectPreviewCompleted);
      previewCopy.append(previewLabel);
      const previewTitle=make('strong','admin-project-preview-title',displayTitle.value);
      const previewDescription=make('span','admin-project-preview-description',displayDescription.value);
      previewCopy.append(previewTitle,previewDescription);
      const previewMore=make('span','admin-project-preview-button',messages.projectPreviewMoreInfo);
      previewMore.hidden=initialPreviewPlacement!=='featured';
      previewCopy.append(previewMore);
      cropPreview.append(cropCanvas,previewCopy);
      cropEditor.append(cropPreview,make('p','admin-project-crop-help',messages.projectCropHelp));
      let cropSourceImage=null;
      let cropSourceUrl='';
      let cropSourceIsExisting=false;
      let cropRenderFrame=0;
      let cropLoadVersion=0;
      let cropZoom=1;
      let cropPositionX=.5;
      let cropPositionY=.5;
      let cropDrag=null;
      presentation.append(placementLabel);
      presentation.append(displayTitleLabel,displayDescriptionLabel);
      imageEditorContent.append(imageLabel,cropEditor);
      presentation.append(imageEditorToggle,imageEditorContent);
      const displayStatus=make('p','site-status');
      displayStatus.setAttribute('role','status');
      displayStatus.setAttribute('aria-live','polite');
      const savePresentation=button(messages.saveProjectDisplay,'save-project-display','primary');
      savePresentation.type='submit';
      presentation.append(displayStatus,savePresentation);
      const markPresentationDirty=()=>{presentation.dataset.dirty='true'};
      presentation.addEventListener('input',markPresentationDirty);
      presentation.addEventListener('change',markPresentationDirty);
      displayTitle.addEventListener('input',()=>{
        previewTitle.textContent=displayTitle.value.trim()||item.title;
      });
      displayDescription.addEventListener('input',()=>{
        previewDescription.textContent=displayDescription.value.trim()||item.details;
      });
      const renderCropPreview=()=>{
        if(!cropSourceImage)return;
        cancelAnimationFrame(cropRenderFrame);
        cropRenderFrame=requestAnimationFrame(()=>{
          try{
            drawProjectCrop(cropSourceImage,cropCanvas,cropZoom,cropPositionX,cropPositionY,true);
          }catch(error){
            reportError(error);
            setError(displayStatus,error);
          }
        });
      };
      const updateCropPreviewPlacement=()=>{
        const dimensions=projectCropDimensions(placement.value);
        const previewPlacement=placement.value==='featured'?'featured':'completed';
        cropPreview.dataset.placement=previewPlacement;
        previewLabel.textContent=previewPlacement==='featured'?messages.projectPreviewFeatured:messages.projectPreviewCompleted;
        previewMore.hidden=placement.value!=='featured';
        cropCanvas.width=960;
        cropCanvas.height=Math.round(cropCanvas.width*dimensions.height/dimensions.width);
        renderCropPreview();
      };
      const loadCropSource=(url,isExisting=false)=>{
        const loadVersion=++cropLoadVersion;
        if(cropSourceUrl)URL.revokeObjectURL(cropSourceUrl);
        cropSourceUrl=url;
        cropSourceImage=null;
        cropSourceIsExisting=isExisting;
        const sourceImage=new Image();
        sourceImage.onload=()=>{
          if(loadVersion!==cropLoadVersion)return;
          cropSourceImage=sourceImage;
          cropZoom=1;
          cropPositionX=.5;
          cropPositionY=.5;
          cropEditor.hidden=false;
          imageEditorContent.hidden=false;
          imageEditorToggle.setAttribute('aria-expanded','true');
          openProjectImageEditors.add(item.id);
          renderCropPreview();
        };
        sourceImage.onerror=()=>{
          if(loadVersion!==cropLoadVersion)return;
          setError(displayStatus,new Error(messages.projectImageError));
        };
        sourceImage.src=url;
      };
      const loadExistingCrop=async()=>{
        const requestVersion=++cropLoadVersion;
        const {data,error}=await requireClient().storage.from('project-images').download(item.original_image_path||item.image_path);
        if(requestVersion!==cropLoadVersion)return;
        if(error)throw error;
        if(!data||data.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(data.type)){
          throw new Error(messages.projectImageError);
        }
        loadCropSource(URL.createObjectURL(data),true);
      };
      placement.addEventListener('change',()=>{
        updateCropPreviewPlacement();
        if(cropSourceImage){
          cropEditor.hidden=false;
          renderCropPreview();
        }else if(item.image_path){
          loadExistingCrop().catch(error=>{
            reportError(error);
            setError(displayStatus,error);
          });
        }
      });
      if(openProjectImageEditors.has(item.id)&&item.image_path){
        cropEditor.hidden=false;
        loadExistingCrop().catch(error=>{
          reportError(error);
          setError(displayStatus,error);
        });
      }
      cropCanvas.addEventListener('pointerdown',event=>{
        if(!cropSourceImage)return;
        const rect=cropCanvas.getBoundingClientRect();
        const x=(event.clientX-rect.left)/rect.width*cropCanvas.width;
        const y=(event.clientY-rect.top)/rect.height*cropCanvas.height;
        const cornerDistance=Math.min(
          Math.hypot(event.clientX-rect.left,event.clientY-rect.top),
          Math.hypot(event.clientX-rect.right,event.clientY-rect.top),
          Math.hypot(event.clientX-rect.left,event.clientY-rect.bottom),
          Math.hypot(event.clientX-rect.right,event.clientY-rect.bottom)
        );
        const crop=getProjectCropMetrics(cropSourceImage,cropCanvas,cropZoom,cropPositionX,cropPositionY);
        cropDrag={
          mode:cornerDistance<=30?'resize':'move',
          pointerId:event.pointerId,
          startX:event.clientX,
          startY:event.clientY,
          startPositionX:cropPositionX,
          startPositionY:cropPositionY,
          startZoom:cropZoom,
          startDistance:Math.hypot(x-cropCanvas.width/2,y-cropCanvas.height/2),
          crop
        };
        cropCanvas.setPointerCapture(event.pointerId);
        cropCanvas.style.cursor=cropDrag.mode==='resize'?'nwse-resize':'grabbing';
        event.preventDefault();
      });
      cropCanvas.addEventListener('pointermove',event=>{
        if(!cropDrag||cropDrag.pointerId!==event.pointerId||!cropSourceImage)return;
        const rect=cropCanvas.getBoundingClientRect();
        if(cropDrag.mode==='move'){
          cropPositionX=cropDrag.startPositionX-
            (event.clientX-cropDrag.startX)/rect.width*cropDrag.crop.width/cropSourceImage.naturalWidth;
          cropPositionY=cropDrag.startPositionY-
            (event.clientY-cropDrag.startY)/rect.height*cropDrag.crop.height/cropSourceImage.naturalHeight;
        }else{
          const x=(event.clientX-rect.left)/rect.width*cropCanvas.width;
          const y=(event.clientY-rect.top)/rect.height*cropCanvas.height;
          const distance=Math.hypot(x-cropCanvas.width/2,y-cropCanvas.height/2);
          cropZoom=Math.max(1,Math.min(4,cropDrag.startZoom*distance/Math.max(1,cropDrag.startDistance)));
        }
        renderCropPreview();
      });
      const stopCropDrag=event=>{
        if(!cropDrag||cropDrag.pointerId!==event.pointerId)return;
        cropDrag=null;
        cropCanvas.style.cursor='grab';
      };
      cropCanvas.addEventListener('pointerup',stopCropDrag);
      cropCanvas.addEventListener('pointercancel',stopCropDrag);
      cropCanvas.addEventListener('keydown',event=>{
        if(!cropSourceImage)return;
        const crop=getProjectCropMetrics(cropSourceImage,cropCanvas,cropZoom,cropPositionX,cropPositionY);
        const movement=.02;
        if(event.key==='ArrowLeft')cropPositionX+=crop.width/cropSourceImage.naturalWidth*movement;
        else if(event.key==='ArrowRight')cropPositionX-=crop.width/cropSourceImage.naturalWidth*movement;
        else if(event.key==='ArrowUp')cropPositionY+=crop.height/cropSourceImage.naturalHeight*movement;
        else if(event.key==='ArrowDown')cropPositionY-=crop.height/cropSourceImage.naturalHeight*movement;
        else if(event.key==='+'||event.key==='=')cropZoom=Math.min(4,cropZoom+.1);
        else if(event.key==='-')cropZoom=Math.max(1,cropZoom-.1);
        else return;
        event.preventDefault();
        renderCropPreview();
      });
      imageInput.addEventListener('change',()=>{
        cropSourceIsExisting=false;
        cropLoadVersion++;
        if(cropSourceUrl)URL.revokeObjectURL(cropSourceUrl);
        cropSourceUrl='';
        cropSourceImage=null;
        const file=imageInput.files?.[0];
        if(file){
          if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>50*1024*1024){
            cropEditor.hidden=true;
            setError(displayStatus,new Error(messages.projectImageError));
            imageInput.value='';
            return;
          }
          loadCropSource(URL.createObjectURL(file));
        }else if(item.image_path){
          loadExistingCrop().catch(error=>{
            reportError(error);
            setError(displayStatus,error);
          });
        }else{
          cropEditor.hidden=true;
        }
      });
      presentation.addEventListener('submit',async event=>{
        event.preventDefault();
        event.stopPropagation();
        const file=imageInput.files?.[0];
        if(file&&(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>50*1024*1024)){
          setError(displayStatus,new Error(messages.projectImageError));
          return;
        }
        savePresentation.disabled=true;
        let uploadedPath='';
        let uploadedOriginalPath='';
        let presentationSaved=false;
        let imageCleanupFailed=false;
        try{
          if(file||cropSourceIsExisting){
            if(!cropSourceImage)throw new Error(messages.projectImageError);
            const croppedImage=await encodeProjectCrop(
              cropSourceImage,
              cropZoom,
              cropPositionX,
              cropPositionY,
              placement.value
            );
            const extension={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[croppedImage.type];
            if(!extension)throw new Error(messages.projectImageError);
            uploadedPath=`projects/${item.id}/${crypto.randomUUID()}.${extension}`;
            const upload=await requireClient().storage.from('project-images').upload(uploadedPath,croppedImage,{contentType:croppedImage.type,upsert:false});
            if(upload.error)throw upload.error;
            if(file){
              const originalExtension={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[file.type];
              uploadedOriginalPath=`projects/${item.id}/${crypto.randomUUID()}.${originalExtension}`;
              const originalUpload=await requireClient().storage.from('project-images').upload(uploadedOriginalPath,file,{contentType:file.type,upsert:false});
              if(originalUpload.error)throw originalUpload.error;
            }
          }
          const originalPath=uploadedOriginalPath||item.original_image_path||(cropSourceIsExisting?item.image_path:null);
          const {error}=await requireClient().rpc('update_suggestion_presentation',{
            p_suggestion_id:item.id,
            p_home_placement:placement.value,
            p_image_path:uploadedPath||item.image_path||null,
            p_original_image_path:originalPath,
            p_update_image:Boolean(file||cropSourceIsExisting),
            p_presentation_title:displayTitle.value.trim()||null,
            p_presentation_description:displayDescription.value.trim()||null
          });
          if(error)throw error;
          presentationSaved=true;
          const oldImagePaths=[item.image_path,item.original_image_path]
            .filter(path=>path&&path!==uploadedPath&&path!==uploadedOriginalPath&&path!==originalPath);
          if(uploadedPath&&oldImagePaths.length){
            const cleanup=await requireClient().storage.from('project-images').remove(oldImagePaths);
            if(cleanup.error){
              reportError(cleanup.error);
              imageCleanupFailed=true;
            }
          }
          if(cropSourceUrl)URL.revokeObjectURL(cropSourceUrl);
          await loadProposals();
          await loadLogs();
          await refreshPublicIdeas();
          delete presentation.dataset.dirty;
          if(imageCleanupFailed)setError(state,new Error(messages.projectImageCleanupError));
          else setSuccess(state,messages.projectDisplaySaved);
        }catch(error){
          const uploadedPaths=[uploadedPath,uploadedOriginalPath].filter(Boolean);
          if(uploadedPaths.length&&!presentationSaved){
            const cleanup=await requireClient().storage.from('project-images').remove(uploadedPaths);
            if(cleanup.error)reportError(cleanup.error);
          }
          reportError(error);
          const userError=error?.code==='PGRST202'||String(error?.message||'').includes('Could not find the function public.update_suggestion_presentation')
            ?new Error(messages.projectMigrationRequired)
            :error;
          setError(displayStatus,userError);
          setError(state,userError);
        }finally{
          savePresentation.disabled=false;
        }
      });
      card.append(presentation);
    }
    edit.addEventListener('click',()=>editProposal(card,item));
    actions.addEventListener('click',async event=>{
      const action=event.target.closest('[data-portal-action]');
      if(!action||action===edit)return;
      const portalAction=action.dataset.portalAction;
      if(portalAction==='delete-proposal'){
        if(!window.confirm(messages.confirmDelete))return;
        const result=await requireClient().from('suggestions').delete().eq('id',item.id);
        if(result.error){setError(state,result.error);reportError(result.error);return}
        let imageCleanupError=null;
        try{await removeProjectImages(item.id)}catch(error){imageCleanupError=error;reportError(error)}
        await loadProposals();
        await loadLogs();
        await refreshPublicIdeas();
        if(imageCleanupError)setError(state,new Error(messages.projectImagesDeletedError));
        return;
      }
      const update={};
      if(portalAction==='approve-proposal'){update.status='approved';update.approved_at=new Date().toISOString();update.home_placement=item.home_placement||'completed'}
      else if(portalAction==='reject-proposal'){update.status='rejected';update.approved_at=null;update.completed_at=null;update.home_placement='none'}
      else if(portalAction==='reopen-proposal'){update.status='pending';update.approved_at=null;update.completed_at=null;update.home_placement=null}
      const result=await requireClient().from('suggestions').update(update).eq('id',item.id);
      if(result.error){setError(state,result.error);reportError(result.error);return}
      await loadProposals();
      await loadLogs();
      await refreshPublicIdeas();
    });
    return card;
  };
  const removeProjectImages=async suggestionId=>{
    const storage=requireClient().storage.from('project-images');
    const folder=`projects/${suggestionId}`;
    const pageSize=1000;
    const paths=[];
    let offset=0;
    while(true){
      const {data,error}=await storage.list(folder,{limit:pageSize,offset});
      if(error)throw error;
      const files=(data||[]).filter(file=>file.id);
      paths.push(...files.map(file=>`${folder}/${file.name}`));
      if(files.length<pageSize)break;
      offset+=files.length;
    }
    for(let index=0;index<paths.length;index+=100){
      const result=await storage.remove(paths.slice(index,index+100));
      if(result.error)throw result.error;
    }
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
    const statusText=item.status==='approved'?messages.acceptedLabel:item.status==='rejected'?messages.rejectedLabel:messages.pendingLabel;
    const statusClass=item.status==='approved'?'is-approved':item.status==='rejected'?'is-rejected':'is-pending';
    card.append(make('span',`pill admin-candidate-status ${statusClass}`,statusText));
    card.append(make('time','site-date',formatDate(item.created_at)));
    const blob=button('', 'toggle-candidacy-edit','admin-candidate-blob');
    blob.setAttribute('aria-expanded','false');
    blob.setAttribute('aria-label',`${messages.edit}: ${item.team_name}`);
    blob.style.backgroundColor=item.background||'#396d59';
    blob.style.color=item.foreground||'#ffffff';
    const blobCopy=make('div','admin-candidate-blob-copy');
    blobCopy.append(
      make('span','admin-candidate-blob-hint',item.status==='pending'?messages.editBlobHint:messages.candidatesTab),
      make('h2','admin-candidate-blob-title',item.team_name),
      make('p','admin-candidate-blob-ideas',item.ideas)
    );
    const rosterList=make('ul','admin-candidate-blob-roster');
    item.roster.split(/\r?\n/).map(member=>member.trim()).filter(Boolean)
      .forEach(member=>rosterList.append(make('li','',member)));
    blobCopy.append(rosterList);
    const image=document.createElement('img');
    image.src=photo;
    image.alt='';
    image.loading='lazy';
    image.className='admin-candidate-photo';
    blob.append(blobCopy,image);
    const form=make('form','admin-portal-edit-form');
    form.hidden=item.status!=='pending';
    const fields=[
      ['team_name',messages.teamName,'text',item.team_name,80],
      ['roster',messages.roster,'textarea',item.roster,1200],
      ['ideas',messages.ideas,'textarea',item.ideas,2000]
    ];
    if(item.status==='pending'){
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
    }
    const photoLabel=make('label','');
    photoLabel.append(make('span','',messages.upload));
    const photoInput=document.createElement('input');
    photoInput.type='file';
    photoInput.accept='image/jpeg,image/png,image/webp';
    photoLabel.append(photoInput);
    form.append(photoLabel);
    const cropToggle=button(messages.candidateImageCropToggle,'toggle-candidate-image-crop','admin-project-image-editor-toggle');
    cropToggle.setAttribute('aria-expanded','false');
    const cropEditor=make('div','candidate-image-crop-editor');
    cropEditor.hidden=true;
    cropEditor.append(make('p','candidate-image-crop-title',messages.candidateImageCropTitle));
    const cropCanvas=document.createElement('canvas');
    cropCanvas.className='candidate-image-crop-canvas';
    cropCanvas.tabIndex=0;
    cropCanvas.setAttribute('role','img');
    cropCanvas.setAttribute('aria-label',messages.projectCropHelp);
    cropEditor.append(cropCanvas,make('p','candidate-image-crop-help',messages.projectCropHelp));
    form.append(cropToggle,cropEditor);
    const photoStatus=make('p','site-status');
    photoStatus.setAttribute('role','status');
    photoStatus.setAttribute('aria-live','polite');
    form.append(photoStatus);
    const save=button(messages.save,'save-candidacy','primary');
    save.type='submit';
    form.append(save);
    const cropEditorState=window.cdeccCreateCandidateImageCropEditor(cropCanvas,canvas=>{
      cropEditor.hidden=false;
      cropToggle.setAttribute('aria-expanded','true');
      image.src=canvas.toDataURL('image/webp',.8);
    });
    let existingPhotoLoaded=false;
    let imageRequest=0;
    const loadExistingPhoto=async()=>{
      if(existingPhotoLoaded)return;
      const request=++imageRequest;
      const {data,error}=await requireClient().storage.from('candidate-photos').download(item.photo_path);
      if(request!==imageRequest)return;
      if(error)throw error;
      if(!data||data.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(data.type)){
        throw new Error(messages.photoError);
      }
      await cropEditorState.load(data,false);
      if(request!==imageRequest)return;
      existingPhotoLoaded=true;
      cropEditor.hidden=false;
      cropToggle.setAttribute('aria-expanded','true');
    };
    const updatePreview=()=>{
      if(item.status!=='pending')return;
      const values=new FormData(form);
      const teamName=String(values.get('team_name')||'').trim();
      blobCopy.querySelector('.admin-candidate-blob-title').textContent=teamName||messages.teamName;
      blobCopy.querySelector('.admin-candidate-blob-ideas').textContent=String(values.get('ideas')||'');
      rosterList.replaceChildren();
      String(values.get('roster')||'').split(/\r?\n/).map(member=>member.trim()).filter(Boolean)
        .forEach(member=>rosterList.append(make('li','',member)));
      blob.style.backgroundColor=String(values.get('background')||'#396d59');
      blob.style.color=String(values.get('foreground')||'#ffffff');
    };
    if(item.status==='pending')form.addEventListener('input',updatePreview);
    photoInput.addEventListener('change',()=>{
      const file=photoInput.files?.[0];
      if(!file)return;
      if(file.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(file.type)){
        photoInput.value='';
        setError(photoStatus,new Error(messages.photoError));
        return;
      }
      existingPhotoLoaded=true;
      imageRequest++;
      cropEditorState.load(file).then(()=>{photoStatus.textContent=''}).catch(error=>{
        existingPhotoLoaded=false;
        reportError(error);
        setError(photoStatus,error);
      });
    });
    cropToggle.addEventListener('click',()=>{
      if(!cropEditor.hidden){
        cropEditor.hidden=true;
        cropToggle.setAttribute('aria-expanded','false');
        return;
      }
      if(cropEditorState.hasImage){
        cropEditor.hidden=false;
        cropToggle.setAttribute('aria-expanded','true');
        return;
      }
      loadExistingPhoto().catch(error=>{
        reportError(error);
        setError(photoStatus,error);
      });
    });
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      event.stopPropagation();
      try{
        const photo=cropEditorState.dirty?await cropEditorState.toBlob():null;
        await saveCandidacy(card,item,form,photo);
        if(!card.isConnected)cropEditorState.dispose();
      }catch(error){
        reportError(error);
        setError(photoStatus,error);
      }
    });
    blob.addEventListener('click',event=>{
      event.preventDefault();
      form.hidden=!form.hidden;
      blob.setAttribute('aria-expanded',String(!form.hidden));
      blob.classList.toggle('is-editing',!form.hidden);
      if(!form.hidden){
        if(item.status==='pending')form.querySelector('input[name="team_name"]')?.focus({preventScroll:true});
      }else imageRequest++;
    });
    const actions=make('div','site-review-actions');
    if(item.status!=='approved')actions.append(button(messages.approve,'approve-candidacy','approve'));
    if(item.status!=='rejected')actions.append(button(messages.reject,'reject-candidacy','reject'));
    if(item.status!=='pending')actions.append(button(messages.reopen,'reopen-candidacy'));
    actions.append(button(messages.deleteCandidacy,'delete-candidacy','delete'));
    card.append(blob,actions);
    card.append(form);
    actions.addEventListener('click',async event=>{
      const action=event.target.closest('[data-portal-action]');
      if(!action)return;
      if(action.dataset.portalAction==='delete-candidacy'){
        const confirmMessage=messages.confirmDeleteCandidacy.replace('{team}',item.team_name);
        if(!window.confirm(confirmMessage))return;
        actions.querySelectorAll('button').forEach(button=>{button.disabled=true});
        const deleteResult=await requireClient().from('candidacies').delete().eq('id',item.id).select('id').maybeSingle();
        if(deleteResult.error){
          actions.querySelectorAll('button').forEach(button=>{button.disabled=false});
          setError(state,deleteResult.error);
          reportError(deleteResult.error);
          return;
        }
        if(!deleteResult.data){
          actions.querySelectorAll('button').forEach(button=>{button.disabled=false});
          const error=new Error(messages.saveError);
          setError(state,error);
          reportError(error);
          return;
        }
        let photoCleanupError=null;
        try{await removeCandidatePhotos(item.id)}catch(error){photoCleanupError=error;reportError(error)}
        let refreshError=null;
        try{
          await loadCandidates();
          await loadLogs();
          await refreshPublicCandidates();
        }catch(error){refreshError=error;reportError(error)}
        if(photoCleanupError)setError(state,new Error(messages.candidacyDeletedPhotoError));
        else if(refreshError)setError(state,refreshError);
        else setSuccess(state,messages.candidacyDeleted);
        return;
      }
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
    return card;
  };
  const removeCandidatePhotos=async candidateId=>{
    const storage=client.storage.from('candidate-photos');
    const folder=`candidacies/${candidateId}`;
    const pageSize=1000;
    const paths=[];
    let offset=0;
    while(true){
      const {data,error}=await storage.list(folder,{limit:pageSize,offset});
      if(error)throw error;
      const files=(data||[]).filter(file=>file.id);
      paths.push(...files.map(file=>`${folder}/${file.name}`));
      if(files.length<pageSize)break;
      offset+=files.length;
    }
    for(let index=0;index<paths.length;index+=100){
      const result=await storage.remove(paths.slice(index,index+100));
      if(result.error)throw result.error;
    }
  };
  const saveCandidacy=async(card,item,form,newPhoto)=>{
    const values=Object.fromEntries(new FormData(form));
    const patch={updated_at:new Date().toISOString()};
    if(item.status==='pending'){
      Object.assign(patch,{
        team_name:String(values.team_name).trim(),
        roster:String(values.roster).trim(),
        ideas:String(values.ideas).trim(),
        background:values.background,
        foreground:values.foreground
      });
      if(!patch.team_name||!patch.roster||!patch.ideas){setError(state,new Error(messages.saveError));return}
    }
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
    if(uploadedPath&&item.photo_path){
      const cleanup=await client.storage.from('candidate-photos').remove([item.photo_path]);
      if(cleanup.error){reportError(cleanup.error);setError(state,new Error(messages.candidacyPhotoCleanupError))}
    }
    await loadCandidates();
    await loadLogs();
    await refreshPublicCandidates();
  };
  const renderCandidateResults=async()=>{
    const {data,error}=await requireClient().from('candidacies').select('*').order('created_at',{ascending:false});
    if(error)throw error;
    if(shouldPausePeriodicRender('candidates'))return;
    const statusCounts=getStatusCounts(data||[]);
    const toolbar=panels.candidates.querySelector('.site-review-toolbar');
    syncFilterButtonCounts(toolbar,statusCounts);
    const records=(data||[]).filter(item=>item.status===candidateFilter);
    if(!records.length){showEmpty(tables.candidates,messages.noCandidates);return}
    tables.candidates.replaceChildren(...records.map(renderCandidate));
  };
  const loadCandidates=async()=>{
    const panel=panels.candidates;
    let toolbar=panel.querySelector('.site-review-toolbar');
    if(!toolbar){
      toolbar=make('div','site-review-toolbar');
      const filters=make('div','site-review-filters');
      Object.entries(messages.statuses).forEach(([status,label])=>{
        const filter=button(label,`filter-${status}`,`site-filter${candidateFilter===status?' active':''}`);
        filter.setAttribute('aria-pressed',String(candidateFilter===status));
        filters.append(filter);
      });
      toolbar.append(filters);
      panel.append(toolbar,tables.candidates);
      filters.addEventListener('click',event=>{
        const filter=event.target.closest('[data-portal-action^="filter-"]');
        if(!filter)return;
        candidateFilter=filter.dataset.portalAction.slice('filter-'.length);
        loadCandidates().catch(reportError);
      });
    }
    const filterButtons=toolbar.querySelectorAll('[data-portal-action^="filter-"]');
    filterButtons.forEach(buttonNode=>{
      const matched=buttonNode.dataset.portalAction.slice('filter-'.length)===candidateFilter;
      buttonNode.setAttribute('aria-pressed',String(matched));
      buttonNode.classList.toggle('active',matched);
    });
    await renderCandidateResults();
    await refreshTabCounts();
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
    if(shouldPausePeriodicRender('vote'))return;
    const record=data||{form_url:'',starts_at:null,ends_at:null};
    setTabCount('vote', record.form_url || record.starts_at || record.ends_at ? 1 : 0);
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
    form.addEventListener('input',()=>{form.dataset.dirty='true'});
    form.addEventListener('change',()=>{form.dataset.dirty='true'});
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
      delete form.dataset.dirty;
      window.cdeccApplyRemoteVoteSettings?.({formUrl:url,startsAt:start||'',endsAt:end||''});
      setTabCount('vote', url || start || end ? 1 : 0);
      setSuccess(feedback,messages.voteSaved);
      await loadLogs();
      await refreshTabCounts();
    });
    panel.replaceChildren(form);
  };
  const loadLogs=async()=>{
    if(!client||!currentUser)return;
    const {data,error}=await client.from('admin_audit_logs').select('*').order('occurred_at',{ascending:false}).limit(300);
    if(error)throw error;
    setTabCount('logs', 0);
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
    await refreshTabCounts();
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
  const refreshPublicIdeas=async()=>{
    if(!client)return;
    const {data,error}=await client.from('suggestions').select('*').eq('status','approved').order('created_at',{ascending:false});
    if(error){reportError(error);return}
    window.cdeccApplyRemoteSuggestions?.(data||[]);
  };
  const applyApprovedCandidates=records=>{
    const grid=document.querySelector('#page-vote .vote-team-grid');
    if(!grid)return;
    window.cdeccApprovedVoteCandidates = (records||[]).map(item=>({
      id:item.id,
      team_name:item.team_name,
      roster:item.roster||'',
      ideas:item.ideas,
      photo_url: item.photo_path ? client.storage.from('candidate-photos').getPublicUrl(item.photo_path).data.publicUrl : '',
      background:item.background,
      foreground:item.foreground
    }));
    grid.replaceChildren();
    window.cdeccApprovedVoteCandidates.forEach(item=>{
      const card=make('button','vote-team-card');
      card.type='button';
      card.dataset.candidacyId=item.id;
      card.dataset.voteTeam=`candidate-${item.id}`;
      const moreLabel=french?'Plus d’informations':'More information';
      card.setAttribute('aria-label',french?`${moreLabel} sur ${item.team_name}`:`${moreLabel} about ${item.team_name}`);
      card.style.backgroundColor=item.background;
      card.style.color=item.foreground;
      const image=document.createElement('img');
      if(item.photo_url)image.src=item.photo_url;
      else image.hidden=true;
      image.alt=french?`Photo de ${item.team_name}`:`Photo of ${item.team_name}`;
      image.loading='lazy';
      const title=make('h2','',item.team_name);
      const more=make('span','vote-team-more');
      more.textContent=moreLabel;
      card.append(title,image,more);
      grid.append(card);
    });
    if(!window.cdeccApprovedVoteCandidates.length){
      const empty=make('div','site-empty-state');
      empty.setAttribute('role','status');
      empty.append(
        make('h2','',french?'Aucune équipe candidate publiée':'No candidate teams have been published'),
        make('p','',french?'Les candidatures approuvées apparaîtront ici.':'Approved candidacies will appear here.')
      );
      grid.append(empty);
      return;
    }
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
    let submittedPhoto=photo;
    const cropEditor=window.cdeccCandidateImageCropEditors?.get(form);
    if(cropEditor?.dirty){
      try{submittedPhoto=await cropEditor.toBlob()}
      catch(error){reportError(error);setError(feedback,error);return}
    }
    const id=crypto.randomUUID();
    const ext={'image/jpeg':'jpg','image/png':'png','image/webp':'webp'}[submittedPhoto.type];
    const path=`candidacies/${id}/${crypto.randomUUID()}.${ext}`;
    try{
      const upload=await client.storage.from('candidate-photos').upload(path,submittedPhoto,{contentType:submittedPhoto.type,upsert:false});
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
      cropEditor?.reset();
      form.querySelector('.candidate-image-crop-editor').hidden=true;
      const previewImage=form.querySelector('.candidate-preview-media img');
      previewImage.removeAttribute('src');
      previewImage.hidden=true;
      form.querySelector('.candidate-preview-media p').hidden=false;
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
  let adminRefreshInFlight=false;
  const refreshAdminView=async()=>{
    if(!currentUser || document.visibilityState==='hidden'||adminRefreshInFlight)return;
    if(!panels[currentTab]||hasAdminEditsInProgress(currentTab))return;
    adminRefreshInFlight=true;
    periodicRefreshTab=currentTab;
    try{await loadPanel(currentTab)}
    catch(error){setError(authError,error);reportError(error)}
    finally{periodicRefreshTab=null;adminRefreshInFlight=false}
  };
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
    authBar.hidden=!currentUser;
    loginRequired.hidden=ready&&Boolean(currentUser);
    tabs.hidden=!currentUser;
    panelNodes.hidden=!currentUser;
    securityNotice.hidden=!ready;
    if(!ready){
      loginTitle.textContent=messages.configMissing;
      loginDescription.textContent=messages.configDescription;
    }else if(!currentUser){
      loginTitle.textContent=french?'Connexion requise':'Sign-in required';
      loginDescription.textContent=messages.loginDescription;
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
    authBar.hidden=true;
    tabs.hidden=true;
    panelNodes.hidden=true;
    loginRequired.hidden=false;
    loginTitle.textContent=messages.configMissing;
    loginDescription.textContent=messages.configDescription;
  }else{
    loginRequired.hidden=false;
    client.auth.onAuthStateChange((event,session)=>{window.setTimeout(()=>updateSignedIn(session,event==='SIGNED_IN'),0)});
    client.auth.getSession().then(({data,error})=>{
      if(error){
        setError(authError,error);
        reportError(error);
        if(authCallbackError){showAuthCallbackError();cleanAuthCallbackUrl()}
        return;
      }
      if(authCallbackError){showAuthCallbackError();cleanAuthCallbackUrl()}
      updateSignedIn(data.session);
      refreshPublicIdeas();
      refreshPublicCandidates();
      refreshPublicVoteSettings();
    }).catch(error=>{setError(authError,error);reportError(error)});
  }
  const adminRefreshInterval=window.setInterval(()=>{
    if(currentUser && !document.hidden){
      refreshAdminView();
    }
  },3000);
  window.addEventListener('beforeunload',()=>window.clearInterval(adminRefreshInterval));
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
