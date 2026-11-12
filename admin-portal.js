(()=>{
  const admin=document.getElementById('page-admin');
  if(!admin)return;

  const french=document.documentElement.lang!=='en';
  const messages=french?{
    title:'Administration du site',
    intro:'Gérez les propositions, le vote, les candidatures et les membres.',
    notice:'Connexion Google réservée aux comptes autorisés. Les rôles et les journaux sont vérifiés par Supabase.',
    configMissing:'L’administration est verrouillée : configurez Supabase avant de vous connecter.',
    signIn:'Continuer avec Google',
    signOut:'Se déconnecter',
    authError:'La connexion n’a pas pu être vérifiée.',
    loginEyebrow:'Espace d’administration',
    loginDescription:'Connectez-vous avec un compte Google autorisé pour gérer les propositions, le vote, les candidatures et les membres.',
    loginHelp:'Le portail est réservé à l’administration. Ne partagez pas votre session.',
    configDescription:'Le portail sera disponible après la configuration de la connexion Supabase.',
    signupDisabled:'Supabase bloque les nouvelles inscriptions. Dans Supabase, ouvrez Authentication → Sign In / Providers (ou Settings), activez « Allow new users to sign up », puis réessayez.',
    loginDenied:'Ce compte Google n’a pas le rôle technique. Dans Supabase SQL Editor, exécutez la requête de configuration du premier responsable technique indiquée dans SUPABASE_SETUP.md, avec cette adresse Google exacte, puis actualisez.',
    adminLoginDenied:'Ce compte Google n’a pas accès au portail administratif. Demandez à une personne responsable technique de vous attribuer le rôle Administration.',
    accessCheckFailed:'Google a confirmé votre connexion, mais Supabase n’a pas pu vérifier votre rôle. Vérifiez que la migration 20261113010000_technical_control_panel.sql a été exécutée dans le bon projet, puis réessayez.',
    tabs:['Proposition','Vote','Candidature','Membres','Journaux'],
    memberTab:'Membres',
    memberIntro:'Ajoutez les personnes choisies, leur photo et leur groupe. Les photos et les fiches sont visibles publiquement sur la page Membres.',
    memberAssemblyTitle:'Membres de l’Assemblée citoyenne',
    memberSecondaryTitle:'Représentants du secondaire',
    memberClassTitle:'Représentants de classe',
    memberNameField:'Nom affiché',
    memberGroupField:'Groupe ou poste affiché',
    memberPhotoField:'Photo individuelle (JPG, PNG ou WebP, 50 Mo maximum)',
    memberSave:'Enregistrer la fiche',
    memberRemove:'Retirer de la page Membres',
    memberSaveSuccess:'La fiche a été publiée sur la page Membres.',
    memberRemoveSuccess:'La fiche a été retirée de la page Membres.',
    memberConfirmRemove:'Retirer cette personne de la page Membres ?',
    memberPhotoCleanupError:'La fiche est mise à jour, mais l’ancienne photo n’a pas pu être supprimée.',
    memberUploadCleanupError:'L’enregistrement a échoué et la nouvelle photo temporaire n’a pas pu être supprimée.',
    memberPhotoRemoveError:'La fiche a été retirée, mais la photo n’a pas pu être supprimée du stockage Supabase.',
    memberMigrationMissing:'La table des membres n’existe pas encore. Exécutez 20261113000000_member_profiles.sql dans Supabase SQL Editor.',
    memberLoadError:'Les membres n’ont pas pu être chargés. Vérifiez la migration Supabase.',
    search:'Rechercher une proposition',
    statuses:{pending:'À examiner',approved:'Approuvée',rejected:'Refusée'},
    approve:'Accepter et publier',
    reject:'Refuser',
    reopen:'Remettre à examiner',
    save:'Enregistrer',
    cancel:'Annuler',
    confirmDiscardAdminEdits:'Abandonner les modifications non enregistrées pour changer de filtre ?',
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
    grade:'Niveau',
    grades:['Secondaire 1','Secondaire 2','Secondaire 3','Secondaire 4','Secondaire 5'],
    generalGrade:'Général',
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
    projectImage:'Image du projet (JPG, PNG ou WebP, 50 Mo maximum)',
    untitledProject:'Projet sans titre',
    projectDescriptionUnavailable:'Aucune description disponible pour ce projet.',
    projectMigrationRequired:'La mise à jour Supabase manque. Exécutez 20261105030000_project_presentation_copy.sql dans SQL Editor, puis réessayez.',
    projectCropPreview:'Aperçu sur la page d’accueil',
    projectCropHelp:'Fais glisser l’image pour la déplacer. Fais glisser un coin pour ajuster le cadrage; les flèches la déplacent et +/− ajustent le zoom.',
    projectPreviewFeatured:'À la une',
    projectPreviewCompleted:'Projets terminés',
    projectPreviewMoreInfo:'Découvrir plus →',
    proposalActionSaved:'Les modifications et l’action ont été enregistrées.',
    projectActionPartialFailure:'La publication a été annulée, mais le titre ou la priorité a peut-être été enregistré.',
    projectImageError:'Choisissez une image JPG, PNG ou WebP de 50 Mo maximum.',
    projectImageCleanupError:'Le projet est enregistré, mais son ancienne image n’a pas pu être supprimée.',
    projectImagesDeletedError:'La proposition est supprimée, mais certaines images n’ont pas pu être effacées du stockage Supabase.',
    acceptedLabel:'Équipe acceptée : elle apparaît sur la page Vote.',
    rejectedLabel:'Candidature refusée',
    pendingLabel:'À examiner',
    proposalsTab:'Propositions',
    candidatesTab:'Candidatures',
    technicalIntro:'Les réglages techniques sont vérifiés par Supabase et accessibles uniquement aux responsables techniques autorisés.',
    technicalSettingsTitle:'Réglages du site',
    technicalIdeasOpen:'Accepter les propositions',
    technicalCandidaciesOpen:'Accepter les candidatures',
    technicalColors:'Couleurs principales',
    technicalLogo:'URL HTTPS du logo',
    technicalHero:'URL HTTPS de l’image d’accueil',
    technicalSlogan:'Slogan du site',
    technicalBackupsTitle:'Sauvegardes automatiques',
    technicalBackupsEnable:'Activer les sauvegardes planifiées',
    technicalFrequency:'Fréquence',
    technicalFrequencies:['Chaque jour','Chaque semaine (dimanche)','Chaque mois (1er jour)'],
    technicalTime:'Heure (fuseau America/Toronto)',
    technicalRetention:'Nombre maximal de sauvegardes (10 à 100)',
    technicalSave:'Enregistrer les réglages',
    technicalSaved:'Réglages techniques enregistrés.',
    technicalAccessTitle:'Accès Google autorisés',
    technicalAccessIntro:'Les rôles techniques et administratifs sont distincts. Ce portail technique ne donne pas accès au portail administratif.',
    technicalEmail:'Adresse du compte Google',
    technicalRole:'Rôle',
    technicalRoles:['Administration','Administration technique'],
    technicalAddAccess:'Ajouter ou modifier l’accès',
    technicalRemoveAccess:'Retirer l’accès',
    technicalConfirmRemoveAccess:'Retirer cet accès ? Cette action peut bloquer le compte concerné.',
    technicalNoAccess:'Aucun compte autorisé.',
    technicalLogsTitle:'Journaux techniques — 90 jours',
    technicalLogIp:'Adresse IP',
    technicalNoLogs:'Aucun événement technique enregistré.',
    technicalBackupsList:'Historique des sauvegardes',
    technicalRunBackup:'Créer une sauvegarde maintenant',
    technicalDeleteBackup:'Supprimer',
    technicalRestoreBackup:'Restaurer',
    technicalConfirmDeleteBackup:'Supprimer définitivement cette sauvegarde et ses fichiers ?',
    technicalConfirmRestoreBackup:'Cette restauration remplace les données actuelles des propositions, candidatures, vote, membres et réglages par ceux de la sauvegarde. Continuer ?',
    technicalBackupUnavailable:'Pour activer les sauvegardes : appliquez la migration technique, déployez la fonction sécurisée et ajoutez les secrets supabase_project_url et supabase_service_role_key dans Vault. Ne collez jamais la clé de service dans ce site.',
    technicalFunctionSetupHelp:'Ajoutez le secret SUPABASE_ACCESS_TOKEN aux paramètres Actions du dépôt, puis lancez le déploiement GitHub ci-dessous.',
    technicalDeployFunction:'Ouvrir le déploiement dans GitHub',
    technicalSecretsSetupHelp:'Dans Supabase Vault, ajoutez supabase_project_url et supabase_service_role_key. Ne collez jamais la clé de service dans ce site.',
    technicalScheduleSetupHelp:'Une fois les prérequis configurés, activez les sauvegardes dans Réglages du site.',
    technicalScheduleRefreshHelp:'Réenregistrez les réglages de sauvegarde après avoir configuré la fonction et les secrets Vault.',
    technicalReadinessMigrationHelp:'Exécutez la migration 20261113030000_technical_backup_readiness.sql dans Supabase SQL Editor.',
    technicalScheduleConfigured:'Configurées',
    technicalBackupCreated:'Sauvegarde créée.',
    technicalBackupDeleted:'Sauvegarde supprimée.',
    technicalBackupRestored:'Sauvegarde restaurée. La page va être rechargée.',
    technicalSetupStatus:'État technique et configuration',
    technicalStatusReady:'Connexion Google et autorisations de rôle sont actives.',
    technicalStatusDatabase:'Base de données et accès par rôle',
    technicalStatusFunction:'Fonction de sauvegarde sécurisée',
    technicalStatusScheduler:'Secrets de planification dans Vault',
    technicalStatusEnabled:'Configuré',
    technicalStatusDisabled:'À configurer',
    technicalSettingsError:'Les réglages techniques n’ont pas pu être chargés ou enregistrés.',
    technicalLogTime:'Date',
    technicalLogUser:'Compte',
    technicalLogAction:'Action',
    technicalLogEntity:'Élément',
    technicalLogDetails:'Détails'
  }:{
    title:'Site administration',
    intro:'Manage suggestions, voting, candidacies, and members.',
    notice:'Google sign-in is limited to authorized accounts. Roles and logs are verified by Supabase.',
    configMissing:'Administration is locked. Configure Supabase before signing in.',
    signIn:'Continue with Google',
    signOut:'Sign out',
    authError:'Could not verify the sign-in.',
    loginEyebrow:'Administration portal',
    loginDescription:'Sign in with an authorized Google account to manage proposals, voting, candidacies, and members.',
    loginHelp:'This portal is for administrators. Do not share your signed-in session.',
    configDescription:'The portal will be available after Supabase sign-in is configured.',
    signupDisabled:'Supabase is blocking new sign-ups. In Supabase, open Authentication → Sign In / Providers (or Settings), enable “Allow new users to sign up,” then try again.',
    loginDenied:'This Google account does not have the technical role. In Supabase SQL Editor, run the first technical administrator setup query from SUPABASE_SETUP.md with this exact Google email, then refresh.',
    adminLoginDenied:'This Google account cannot access the administration portal. Ask a technical administrator to assign the Administrator role.',
    accessCheckFailed:'Google confirmed your sign-in, but Supabase could not check your role. Confirm that migration 20261113010000_technical_control_panel.sql ran in the correct project, then try again.',
    tabs:['Proposals','Vote','Candidacies','Members','Logs'],
    memberTab:'Members',
    memberIntro:'Add selected people, their photos, and their group. Photos and profiles are publicly visible on the Members page.',
    memberAssemblyTitle:'Student Assembly members',
    memberSecondaryTitle:'Secondary representatives',
    memberClassTitle:'Class representatives',
    memberNameField:'Display name',
    memberGroupField:'Displayed group or position',
    memberPhotoField:'Individual photo (JPG, PNG, or WebP, up to 50 MB)',
    memberSave:'Save member profile',
    memberRemove:'Remove from Members page',
    memberSaveSuccess:'The profile is now published on the Members page.',
    memberRemoveSuccess:'The profile was removed from the Members page.',
    memberConfirmRemove:'Remove this person from the Members page?',
    memberPhotoCleanupError:'The profile was saved, but its previous photo could not be removed.',
    memberUploadCleanupError:'The profile could not be saved, and its temporary photo could not be removed.',
    memberPhotoRemoveError:'The profile was removed, but its photo could not be deleted from Supabase Storage.',
    memberMigrationMissing:'The members table is not set up yet. Run 20261113000000_member_profiles.sql in the Supabase SQL Editor.',
    memberLoadError:'Members could not be loaded. Check the Supabase migration.',
    search:'Search proposals',
    statuses:{pending:'Needs review',approved:'Approved',rejected:'Declined'},
    approve:'Accept and publish',
    reject:'Decline',
    reopen:'Reopen for review',
    save:'Save',
    cancel:'Cancel',
    confirmDiscardAdminEdits:'Discard unsaved changes to switch filters?',
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
    grade:'Grade',
    grades:['Grade 1','Grade 2','Grade 3','Grade 4','Grade 5'],
    generalGrade:'General',
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
    projectImage:'Project image (JPG, PNG, or WebP, up to 50 MB)',
    untitledProject:'Untitled project',
    projectDescriptionUnavailable:'No description is available for this project.',
    projectMigrationRequired:'The Supabase update is missing. Run 20261105030000_project_presentation_copy.sql in SQL Editor, then try again.',
    projectCropPreview:'Home page preview',
    projectCropHelp:'Drag the image to reposition it. Drag a corner to resize the crop; arrow keys move it and +/− adjust zoom.',
    projectPreviewFeatured:'Featured',
    projectPreviewCompleted:'Completed projects',
    projectPreviewMoreInfo:'Discover more →',
    proposalActionSaved:'Changes and moderation action saved.',
    projectActionPartialFailure:'Publishing was rolled back, but the title or priority may have been saved.',
    projectImageError:'Choose a JPG, PNG, or WebP image up to 50 MB.',
    projectImageCleanupError:'The project was saved, but its previous image could not be removed.',
    projectImagesDeletedError:'The proposal was deleted, but some images could not be removed from Supabase Storage.',
    acceptedLabel:'Accepted team: now listed on the Vote page.',
    rejectedLabel:'Candidacy declined',
    pendingLabel:'Needs review',
    proposalsTab:'Proposals',
    candidatesTab:'Candidacies',
    technicalIntro:'Technical controls are enforced by Supabase and available only to authorized technical administrators.',
    technicalSettingsTitle:'Site settings',
    technicalIdeasOpen:'Accept suggestions',
    technicalCandidaciesOpen:'Accept candidacies',
    technicalColors:'Core colors',
    technicalLogo:'HTTPS logo URL',
    technicalHero:'HTTPS home-page image URL',
    technicalSlogan:'Site slogan',
    technicalBackupsTitle:'Scheduled backups',
    technicalBackupsEnable:'Enable scheduled backups',
    technicalFrequency:'Frequency',
    technicalFrequencies:['Daily','Weekly (Sunday)','Monthly (first day)'],
    technicalTime:'Time (America/Toronto)',
    technicalRetention:'Maximum number of backups (10 to 100)',
    technicalSave:'Save technical settings',
    technicalSaved:'Technical settings saved.',
    technicalAccessTitle:'Authorized Google accounts',
    technicalAccessIntro:'Technical and administrator roles are separate. This technical portal does not grant access to the regular administration portal.',
    technicalEmail:'Google account email',
    technicalRole:'Role',
    technicalRoles:['Administrator','Technical administrator'],
    technicalAddAccess:'Add or update access',
    technicalRemoveAccess:'Remove access',
    technicalConfirmRemoveAccess:'Remove this access? This may lock out that account.',
    technicalNoAccess:'No authorized accounts.',
    technicalLogsTitle:'Technical logs — 90 days',
    technicalLogIp:'IP address',
    technicalNoLogs:'No technical events recorded.',
    technicalBackupsList:'Backup history',
    technicalRunBackup:'Run backup now',
    technicalDeleteBackup:'Delete',
    technicalRestoreBackup:'Restore',
    technicalConfirmDeleteBackup:'Permanently delete this backup and its files?',
    technicalConfirmRestoreBackup:'This restore replaces current suggestions, candidacies, voting, members, and site settings with the selected backup. Continue?',
    technicalBackupUnavailable:'To enable backups, apply the technical migration, deploy the secure function, and add the supabase_project_url and supabase_service_role_key secrets in Vault. Never paste the service key into this site.',
    technicalFunctionSetupHelp:'Add the SUPABASE_ACCESS_TOKEN repository Actions secret, then start the GitHub deployment below.',
    technicalDeployFunction:'Open GitHub deployment',
    technicalSecretsSetupHelp:'Add supabase_project_url and supabase_service_role_key in Supabase Vault. Never paste the service key into this site.',
    technicalScheduleSetupHelp:'After prerequisites are configured, enable backups in Site settings.',
    technicalScheduleRefreshHelp:'Save the backup settings again after configuring the function and Vault secrets.',
    technicalReadinessMigrationHelp:'Run migration 20261113030000_technical_backup_readiness.sql in the Supabase SQL Editor.',
    technicalScheduleConfigured:'Configured',
    technicalBackupCreated:'Backup created.',
    technicalBackupDeleted:'Backup deleted.',
    technicalBackupRestored:'Backup restored. The page will reload.',
    technicalSetupStatus:'Technical status and configuration',
    technicalStatusReady:'Google sign-in and role-based access are active.',
    technicalStatusDatabase:'Database and role access',
    technicalStatusFunction:'Secure backup function',
    technicalStatusScheduler:'Scheduler secrets in Vault',
    technicalStatusEnabled:'Configured',
    technicalStatusDisabled:'Needs setup',
    technicalSettingsError:'Technical settings could not be loaded or saved.',
    technicalLogTime:'Date',
    technicalLogUser:'Account',
    technicalLogAction:'Action',
    technicalLogEntity:'Entity',
    technicalLogDetails:'Details'
  };
  const make=(tag,className='',content='')=>{
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(content)node.textContent=content;
    return node;
  };
  const normalizeCandidateRoster=value=>String(value||'').split(/\r?\n/)
    .map(member=>member.trim())
    .filter(Boolean)
    .map(member=>member
      .replace(/^Haute Parole(?=\s*:)/i,'Parole administrative')
      .replace(/^Basse Parole(?=\s*:)/i,'Parole étudiante'));
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
  const isRepeatedSaveError=value=>{
    const phrase=messages.saveError;
    let remaining=String(value||'').trim();
    let repetitions=0;
    while(remaining.startsWith(phrase)){
      remaining=remaining.slice(phrase.length).trimStart();
      repetitions++;
    }
    return repetitions>=2&&(!remaining||phrase.startsWith(remaining));
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
  const panelNames=['proposals','vote','candidates','members','logs'];
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
      const [suggestionsResult,candidaciesResult]=await Promise.all([
        client.from('suggestions').select('*',{count:'exact',head:true}),
        client.from('candidacies').select('*',{count:'exact',head:true})
      ]);
      setTabCount('proposals', suggestionsResult.count ?? 0);
      setTabCount('candidates', candidaciesResult.count ?? 0);
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
  const technicalPortalRequested=new URLSearchParams(window.location.search).get('portal')==='technical';
  const client=ready?window.supabase.createClient(config.url,config.anonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:!technicalPortalRequested}}):null;
  const technicalClient=ready?window.supabase.createClient(config.url,config.anonKey,{
    auth:{
      persistSession:true,
      autoRefreshToken:true,
      detectSessionInUrl:technicalPortalRequested,
      storageKey:'cdecc-technical-auth'
    }
  }):null;
  window.cdeccSupabase=client;
  const technicalPage=document.getElementById('page-technical');
  const technicalShell=make('div','admin-portal technical-portal');
  const technicalHeading=make('header','admin-portal-heading');
  technicalHeading.append(
    make('div','eyebrow','CDECC'),
    make('h1','',french?'Panneau technique':'Technical Panel'),
    make('p','',french?'Portail technique distinct de l’administration du site.':'Technical portal, separate from site administration.')
  );
  const technicalAuthBar=make('div','admin-portal-auth');
  technicalAuthBar.hidden=true;
  const technicalIdentity=make('span','admin-portal-identity');
  const technicalSignOut=button(french?'Se déconnecter':'Sign out','technical-sign-out');
  technicalAuthBar.append(technicalIdentity,technicalSignOut);
  const technicalLogin=make('div','admin-portal-login');
  const technicalLoginIntro=make('div','admin-portal-login-intro');
  const technicalLoginIcon=make('span','admin-portal-login-icon','T');
  technicalLoginIcon.setAttribute('aria-hidden','true');
  const technicalLoginCopy=make('div','admin-portal-login-copy');
  technicalLoginCopy.append(
    make('div','eyebrow',french?'Accès technique':'Technical access'),
    make('h2','',french?'Connexion requise':'Sign-in required'),
    make('p','',french?'Connectez-vous avec un compte Google autorisé pour ouvrir le panneau technique.':'Sign in with an authorized Google account to open the Technical Panel.')
  );
  technicalLoginIntro.append(technicalLoginIcon,technicalLoginCopy);
  const technicalLoginError=make('p','site-status admin-portal-auth-error');
  technicalLoginError.hidden=true;
  technicalLoginError.setAttribute('role','status');
  technicalLoginError.setAttribute('aria-live','polite');
  const technicalSignIn=button(french?'Continuer avec Google':'Continue with Google','technical-sign-in','primary');
  technicalSignOut.hidden=true;
  const technicalLoginHelp=make('p','admin-portal-login-help',
    french?'Utilisez le compte Google ajouté au rôle technique dans Supabase.':'Use the Google account assigned the technical role in Supabase.');
  const technicalLoginActions=make('div','admin-portal-login-actions');
  technicalLoginActions.append(technicalLoginError,technicalSignIn,technicalLoginHelp);
  technicalLogin.append(technicalLoginIntro,technicalLoginActions);
  const technicalPanelContent=make('div','technical-portal-content');
  technicalPanelContent.hidden=true;
  technicalShell.append(technicalHeading,technicalAuthBar,technicalLogin,technicalPanelContent);
  technicalPage.replaceChildren(technicalShell);
  const authCallbackParams=new URLSearchParams(window.location.search);
  const authCallbackHashParams=new URLSearchParams(window.location.hash.replace(/^#/,''));
  const authCallbackError=authCallbackParams.get('error_code')||
    authCallbackHashParams.get('error_code')||
    authCallbackParams.get('error')||
    authCallbackHashParams.get('error');
  const showAuthCallbackError=()=>{
    const message=authCallbackError==='signup_disabled'?messages.signupDisabled:
      authCallbackError==='access_denied'?messages.adminLoginDenied:messages.authError;
    setError(authError,new Error(message));
  };
  const cleanAuthCallbackUrl=()=>{
    const url=new URL(window.location.href);
    let changed=false;
    ['error','error_code','error_description','sb','portal'].forEach(key=>{
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
  let candidateFilter='pending';
  let currentUser=null;
  let technicalUser=null;
  const tables={
    proposals:make('div','admin-portal-list'),
    candidates:make('div','admin-portal-list'),
    members:make('div','admin-portal-list'),
    logs:make('div','admin-portal-logs')
  };
  const proposalCardCleanup=new WeakMap();
  const candidateCardCleanup=new WeakMap();
  const memberEditorCleanup=new WeakMap();
  const disposeProposalCards=()=>{
    tables.proposals.querySelectorAll('.site-review-card').forEach(card=>proposalCardCleanup.get(card)?.());
  };
  let proposalResultsRequest=0;
  let candidateResultsRequest=0;
  let periodicRefreshTab=null;
  const hasAdminEditsInProgress=name=>{
    const panel=panels[name];
    if(!panel)return false;
    const activeElement=document.activeElement;
    if(panel.contains(activeElement)&&activeElement.matches('input:not(.admin-search),textarea,select'))return true;
    if(panel.querySelector('.admin-portal-edit-form:not([hidden])[data-dirty="true"]:not(.admin-vote-settings)'))return true;
    if(panel.querySelector('.admin-portal-edit-form:not([hidden])[data-interacting="true"]:not(.admin-vote-settings)'))return true;
    if(panel.querySelector('.site-review-card[data-interacting="true"]'))return true;
    if(panel.querySelector('.admin-candidate-card[data-interacting="true"]'))return true;
    if(panel.querySelector('.site-priority-select[data-dirty="true"]'))return true;
    if(panel.querySelector('.admin-project-presentation[data-dirty="true"]'))return true;
    if(panel.querySelector('.admin-project-presentation[data-interacting="true"]'))return true;
    if(panel.querySelector('.technical-access-row[data-dirty="true"]'))return true;
    return Boolean(panel.querySelector('.admin-vote-settings[data-dirty="true"]'));
  };
  const shouldPausePeriodicRender=name=>periodicRefreshTab===name&&hasAdminEditsInProgress(name);
  const hasProposalEditorInProgress=()=>{
    const activeElement=document.activeElement;
    return Boolean(
      panels.proposals.querySelector('.admin-portal-edit-form:not([hidden])[data-dirty="true"]:not(.admin-vote-settings)')||
      panels.proposals.querySelector('.admin-portal-edit-form:not([hidden])[data-interacting="true"]:not(.admin-vote-settings)')||
      panels.proposals.querySelector('.site-review-card[data-interacting="true"]')||
      panels.proposals.querySelector('.site-priority-select[data-dirty="true"]')||
      panels.proposals.querySelector('.admin-project-presentation[data-dirty="true"],.admin-project-presentation[data-interacting="true"]')||
      (activeElement?.closest('.admin-project-presentation')&&activeElement.matches('input,textarea,select,canvas'))||
      (panels.proposals.contains(activeElement)&&activeElement.matches('input:not(.admin-search),textarea,select,canvas'))
    );
  };

  const switchTab=name=>{
    if(!panelNames.includes(name))return;
    if(name!==currentTab){
      if(currentTab==='proposals')proposalResultsRequest++;
      if(currentTab==='candidates')candidateResultsRequest++;
    }
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
      const bounds=canvas.getBoundingClientRect();
      const handleSize=Math.max(42,canvas.width/(bounds.width||canvas.width)*44);
      const handleInset=handleSize/2;
      context.fillStyle='#fff';
      context.strokeStyle='#244f61';
      context.lineWidth=3;
      [[handleInset,handleInset],[canvas.width-handleInset,handleInset],[handleInset,canvas.height-handleInset],[canvas.width-handleInset,canvas.height-handleInset]].forEach(([x,y])=>{
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
      const handleInset=22;
      const corners=[
        {x:rect.left+handleInset,y:rect.top+handleInset,anchorX:rect.right-handleInset,anchorY:rect.bottom-handleInset},
        {x:rect.right-handleInset,y:rect.top+handleInset,anchorX:rect.left+handleInset,anchorY:rect.bottom-handleInset},
        {x:rect.left+handleInset,y:rect.bottom-handleInset,anchorX:rect.right-handleInset,anchorY:rect.top+handleInset},
        {x:rect.right-handleInset,y:rect.bottom-handleInset,anchorX:rect.left+handleInset,anchorY:rect.top+handleInset}
      ];
      const nearestCorner=corners.reduce((nearest,corner)=>{
        const distance=Math.hypot(event.clientX-corner.x,event.clientY-corner.y);
        return distance<nearest.distance?{...corner,distance}:nearest;
      },{distance:Infinity});
      drag={
        mode:nearestCorner.distance<=44?'resize':'move',
        pointerId:event.pointerId,
        resizeAnchor:{x:nearestCorner.anchorX,y:nearestCorner.anchorY},
        startX:event.clientX,
        startY:event.clientY,
        startPositionX:positionX,
        startPositionY:positionY,
        startZoom:zoom,
        startDistance:Math.hypot(event.clientX-nearestCorner.anchorX,event.clientY-nearestCorner.anchorY),
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
        const distance=Math.hypot(event.clientX-drag.resizeAnchor.x,event.clientY-drag.resizeAnchor.y);
        zoom=Math.max(1,Math.min(4,drag.startZoom*distance/Math.max(1,drag.startDistance)));
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
    canvas.addEventListener('lostpointercapture',stopDrag);
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
  const confirmDiscardFilterEdits=name=>{
    const selector=name==='proposals'
      ?'.admin-project-presentation[data-dirty="true"],.admin-project-presentation[data-interacting="true"],.site-priority-select[data-dirty="true"],.site-review-card[data-interacting="true"]'
      :'.admin-portal-edit-form[data-dirty="true"],.admin-portal-edit-form[data-interacting="true"],.admin-candidate-card[data-interacting="true"]';
    const changed=panels[name].querySelectorAll(selector);
    if(!changed.length)return true;
    if(!window.confirm(messages.confirmDiscardAdminEdits))return false;
    changed.forEach(node=>{
      delete node.dataset.dirty;
      delete node.dataset.interacting;
    });
    return true;
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
  const renderProposalResults=async({allowFilterChange=false}={})=>{
    const request=++proposalResultsRequest;
    const {data,error}=await requireClient().from('suggestions').select('*').order('created_at',{ascending:false});
    if(error)throw error;
    if(request!==proposalResultsRequest||!currentUser||
      (periodicRefreshTab==='proposals'&&currentTab!=='proposals')||
      (!allowFilterChange&&(shouldPausePeriodicRender('proposals')||hasProposalEditorInProgress())))return;
    const statusCounts=getStatusCounts(data||[]);
    const toolbar=panels.proposals.querySelector('.site-review-toolbar');
    syncFilterButtonCounts(toolbar,statusCounts);
    const records=(data||[]).filter(item=>item.status===proposalFilter&&
      (!proposalQuery||`${item.title} ${item.details} ${item.category} ${item.grade||''}`.toLocaleLowerCase().includes(proposalQuery)));
    const currentCards=Array.from(tables.proposals.querySelectorAll(':scope > .site-review-card'));
    if(records.length>0&&records.length===currentCards.length&&records.every((item,index)=>
      currentCards[index].dataset.proposalId===String(item.id)&&
      currentCards[index].dataset.recordSnapshot===JSON.stringify(item)
    ))return;
    disposeProposalCards();
    if(!records.length){showEmpty(tables.proposals,messages.noSuggestions);return}
    tables.proposals.replaceChildren(...records.map(renderProposal));
  };
  const loadProposals=async({allowFilterChange=false}={})=>{
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
        if(!filter||!confirmDiscardFilterEdits('proposals'))return;
        proposalFilter=filter.dataset.portalAction.slice('filter-'.length);
        loadProposals({allowFilterChange:true}).catch(error=>{setError(state,error);reportError(error)});
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
    await renderProposalResults({allowFilterChange});
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
    card.dataset.proposalId=String(item.id);
    card.dataset.recordSnapshot=JSON.stringify(item);
    const meta=make('div','site-review-meta');
    const statusBadge=make('span','pill site-review-status',messages.statuses[item.status]||item.status);
    statusBadge.dataset.status=item.status;
    meta.append(statusBadge,make('time','site-date',formatDate(item.created_at)));
    const gradeIndex=['1','2','3','4','5'].indexOf(String(item.grade));
    const gradeText=item.grade==='general'?messages.generalGrade:messages.grades[gradeIndex]||messages.grade;
    meta.append(make('span','muted',`${messages.grade} : ${gradeText}`));
    const priorityBadge=make('span',`site-priority-badge ${getPriorityClass(item.priority)}`,getPriorityLabel(item.priority));
    meta.append(priorityBadge);
    const prioritySelect=document.createElement('select');
    prioritySelect.className='site-priority-select';
    prioritySelect.dataset.priority=item.priority||'normal';
    prioritySelect.setAttribute('aria-label',messages.priority);
    ['normal','yellow','red'].forEach((value,index)=>{
      const option=make('option','',messages.priorityOptions[index]);
      option.value=value;
      option.selected=(item.priority||'normal')===value;
      prioritySelect.append(option);
    });
    prioritySelect.addEventListener('change',()=>{
      prioritySelect.dataset.dirty='true';
      prioritySelect.dataset.priority=prioritySelect.value;
      priorityBadge.className=`site-priority-badge ${getPriorityClass(prioritySelect.value)}`;
      priorityBadge.textContent=getPriorityLabel(prioritySelect.value);
    });
    const priorityControl=make('label','site-priority-control');
    priorityControl.append(make('span','',messages.priority),prioritySelect);
    const deleteButton=button(messages.delete,'delete-proposal');
    const actions=make('div','site-review-actions');
    if(item.status!=='approved')actions.append(button(messages.approve,'approve-proposal','approve'));
    if(item.status!=='rejected')actions.append(button(messages.reject,'reject-proposal','reject'));
    if(item.status!=='pending')actions.append(button(messages.reopen,'reopen-proposal'));
    actions.append(deleteButton);
    card.append(meta,priorityControl);
    let presentation=null;
    let presentationStatus=null;
    let preparePresentationImage=null;
    let placement=null;
    let proposalTitle=null;
    let proposalDetails=null;
    let proposalCategory=null;
    if(item.status==='approved'||item.status==='pending'||item.status==='rejected'){
      presentation=make('div','admin-project-presentation');
      presentation.hidden=item.status!=='pending';
      proposalTitle=document.createElement('input');
      proposalTitle.type='text';
      proposalTitle.name='title';
      proposalTitle.maxLength=160;
      proposalTitle.required=true;
      proposalTitle.value=isRepeatedSaveError(item.title)?messages.untitledProject:item.title||'';
      const proposalTitleLabel=make('label','');
      proposalTitleLabel.append(make('span','',messages.titleField),proposalTitle);
      proposalDetails=document.createElement('textarea');
      proposalDetails.name='details';
      proposalDetails.maxLength=1200;
      proposalDetails.required=true;
      proposalDetails.value=isRepeatedSaveError(item.details)?messages.projectDescriptionUnavailable:item.details||'';
      const proposalDetailsLabel=make('label','');
      proposalDetailsLabel.append(make('span','',messages.details),proposalDetails);
      proposalCategory=document.createElement('input');
      proposalCategory.type='text';
      proposalCategory.name='category';
      proposalCategory.maxLength=40;
      proposalCategory.required=true;
      proposalCategory.value=item.category||'';
      const proposalCategoryLabel=make('label','');
      proposalCategoryLabel.append(make('span','',messages.category),proposalCategory);
      const placementLabel=make('label','');
      placementLabel.append(make('span','',messages.projectPlacement));
      placement=document.createElement('select');
      placement.name='home_placement';
      Object.entries(messages.projectPlacements).forEach(([value,label])=>{
        const option=make('option','',label);
        option.value=value;
        option.selected=(item.home_placement||'completed')===value;
        placement.append(option);
      });
      placementLabel.append(placement);
      const imageLabel=make('label','');
      imageLabel.append(make('span','',messages.projectImage));
      const imageInput=document.createElement('input');
      imageInput.type='file';
      imageInput.name='project_image';
      imageInput.accept='image/jpeg,image/png,image/webp';
      imageLabel.append(imageInput);
      const cropEditor=make('div','admin-project-crop-editor');
      cropEditor.append(make('p','admin-project-crop-title',messages.projectCropPreview));
      const cropPreview=make('div','admin-project-preview');
      const initialPreviewPlacement=placement.value==='featured'?'featured':'completed';
      cropPreview.dataset.placement=initialPreviewPlacement;
      const cropCanvas=document.createElement('canvas');
      cropCanvas.className=`admin-project-crop-canvas${item.status==='pending'?'':' is-static'}`;
      cropCanvas.width=960;
      const initialCropDimensions=projectCropDimensions(placement.value);
      cropCanvas.height=Math.round(cropCanvas.width*initialCropDimensions.height/initialCropDimensions.width);
      cropCanvas.setAttribute('role','img');
      cropCanvas.tabIndex=item.status==='pending'?0:-1;
      cropCanvas.setAttribute('aria-label',item.status==='pending'?messages.projectCropHelp:messages.projectCropPreview);
      const previewCopy=make('div','admin-project-preview-copy');
      const previewLabel=make('span','admin-project-preview-label',initialPreviewPlacement==='featured'?messages.projectPreviewFeatured:messages.projectPreviewCompleted);
      previewCopy.append(previewLabel);
      const previewTitle=make('strong','admin-project-preview-title',proposalTitle.value||messages.untitledProject);
      const previewDescription=make('span','admin-project-preview-description',proposalDetails.value||messages.projectDescriptionUnavailable);
      previewCopy.append(previewTitle,previewDescription);
      const previewMore=make('span','admin-project-preview-button',messages.projectPreviewMoreInfo);
      previewMore.hidden=initialPreviewPlacement!=='featured';
      previewCopy.append(previewMore);
      cropPreview.append(cropCanvas,previewCopy);
      const cropHelp=make('p','admin-project-crop-help',messages.projectCropHelp);
      cropHelp.hidden=item.status!=='pending';
      cropEditor.append(cropPreview,cropHelp);
      let cropSourceImage=null;
      let cropSourceUrl='';
      let cropModified=false;
      let cropRenderFrame=0;
      let cropLoadVersion=0;
      let cropLoadingPromise=Promise.resolve();
      let cropZoom=1;
      let cropPositionX=.5;
      let cropPositionY=.5;
      let cropDrag=null;
      presentation.append(placementLabel,proposalTitleLabel,proposalDetailsLabel,proposalCategoryLabel);
      card.insertBefore(cropEditor,priorityControl);
      presentation.append(imageLabel);
      const displayStatus=make('p','site-status');
      displayStatus.setAttribute('role','status');
      displayStatus.setAttribute('aria-live','polite');
      presentationStatus=displayStatus;
      presentation.append(displayStatus);
      const markPresentationDirty=()=>{presentation.dataset.dirty='true'};
      proposalCardCleanup.set(card,()=>{
        cropLoadVersion++;
        cancelAnimationFrame(cropRenderFrame);
        if(cropSourceUrl){
          URL.revokeObjectURL(cropSourceUrl);
          cropSourceUrl='';
        }
      });
      presentation.addEventListener('input',markPresentationDirty);
      presentation.addEventListener('change',markPresentationDirty);
      proposalTitle.addEventListener('input',()=>{
        previewTitle.textContent=proposalTitle.value.trim()||messages.untitledProject;
      });
      proposalDetails.addEventListener('input',()=>{
        previewDescription.textContent=proposalDetails.value.trim()||messages.projectDescriptionUnavailable;
      });
      const renderCropPreview=()=>{
        if(!cropSourceImage)return;
        cancelAnimationFrame(cropRenderFrame);
        cropRenderFrame=requestAnimationFrame(()=>{
          try{
            drawProjectCrop(cropSourceImage,cropCanvas,cropZoom,cropPositionX,cropPositionY,item.status==='pending');
          }catch(error){
            reportError(error);
            setError(displayStatus,error);
          }
        });
      };
      const clearCropPreview=()=>{
        cropCanvas.getContext('2d')?.clearRect(0,0,cropCanvas.width,cropCanvas.height);
      };
      const updateCropPreviewPlacement=()=>{
        if(placement.value!==(item.home_placement||'completed'))cropModified=true;
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
        cropLoadingPromise=new Promise((resolve,reject)=>{
          const sourceImage=new Image();
          sourceImage.onload=()=>{
            if(loadVersion!==cropLoadVersion){resolve(false);return}
            cropSourceImage=sourceImage;
            cropZoom=1;
            cropPositionX=.5;
            cropPositionY=.5;
            if(!isExisting)cropModified=true;
            cropEditor.hidden=false;
            renderCropPreview();
            resolve(true);
          };
          sourceImage.onerror=()=>{
            if(loadVersion!==cropLoadVersion){resolve(false);return}
            const error=new Error(messages.projectImageError);
            setError(displayStatus,error);
            reject(error);
          };
          sourceImage.src=url;
        });
        return cropLoadingPromise;
      };
      const loadExistingCrop=async()=>{
        const requestVersion=++cropLoadVersion;
        const {data,error}=await requireClient().storage.from('project-images').download(item.original_image_path||item.image_path);
        if(requestVersion!==cropLoadVersion)return;
        if(error)throw error;
        if(!data||data.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(data.type)){
          throw new Error(messages.projectImageError);
        }
        return loadCropSource(URL.createObjectURL(data),true);
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
      if(item.image_path){
        loadExistingCrop().catch(error=>{
          reportError(error);
          setError(displayStatus,error);
        });
      }
      cropCanvas.addEventListener('pointerdown',event=>{
        if(item.status!=='pending'||!cropSourceImage)return;
        presentation.dataset.interacting='true';
        markPresentationDirty();
        const rect=cropCanvas.getBoundingClientRect();
        const handleInset=22;
        const corners=[
          {x:rect.left+handleInset,y:rect.top+handleInset,anchorX:rect.right-handleInset,anchorY:rect.bottom-handleInset},
          {x:rect.right-handleInset,y:rect.top+handleInset,anchorX:rect.left+handleInset,anchorY:rect.bottom-handleInset},
          {x:rect.left+handleInset,y:rect.bottom-handleInset,anchorX:rect.right-handleInset,anchorY:rect.top+handleInset},
          {x:rect.right-handleInset,y:rect.bottom-handleInset,anchorX:rect.left+handleInset,anchorY:rect.top+handleInset}
        ];
        const nearestCorner=corners.reduce((nearest,corner)=>{
          const distance=Math.hypot(event.clientX-corner.x,event.clientY-corner.y);
          return distance<nearest.distance?{...corner,distance}:nearest;
        },{distance:Infinity});
        const crop=getProjectCropMetrics(cropSourceImage,cropCanvas,cropZoom,cropPositionX,cropPositionY);
        cropDrag={
          mode:nearestCorner.distance<=44?'resize':'move',
          pointerId:event.pointerId,
          resizeAnchor:{x:nearestCorner.anchorX,y:nearestCorner.anchorY},
          startX:event.clientX,
          startY:event.clientY,
          startPositionX:cropPositionX,
          startPositionY:cropPositionY,
          startZoom:cropZoom,
          startDistance:Math.hypot(event.clientX-nearestCorner.anchorX,event.clientY-nearestCorner.anchorY),
          crop
        };
        cropCanvas.setPointerCapture(event.pointerId);
        cropCanvas.style.cursor=cropDrag.mode==='resize'?'nwse-resize':'grabbing';
        event.preventDefault();
      });
      cropCanvas.addEventListener('pointermove',event=>{
        if(item.status!=='pending'||!cropDrag||cropDrag.pointerId!==event.pointerId||!cropSourceImage)return;
        const rect=cropCanvas.getBoundingClientRect();
        if(cropDrag.mode==='move'){
          cropPositionX=cropDrag.startPositionX-
            (event.clientX-cropDrag.startX)/rect.width*cropDrag.crop.width/cropSourceImage.naturalWidth;
          cropPositionY=cropDrag.startPositionY-
            (event.clientY-cropDrag.startY)/rect.height*cropDrag.crop.height/cropSourceImage.naturalHeight;
        }else{
          const distance=Math.hypot(event.clientX-cropDrag.resizeAnchor.x,event.clientY-cropDrag.resizeAnchor.y);
          cropZoom=Math.max(1,Math.min(4,cropDrag.startZoom*distance/Math.max(1,cropDrag.startDistance)));
        }
        cropModified=true;
        renderCropPreview();
      });
      const stopCropDrag=event=>{
        if(!cropDrag||cropDrag.pointerId!==event.pointerId)return;
        cropDrag=null;
        cropCanvas.style.cursor='grab';
        delete presentation.dataset.interacting;
      };
      cropCanvas.addEventListener('pointerup',stopCropDrag);
      cropCanvas.addEventListener('pointercancel',stopCropDrag);
      cropCanvas.addEventListener('lostpointercapture',stopCropDrag);
      cropCanvas.addEventListener('click',event=>event.stopPropagation());
      cropCanvas.addEventListener('keydown',event=>{
        if(item.status!=='pending'||!cropSourceImage)return;
        const crop=getProjectCropMetrics(cropSourceImage,cropCanvas,cropZoom,cropPositionX,cropPositionY);
        const movement=.02;
        if(event.key==='ArrowLeft')cropPositionX+=crop.width/cropSourceImage.naturalWidth*movement;
        else if(event.key==='ArrowRight')cropPositionX-=crop.width/cropSourceImage.naturalWidth*movement;
        else if(event.key==='ArrowUp')cropPositionY+=crop.height/cropSourceImage.naturalHeight*movement;
        else if(event.key==='ArrowDown')cropPositionY-=crop.height/cropSourceImage.naturalHeight*movement;
        else if(event.key==='+'||event.key==='=')cropZoom=Math.min(4,cropZoom+.1);
        else if(event.key==='-')cropZoom=Math.max(1,cropZoom-.1);
        else return;
        cropModified=true;
        markPresentationDirty();
        event.preventDefault();
        renderCropPreview();
      });
      imageInput.addEventListener('change',()=>{
        cropModified=Boolean(imageInput.files?.[0]);
        markPresentationDirty();
        cropLoadVersion++;
        if(cropSourceUrl)URL.revokeObjectURL(cropSourceUrl);
        cropSourceUrl='';
        cropSourceImage=null;
        const file=imageInput.files?.[0];
        if(file){
          if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>50*1024*1024){
            clearCropPreview();
            setError(displayStatus,new Error(messages.projectImageError));
            imageInput.value='';
            return;
          }
          loadCropSource(URL.createObjectURL(file)).catch(error=>{
            reportError(error);
            setError(displayStatus,error);
          });
        }else if(item.image_path){
          loadExistingCrop().catch(error=>{
            reportError(error);
            setError(displayStatus,error);
          });
        }else{
          clearCropPreview();
        }
      });
      presentation.addEventListener('keydown',event=>{
        if(event.key==='Enter'&&event.target.matches('input,select'))event.preventDefault();
      });
      preparePresentationImage=async()=>{
        const file=imageInput.files?.[0];
        if(file&&(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>50*1024*1024)){
          throw new Error(messages.projectImageError);
        }
        const updateImage=Boolean(file||cropModified);
        let uploadedPath='';
        let uploadedOriginalPath='';
        try{
          if(updateImage){
            if(!cropSourceImage&&item.image_path&&!file)await loadExistingCrop();
            await cropLoadingPromise;
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
        }catch(error){
          const uploaded=[uploadedPath,uploadedOriginalPath].filter(Boolean);
          if(uploaded.length){
            const cleanup=await requireClient().storage.from('project-images').remove(uploaded);
            if(cleanup.error)reportError(cleanup.error);
          }
          throw error;
        }
        const originalPath=uploadedOriginalPath||item.original_image_path||(updateImage?item.image_path:null);
        return {
          updateImage,
          uploadedPath,
          uploadedOriginalPath,
          imagePath:uploadedPath||item.image_path||null,
          originalPath
        };
      };
    }
    if(presentation)card.append(presentation);
    card.append(actions);
    actions.addEventListener('click',async event=>{
      const action=event.target.closest('[data-portal-action]');
      if(!action)return;
      const portalAction=action.dataset.portalAction;
      if(portalAction==='delete-proposal'){
        if(!window.confirm(messages.confirmDelete))return;
        card.dataset.interacting='true';
        const result=await requireClient().from('suggestions').delete().eq('id',item.id);
        if(result.error){
          delete card.dataset.interacting;
          setError(state,result.error);
          reportError(result.error);
          return;
        }
        let imageCleanupError=null;
        try{await removeProjectImages(item.id)}catch(error){imageCleanupError=error;reportError(error)}
        delete card.dataset.interacting;
        await loadProposals();
        await refreshPublicIdeas();
        if(imageCleanupError)setError(state,new Error(messages.projectImagesDeletedError));
        return;
      }
      if(!['approve-proposal','reject-proposal','reopen-proposal'].includes(portalAction))return;
      if(item.status==='pending'&&presentation){
        const invalidField=Array.from(presentation.querySelectorAll('input[required],textarea[required]'))
          .find(field=>!field.checkValidity());
        if(invalidField){invalidField.reportValidity();return}
      }
      card.dataset.interacting='true';
      actions.querySelectorAll('button').forEach(buttonNode=>{buttonNode.disabled=true});
      let uploadedPaths=[];
      let approvalStarted=false;
      let uploadedImageReferenced=false;
      try{
        const proposalChanges=item.status==='pending'&&presentation?{
          title:proposalTitle.value.trim(),
          details:proposalDetails.value.trim(),
          category:proposalCategory.value.trim()
        }:{};
        const priorityChanged=prioritySelect.value!==(item.priority||'normal');
        const changes={
          ...proposalChanges,
          ...(priorityChanged?{priority:prioritySelect.value,priority_reason:'priorityManual',priority_override:true}:{})
        };
        let nextStatus=item.status;
        let approvedAt=item.approved_at||null;
        let homePlacement=item.home_placement??null;
        if(portalAction==='approve-proposal'){
          nextStatus='approved';
          approvedAt=new Date().toISOString();
          homePlacement=placement?.value||homePlacement||'completed';
        }else if(portalAction==='reject-proposal'){
          nextStatus='rejected';
          approvedAt=null;
          homePlacement='none';
        }else{
          nextStatus='pending';
          approvedAt=null;
          homePlacement=null;
        }
        const imageChanges=presentation?await preparePresentationImage():{
          updateImage:false,uploadedPath:'',uploadedOriginalPath:'',imagePath:item.image_path||null,originalPath:item.original_image_path||null
        };
        uploadedPaths=[imageChanges.uploadedPath,imageChanges.uploadedOriginalPath].filter(Boolean);
        const presentationChanges=presentation?{
          presentation_title:item.status==='pending'
            ?proposalTitle.value.trim()||null
            :item.presentation_title||item.title||null,
          presentation_description:item.status==='pending'
            ?proposalDetails.value.trim()||null
            :item.presentation_description||item.details||null,
          image_path:imageChanges.imagePath,
          original_image_path:imageChanges.originalPath
        }:{};
        const db=requireClient();
        if(portalAction==='approve-proposal'&&presentation){
          const firstUpdate={
            ...changes,
            status:'approved',
            approved_at:approvedAt,
            home_placement:'completed'
          };
          const result=await db.from('suggestions').update(firstUpdate).eq('id',item.id).select('id').maybeSingle();
          if(result.error)throw result.error;
          if(!result.data)throw new Error(messages.saveError);
          approvalStarted=true;
          const {error}=await db.rpc('update_suggestion_presentation',{
            p_suggestion_id:item.id,
            p_home_placement:homePlacement,
            p_image_path:imageChanges.imagePath,
            p_original_image_path:imageChanges.originalPath,
            p_update_image:imageChanges.updateImage,
            p_presentation_title:presentationChanges.presentation_title,
            p_presentation_description:presentationChanges.presentation_description
          });
          if(error){
            const rollback=await db.from('suggestions').update({
              status:item.status,
              approved_at:item.approved_at||null,
              home_placement:item.home_placement??null
            }).eq('id',item.id);
            if(rollback.error)reportError(rollback.error);
            throw error;
          }
          uploadedImageReferenced=true;
        }else{
          const update={
            ...changes,
            ...presentationChanges,
            status:nextStatus,
            approved_at:approvedAt,
            completed_at:portalAction==='reject-proposal'||portalAction==='reopen-proposal'?null:item.completed_at||null,
            home_placement:homePlacement
          };
          const result=await db.from('suggestions').update(update).eq('id',item.id).select('id').maybeSingle();
          if(result.error)throw result.error;
          if(!result.data)throw new Error(messages.saveError);
          uploadedImageReferenced=true;
        }
        let imageCleanupFailed=false;
        if(uploadedImageReferenced&&imageChanges.uploadedPath){
          const oldPaths=[item.image_path,item.original_image_path]
            .filter(path=>path&&path!==imageChanges.uploadedPath&&path!==imageChanges.uploadedOriginalPath&&path!==imageChanges.originalPath);
          if(oldPaths.length){
            const cleanup=await db.storage.from('project-images').remove(oldPaths);
            if(cleanup.error){
              reportError(cleanup.error);
              imageCleanupFailed=true;
            }
          }
        }
        delete prioritySelect.dataset.dirty;
        delete card.dataset.interacting;
        if(presentation){
          delete presentation.dataset.dirty;
          delete presentation.dataset.interacting;
        }
        await loadProposals();
        await refreshPublicIdeas();
        if(imageCleanupFailed)setError(state,new Error(messages.projectImageCleanupError));
        else setSuccess(state,messages.proposalActionSaved);
      }catch(error){
        if(uploadedPaths.length&&!uploadedImageReferenced){
          const cleanup=await requireClient().storage.from('project-images').remove(uploadedPaths);
          if(cleanup.error)reportError(cleanup.error);
        }
        reportError(error);
        const userError=error?.code==='PGRST202'||String(error?.message||'').includes('Could not find the function public.update_suggestion_presentation')
          ?new Error(messages.projectMigrationRequired)
          :error;
        if(presentationStatus)setError(presentationStatus,userError);
        if(approvalStarted){
          setError(state,new Error(`${userError.message} ${messages.projectActionPartialFailure}`));
        }else setError(state,userError);
      }finally{
        if(card.isConnected)delete card.dataset.interacting;
        if(card.isConnected)actions.querySelectorAll('button').forEach(buttonNode=>{buttonNode.disabled=false});
      }
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
  const renderCandidate=item=>{
    const card=make('article','card admin-candidate-card');
    card.dataset.candidacyId=String(item.id);
    card.dataset.recordSnapshot=JSON.stringify(item);
    const photo=client.storage.from('candidate-photos').getPublicUrl(item.photo_path).data.publicUrl;
    const statusText=item.status==='approved'?messages.acceptedLabel:item.status==='rejected'?messages.rejectedLabel:messages.pendingLabel;
    const statusClass=item.status==='approved'?'is-approved':item.status==='rejected'?'is-rejected':'is-pending';
    card.append(make('span',`pill admin-candidate-status ${statusClass}`,statusText));
    card.append(make('time','site-date',formatDate(item.created_at)));
    const blob=make('div','admin-candidate-blob');
    blob.style.backgroundColor=item.background||'#396d59';
    blob.style.color=item.foreground||'#ffffff';
    const blobCopy=make('div','admin-candidate-blob-copy');
    const blobTitle=make('h2','admin-candidate-blob-title',item.team_name);
    const rosterSection=make('section','admin-candidate-blob-members');
    rosterSection.append(make('h3','',messages.members));
    const rosterList=make('ul','admin-candidate-blob-roster');
    const rosterMembers=normalizeCandidateRoster(item.roster);
    rosterMembers.forEach(member=>rosterList.append(make('li','',member)));
    blob.classList.toggle('has-many-members',rosterMembers.length>=6);
    blob.classList.toggle('has-many-members-dense',rosterMembers.length>=9);
    rosterSection.append(rosterList);
    const blobIdeas=make('p','admin-candidate-blob-ideas',item.ideas);
    blobCopy.append(blobTitle,rosterSection,blobIdeas);
    const image=document.createElement('img');
    image.src=photo;
    image.alt='';
    image.loading='lazy';
    image.className='admin-candidate-photo';
    const photoFrame=make('div','admin-candidate-photo-frame');
    photoFrame.append(image);
    blob.append(blobCopy,photoFrame);
    const form=make('form','admin-portal-edit-form');
    form.hidden=item.status!=='pending';
    blob.classList.toggle('is-editing',!form.hidden);
    const fields=[
      ['team_name',messages.teamName,'text',item.team_name,80],
      ['roster',messages.roster,'textarea',normalizeCandidateRoster(item.roster).join('\n'),1200],
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
    photoLabel.hidden=item.status!=='pending';
    if(item.status==='pending')form.append(photoLabel);
    const cropToggle=button(messages.candidateImageCropToggle,'toggle-candidate-image-crop','admin-candidate-photo-edit');
    cropToggle.hidden=item.status!=='pending';
    cropToggle.setAttribute('aria-expanded','false');
    const cropCanvas=document.createElement('canvas');
    cropCanvas.className='candidate-image-crop-canvas admin-candidate-photo';
    cropCanvas.tabIndex=0;
    cropCanvas.setAttribute('role','img');
    cropCanvas.setAttribute('aria-label',messages.projectCropHelp);
    cropCanvas.hidden=true;
    const cropHelp=make('span','admin-candidate-photo-help',messages.projectCropHelp);
    cropHelp.hidden=true;
    photoFrame.append(image,cropCanvas,cropToggle,cropHelp);
    const photoStatus=make('p','site-status');
    photoStatus.setAttribute('role','status');
    photoStatus.setAttribute('aria-live','polite');
    form.append(photoStatus);
    const cropEditorState=window.cdeccCreateCandidateImageCropEditor(cropCanvas,canvas=>{
      cropCanvas.hidden=false;
      image.hidden=true;
      cropHelp.hidden=false;
      cropToggle.setAttribute('aria-expanded','true');
      image.src=canvas.toDataURL('image/webp',.8);
    });
    let existingPhotoLoaded=false;
    let imageRequest=0;
    let photoLoadPromise=Promise.resolve(true);
    candidateCardCleanup.set(card,()=>{
      imageRequest++;
      cropEditorState.dispose();
    });
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
      cropCanvas.hidden=false;
      image.hidden=true;
      cropHelp.hidden=false;
      cropToggle.setAttribute('aria-expanded','true');
    };
    const updatePreview=()=>{
      if(item.status!=='pending')return;
      const values=new FormData(form);
      const teamName=String(values.get('team_name')||'').trim();
      blobTitle.textContent=teamName||messages.teamName;
      blobIdeas.textContent=String(values.get('ideas')||'');
      rosterList.replaceChildren();
      const members=String(values.get('roster')||'').split(/\r?\n/).map(member=>member.trim()).filter(Boolean);
      members.forEach(member=>rosterList.append(make('li','',member)));
      blob.classList.toggle('has-many-members',members.length>=6);
      blob.classList.toggle('has-many-members-dense',members.length>=9);
      blob.style.backgroundColor=String(values.get('background')||'#396d59');
      blob.style.color=String(values.get('foreground')||'#ffffff');
    };
    if(item.status==='pending')form.addEventListener('input',()=>{
      form.dataset.dirty='true';
      updatePreview();
    });
    form.addEventListener('change',()=>{form.dataset.dirty='true'});
    photoInput.addEventListener('change',()=>{
      const file=photoInput.files?.[0];
      if(!file)return;
      if(file.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(file.type)){
        photoInput.value='';
        setError(photoStatus,new Error(messages.photoError));
        return;
      }
      form.dataset.dirty='true';
      existingPhotoLoaded=true;
      imageRequest++;
      cropCanvas.hidden=false;
      image.hidden=true;
      cropHelp.hidden=false;
      photoLoadPromise=cropEditorState.load(file).then(()=>{
        photoStatus.textContent='';
        return true;
      }).catch(error=>{
        existingPhotoLoaded=false;
        reportError(error);
        cropCanvas.hidden=true;
        image.hidden=false;
        cropHelp.hidden=true;
        if(!form.dataset.dirty)delete form.dataset.interacting;
        setError(photoStatus,error);
        return false;
      });
    });
    cropToggle.addEventListener('click',()=>{
      if(!cropCanvas.hidden){
        cropCanvas.hidden=true;
        image.hidden=false;
        cropHelp.hidden=true;
        cropToggle.setAttribute('aria-expanded','false');
        if(!form.dataset.dirty)delete form.dataset.interacting;
        return;
      }
      if(cropEditorState.hasImage){
        cropCanvas.hidden=false;
        image.hidden=true;
        cropHelp.hidden=false;
        cropToggle.setAttribute('aria-expanded','true');
        form.dataset.interacting='true';
        return;
      }
      cropCanvas.hidden=false;
      image.hidden=true;
      cropHelp.hidden=false;
      form.dataset.interacting='true';
      loadExistingPhoto().catch(error=>{
        reportError(error);
        cropCanvas.hidden=true;
        image.hidden=false;
        cropHelp.hidden=true;
        cropToggle.setAttribute('aria-expanded','false');
        if(!form.dataset.dirty)delete form.dataset.interacting;
        setError(photoStatus,error);
      });
    });
    form.addEventListener('submit',event=>{
      event.preventDefault();
    });
    cropCanvas.addEventListener('pointerdown',()=>{form.dataset.dirty='true'});
    cropCanvas.addEventListener('keydown',()=>{form.dataset.dirty='true'});
    const actions=make('div','site-review-actions');
    if(item.status!=='approved')actions.append(button(messages.approve,'approve-candidacy','approve'));
    if(item.status!=='rejected')actions.append(button(messages.reject,'reject-candidacy','reject'));
    if(item.status!=='pending')actions.append(button(messages.reopen,'reopen-candidacy'));
    actions.append(button(messages.deleteCandidacy,'delete-candidacy','delete'));
    card.append(blob,form,actions);
    actions.addEventListener('click',async event=>{
      const action=event.target.closest('[data-portal-action]');
      if(!action)return;
      if(action.dataset.portalAction==='delete-candidacy'){
        const confirmMessage=messages.confirmDeleteCandidacy.replace('{team}',item.team_name);
        if(!window.confirm(confirmMessage))return;
        card.dataset.interacting='true';
        form.dataset.interacting='true';
        actions.querySelectorAll('button').forEach(button=>{button.disabled=true});
        const deleteResult=await requireClient().from('candidacies').delete().eq('id',item.id).select('id').maybeSingle();
        if(deleteResult.error){
          delete card.dataset.interacting;
          delete form.dataset.interacting;
          actions.querySelectorAll('button').forEach(button=>{button.disabled=false});
          setError(state,deleteResult.error);
          reportError(deleteResult.error);
          return;
        }
        if(!deleteResult.data){
          delete card.dataset.interacting;
          delete form.dataset.interacting;
          actions.querySelectorAll('button').forEach(button=>{button.disabled=false});
          const error=new Error(messages.saveError);
          setError(state,error);
          reportError(error);
          return;
        }
        let photoCleanupError=null;
        try{await removeCandidatePhotos(item.id)}catch(error){photoCleanupError=error;reportError(error)}
        delete card.dataset.interacting;
        delete form.dataset.interacting;
        let refreshError=null;
        try{
          await loadCandidates();
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
      card.dataset.interacting='true';
      form.dataset.interacting='true';
      actions.querySelectorAll('button').forEach(button=>{button.disabled=true});
      try{
        if(photoInput.files?.[0]&&!(await photoLoadPromise))return;
        const newPhoto=(photoInput.files?.[0]||cropEditorState.dirty)?await cropEditorState.toBlob():null;
        const saved=await saveCandidacy(card,item,form,newPhoto,{refresh:false});
        if(!saved)return;
        const result=await requireClient().from('candidacies').update({
          status,approved_at:status==='approved'?new Date().toISOString():null,updated_at:new Date().toISOString()
        }).eq('id',item.id).select('id').maybeSingle();
        if(result.error)throw result.error;
        if(!result.data)throw new Error(messages.saveError);
        delete form.dataset.dirty;
        delete form.dataset.interacting;
        delete card.dataset.interacting;
        await loadCandidates();
        await refreshPublicCandidates();
      }catch(error){
        setError(photoStatus,error);
        setError(state,error);
        reportError(error);
      }finally{
        if(card.isConnected)delete card.dataset.interacting;
        if(card.isConnected)delete form.dataset.interacting;
        if(card.isConnected)actions.querySelectorAll('button').forEach(button=>{button.disabled=false});
      }
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
  const saveCandidacy=async(card,item,form,newPhoto,{refresh=true}={})=>{
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
      if(!patch.team_name||!patch.roster||!patch.ideas){setError(state,new Error(messages.saveError));return false}
    }
    let uploadedPath='';
    if(newPhoto){
      if(newPhoto.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(newPhoto.type)){
        setError(state,new Error(messages.photoError));return false;
      }
      const ext={ 'image/jpeg':'jpg','image/png':'png','image/webp':'webp' }[newPhoto.type];
      uploadedPath=`candidacies/${item.id}/${crypto.randomUUID()}.${ext}`;
      const upload=await client.storage.from('candidate-photos').upload(uploadedPath,newPhoto,{contentType:newPhoto.type,upsert:false});
      if(upload.error){setError(state,upload.error);reportError(upload.error);return false}
      patch.photo_path=uploadedPath;
    }
    const result=await requireClient().from('candidacies').update(patch).eq('id',item.id).select('id').maybeSingle();
    if(result.error||!result.data){
      const error=result.error||new Error(messages.saveError);
      setError(state,error);
      reportError(error);
      if(uploadedPath)await client.storage.from('candidate-photos').remove([uploadedPath]);
      return false;
    }
    if(uploadedPath&&item.photo_path){
      const cleanup=await client.storage.from('candidate-photos').remove([item.photo_path]);
      if(cleanup.error){reportError(cleanup.error);setError(state,new Error(messages.candidacyPhotoCleanupError))}
    }
    if(refresh){
      await loadCandidates();
      await refreshPublicCandidates();
    }
    return true;
  };
  const renderCandidateResults=async({allowFilterChange=false}={})=>{
    const request=++candidateResultsRequest;
    const {data,error}=await requireClient().from('candidacies').select('*').order('created_at',{ascending:false});
    if(error)throw error;
    if(request!==candidateResultsRequest||!currentUser||
      (periodicRefreshTab==='candidates'&&currentTab!=='candidates')||
      (!allowFilterChange&&(shouldPausePeriodicRender('candidates')||hasAdminEditsInProgress('candidates'))))return;
    const statusCounts=getStatusCounts(data||[]);
    const toolbar=panels.candidates.querySelector('.site-review-toolbar');
    syncFilterButtonCounts(toolbar,statusCounts);
    const records=(data||[]).filter(item=>item.status===candidateFilter);
    const currentCards=Array.from(tables.candidates.querySelectorAll(':scope > .admin-candidate-card'));
    if(records.length>0&&records.length===currentCards.length&&records.every((item,index)=>
      currentCards[index].dataset.candidacyId===String(item.id)&&
      currentCards[index].dataset.recordSnapshot===JSON.stringify(item)
    ))return;
    tables.candidates.querySelectorAll('.admin-candidate-card').forEach(card=>candidateCardCleanup.get(card)?.());
    if(!records.length){showEmpty(tables.candidates,messages.noCandidates);return}
    tables.candidates.replaceChildren(...records.map(renderCandidate));
  };
  const loadCandidates=async({allowFilterChange=false}={})=>{
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
        if(!filter||!confirmDiscardFilterEdits('candidates'))return;
        candidateFilter=filter.dataset.portalAction.slice('filter-'.length);
        loadCandidates({allowFilterChange:true}).catch(error=>{setError(state,error);reportError(error)});
      });
    }
    const filterButtons=toolbar.querySelectorAll('[data-portal-action^="filter-"]');
    filterButtons.forEach(buttonNode=>{
      const matched=buttonNode.dataset.portalAction.slice('filter-'.length)===candidateFilter;
      buttonNode.setAttribute('aria-pressed',String(matched));
      buttonNode.classList.toggle('active',matched);
    });
    await renderCandidateResults({allowFilterChange});
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
      await refreshTabCounts();
    });
    panel.replaceChildren(form);
  };
  const memberGroupTitle=category=>({
    assembly:messages.memberAssemblyTitle,
    secondary:messages.memberSecondaryTitle,
    class:messages.memberClassTitle
  })[category];
  const removeMemberPhoto=async(path,feedback,message)=>{
    try{
      const {error}=await requireClient().storage.from('member-photos').remove([path]);
      if(error)throw error;
      return true;
    }catch(error){
      setError(feedback,new Error(message));
      reportError(error);
      return false;
    }
  };
  const renderMemberEditorCard=(slot,record)=>{
    const card=make('article','admin-member-editor-card');
    let currentPhotoPath=record?.photo_path||null;
    let hasProfile=Boolean(record);
    let previewObjectUrl='';
    const preview=make('article',`member-profile-card member-admin-preview${slot.category==='secondary'?' member-secondary-rep-card':''}${slot.category==='class'?' member-class-rep-card':''}`);
    const placeholder=make('div','member-profile-photo-placeholder',french?'Photo à venir':'Photo coming soon');
    const image=document.createElement('img');
    image.className='member-profile-photo';
    image.alt='';
    image.hidden=true;
    image.addEventListener('error',()=>{
      image.hidden=true;
      image.removeAttribute('src');
      placeholder.hidden=false;
    });
    if(currentPhotoPath){
      image.src=requireClient().storage.from('member-photos').getPublicUrl(currentPhotoPath).data.publicUrl;
      image.hidden=false;
      placeholder.hidden=true;
    }
    const previewName=make('h3','member-profile-name',record?.display_name|| (french?'Nom à confirmer':'Name to be confirmed'));
    const previewGroup=make('p','member-profile-role',record?.group_label||slot.groupLabel);
    preview.append(placeholder,image,previewName,previewGroup);
    const form=make('form','admin-portal-edit-form admin-member-edit-form');
    form.dataset.slotKey=slot.slotKey;
    form.dataset.photoPath=currentPhotoPath||'';
    const addField=(labelText,name,value,type='text')=>{
      const wrapper=make('label','');
      wrapper.append(make('span','',labelText));
      const input=document.createElement('input');
      input.type=type;
      input.name=name;
      input.value=value||'';
      if(type==='text')input.maxLength=name==='display_name'?100:80;
      input.required=type==='text';
      wrapper.append(input);
      form.append(wrapper);
      return input;
    };
    const nameInput=addField(messages.memberNameField,'display_name',record?.display_name||'');
    const groupInput=addField(messages.memberGroupField,'group_label',record?.group_label||slot.groupLabel);
    const photoLabel=make('label','');
    photoLabel.append(make('span','',messages.memberPhotoField));
    const photoInput=document.createElement('input');
    photoInput.type='file';
    photoInput.accept='image/jpeg,image/png,image/webp';
    photoLabel.append(photoInput);
    form.append(photoLabel);
    const feedback=make('p','site-status');
    feedback.hidden=true;
    feedback.setAttribute('role','status');
    feedback.setAttribute('aria-live','polite');
    const actions=make('div','admin-member-editor-actions');
    const saveButton=button(messages.memberSave,'save-member','primary');
    saveButton.type='submit';
    const removeButton=button(messages.memberRemove,'remove-member','secondary');
    removeButton.hidden=!hasProfile;
    actions.append(saveButton,removeButton);
    form.append(feedback,actions);
    const updatePreview=()=>{
      previewName.textContent=nameInput.value.trim()||(french?'Nom à confirmer':'Name to be confirmed');
      previewGroup.textContent=groupInput.value.trim()||slot.groupLabel;
    };
    form.addEventListener('input',()=>{
      form.dataset.dirty='true';
      updatePreview();
    });
    form.addEventListener('change',()=>{form.dataset.dirty='true'});
    photoInput.addEventListener('change',()=>{
      const file=photoInput.files?.[0];
      if(!file)return;
      if(file.size>50*1024*1024||!['image/jpeg','image/png','image/webp'].includes(file.type)){
        photoInput.value='';
        setError(feedback,new Error(messages.photoError));
        return;
      }
      if(previewObjectUrl)URL.revokeObjectURL(previewObjectUrl);
      previewObjectUrl=URL.createObjectURL(file);
      image.src=previewObjectUrl;
      image.hidden=false;
      placeholder.hidden=true;
      form.dataset.dirty='true';
    });
    form.addEventListener('submit',async event=>{
      event.preventDefault();
      event.stopPropagation();
      const displayName=nameInput.value.trim();
      const groupLabel=groupInput.value.trim();
      if(!displayName||!groupLabel){
        setError(feedback,new Error(messages.saveError));
        return;
      }
      const file=photoInput.files?.[0];
      let uploadedPath='';
      let photoUploaded=false;
      let profileSaved=false;
      const oldPhotoPath=currentPhotoPath;
      saveButton.disabled=true;
      try{
        if(file){
          const extension={ 'image/jpeg':'jpg','image/png':'png','image/webp':'webp' }[file.type];
          uploadedPath=`members/${slot.slotKey}/${crypto.randomUUID()}.${extension}`;
          const upload=await requireClient().storage.from('member-photos').upload(uploadedPath,file,{contentType:file.type,upsert:false});
          if(upload.error)throw upload.error;
          photoUploaded=true;
        }
        const result=await requireClient().from('member_profiles').upsert({
          slot_key:slot.slotKey,
          display_name:displayName,
          group_label:groupLabel,
          photo_path:uploadedPath||currentPhotoPath
        },{onConflict:'slot_key'}).select('slot_key').single();
        if(result.error)throw result.error;
        profileSaved=true;
        currentPhotoPath=uploadedPath||currentPhotoPath;
        hasProfile=true;
        form.dataset.photoPath=currentPhotoPath||'';
        if(uploadedPath){
          image.src=requireClient().storage.from('member-photos').getPublicUrl(uploadedPath).data.publicUrl;
          image.hidden=false;
          placeholder.hidden=true;
        }
        delete form.dataset.dirty;
        photoInput.value='';
        removeButton.hidden=false;
        setSuccess(feedback,messages.memberSaveSuccess);
        if(previewObjectUrl){URL.revokeObjectURL(previewObjectUrl);previewObjectUrl=''}
        await refreshPublicMembers();
        if(uploadedPath&&oldPhotoPath){
          await removeMemberPhoto(oldPhotoPath,feedback,messages.memberPhotoCleanupError);
        }
      }catch(error){
        if(photoUploaded&&!profileSaved){
          const cleaned=await removeMemberPhoto(uploadedPath,feedback,messages.memberUploadCleanupError);
          if(cleaned)setError(feedback,error);
        }else{
          setError(feedback,error);
        }
        reportError(error);
      }finally{saveButton.disabled=false}
    });
    removeButton.addEventListener('click',async()=>{
      if(!hasProfile)return;
      if(!window.confirm(messages.memberConfirmRemove))return;
      removeButton.disabled=true;
      try{
        const result=await requireClient().from('member_profiles').delete().eq('slot_key',slot.slotKey).select('slot_key').maybeSingle();
        if(result.error)throw result.error;
        const oldPhotoPath=currentPhotoPath;
        currentPhotoPath=null;
        hasProfile=false;
        if(previewObjectUrl){URL.revokeObjectURL(previewObjectUrl);previewObjectUrl=''}
        form.dataset.photoPath='';
        nameInput.value='';
        groupInput.value=slot.groupLabel;
        photoInput.value='';
        removeButton.hidden=true;
        delete form.dataset.dirty;
        updatePreview();
        image.hidden=true;
        image.removeAttribute('src');
        placeholder.hidden=false;
        setSuccess(feedback,messages.memberRemoveSuccess);
        await refreshPublicMembers();
        if(oldPhotoPath){
          await removeMemberPhoto(oldPhotoPath,feedback,messages.memberPhotoRemoveError);
        }
      }catch(error){setError(feedback,error);reportError(error)}
      finally{removeButton.disabled=false}
    });
    card.append(preview,form);
    memberEditorCleanup.set(card,()=>{
      if(previewObjectUrl)URL.revokeObjectURL(previewObjectUrl);
    });
    return card;
  };
  const loadMembers=async()=>{
    const slots=window.cdeccMemberSlotDefinitions;
    if(!Array.isArray(slots))throw new Error(messages.memberMigrationMissing);
    const {data,error}=await requireClient().from('member_profiles').select('*');
    if(error){
      if(error.code==='42P01'||error.code==='PGRST205')throw new Error(messages.memberMigrationMissing);
      throw error;
    }
    if(shouldPausePeriodicRender('members'))return;
    const records=new Map((data||[]).map(record=>[record.slot_key,record]));
    const panel=panels.members;
    panel.querySelectorAll('.admin-member-editor-card').forEach(card=>memberEditorCleanup.get(card)?.());
    panel.replaceChildren(make('p','site-admin-note',messages.memberIntro));
    ['assembly','secondary','class'].forEach(category=>{
      const section=make('section','admin-members-section');
      section.append(make('h2','member-profile-title',memberGroupTitle(category)));
      const categorySlots=slots.filter(slot=>slot.category===category);
      if(category==='class'){
        for(let level=1;level<=5;level++){
          const levelSection=make('div','member-class-reps-level admin-members-level');
          levelSection.append(make('h3','member-class-reps-level-title',messages.grades[level-1]));
          const grid=make('div','member-class-reps-grid');
          categorySlots.filter(slot=>slot.level===level).forEach(slot=>
            grid.append(renderMemberEditorCard(slot,records.get(slot.slotKey)))
          );
          levelSection.append(grid);
          section.append(levelSection);
        }
      }else{
        const grid=make('div',category==='assembly'?'member-profile-grid':'member-secondary-reps-grid');
        categorySlots.forEach(slot=>grid.append(renderMemberEditorCard(slot,records.get(slot.slotKey))));
        section.append(grid);
      }
      panel.append(section);
    });
  };
  const loadLogs=async()=>{
    if(!client||!currentUser)return;
    const {data,error}=await client.from('admin_audit_logs_display')
      .select('id,actor_email,action,entity,entity_id,details,occurred_at')
      .order('occurred_at',{ascending:false})
      .limit(300);
    if(error)throw error;
    const table=make('table','admin-audit-table');
    const head=document.createElement('thead');
    const headerRow=document.createElement('tr');
    [messages.logTime,messages.logUser,messages.logAction,messages.logEntity,messages.logDetails]
      .forEach(label=>headerRow.append(make('th','',label)));
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
        member_profiles:messages.memberTab,
        vote_settings:messages.voteTitle,
        authentication:french?'Authentification':'Authentication',
        'storage.objects':french?'Images':'Images'
      }[entry.entity]||entry.entity;
      [
        formatDate(entry.occurred_at),
        entry.actor_email==='Public submission'?messages.publicSubmission:entry.actor_email,
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
  let activeTechnicalTab='overview';
  const loadTechnicalPanel=async(panelClient=technicalClient,panel=technicalPanelContent)=>{
    if(!panelClient)throw new Error(messages.accessCheckFailed);
    const [{data:settings,error:settingsError},{data:accessList,error:accessError},{data:health,error:healthError}] = await Promise.all([
      panelClient.rpc('get_technical_settings'),
      panelClient.rpc('get_cdecc_access_list'),
      panelClient.functions.invoke('technical-backup',{body:{action:'health'}})
        .catch(error=>({data:null,error}))
    ]);
    if(settingsError)throw settingsError;
    if(accessError)throw accessError;
    const technicalBackupsReady=!healthError&&health?.ready===true;
    const technicalSecretsReady=settings.scheduler_secrets_configured===true;
    const technicalScheduleCheckAvailable=typeof settings.backup_schedule_configured==='boolean';
    const technicalScheduleReady=settings.backup_schedule_configured===true;
    const technicalTabNames=['overview','settings','backups','access','logs'];
    const technicalTabLabels=french
      ?['État technique','Réglages du site','Sauvegardes','Accès','Journaux']
      :['System status','Site settings','Backups','Access','Logs'];
    const technicalTabs=make('div','admin-portal-tabs technical-portal-tabs');
    technicalTabs.setAttribute('role','tablist');
    technicalTabs.setAttribute('aria-label',french?'Sections techniques':'Technical sections');
    const technicalPanels=Object.fromEntries(technicalTabNames.map(name=>[name,make('section','admin-portal-panel technical-portal-panel')]));
    const technicalPanelNodes=make('div','admin-portal-panels');
    const selectTechnicalTab=name=>{
      if(!technicalPanels[name])return;
      activeTechnicalTab=name;
      technicalTabNames.forEach(tabName=>{
        const selected=tabName===name;
        const tab=technicalTabs.querySelector(`[data-technical-tab="${tabName}"]`);
        tab.setAttribute('aria-selected',String(selected));
        tab.tabIndex=selected?0:-1;
        technicalPanels[tabName].hidden=!selected;
      });
    };
    technicalTabNames.forEach((name,index)=>{
      const tab=button(technicalTabLabels[index],'technical-tab','admin-portal-tab');
      tab.dataset.technicalTab=name;
      tab.id=`technical-tab-${name}`;
      tab.setAttribute('role','tab');
      tab.setAttribute('aria-controls',`technical-panel-${name}`);
      tab.setAttribute('aria-selected',String(name===activeTechnicalTab));
      tab.tabIndex=name===activeTechnicalTab?0:-1;
      technicalTabs.append(tab);
      const tabPanel=technicalPanels[name];
      tabPanel.id=`technical-panel-${name}`;
      tabPanel.setAttribute('role','tabpanel');
      tabPanel.setAttribute('aria-labelledby',tab.id);
      tabPanel.tabIndex=0;
      tabPanel.hidden=name!==activeTechnicalTab;
      technicalPanelNodes.append(tabPanel);
    });
    technicalTabs.addEventListener('click',event=>{
      const tab=event.target.closest('[data-technical-tab]');
      if(tab&&technicalTabs.contains(tab))selectTechnicalTab(tab.dataset.technicalTab);
    });
    technicalTabs.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      const items=Array.from(technicalTabs.querySelectorAll('[role=tab]'));
      const index=items.indexOf(document.activeElement);
      const next=event.key==='Home'?0:event.key==='End'?items.length-1:
        (index+(event.key==='ArrowRight'?1:-1)+items.length)%items.length;
      items[next].focus();
      selectTechnicalTab(items[next].dataset.technicalTab);
    });
    panel.replaceChildren(make('p','site-admin-note',messages.technicalIntro),technicalTabs,technicalPanelNodes);
    const statusSection=make('section','card technical-panel-section technical-status-section');
    statusSection.append(make('h2','',messages.technicalSetupStatus));
    const addStatus=(label,ok,detail='',help='')=>{
      const row=make('div','technical-status-row');
      const indicator=make('span',ok?'technical-status-ok':'technical-status-pending',
        `${ok?messages.technicalStatusEnabled:messages.technicalStatusDisabled}${detail?` · ${detail}`:''}`);
      const copy=make('div','technical-status-copy');
      copy.append(make('strong','',label));
      const helpText=make('span','technical-status-help',help);
      helpText.hidden=!help;
      if(label===messages.technicalStatusFunction&&!ok){
        const deployLink=document.createElement('a');
        deployLink.href='https://github.com/TheoNotBald/Conseille-des-eleves/actions/workflows/deploy-technical-backup.yml';
        deployLink.target='_blank';
        deployLink.rel='noopener noreferrer';
        deployLink.textContent=messages.technicalDeployFunction;
        helpText.append(document.createElement('br'),deployLink);
      }
      copy.append(helpText);
      row.append(copy,indicator);
      statusSection.append(row);
      return {indicator,help:helpText};
    };
    addStatus(messages.technicalStatusDatabase,true);
    addStatus(messages.technicalStatusFunction,technicalBackupsReady,'',
      technicalBackupsReady?'':messages.technicalFunctionSetupHelp);
    addStatus(messages.technicalStatusScheduler,technicalSecretsReady,'',
      technicalSecretsReady?'':messages.technicalSecretsSetupHelp);
    const backupStatus=addStatus(
      messages.technicalBackupsTitle,
      settings.backup_enabled===true&&technicalScheduleReady,
      settings.backup_enabled===true&&technicalScheduleReady
        ?`${messages.technicalScheduleConfigured} · ${settings.backup_frequency} · ${String(settings.backup_time||'02:00').slice(0,5)}`
        :settings.backup_enabled===true
          ?messages.technicalStatusDisabled
          :french?'Désactivées':'Disabled',
      settings.backup_enabled===true&&technicalScheduleReady?''
        :!technicalScheduleCheckAvailable
          ?messages.technicalReadinessMigrationHelp
          :settings.backup_enabled===true
          ?messages.technicalScheduleRefreshHelp
          :messages.technicalScheduleSetupHelp
    );
    technicalPanels.overview.append(statusSection);

    const settingsSection=make('section','card technical-panel-section');
    settingsSection.append(make('h2','',messages.technicalSettingsTitle));
    const settingsForm=make('form','admin-portal-edit-form technical-settings-form');
    const addCheckbox=(labelText,checked)=>{
      const label=make('label','technical-checkbox');
      const input=document.createElement('input');
      input.type='checkbox';
      input.checked=checked;
      label.append(input,make('span','',labelText));
      settingsForm.append(label);
      return input;
    };
    const addField=(labelText,type,value,options={})=>{
      const label=make('label','technical-field');
      label.append(make('span','',labelText));
      const input=document.createElement('input');
      input.type=type;
      input.value=value??'';
      if(options.min!==undefined)input.min=String(options.min);
      if(options.max!==undefined)input.max=String(options.max);
      if(options.maxLength!==undefined)input.maxLength=options.maxLength;
      label.append(input);
      settingsForm.append(label);
      return input;
    };
    const addSelect=(labelText,values,selected)=>{
      const label=make('label','technical-field');
      label.append(make('span','',labelText));
      const select=document.createElement('select');
      values.forEach((value,index)=>{
        const option=make('option','',messages.technicalFrequencies[index]);
        option.value=value;
        option.selected=value===selected;
        select.append(option);
      });
      label.append(select);
      settingsForm.append(label);
      return select;
    };
    const ideasOpen=addCheckbox(messages.technicalIdeasOpen,settings.ideas_open!==false);
    const candidaciesOpen=addCheckbox(messages.technicalCandidaciesOpen,settings.candidacies_open!==false);
    const visuals=settings.site_visuals||{};
    const colorKeys=['forest','deep','green','lime','paper','ink','muted','line','soft','gold'];
    const colorLabels={
      forest:french?'Vert forêt':'Forest',
      deep:french?'Vert profond':'Deep green',
      green:french?'Vert principal':'Primary green',
      lime:french?'Vert clair':'Light green',
      paper:french?'Fond':'Page background',
      ink:french?'Texte principal':'Main text',
      muted:french?'Texte secondaire':'Secondary text',
      line:french?'Bordures':'Borders',
      soft:french?'Fond doux':'Soft background',
      gold:french?'Accent doré':'Gold accent'
    };
    settingsForm.append(make('h3','technical-subheading',messages.technicalColors));
    const colorGrid=make('div','technical-color-grid');
    const colorInputs={};
    colorKeys.forEach(key=>{
      const label=make('label','technical-color-field');
      label.append(make('span','',colorLabels[key]));
      const input=document.createElement('input');
      input.type='color';
      input.value=/^#[0-9a-f]{6}$/i.test(visuals[key]||'')?visuals[key]:'#233d33';
      colorInputs[key]=input;
      label.append(input);
      colorGrid.append(label);
    });
    settingsForm.append(colorGrid);
    const logoUrl=addField(messages.technicalLogo,'url',visuals.logo_url||'',{maxLength:1000});
    const heroUrl=addField(messages.technicalHero,'url',visuals.hero_url||'',{maxLength:1000});
    const slogan=addField(messages.technicalSlogan,'text',visuals.slogan||'Être · Faire · Agir',{maxLength:120});
    settingsForm.append(make('h3','technical-subheading',messages.technicalBackupsTitle));
    const backupsEnabled=addCheckbox(messages.technicalBackupsEnable,settings.backup_enabled===true);
    backupsEnabled.disabled=(!technicalBackupsReady||!technicalSecretsReady||!technicalScheduleCheckAvailable)
      &&settings.backup_enabled!==true;
    const frequency=addSelect(messages.technicalFrequency,['daily','weekly','monthly'],settings.backup_frequency||'daily');
    const backupTime=addField(messages.technicalTime,'time',settings.backup_time||'02:00');
    const retention=addField(messages.technicalRetention,'number',settings.backup_retention||10,{min:10,max:100});
    if(!technicalBackupsReady||!technicalSecretsReady||!technicalScheduleCheckAvailable){
      settingsForm.append(make('p','site-admin-note',messages.technicalBackupUnavailable));
    }
    const settingsFeedback=make('p','site-status');
    settingsFeedback.hidden=true;
    const settingsSave=make('button','primary','');
    settingsSave.type='submit';
    settingsSave.textContent=messages.technicalSave;
    settingsForm.append(settingsFeedback,settingsSave);
    settingsForm.addEventListener('input',()=>{settingsForm.dataset.dirty='true'});
    settingsForm.addEventListener('change',()=>{settingsForm.dataset.dirty='true'});
    settingsForm.addEventListener('submit',async event=>{
      event.preventDefault();
      settingsSave.disabled=true;
      const next={
        ideas_open:ideasOpen.checked,
        candidacies_open:candidaciesOpen.checked,
        site_visuals:{
          ...visuals,
          ...Object.fromEntries(colorKeys.map(key=>[key,colorInputs[key].value])),
          logo_url:logoUrl.value.trim(),
          hero_url:heroUrl.value.trim(),
          slogan:slogan.value.trim()
        },
        backup_enabled:backupsEnabled.checked,
        backup_frequency:frequency.value,
        backup_time:backupTime.value,
        backup_retention:Number(retention.value)
      };
      try{
        const {error}=await panelClient.rpc('update_technical_settings',{p_settings:next});
        if(error)throw error;
        delete settingsForm.dataset.dirty;
        setSuccess(settingsFeedback,messages.technicalSaved);
        const backupsActive=backupsEnabled.checked;
        backupStatus.indicator.className=backupsActive?'technical-status-ok':'technical-status-pending';
        backupStatus.indicator.textContent=backupsActive
          ?`${messages.technicalScheduleConfigured} · ${frequency.value} · ${backupTime.value}`
          :`${messages.technicalStatusDisabled} · ${french?'Désactivées':'Disabled'}`;
        backupStatus.help.textContent=backupsActive?'':messages.technicalScheduleSetupHelp;
        backupStatus.help.hidden=backupsActive;
        if(backupsActive)backupsEnabled.disabled=false;
        await refreshPublicSiteSettings();
      }catch(error){
        reportError(error);
        setError(settingsFeedback,error);
      }finally{settingsSave.disabled=false}
    });
    settingsSection.append(settingsForm);
    technicalPanels.settings.append(settingsSection);

    const accessSection=make('section','card technical-panel-section');
    accessSection.append(
      make('h2','',messages.technicalAccessTitle),
      make('p','site-admin-note',messages.technicalAccessIntro)
    );
    const accessForm=make('form','admin-portal-edit-form technical-access-form');
    const accessEmail=make('label','technical-field');
    accessEmail.append(make('span','',messages.technicalEmail));
    const emailInput=document.createElement('input');
    emailInput.type='email';
    emailInput.required=true;
    emailInput.autocomplete='email';
    emailInput.maxLength=254;
    accessEmail.append(emailInput);
    const accessRole=make('label','technical-field');
    accessRole.append(make('span','',messages.technicalRole));
    const roleSelect=document.createElement('select');
    ['admin','technical'].forEach((value,index)=>{
      const option=make('option','',messages.technicalRoles[index]);
      option.value=value;
      roleSelect.append(option);
    });
    accessRole.append(roleSelect);
    const accessFeedback=make('p','site-status');
    accessFeedback.hidden=true;
    const accessSubmit=make('button','primary',messages.technicalAddAccess);
    accessSubmit.type='submit';
    accessForm.append(accessEmail,accessRole,accessFeedback,accessSubmit);
    accessForm.addEventListener('input',()=>{accessForm.dataset.dirty='true'});
    accessForm.addEventListener('change',()=>{accessForm.dataset.dirty='true'});
    accessForm.addEventListener('submit',async event=>{
      event.preventDefault();
      accessSubmit.disabled=true;
      try{
        const {error}=await panelClient.rpc('manage_cdecc_access',{
          p_email:emailInput.value.trim(),
          p_role:roleSelect.value
        });
        if(error)throw error;
        emailInput.value='';
        delete accessForm.dataset.dirty;
        setSuccess(accessFeedback,messages.technicalSaved);
        await loadTechnicalPanel(panelClient,panel);
      }catch(error){
        reportError(error);
        setError(accessFeedback,error);
      }finally{accessSubmit.disabled=false}
    });
    const accessTable=make('div','technical-access-list');
    (accessList||[]).forEach(entry=>{
      const row=make('div','technical-access-row');
      const identity=make('div','');
      identity.append(make('strong','',entry.email),make('span','',messages.technicalRoles[entry.role==='technical'?1:0]));
      const controls=make('div','technical-access-actions');
      const rowRole=document.createElement('select');
      ['admin','technical'].forEach((value,index)=>{
        const option=make('option','',messages.technicalRoles[index]);
        option.value=value;
        option.selected=value===entry.role;
        rowRole.append(option);
      });
      row.addEventListener('change',()=>{row.dataset.dirty='true'});
      const updateRole=button(messages.save,'technical-access-update');
      updateRole.addEventListener('click',async()=>{
        updateRole.disabled=true;
        try{
          const {error}=await panelClient.rpc('manage_cdecc_access',{p_email:entry.email,p_role:rowRole.value});
          if(error)throw error;
          await loadTechnicalPanel(panelClient,panel);
        }catch(error){reportError(error);setError(accessFeedback,error)}
        finally{updateRole.disabled=false}
      });
      const removeAccess=button(messages.technicalRemoveAccess,'technical-access-remove');
      removeAccess.addEventListener('click',async()=>{
        if(!window.confirm(messages.technicalConfirmRemoveAccess))return;
        removeAccess.disabled=true;
        try{
          const {error}=await panelClient.rpc('manage_cdecc_access',{p_email:entry.email,p_role:null});
          if(error)throw error;
          await loadTechnicalPanel(panelClient,panel);
        }catch(error){reportError(error);setError(accessFeedback,error)}
        finally{removeAccess.disabled=false}
      });
      controls.append(rowRole,updateRole,removeAccess);
      row.append(identity,controls);
      accessTable.append(row);
    });
    if(!accessList?.length)accessTable.append(make('p','site-empty-state',messages.technicalNoAccess));
    accessSection.append(accessForm,accessTable);
    technicalPanels.access.append(accessSection);

    const logsSection=make('section','card technical-panel-section');
    logsSection.append(make('h2','',messages.technicalLogsTitle));
    const {data:logs,error:logsError}=await panelClient.rpc('get_technical_logs',{p_limit:300});
    if(logsError)throw logsError;
    if(logs?.length){
      const table=make('table','admin-audit-table');
      const head=document.createElement('thead');
      const headerRow=document.createElement('tr');
      [messages.technicalLogTime,messages.technicalLogUser,messages.technicalLogIp,
        messages.technicalLogAction,messages.technicalLogEntity,messages.technicalLogDetails]
        .forEach(label=>headerRow.append(make('th','',label)));
      head.append(headerRow);
      const body=document.createElement('tbody');
      logs.forEach(entry=>{
        const row=document.createElement('tr');
        [
          formatDate(entry.occurred_at),
          entry.actor_email,
          entry.actor_ip||'—',
          entry.action,
          entry.entity,
          JSON.stringify(entry.details||{})
        ].forEach(value=>row.append(make('td','',String(value||''))));
        body.append(row);
      });
      table.append(head,body);
      const wrapper=make('div','admin-audit-table-wrap');
      wrapper.append(table);
      logsSection.append(wrapper);
    }else logsSection.append(make('p','site-empty-state',messages.technicalNoLogs));
    technicalPanels.logs.append(logsSection);

    const backupsSection=make('section','card technical-panel-section');
    backupsSection.append(make('h2','',messages.technicalBackupsList));
    const backupFeedback=make('p','site-status');
    backupFeedback.hidden=true;
    const runBackup=button(messages.technicalRunBackup,'technical-backup-create','primary');
    runBackup.disabled=!technicalBackupsReady;
    if(!technicalBackupsReady)backupFeedback.textContent=messages.technicalFunctionSetupHelp;
    backupFeedback.hidden=technicalBackupsReady;
    runBackup.addEventListener('click',async()=>{
      runBackup.disabled=true;
      try{
        const {error}=await panelClient.functions.invoke('technical-backup',{body:{action:'create'}});
        if(error)throw error;
        setSuccess(backupFeedback,messages.technicalBackupCreated);
        await loadTechnicalPanel(panelClient,panel);
      }catch(error){reportError(error);setError(backupFeedback,error)}
      finally{runBackup.disabled=false}
    });
    backupsSection.append(backupFeedback,runBackup);
    const {data:backups,error:backupsError}=await panelClient.from('technical_backups')
      .select('id,created_at,created_by,status,manifest,error_message')
      .order('created_at',{ascending:false}).limit(100);
    if(backupsError)throw backupsError;
    const backupsList=make('div','technical-backup-list');
    (backups||[]).forEach(backup=>{
      const row=make('article','technical-backup-row');
      const info=make('div','');
      const fileCount=Array.isArray(backup.manifest)?backup.manifest.length:0;
      info.append(
        make('strong','',formatDate(backup.created_at)),
        make('span','',`${backup.created_by} · ${backup.status} · ${fileCount} ${french?'fichiers':'files'}`)
      );
      if(backup.error_message)info.append(make('p','site-status',backup.error_message));
      const controls=make('div','technical-backup-actions');
      if(backup.status==='complete'){
        const restore=button(messages.technicalRestoreBackup,'technical-backup-restore');
        restore.disabled=!technicalBackupsReady;
        restore.addEventListener('click',async()=>{
          if(!window.confirm(messages.technicalConfirmRestoreBackup))return;
          restore.disabled=true;
          try{
            const {error}=await panelClient.functions.invoke('technical-backup',{body:{action:'restore',id:backup.id}});
            if(error)throw error;
            setSuccess(backupFeedback,messages.technicalBackupRestored);
            window.setTimeout(()=>window.location.reload(),1200);
          }catch(error){reportError(error);setError(backupFeedback,error)}
          finally{restore.disabled=false}
        });
        controls.append(restore);
      }
      const remove=button(messages.technicalDeleteBackup,'technical-backup-delete');
      remove.disabled=!technicalBackupsReady;
      remove.addEventListener('click',async()=>{
        if(!window.confirm(messages.technicalConfirmDeleteBackup))return;
        remove.disabled=true;
        try{
          const {error}=await panelClient.functions.invoke('technical-backup',{body:{action:'delete',id:backup.id}});
          if(error)throw error;
          setSuccess(backupFeedback,messages.technicalBackupDeleted);
          await loadTechnicalPanel(panelClient,panel);
        }catch(error){reportError(error);setError(backupFeedback,error)}
        finally{remove.disabled=false}
      });
      controls.append(remove);
      row.append(info,controls);
      backupsList.append(row);
    });
    if(!backups?.length)backupsList.append(make('p','site-empty-state',messages.technicalNoLogs));
    backupsSection.append(backupsList);
    technicalPanels.backups.append(backupsSection);
  };
  const loadPanel=async name=>{
    try{
      state.hidden=true;
      if(name==='proposals')await loadProposals();
      else if(name==='vote')await loadVoteSettings();
      else if(name==='candidates')await loadCandidates();
      else if(name==='members')await loadMembers();
      else if(name==='logs')await loadLogs();
    }catch(error){setError(state,error);reportError(error)}
  };
  let publicIdeasRefreshInProgress=false;
  let publicIdeasRefreshRequested=false;
  const refreshPublicIdeas=async()=>{
    if(!client)return;
    if(publicIdeasRefreshInProgress){
      publicIdeasRefreshRequested=true;
      return;
    }
    publicIdeasRefreshInProgress=true;
    try{
      do{
        publicIdeasRefreshRequested=false;
        try{
          const {data,error}=await client.from('suggestions').select('*').eq('status','approved').order('created_at',{ascending:false});
          if(error)reportError(error);
          else window.cdeccApplyRemoteSuggestions?.(data||[]);
        }catch(error){
          reportError(error);
        }
      }while(publicIdeasRefreshRequested);
    }finally{
      publicIdeasRefreshInProgress=false;
    }
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
  const refreshPublicMembers=async()=>{
    if(!client)return;
    try{
      const {data,error}=await client.from('member_profiles')
        .select('slot_key,display_name,group_label,photo_path');
      if(error)throw error;
      const profiles=(data||[]).map(profile=>({
        ...profile,
        photo_url:profile.photo_path
          ?client.storage.from('member-photos').getPublicUrl(profile.photo_path).data.publicUrl
          :''
      }));
      window.cdeccApplyRemoteMembers?.(profiles);
    }catch(error){
      reportError(error);
      window.cdeccSetMemberLoadError?.(messages.memberLoadError);
    }
  };
  const refreshPublicSiteSettings=async()=>{
    if(!client)return;
    try{
      const {data,error}=await client.from('site_public_settings')
        .select('ideas_open,candidacies_open,site_visuals').single();
      if(error)throw error;
      window.cdeccApplyRemoteSiteSettings?.(data);
    }catch(error){reportError(error)}
  };
  let publicCandidatesRefreshRequest=0;
  const refreshPublicCandidates=async()=>{
    if(!client)return;
    const request=++publicCandidatesRefreshRequest;
    const {data,error}=await client.from('candidacies').select('*').eq('status','approved').order('created_at',{ascending:false});
    if(error){reportError(error);return}
    if(request!==publicCandidatesRefreshRequest)return;
    applyApprovedCandidates(data);
  };
  let publicVoteSettingsRefreshRequest=0;
  const refreshPublicVoteSettings=async()=>{
    if(!client)return;
    const request=++publicVoteSettingsRefreshRequest;
    const {data,error}=await client.from('vote_settings').select('*').eq('singleton',true).maybeSingle();
    if(error){reportError(error);return}
    if(request!==publicVoteSettingsRefreshRequest)return;
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
    const grade=form.querySelector('#suggestion-grade')?.value;
    const status=form.querySelector('.site-status');
    try{
      if(!title||!details||!category||!['1','2','3','4','5','general'].includes(grade||''))throw new Error(messages.saveError);
      const {error}=await client.from('suggestions').insert({title,details,category,grade});
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
      form.querySelector('.candidate-image-crop-canvas').hidden=true;
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
    const technicalLoginButton=event.target.closest('[data-portal-action="technical-sign-in"]');
    if(technicalLoginButton&&technicalClient){
      technicalLoginButton.disabled=true;
      startTechnicalSignIn().catch(error=>{
        setError(technicalLoginError,error);
        reportError(error);
      }).finally(()=>{technicalLoginButton.disabled=false});
      return;
    }
    const technicalLogoutButton=event.target.closest('[data-portal-action="technical-sign-out"]');
    if(technicalLogoutButton&&technicalClient){
      technicalLogoutButton.disabled=true;
      signOutTechnicalUser().finally(()=>{technicalLogoutButton.disabled=false});
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
    const items=Array.from(tabs.querySelectorAll('[role=tab]')).filter(item=>!item.hidden);
    if(!items.length)return;
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
    try{
      const {data,error}=await client.rpc('get_cdecc_access');
      if(error)throw error;
      if(data?.is_admin!==true){
        await client.auth.signOut();
        return;
      }
      await loadPanel(currentTab);
    }
    catch(error){setError(authError,error);reportError(error)}
    finally{periodicRefreshTab=null;adminRefreshInFlight=false}
  };
  const updateSignedIn=async(session,recordSignIn=false)=>{
    const user=session?.user;
    if(user&&user.app_metadata?.provider!=='google'){
      await client.auth.signOut();
      setError(authError,new Error(messages.adminLoginDenied));
      currentUser=null;
    }else if(user){
      try{
        const {data,error}=await client.rpc('get_cdecc_access');
        if(error)throw error;
        if(data?.is_admin!==true){
          await client.auth.signOut();
          setError(authError,new Error(messages.adminLoginDenied));
          currentUser=null;
        }else{
          currentUser=user;
        }
      }catch(error){
        reportError(error);
        setError(authError,new Error(messages.accessCheckFailed));
        currentUser=null;
        await client.auth.signOut();
      }
    }else{
      currentUser=null;
    }
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
        await refreshPublicMembers();
        await refreshPublicCandidates();
        await refreshPublicSiteSettings();
      }catch(error){setError(authError,error);reportError(error)}
    }
  };
  const updateTechnicalSignedIn=async(session,recordSignIn=false)=>{
    const user=session?.user;
    if(!user){
      technicalUser=null;
      technicalIdentity.textContent='';
      technicalAuthBar.hidden=true;
      technicalSignOut.hidden=true;
      technicalLogin.hidden=false;
      technicalPanelContent.hidden=true;
      return;
    }
    try{
      if(user.app_metadata?.provider!=='google'){
        await technicalClient.auth.signOut();
        throw new Error(messages.loginDenied);
      }
      const {data:allowed,error}=await technicalClient.rpc('is_cdecc_technical_admin');
      if(error)throw error;
      if(allowed!==true){
        await technicalClient.auth.signOut();
        throw new Error(messages.loginDenied);
      }
      technicalUser=user;
      technicalIdentity.textContent=user.email||'';
      technicalAuthBar.hidden=false;
      technicalSignOut.hidden=false;
      technicalLogin.hidden=true;
      technicalPanelContent.hidden=false;
      technicalLoginError.hidden=true;
      if(recordSignIn){
        const {error:logError}=await technicalClient.rpc('record_technical_event',{
          p_action:'sign_in',
          p_entity:'authentication',
          p_details:{},
          p_actor_email:user.email||null
        });
        if(logError)throw logError;
      }
      await loadTechnicalPanel(technicalClient,technicalPanelContent);
    }catch(error){
      technicalUser=null;
      technicalIdentity.textContent='';
      technicalAuthBar.hidden=true;
      technicalSignOut.hidden=true;
      technicalLogin.hidden=false;
      technicalPanelContent.hidden=true;
      const message=error?.message===messages.loginDenied
        ?messages.loginDenied
        :error?.message||messages.accessCheckFailed;
      setError(technicalLoginError,new Error(message));
      reportError(error);
      if(session?.user)await technicalClient.auth.signOut();
    }
  };
  const startTechnicalSignIn=async()=>{
    const redirect=new URL(window.location.href);
    redirect.searchParams.set('portal','technical');
    redirect.hash='';
    const {error}=await technicalClient.auth.signInWithOAuth({
      provider:'google',
      options:{redirectTo:redirect.toString()}
    });
    if(error)throw error;
  };
  const signOutTechnicalUser=async()=>{
    try{
      if(technicalUser){
        const {error}=await technicalClient.rpc('record_technical_event',{
          p_action:'sign_out',
          p_entity:'authentication',
          p_details:{},
          p_actor_email:technicalUser.email||null
        });
        if(error)throw error;
      }
    }catch(error){
      reportError(error);
      setError(technicalLoginError,error);
    }
    const {error}=await technicalClient.auth.signOut();
    if(error){
      reportError(error);
      setError(technicalLoginError,error);
    }
    await updateTechnicalSignedIn(null);
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
    technicalSignIn.hidden=true;
    setError(technicalLoginError,new Error(messages.accessCheckFailed));
  }else{
    loginRequired.hidden=false;
    void refreshPublicIdeas();
    void refreshPublicSiteSettings();
    const publicIdeasRefreshInterval=window.setInterval(()=>{
      if(!document.hidden){
        void refreshPublicIdeas();
        void refreshPublicMembers();
        void refreshPublicSiteSettings();
      }
    },30000);
    window.addEventListener('beforeunload',()=>window.clearInterval(publicIdeasRefreshInterval));
    client.auth.onAuthStateChange((event,session)=>{window.setTimeout(()=>updateSignedIn(session,event==='SIGNED_IN'),0)});
    technicalClient.auth.onAuthStateChange((event,session)=>{
      window.setTimeout(()=>updateTechnicalSignedIn(session,event==='SIGNED_IN'),0);
    });
    client.auth.getSession().then(({data,error})=>{
      if(error){
        setError(authError,error);
        reportError(error);
        if(authCallbackError&&!technicalPortalRequested){showAuthCallbackError();cleanAuthCallbackUrl()}
        return;
      }
      if(authCallbackError&&!technicalPortalRequested){showAuthCallbackError();cleanAuthCallbackUrl()}
      updateSignedIn(data.session);
      refreshPublicSiteSettings();
      refreshPublicIdeas();
      refreshPublicMembers();
      refreshPublicCandidates();
      refreshPublicVoteSettings();
    }).catch(error=>{setError(authError,error);reportError(error)});
    technicalClient.auth.getSession().then(({data,error})=>{
      if(error){
        setError(technicalLoginError,error);
        reportError(error);
      }else if(authCallbackError&&technicalPortalRequested){
        const message=authCallbackError==='signup_disabled'?messages.signupDisabled:
          authCallbackError==='access_denied'?messages.loginDenied:messages.authError;
        setError(technicalLoginError,new Error(message));
        cleanAuthCallbackUrl();
        void updateTechnicalSignedIn(data.session);
      }else{
        void updateTechnicalSignedIn(data.session).then(()=>{
          if(technicalPortalRequested)cleanAuthCallbackUrl();
        });
      }
    }).catch(error=>{
      setError(technicalLoginError,error);
      reportError(error);
    });
  }
  const adminRefreshInterval=window.setInterval(()=>{
    if(currentUser && !document.hidden){
      refreshAdminView();
    }
  },15000);
  window.addEventListener('beforeunload',()=>window.clearInterval(adminRefreshInterval));
  const technicalRefreshInterval=window.setInterval(async()=>{
    if(!technicalUser||document.hidden||!technicalPage.classList.contains('active'))return;
    try{
      const {data,error}=await technicalClient.rpc('is_cdecc_technical_admin');
      if(error)throw error;
      if(data!==true){
        setError(technicalLoginError,new Error(messages.loginDenied));
        await technicalClient.auth.signOut();
      }
    }catch(error){
      reportError(error);
      setError(technicalLoginError,error);
      await technicalClient.auth.signOut();
    }
  },15000);
  window.addEventListener('beforeunload',()=>window.clearInterval(technicalRefreshInterval));
  document.addEventListener('click',event=>{
    const pageButton=event.target.closest('[data-page]');
    if(!pageButton)return;
    const page=pageButton.dataset.page;
    if(page==='projects')window.setTimeout(refreshPublicIdeas,0);
    if(page==='people')window.setTimeout(refreshPublicMembers,0);
    if(page==='vote')window.setTimeout(refreshPublicCandidates,0);
  });
  window.addEventListener('cdecc:language-change',()=>{
    window.location.reload();
  });
})();
