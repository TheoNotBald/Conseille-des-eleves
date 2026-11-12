(()=>{
  const storageKey='cdecc.suggestions.v1';
  const supportedStatuses=new Set(['pending','approved','rejected']);
  const copy={
    fr:{
      brand:'Conseil des élèves',
      heroTitle:'Bienvenue au Conseil des élèves du Collège Citoyen',
      heroText:'Le CDECC donne aux élèves une voix pour partager leurs idées, discuter des besoins de leur classe et contribuer à des projets qui améliorent la vie scolaire.',
      homeTitle:'Des idées pour faire avancer notre école.',
      homeText:'Comprendre comment les élèves se représentent, échangent et font avancer leurs propositions au Collège Citoyen.',
      missionTitle:'Notre mission',
      missionText:'Le Conseil des élèves rassemble les voix de toute l’école. Ensemble, les élèves écoutent les besoins de leur communauté, proposent des idées et collaborent pour transformer les meilleures propositions en actions concrètes.',
      completedTitle:'Projets terminés',
      completedIntro:'Des idées proposées par les élèves, réalisées ensemble pour améliorer la vie à l’école.',
      projectDetails:'Découvrir le projet',
      projectBack:'Retour aux projets terminés',
      moreInfo:'Découvrir plus →',
      untitledProject:'Projet sans titre',
      projectDescriptionUnavailable:'Aucune description disponible pour ce projet.',
      voteTemplateTitle:'La boîte de vote',
      voteTemplateText:'Aucun vote n’est ouvert ni enregistré pour le moment.',
      voteOptionOne:'Option de vote à définir',
      voteOptionTwo:'Une autre option à définir',
      voteDisabled:'Le vote en ligne n’est pas encore disponible.',
      votePageTitle:'Système du vote',
      votePageIntro:'Découvrez les équipes candidates. Le vote n’est pas encore ouvert.',
      voteTeamMore:'Plus d’information →',
      voteTeamBack:'Retour au vote',
      voteTeamImageAlt:'Photo de l’équipe candidate',
      voteSubmit:'Voter',
      voteReleaseNote:'Le vote n’est pas encore ouvert. Le bouton sera activé lorsque le scrutin sera officiellement lancé.',
      candidatePageTitle:'Les candidatures',
      candidatePageText:'Les renseignements sur les candidatures et les personnes candidates seront publiés lorsque le processus sera confirmé.',
      candidateInfoTitle:'Se présenter au Conseil des élèves',
      candidateInfoText:'Les dates, les critères et les façons de déposer une candidature restent à confirmer avec l’école.',
      candidatePending:'Aucune candidature ni aucun résultat officiel n’est publié pour le moment.',
      voteNoCandidates:'Aucune équipe candidate publiée',
      voteNoCandidatesText:'Les candidatures approuvées apparaîtront ici.',
      navIdeas:'Idées',
      navCandidates:'Candidature',
      navMembers:'Membres',
      charterTemplateNote:'La charte doit être révisée et approuvée par l’école avant son adoption.',
      charterArticleOne:'Article 1',
      charterArticleTwo:'Article 2',
      charterSectionOne:'1.1',
      charterSectionOneTitle:'Objet et principes',
      charterSectionOneText:'Le Conseil des élèves a pour mission de représenter les élèves, de favoriser leur participation à la vie scolaire et de transmettre leurs idées. Ses membres agissent avec respect, équité, écoute et souci du bien commun, dans le cadre des règles de l’école.',
      charterSectionTwo:'1.2',
      charterSectionTwoTitle:'Composition et représentation',
      charterSectionTwoText:'Le Conseil est composé de représentants des classes et de membres responsables de la coordination. Chaque représentant consulte les élèves qu’il représente et transmet fidèlement leurs questions et propositions. Le mode de sélection, la durée des mandats et les postes doivent être définis avec l’école.',
      charterSectionThree:'1.3',
      charterSectionThreeTitle:'Fonctions et responsabilités',
      charterSectionThreeText:'Les représentants recueillent les idées, participent aux rencontres et rendent compte des échanges à leurs classes. Les membres coordonnateurs préparent les réunions et assurent le suivi des propositions. Le Conseil formule des avis et des projets; toute décision demeure soumise aux responsabilités et à l’approbation de l’école.',
      charterSectionFour:'1.4',
      charterSectionFourTitle:'Réunions et décisions',
      charterSectionFourText:'Le Conseil se réunit selon un calendrier établi avec l’école. Les membres cherchent d’abord à parvenir à un consensus; à défaut, une méthode de vote approuvée peut être utilisée. Les décisions, les suivis et les responsabilités sont consignés. Le quorum et les règles de vote restent à déterminer.',
      charterSectionFive:'1.5',
      charterSectionFiveTitle:'Transparence, révision et adoption',
      charterSectionFiveText:'Le Conseil communique aux élèves les sujets abordés et l’état des propositions, tout en protégeant les renseignements personnels. La présente charte entre en vigueur uniquement après révision et approbation par l’école. Ses règles de modification doivent être établies avant son adoption.',
      charterArticleTwoSectionOne:'2.1',
      charterArticleTwoSectionOneTitle:'Mandats et renouvellement',
      charterArticleTwoSectionOneText:'La durée des mandats, les conditions de renouvellement et le calendrier de sélection des représentants sont établis avec l’école et communiqués aux élèves avant chaque processus.',
      charterArticleTwoSectionTwo:'2.2',
      charterArticleTwoSectionTwoTitle:'Vacance et remplacement',
      charterArticleTwoSectionTwoText:'Lorsqu’un poste devient vacant, un processus de remplacement équitable est déterminé avec l’école. Le représentant intérimaire, s’il y a lieu, exerce les responsabilités jusqu’à la désignation d’un nouveau membre.',
      charterArticleTwoSectionThree:'2.3',
      charterArticleTwoSectionThreeTitle:'Participation aux réunions',
      charterArticleTwoSectionThreeText:'Les membres contribuent aux échanges, examinent les propositions et déclarent toute absence selon les modalités fixées par le Conseil. Les règles de quorum sont précisées avant que des décisions soient prises.',
      charterArticleTwoSectionFour:'2.4',
      charterArticleTwoSectionFourTitle:'Modification de la charte',
      charterArticleTwoSectionFourText:'Toute modification proposée est présentée aux membres et examinée avec l’école. Une modification entre en vigueur uniquement après approbation selon la procédure qui aura été adoptée.',
      charterArticleTwoSectionFive:'2.5',
      charterArticleTwoSectionFiveTitle:'Interprétation et conformité',
      charterArticleTwoSectionFiveText:'La charte est interprétée conformément aux politiques et aux règles de l’école. En cas de conflit, les règles de l’école prévalent et le Conseil consulte la personne responsable désignée.',
      homeLevelsTitle:'Les Conseils de niveau',
      homeLevelsText:'Les élèves de chaque classe choisissent leur représentant. Les représentants d’un même niveau se réunissent chaque semaine pour écouter les besoins, discuter des enjeux et transmettre les sujets qui concernent l’ensemble de l’école.',
      homeAssemblyTitle:'L’Assemblée citoyenne',
      homeAssemblyText:'La représentation des élèves à l’échelle de l’école permet de discuter des propositions, d’évaluer leur faisabilité et de coordonner des projets avec l’administration scolaire.',
      structureProposal:'Structure proposée · certaines modalités restent à confirmer',
      learnLevels:'Découvrir les cinq niveaux',
      learnAssembly:'Rôles de l’Assemblée',
      learnElections:'Comprendre les élections',
      stepLabel:'Étape',
      levelPageTitle:'Les Conseils de niveau',
      levelPageText:'La représentation commence dans chaque classe. Les représentants se réunissent avec les autres classes de leur niveau.',
      levelOne:'Secondaire 1',
      levelTwo:'Secondaire 2',
      levelThree:'Secondaire 3',
      levelFour:'Secondaire 4',
      levelFive:'Secondaire 5',
      weeklyMeeting:'Réunion une fois par semaine',
      meetingDay:'Le jour de rencontre est choisi avec les élèves et l’Assemblée citoyenne.',
      classRepresentative:'Représentant de classe',
      classElection:'Élu par les élèves de sa classe',
      levelTopics:'Échange sur les idées et les enjeux du niveau',
      levelMembersPending:'Les noms des représentants seront ajoutés après confirmation.',
      levelSchedulePending:'Jour et heure à confirmer avec les élèves et l’Assemblée citoyenne.',
      levelResponsibilities:'Les représentants recueillent les propositions des élèves, discutent des enjeux du niveau, choisissent les sujets à transmettre à l’Assemblée et partagent les nouvelles avec leur classe.',
      assemblyPageTitle:'L’Assemblée citoyenne',
      assemblyPageText:'La représentation à l’échelle de l’école réunit les propositions portées par les Conseils de niveau.',
      assemblyPurposeTitle:'Son rôle dans le CDECC',
      assemblyPurposeText:'Discuter des préoccupations, évaluer les propositions, coordonner les projets et transmettre les décisions ou recommandations à l’administration scolaire. Une proposition n’est pas automatiquement approuvée; les suites dépendent des règles et des responsabilités établies par l’école.',
      assemblyMeeting:'Rencontre une fois par mois',
      assemblyMeetingDay:'La rencontre mensuelle a lieu le jour utilisé pour les réunions hebdomadaires des Conseils de niveau.',
      assemblyComposition:'La composition de l’Assemblée et la sélection de chaque titulaire de poste restent à confirmer.',
      rolePresident:'Président',
      rolePresidentText:'Dirige les réunions et coordonne les travaux de l’Assemblée.',
      leadreps:'Assemblée citoyenne',
      leadsub:'Les membres seront présentés lorsque leur sélection sera confirmée.',
      classreps:'Représentants de classe',
      classsub:'Les représentants seront présentés lorsque leur sélection sera confirmée.',
      roleVicePresident:'Vice-président',
      roleVicePresidentText:'Remplace la présidence au besoin et apporte un second point de vue.',
      roleSecretary:'Secrétaire',
      roleSecretaryText:'Consigne les comptes rendus, les décisions et les renseignements importants.',
      roleTreasurer:'Trésorier',
      roleTreasurerText:'Suit les dossiers financiers et les budgets proposés, selon les règles de l’école.',
      roleLowSpokesperson:'Parole étudiante',
      roleHighSpokesperson:'Parole administrative',
      roleLowSpokespersonText:'Recueille les idées et préoccupations des élèves et les transmet à l’Assemblée.',
      roleHighSpokespersonText:'Partage avec les élèves les nouvelles et les suivis de l’Assemblée.',
      memberProfilesTitle:'Membres de l’Assemblée Citoyenne',
      memberSecondaryRepsTitle:'Représentants du secondaire',
      memberPhotoPlaceholder:'Photo à venir',
      memberNamePlaceholder:'Nom à confirmer',
      provisionalRole:'Responsabilités à préciser avec les organisateurs.',
      roleExperts:'Évaluateurs / experts',
      roleExpertsText:'Un ou plusieurs membres évaluent les propositions, apportent leur expertise et contribuent à examiner leur faisabilité.',
      provisionalLabel:'Rôle proposé · à préciser',
      trainingTitle:'Formation et ressources',
      trainingText:'Des ressources de formation doivent accompagner les responsabilités de chaque poste.',
      trainingPending:'Les documents, les normes par rôle et l’acronyme mentionné dans le document de planification restent à confirmer. Aucun acronyme ni aucune exigence n’est présumé ici.',
      trainingMeetings:'Préparer et tenir une réunion',
      trainingProposals:'Présenter et évaluer une proposition',
      trainingMinutes:'Consigner les décisions et transmettre les suivis',
      electionPageTitle:'Élections et vote',
      electionPageText:'Les renseignements seront publiés lorsque les modalités auront été établies et confirmées par les organisateurs.',
      classElectionTitle:'Élection dans chaque classe',
      classElectionText:'Les élèves de chaque classe choisissent leur représentant par un vote de classe.',
      schoolElectionTitle:'Élection générale à l’échelle de l’école',
      schoolElectionText:'La proposition prévoit également un vote scolaire pour l’Assemblée citoyenne. Les rôles soumis au vote et le lien entre les deux élections restent à confirmer.',
      electionRelationTitle:'Décision à confirmer',
      electionRelationText:'Il reste à déterminer si les élèves votent pour chaque poste de l’Assemblée, si certains postes sont choisis par les représentants des classes, ou si une combinaison de méthodes est utilisée.',
      electionInfoTitle:'Renseignements à publier',
      electionDates:'Annonces et dates',
      electionCandidates:'Candidatures et propositions',
      electionRules:'Admissibilité et règles de vote',
      electionResults:'Résultats confirmés officiellement',
      electionVacancies:'Postes vacants et remplacements',
      noElectionInfo:'Aucun calendrier, aucune candidature et aucun résultat ne sont publiés pour le moment.',
      partiesTitle:'Groupes ou « partis »',
      partiesText:'Le sens du terme « partis » reste à clarifier. Aucune affiliation ne sera exigée tant que les organisateurs n’auront pas défini cette règle.',
      noPowerClaim:'L’Assemblée formule des propositions et recommandations dans le cadre de responsabilités qui restent à confirmer. Elle ne remplace pas l’administration scolaire.',
      noMembers:'Les responsables et les membres seront présentés une fois leur sélection confirmée.',
      backToLevels:'Voir les Conseils de niveau',
      backToAssembly:'Voir l’Assemblée citoyenne',
      cdeccFlowLabel:'Le parcours d’une idée au CDECC',
      cdeccName:'Conseil des élèves du Collège Citoyen',
      statusProposed:'Proposition à confirmer',
      classVoice:'Les élèves font entendre leurs idées dans leur classe.',
      emptyNewsTitle:'Aucune nouvelle publiée',
      emptyProjectsTitle:'Aucun projet approuvé',
      meetingScheduleNote:'Aucun jour de réunion n’est fixé ici : il sera choisi avec les élèves et l’Assemblée citoyenne.',
      voteDisabledLabel:'Aucun vote en ligne',
      navCharter:'Charte',
      navLevels:'Niveaux',
      navAssembly:'Assemblée',
      navResources:'Ressources',
      navVote:'Vote',
      home:'Accueil',
      projects:'Idées',
      elections:'Candidature',
      participate:'Participer',
      news:'Actualités',
      shareIdea:'Proposer une idée',
      viewProjects:'Découvrir les projets',
      latestNews:'Actualités',
      noProjectsTitle:'Aucun projet pour le moment',
      noProjectsText:'Les projets approuvés par le Conseil des élèves apparaîtront ici.',
      noNewsTitle:'Aucune actualité pour le moment',
      noNewsText:'Les actualités, les mises à jour des projets terminés et les comptes rendus approuvés seront publiés ici lorsqu’ils seront disponibles.',
      peopleTitle:'Représentants',
      peopleText:'Les représentants assurent le lien entre les classes et le Conseil des élèves.',
      projectIntro:'Les idées approuvées par le Conseil des élèves sont réunies ici.',
      markCompleted:'Marquer comme terminé',
      reopenIdea:'Remettre dans Idées',
      completedStatus:'Projet terminé',
      processNote:'Le Conseil partage les nouvelles et le suivi des propositions avec la communauté scolaire.',
      participateTitle:'Une idée pour améliorer la vie à l’école ?',
      participateText:'Décris ta proposition. Après examen, une idée approuvée pourra être mise en vedette sur la page d’accueil.',
      category:'Catégorie',
      chooseCategory:'Choisir une catégorie',
      studentGrade:'Niveau scolaire',
      chooseGrade:'Choisir un niveau',
      gradeOne:'Secondaire 1',
      gradeTwo:'Secondaire 2',
      gradeThree:'Secondaire 3',
      gradeFour:'Secondaire 4',
      gradeFive:'Secondaire 5',
      generalGrade:'Général (tous les niveaux)',
      schoolLife:'Vie à l’école',
      activity:'Activité ou événement',
      sharedSpaces:'Espaces communs',
      other:'Autre',
      ideaTitle:'Titre de la proposition',
      ideaTitlePlaceholder:'Ex. : Aménager un coin lecture',
      details:'Décris ton idée',
      detailsPlaceholder:'Explique ce que tu proposes et en quoi cela aiderait la communauté.',
      submit:'Envoyer la proposition',
      submitted:'La proposition a été enregistrée. Merci de contribuer !',
      submitError:'Impossible d’enregistrer la proposition dans ce navigateur. Réessaie plus tard.',
      required:'Ajoute un titre, une catégorie, un niveau et une description avant l’envoi.',
      adminTitle:'Gestion des propositions',
      adminTab:'Gestion',
      adminText:'Examine les idées reçues et décide lesquelles publier dans les projets.',
      adminNotice:'Accès sans connexion : les propositions restent dans ce navigateur et ne sont pas protégées contre les autres personnes qui l’utilisent. Réservé aux essais avec du contenu non confidentiel.',
      searchSuggestions:'Rechercher une proposition',
      filterPending:'À examiner',
      filterApproved:'Approuvées',
      filterRejected:'Refusées',
      pending:'À examiner',
      approved:'Approuvée',
      rejected:'Refusée',
      approve:'Approuver et publier',
      reject:'Refuser',
      reopen:'Remettre à examiner',
      remove:'Supprimer',
      noSuggestionsTitle:'Aucune proposition dans cette liste',
      noSuggestionsText:'Les nouvelles propositions envoyées par le formulaire apparaîtront ici.',
      noMatchesTitle:'Aucun résultat',
      noMatchesText:'Essaie un autre mot ou change le filtre.',
      savedDate:'Reçue le',
      emptyNewsPanel:'Il n’y a pas encore de nouvelle.',
      panelTitle:'Actualités et projets',
      loadError:'Les propositions enregistrées sont illisibles. Elles n’ont pas été modifiées.',
      saveError:'Les modifications n’ont pas pu être enregistrées dans ce navigateur.',
      storageError:'Le stockage local est indisponible. La proposition n’a pas été enregistrée.',
      projectStatus:'Projet approuvé',
      confirmRemove:'Supprimer définitivement cette proposition de ce navigateur ?',
      priorityHeader:'Priorité de révision',
      priorityHelp:'Seul le langage inapproprié est signalé automatiquement. Les propositions ne sont pas filtrées selon leur lien avec l’école; chaque proposition est examinée par un administrateur.',
      priorityNormal:'Normale',
      priorityYellow:'À vérifier',
      priorityRed:'Signalée',
      priorityManual:'Priorité modifiée manuellement',
      priorityAutomatic:'Automatique (suggestion)',
      prioritySet:'Modifier la priorité de révision',
      priorityReasonSchool:'Aucun langage inapproprié détecté.',
      priorityReasonUnclear:'À examiner par un administrateur.',
      priorityReasonOffTopic:'À examiner par un administrateur.',
      priorityReasonLanguage:'Le langage inapproprié doit être examiné.',
      noCategory:'Sans catégorie'
    },
    en:{
      brand:'Student Council',
      heroTitle:'Welcome to the Collège Citoyen Student Council',
      heroText:'CDECC gives students a voice to share ideas, discuss their class needs, and contribute to projects that improve school life.',
      homeTitle:'Ideas that move our school forward.',
      homeText:'Learn how students are represented, discuss issues, and move proposals forward at Collège Citoyen.',
      missionTitle:'Our mission',
      missionText:'The Student Council brings together voices from across the school. Students listen to their community, share ideas, and work together to turn the best proposals into meaningful action.',
      completedTitle:'Completed projects',
      completedIntro:'Student ideas brought to life together to make school a better place.',
      projectDetails:'Explore this project',
      projectBack:'Back to completed projects',
      moreInfo:'Discover more →',
      untitledProject:'Untitled project',
      projectDescriptionUnavailable:'No description is available for this project.',
      voteTemplateTitle:'The voting booth',
      voteTemplateText:'No vote is currently open or recorded.',
      voteOptionOne:'Voting option to be decided',
      voteOptionTwo:'Another option to be decided',
      voteDisabled:'Online voting is not available yet.',
      votePageTitle:'Voting system',
      votePageIntro:'Explore the candidate teams. Voting is not open yet.',
      voteTeamMore:'More information →',
      voteTeamBack:'Back to voting',
      voteTeamImageAlt:'Candidate team photo',
      voteSubmit:'Vote',
      voteReleaseNote:'Voting is not open yet. This button will be enabled when voting officially begins.',
      candidatePageTitle:'Candidate applications',
      candidatePageText:'Information about candidates and applications will be published once the process is confirmed.',
      candidateInfoTitle:'Run for Student Council',
      candidateInfoText:'Dates, eligibility, and application steps still need to be confirmed with the school.',
      candidatePending:'No candidates or official results are published yet.',
      voteNoCandidates:'No candidate teams have been published',
      voteNoCandidatesText:'Approved candidacies will appear here.',
      navIdeas:'Ideas',
      navCandidates:'Candidates',
      navMembers:'Members',
      charterTemplateNote:'The charter must be reviewed and approved by the school before adoption.',
      charterArticleOne:'Article 1',
      charterArticleTwo:'Article 2',
      charterSectionOne:'1.1',
      charterSectionOneTitle:'Purpose and principles',
      charterSectionOneText:'The Student Council exists to represent students, encourage their participation in school life, and communicate their ideas. Its members act with respect, fairness, careful listening, and concern for the common good, in accordance with school rules.',
      charterSectionTwo:'1.2',
      charterSectionTwoTitle:'Membership and representation',
      charterSectionTwoText:'The Council is made up of class representatives and members responsible for coordination. Each representative consults the students they represent and faithfully brings forward their questions and proposals. Selection methods, term lengths, and positions must be established with the school.',
      charterSectionThree:'1.3',
      charterSectionThreeTitle:'Duties and responsibilities',
      charterSectionThreeText:'Representatives gather ideas, take part in meetings, and report discussions back to their classes. Coordinating members prepare meetings and follow up on proposals. The Council makes recommendations and develops projects; all decisions remain subject to the school’s responsibilities and approval.',
      charterSectionFour:'1.4',
      charterSectionFourTitle:'Meetings and decisions',
      charterSectionFourText:'The Council meets according to a schedule established with the school. Members first seek consensus; if they cannot reach it, an approved voting method may be used. Decisions, follow-up actions, and responsibilities are recorded. Quorum and voting rules still need to be determined.',
      charterSectionFive:'1.5',
      charterSectionFiveTitle:'Transparency, revision, and adoption',
      charterSectionFiveText:'The Council informs students about topics discussed and proposal progress while protecting personal information. This charter takes effect only after review and approval by the school. Rules for amending it must be established before adoption.',
      charterArticleTwoSectionOne:'2.1',
      charterArticleTwoSectionOneTitle:'Terms and renewal',
      charterArticleTwoSectionOneText:'Term lengths, renewal conditions, and the representative selection schedule are established with the school and communicated to students before each process.',
      charterArticleTwoSectionTwo:'2.2',
      charterArticleTwoSectionTwoTitle:'Vacancies and replacement',
      charterArticleTwoSectionTwoText:'When a position becomes vacant, a fair replacement process is determined with the school. Any interim representative serves until a new member is selected.',
      charterArticleTwoSectionThree:'2.3',
      charterArticleTwoSectionThreeTitle:'Participation in meetings',
      charterArticleTwoSectionThreeText:'Members contribute to discussions, review proposals, and report absences according to Council procedures. Quorum requirements are established before decisions are made.',
      charterArticleTwoSectionFour:'2.4',
      charterArticleTwoSectionFourTitle:'Amending the charter',
      charterArticleTwoSectionFourText:'Any proposed amendment is presented to members and reviewed with the school. An amendment takes effect only after approval under the procedure adopted for that purpose.',
      charterArticleTwoSectionFive:'2.5',
      charterArticleTwoSectionFiveTitle:'Interpretation and compliance',
      charterArticleTwoSectionFiveText:'The charter is interpreted in accordance with school policies and rules. If a conflict arises, school rules prevail and the Council consults the designated school contact.',
      homeLevelsTitle:'Level Councils',
      homeLevelsText:'Students in each class elect their own representative. Representatives from the same level meet weekly to hear concerns, discuss level-wide issues, and bring relevant topics forward.',
      homeAssemblyTitle:'Student Assembly',
      homeAssemblyText:'School-wide student representation provides a place to discuss proposals, assess feasibility, and coordinate projects with the school administration.',
      structureProposal:'Proposed structure · some details still need confirmation',
      learnLevels:'Explore the five levels',
      learnAssembly:'Explore Assembly roles',
      learnElections:'Understand elections',
      stepLabel:'Step',
      levelPageTitle:'Level Councils',
      levelPageText:'Representation begins in each class. Class representatives meet with representatives from the other classes in their level.',
      levelOne:'Secondary 1',
      levelTwo:'Secondary 2',
      levelThree:'Secondary 3',
      levelFour:'Secondary 4',
      levelFive:'Secondary 5',
      weeklyMeeting:'Meet once each week',
      meetingDay:'Students and the Student Assembly choose the meeting day together.',
      classRepresentative:'Class representative',
      classElection:'Elected by students in their class',
      levelTopics:'Discuss ideas and issues affecting the level',
      levelMembersPending:'Representative names will be added once confirmed.',
      levelSchedulePending:'Meeting day and time to be chosen with students and the Student Assembly.',
      levelResponsibilities:'Representatives gather student proposals, discuss level-wide issues, select topics to bring to the Assembly, and share updates with classmates.',
      assemblyPageTitle:'Student Assembly',
      assemblyPageText:'School-wide student representation brings together proposals raised by the Level Councils.',
      assemblyPurposeTitle:'Its role within CDECC',
      assemblyPurposeText:'Discuss concerns, evaluate proposals, coordinate projects, and communicate decisions or recommendations to the school administration. A proposal is not automatically approved; next steps depend on the school’s established rules and responsibilities.',
      assemblyMeeting:'Meets once each month',
      assemblyMeetingDay:'The monthly meeting takes place on the day used for weekly Level Council meetings.',
      assemblyComposition:'Assembly membership and the selection method for each position still need confirmation.',
      rolePresident:'President',
      rolePresidentText:'Leads meetings and coordinates the Assembly’s work.',
      leadreps:'Student Assembly',
      leadsub:'Members will be introduced once their selection is confirmed.',
      classreps:'Class representatives',
      classsub:'Representatives will be introduced once their selection is confirmed.',
      roleVicePresident:'Vice-President',
      roleVicePresidentText:'Steps in when needed and provides a second point of view.',
      roleSecretary:'Secretary',
      roleSecretaryText:'Records meeting minutes, decisions, and important information.',
      roleTreasurer:'Treasurer',
      roleTreasurerText:'Oversees financial records and proposed budgets, subject to school rules.',
      roleLowSpokesperson:'Student spokesperson',
      roleHighSpokesperson:'Administrative spokesperson',
      roleLowSpokespersonText:'Gathers students’ ideas and concerns and brings them to the Assembly.',
      roleHighSpokespersonText:'Shares Assembly news and follow-up with students.',
      memberProfilesTitle:'Student Assembly members',
      memberSecondaryRepsTitle:'Secondary representatives',
      memberPhotoPlaceholder:'Photo coming soon',
      memberNamePlaceholder:'Name to be confirmed',
      provisionalRole:'Responsibilities to be clarified with the organizers.',
      roleExperts:'Evaluators / experts',
      roleExpertsText:'One or more members evaluate proposals, provide relevant expertise, and help assess feasibility.',
      provisionalLabel:'Proposed role · details pending',
      trainingTitle:'Training and resources',
      trainingText:'Training resources should support the responsibilities of each position.',
      trainingPending:'Training documents, role standards, and the acronym mentioned in the planning document still need confirmation. No acronym or requirements are assumed here.',
      trainingMeetings:'Preparing for and participating in meetings',
      trainingProposals:'Presenting and evaluating proposals',
      trainingMinutes:'Recording decisions and sharing follow-up',
      electionPageTitle:'Elections and voting',
      electionPageText:'Election information will be published once organizers establish and confirm the process.',
      classElectionTitle:'Class elections',
      classElectionText:'Students in each class elect their class representative through a class vote.',
      schoolElectionTitle:'School-wide election',
      schoolElectionText:'The proposal also describes a school-wide vote for the Student Assembly. Which positions are elected, and how the two elections relate, still need confirmation.',
      electionRelationTitle:'Decision required',
      electionRelationText:'Organizers must determine whether students vote for every Assembly position, class representatives elect some positions, or a combination of methods is used.',
      electionInfoTitle:'Information to publish',
      electionDates:'Announcements and dates',
      electionCandidates:'Candidates and their proposals',
      electionRules:'Voting eligibility and rules',
      electionResults:'Officially confirmed results',
      electionVacancies:'Vacancies and replacements',
      noElectionInfo:'No election dates, candidates, or results are published at this time.',
      partiesTitle:'Groups or “parties”',
      partiesText:'The term “parties” still needs clarification. Students will not be required to join a group unless organizers formally establish that rule.',
      noPowerClaim:'The Assembly develops proposals and recommendations within responsibilities that still need confirmation. It does not replace the school administration.',
      noMembers:'Officers and members will be listed once their selection has been confirmed.',
      backToLevels:'Explore Level Councils',
      backToAssembly:'Explore the Student Assembly',
      cdeccFlowLabel:'How an idea moves through CDECC',
      cdeccName:'Collège Citoyen Student Council',
      statusProposed:'Proposed · subject to confirmation',
      classVoice:'Students share their ideas in their class.',
      emptyNewsTitle:'No updates published',
      emptyProjectsTitle:'No approved projects yet',
      meetingScheduleNote:'No meeting day is set here: students and the Student Assembly will choose it together.',
      voteDisabledLabel:'No online voting',
      navCharter:'Charter',
      navLevels:'Levels',
      navAssembly:'Assembly',
      navResources:'Resources',
      navVote:'Vote',
      home:'Home',
      projects:'Ideas',
      elections:'Candidates',
      participate:'Participate',
      news:'News',
      shareIdea:'Suggest an idea',
      viewProjects:'Explore projects',
      latestNews:'News',
      noProjectsTitle:'No projects yet',
      noProjectsText:'Projects approved by the Student Council will appear here.',
      noNewsTitle:'No news yet',
      noNewsText:'News, completed-project updates, and approved meeting summaries will be published here when available.',
      peopleTitle:'Representatives',
      peopleText:'Representatives connect their classes with the Student Council.',
      projectIntro:'Ideas approved by the Student Council are collected here.',
      markCompleted:'Mark as completed',
      reopenIdea:'Return to Ideas',
      completedStatus:'Completed project',
      processNote:'The Student Council shares updates and proposal follow-up with the school community.',
      participateTitle:'Have an idea to improve school life?',
      participateText:'Describe your suggestion. Once reviewed, an approved idea may be featured on the home page.',
      category:'Category',
      chooseCategory:'Choose a category',
      studentGrade:'Grade level',
      chooseGrade:'Choose a grade',
      gradeOne:'Grade 1',
      gradeTwo:'Grade 2',
      gradeThree:'Grade 3',
      gradeFour:'Grade 4',
      gradeFive:'Grade 5',
      generalGrade:'General (all grades)',
      schoolLife:'School life',
      activity:'Activity or event',
      sharedSpaces:'Shared spaces',
      other:'Other',
      ideaTitle:'Suggestion title',
      ideaTitlePlaceholder:'e.g. Create a reading corner',
      details:'Describe your idea',
      detailsPlaceholder:'Explain what you suggest and how it would help the community.',
      submit:'Submit suggestion',
      submitted:'Your suggestion has been saved. Thank you for contributing!',
      submitError:'This browser could not save your suggestion. Please try again later.',
      required:'Add a title, category, grade, and description before submitting.',
      adminTitle:'Suggestion review',
      adminTab:'Admin',
      adminText:'Review incoming ideas and decide which ones to publish under Projects.',
      adminNotice:'No sign-in is required: suggestions stay in this browser and are not protected from other people who use it. For testing with non-confidential content only.',
      searchSuggestions:'Search suggestions',
      filterPending:'Needs review',
      filterApproved:'Approved',
      filterRejected:'Declined',
      pending:'Needs review',
      approved:'Approved',
      rejected:'Declined',
      approve:'Approve and publish',
      reject:'Decline',
      reopen:'Return to review',
      remove:'Delete',
      noSuggestionsTitle:'No suggestions in this list',
      noSuggestionsText:'Suggestions submitted through the form will appear here.',
      noMatchesTitle:'No results found',
      noMatchesText:'Try a different search or filter.',
      savedDate:'Received',
      emptyNewsPanel:'There are no updates yet.',
      panelTitle:'News and projects',
      loadError:'Saved suggestions could not be read. They have not been changed.',
      saveError:'Changes could not be saved in this browser.',
      storageError:'Local browser storage is unavailable. The suggestion was not saved.',
      projectStatus:'Approved project',
      confirmRemove:'Permanently delete this suggestion from this browser?',
      priorityHeader:'Review priority',
      priorityHelp:'Only inappropriate language is automatically flagged. Suggestions are not screened for school relevance; an administrator reviews every submission.',
      priorityNormal:'Normal',
      priorityYellow:'Needs review',
      priorityRed:'Flagged',
      priorityManual:'Priority changed manually',
      priorityAutomatic:'Automatic (suggested)',
      prioritySet:'Change review priority',
      priorityReasonSchool:'No inappropriate language detected.',
      priorityReasonUnclear:'Needs administrator review.',
      priorityReasonOffTopic:'Needs administrator review.',
      priorityReasonLanguage:'Inappropriate language needs review.',
      noCategory:'No category'
    }
  };
  Object.assign(en,{
    navCharter:'Charter',
    navLevels:'Levels',
    navAssembly:'Assembly',
    navVote:'Vote',
    projects:'Ideas',
    elections:'Candidates',
    participate:'Participate',
    news:'News'
  });
  Object.assign(fr,{
    navCharter:'Charte',
    navLevels:'Niveaux',
    navAssembly:'Assemblée',
    navVote:'Vote',
    projects:'Idées',
    elections:'Candidature',
    participate:'Participer',
    news:'Actualités'
  });
  Object.assign(copy.fr,{
    navSettings:'Paramètres',
    charterSoonTitle:'La charte est en préparation',
    charterSoonText:'La charte sera publiée ici une fois qu’elle aura été composée et approuvée.',
    candidateBlobTitle:'Comment devenir candidat ou candidate',
    candidateBlobText:'Présente ton équipe, les personnes qui la composent et les idées que vous souhaitez défendre.',
    candidateRegister:'S’inscrire comme candidat',
    candidateTeam:'Nom du parti ou de l’équipe',
    candidateRoster:'Postes et représentantes et représentants',
    candidatePresident:'Président',
    candidateVicePresident:'Vice-président',
    candidateTreasurer:'Trésorier',
    candidateSecretary:'Secrétaire',
    candidateHighVoice:'Parole administrative',
    candidateLowVoice:'Parole étudiante',
    candidateVoicePlaceholder:'Maximum 3 membres — un nom par ligne',
    candidateVoiceLimitError:'Maximum 3 membres par poste.',
    candidateSectionRepresentative:'Représentant · Sec {section}',
    candidateIdeas:'Idées et propositions de l’équipe',
    candidatePicture:'Photo de l’équipe',
    candidatePictureHelp:'Image JPG, PNG ou WebP de 50 Mo maximum.',
    candidateImageCropTitle:'Ajuster la photo à son cadre',
    candidateImageCropHelp:'Fais glisser la photo pour la déplacer. Fais glisser un coin pour zoomer; les flèches et +/− fonctionnent aussi.',
    candidateBackground:'Couleur de fond',
    candidateForeground:'Couleur du texte',
    candidatePreviewLabel:'Aperçu de l’équipe',
    candidatePreviewMembers:'Membres de l’équipe',
    candidatePreviewImage:'La photo de l’équipe apparaîtra ici.',
    candidateSubmit:'Enregistrer la candidature',
    charterSearchLabel:'Rechercher dans la charte',
    charterSearchTrigger:'Rechercher',
    charterSearchPlaceholder:'Rechercher un titre ou un mot-clé…',
    charterSearchHint:'Les résultats apparaissent pendant la saisie.',
    charterSearchClose:'Fermer la recherche',
    charterSearchNoResults:'Aucune section trouvée.',
    charterSearchResults:'Sections correspondantes',
    customPalette:'Personnalisé',
    createCustomPalette:'Créer un préréglage personnalisé',
    editCustomPalette:'Modifier le préréglage personnalisé',
    saveCustomPalette:'Enregistrer le préréglage',
    customPaletteSaved:'Préréglage personnalisé enregistré sur cet appareil.',
    customPaletteForest:'Couleur principale',
    customPaletteDeep:'Couleur sombre',
    customPaletteGreen:'Couleur d’accent',
    customPaletteLime:'Couleur secondaire',
    candidateSaved:'La candidature a été enregistrée uniquement sur cet appareil.',
    candidateRequired:'Remplis le nom de l’équipe, au moins un poste et les idées.',
    candidateImageInvalid:'Choisis une image JPG, PNG ou WebP de 50 Mo maximum.',
    candidateSaveError:'La candidature n’a pas pu être enregistrée dans ce navigateur.',
    voteScheduleTitle:'Date et heure du vote',
    voteScheduleMissing:'La date du vote n’a pas encore été définie.',
    voteScheduleOpens:'Ouverture',
    voteScheduleCloses:'Fermeture',
    voteScheduleNotOpen:'Le vote n’est pas encore ouvert.',
    voteScheduleClosed:'La période de vote est terminée.',
    voteFormMissing:'Le formulaire de vote n’a pas encore été lié.',
    voteScheduleReady:'Le vote est ouvert. Le formulaire s’ouvrira dans un nouvel onglet.',
    voteSettingsNotice:'Ces réglages sont conservés dans ce navigateur uniquement; ils ne sont pas publiés pour les autres appareils.',
    voteAdminTitle:'Paramètres du vote',
    voteFormUrl:'Lien du formulaire de vote',
    voteStartsAt:'Date et heure d’ouverture',
    voteEndsAt:'Date et heure de fermeture (facultatif)',
    voteConfigSave:'Enregistrer les paramètres du vote',
    voteConfigSaved:'Les paramètres du vote ont été enregistrés sur cet appareil.',
    voteConfigInvalid:'Entre un lien HTTPS valide. La fermeture doit suivre l’ouverture.',
    settingsTitle:'Paramètres',
    settingsIntro:'Personnalise l’affichage de ce site sur cet appareil.',
    preferencesSaved:'Préférences enregistrées sur cet appareil.',
    paletteTitle:'Préréglages de couleurs',
    paletteForest:'Forêt',
    paletteOcean:'Océan',
    palettePlum:'Prune',
    appearanceTitle:'Affichage',
    themeLabel:'Mode sombre',
    sloganLabel:'Afficher la ligne « Être · Faire · Agir »',
    languageTitle:'Langue',
    adminAccessTitle:'Administration',
    adminAccessText:'Ouvre les outils de gestion du site.',
    adminAccessButton:'Ouvrir la version admin',
    legalTitle:'Légal',
    legalText:'Les renseignements juridiques doivent être complétés et approuvés par l’école avant publication.',
    legalPrivacy:'Confidentialité et renseignements personnels',
    legalTerms:'Conditions d’utilisation',
    settingsSaveError:'Les préférences n’ont pas pu être enregistrées sur cet appareil.',
  });
  Object.assign(copy.en,{
    navSettings:'Settings',
    charterSoonTitle:'The charter is being prepared',
    charterSoonText:'The charter will be published here once it has been drafted and approved.',
    candidateBlobTitle:'How to become a candidate',
    candidateBlobText:'Introduce your team, its members, and the ideas you want to support.',
    candidateRegister:'Register as a candidate',
    candidateTeam:'Party or team name',
    candidateRoster:'Positions and representatives',
    candidatePresident:'President',
    candidateVicePresident:'Vice-President',
    candidateTreasurer:'Treasurer',
    candidateSecretary:'Secretary',
    candidateHighVoice:'Administrative spokesperson',
    candidateLowVoice:'Student spokesperson',
    candidateVoicePlaceholder:'Maximum 3 members — one name per line',
    candidateVoiceLimitError:'Maximum 3 members per position.',
    candidateSectionRepresentative:'Representative · Sec {section}',
    candidateIdeas:'Team ideas and proposals',
    candidatePicture:'Team picture',
    candidatePictureHelp:'JPG, PNG, or WebP image up to 50 MB.',
    candidateImageCropTitle:'Fit the photo to its frame',
    candidateImageCropHelp:'Drag the photo to reposition it. Drag a corner to zoom; arrow keys and +/− also work.',
    candidateBackground:'Background color',
    candidateForeground:'Text color',
    candidatePreviewLabel:'Team preview',
    candidatePreviewMembers:'Team members',
    candidatePreviewImage:'The team picture will appear here.',
    candidateSubmit:'Save application',
    charterSearchLabel:'Search the Charter',
    charterSearchTrigger:'Search',
    charterSearchPlaceholder:'Search a heading or keyword…',
    charterSearchHint:'Results appear as you type.',
    charterSearchClose:'Close search',
    charterSearchNoResults:'No sections found.',
    charterSearchResults:'Matching sections',
    customPalette:'Custom',
    createCustomPalette:'Create a custom preset',
    editCustomPalette:'Edit custom preset',
    saveCustomPalette:'Save preset',
    customPaletteSaved:'Custom preset saved on this device.',
    customPaletteForest:'Primary color',
    customPaletteDeep:'Dark color',
    customPaletteGreen:'Accent color',
    customPaletteLime:'Secondary color',
    candidateSaved:'The application was saved only on this device.',
    candidateRequired:'Enter the team name, at least one position, and the ideas.',
    candidateImageInvalid:'Choose a JPG, PNG, or WebP image no larger than 50 MB.',
    candidateSaveError:'The application could not be saved in this browser.',
    voteScheduleTitle:'Voting date and time',
    voteScheduleMissing:'The voting date has not been set yet.',
    voteScheduleOpens:'Opens',
    voteScheduleCloses:'Closes',
    voteScheduleNotOpen:'Voting is not open yet.',
    voteScheduleClosed:'The voting period has ended.',
    voteFormMissing:'The voting form has not been linked yet.',
    voteScheduleReady:'Voting is open. The form will open in a new tab.',
    voteSettingsNotice:'These settings are stored only in this browser; they are not published to other devices.',
    voteAdminTitle:'Voting settings',
    voteFormUrl:'Voting form link',
    voteStartsAt:'Opening date and time',
    voteEndsAt:'Closing date and time (optional)',
    voteConfigSave:'Save voting settings',
    voteConfigSaved:'Voting settings were saved on this device.',
    voteConfigInvalid:'Enter a valid HTTPS link. Closing must be after opening.',
    settingsTitle:'Settings',
    settingsIntro:'Customize how this website looks on this device.',
    preferencesSaved:'Preferences saved on this device.',
    paletteTitle:'Color presets',
    paletteForest:'Forest',
    paletteOcean:'Ocean',
    palettePlum:'Plum',
    appearanceTitle:'Appearance',
    themeLabel:'Dark mode',
    sloganLabel:'Show the “Be · Do · Act” moving line',
    languageTitle:'Language',
    adminAccessTitle:'Administration',
    adminAccessText:'Open the site management tools.',
    adminAccessButton:'Open admin version',
    legalTitle:'Legal',
    legalText:'Legal information must be completed and approved by the school before publication.',
    legalPrivacy:'Privacy and personal information',
    legalTerms:'Terms of use',
    settingsSaveError:'Preferences could not be saved on this device.',
  });

  const text=(key)=>copy[document.documentElement.lang==='en'?'en':'fr'][key];
  const isRepeatedPresentationError=value=>{
    const phrase=document.documentElement.lang==='en'
      ?'Could not save the change.'
      :'La modification n’a pas pu être enregistrée.';
    let remaining=String(value||'').trim();
    let repetitions=0;
    while(remaining.startsWith(phrase)){
      remaining=remaining.slice(phrase.length).trimStart();
      repetitions++;
    }
    return repetitions>=2&&(!remaining||phrase.startsWith(remaining));
  };
  const cleanPresentationValue=(value,original,fallback)=>{
    const safeOriginal=isRepeatedPresentationError(original)||!String(original||'').trim()?fallback:original;
    return isRepeatedPresentationError(value)||!String(value||'').trim()?safeOriginal:value;
  };
  const priorities=['normal','yellow','red'];
  const priorityOrder={normal:0,yellow:1,red:2};
  const priorityReasons=new Set(['priorityManual','priorityReasonSchool','priorityReasonUnclear','priorityReasonOffTopic','priorityReasonLanguage']);
  const normalizeModerationText=value=>String(value||'')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g,'')
    .toLowerCase()
    .replace(/[аесорхуіјкмтвнαβϲεηικμνορτυχω]/g,character=>({
      'а':'a','е':'e','с':'c','о':'o','р':'p','х':'x','у':'u','і':'i','ј':'j','к':'k','м':'m','т':'t','в':'b','н':'h',
      'α':'a','β':'b','ϲ':'c','ε':'e','η':'h','ι':'i','κ':'k','μ':'m','ν':'n','ο':'o','ρ':'p','τ':'t','υ':'u','χ':'x','ω':'o'
    })[character])
    .replace(/[0123456789]/g,character=>({'0':'o','1':'i','2':'z','3':'e','4':'a','5':'s','6':'g','7':'t','8':'b','9':'g'})[character]);
  const canonicalModerationWord=value=>value.replace(/(.)\1+/g,'$1');
  const baseProfanityTerms=(
    'fuck fucking fucked shit bullshit bitch bastard asshole assholes damn dick dumbass piss crap motherfucker '+
    'cunt twat wanker prick cock pussy whore slut douche arse arsehole bollocks '+
    'merde putain pute con connard connasse salope salaud enculer encule foutre bordel chiant chier '+
    'nigger nigga faggot fag dyke kike spic chink gook wetback raghead retard tranny coon bougnoule tapette pede '+
    'natehiggers'
  ).split(/\s+/).map(canonicalModerationWord);
  const profanityTerms=new Set(baseProfanityTerms);
  baseProfanityTerms.filter(term=>term.length>=4).forEach(term=>{
    for(let index=0;index<term.length;index++){
      profanityTerms.add(canonicalModerationWord(term.slice(0,index)+term.slice(index+1)));
    }
  });
  const normalizedWords=value=>{
    const words=normalizeModerationText(value).match(/[a-z0-9]+/g)||[];
    const candidates=[];
    for(let start=0;start<words.length;start++){
      for(let length=1;length<=16&&start+length<=words.length;length++){
        candidates.push(canonicalModerationWord(words.slice(start,start+length).join('')));
      }
    }
    return candidates;
  };
  const classifySuggestion=suggestion=>{
    const words=normalizedWords(`${suggestion.title} ${suggestion.details}`);
    if(words.some(word=>profanityTerms.has(word)))return {priority:'red',reason:'priorityReasonLanguage'};
    return {priority:'normal',reason:'priorityReasonSchool'};
  };
  const suggestionPriority=item=>{
    if(priorities.includes(item.priority))return {priority:item.priority,reason:item.priorityReason||'priorityReasonUnclear',manual:item.priorityOverride===true};
    return {...classifySuggestion(item),manual:false};
  };
  const categoryName=value=>{
    const key={
      'school-life':'schoolLife',
      activity:'activity',
      'shared-spaces':'sharedSpaces',
      other:'other'
    }[value];
    return key?text(key):value||text('noCategory');
  };
  const gradeName=value=>{
    if(value==='general')return text('generalGrade');
    const grade=Number(value);
    if(Number.isInteger(grade)&&grade>=1&&grade<=5){
      return text(['','gradeOne','gradeTwo','gradeThree','gradeFour','gradeFive'][grade]);
    }
    return document.documentElement.lang==='en'?'Grade not specified':'Niveau non précisé';
  };
  const make=(tag,className,content)=>{
    const node=document.createElement(tag);
    if(className)node.className=className;
    if(content!==undefined)node.textContent=content;
    return node;
  };
  const button=(label,className,action)=>{
    const node=make('button',className,label);
    node.type='button';
    if(action)node.dataset.action=action;
    return node;
  };
  const emptyState=(title,description,icon='✳')=>{
    const state=make('div','site-empty-state');
    state.setAttribute('role','status');
    state.append(make('span','site-empty-icon',icon),make('h2','',title),make('p','',description));
    return state;
  };
  const sectionHeading=(title,description)=>{
    const header=make('div','site-section-title');
    const textBlock=make('div');
    textBlock.append(make('h2','',title),make('p','',description));
    header.append(textBlock);
    return header;
  };
  const setStatus=(node,message,kind='')=>{
    node.textContent=message;
    node.dataset.kind=kind;
  };
  const reportError=message=>{
    document.querySelectorAll('[data-storage-status]').forEach(node=>setStatus(node,message,'error'));
  };
  const makePageHeading=(eyebrow,title,description)=>{
    const header=make('div','site-page-heading');
    if(eyebrow)header.append(make('div','eyebrow',eyebrow));
    header.append(make('h1','',title),make('p','',description));
    return header;
  };
  const formatDate=value=>{
    const date=new Date(/^\d{4}-\d{2}-\d{2}$/.test(value)?`${value}T12:00:00`:value);
    if(Number.isNaN(date.getTime()))return '';
    return new Intl.DateTimeFormat(document.documentElement.lang==='en'?'en-CA':'fr-CA',{year:'numeric',month:'short',day:'numeric'}).format(date);
  };
  const candidateStorageKey='cdecc.candidate.application.v1';
  const candidateImageDatabase='cdecc.candidate.images.v1';
  const candidateImageStore='images';
  const maxCandidateImageSize=50*1024*1024;
  const storeCandidateImage=(id,image)=>new Promise((resolve,reject)=>{
    const request=indexedDB.open(candidateImageDatabase,1);
    request.onerror=()=>reject(request.error||new Error(text('candidateSaveError')));
    request.onblocked=()=>reject(new Error(text('candidateSaveError')));
    request.onupgradeneeded=()=>{
      if(!request.result.objectStoreNames.contains(candidateImageStore)){
        request.result.createObjectStore(candidateImageStore);
      }
    };
    request.onsuccess=()=>{
      const database=request.result;
      let transaction;
      try{
        transaction=database.transaction(candidateImageStore,'readwrite');
        transaction.objectStore(candidateImageStore).put(image,id);
      }catch(error){
        database.close();
        reject(error);
        return;
      }
      transaction.oncomplete=()=>{database.close();resolve()};
      transaction.onerror=()=>{database.close();reject(transaction.error||new Error(text('candidateSaveError')))};
      transaction.onabort=()=>{database.close();reject(transaction.error||new Error(text('candidateSaveError')))};
    };
  });
  const removeCandidateImage=id=>new Promise((resolve,reject)=>{
    const request=indexedDB.open(candidateImageDatabase,1);
    request.onerror=()=>reject(request.error||new Error(text('candidateSaveError')));
    request.onblocked=()=>reject(new Error(text('candidateSaveError')));
    request.onsuccess=()=>{
      const database=request.result;
      let transaction;
      try{
        transaction=database.transaction(candidateImageStore,'readwrite');
        transaction.objectStore(candidateImageStore).delete(id);
      }catch(error){
        database.close();
        reject(error);
        return;
      }
      transaction.oncomplete=()=>{database.close();resolve()};
      transaction.onerror=()=>{database.close();reject(transaction.error||new Error(text('candidateSaveError')))};
      transaction.onabort=()=>{database.close();reject(transaction.error||new Error(text('candidateSaveError')))};
    };
  });
  const voteSettingsKey='cdecc.vote.settings.v1';
  const preferencesKey='cdecc.ui.preferences.v1';
  const preferencesCookieName='cdecc_ui_preferences';
  const defaultCustomPalette={forest:'#233d33',deep:'#1a2e2a',green:'#4a6d60',lime:'#d9d7a5'};
  const customPaletteKeys=Object.keys(defaultCustomPalette);
  const palettes=new Set(['forest','ocean','plum','custom']);
  const isValidCustomPalette=value=>value&&typeof value==='object'&&
    customPaletteKeys.every(key=>typeof value[key]==='string'&&/^#[0-9a-f]{6}$/i.test(value[key]));
  const parsePreferences=value=>{
    const saved=JSON.parse(value);
    if(!saved||!palettes.has(saved.palette)||typeof saved.dark!=='boolean'||typeof saved.slogan!=='boolean')return null;
    const customPalette=saved.customPalette==null?null:saved.customPalette;
    if(customPalette&&!isValidCustomPalette(customPalette))return null;
    if(saved.palette==='custom'&&!customPalette)return null;
    return {
      palette:saved.palette,
      dark:saved.dark,
      slogan:saved.slogan,
      customPalette:customPalette?Object.fromEntries(customPaletteKeys.map(key=>[key,customPalette[key]])):null,
      updatedAt:Number.isFinite(saved.updatedAt)?saved.updatedAt:0
    };
  };
  const readPreferenceCookie=()=>{
    const prefix=`${preferencesCookieName}=`;
    const entry=document.cookie.split('; ').find(cookie=>cookie.startsWith(prefix));
    return entry?decodeURIComponent(entry.slice(prefix.length)):null;
  };
  const validVoteSettings=value=>{
    if(!value||typeof value!=='object')return false;
    if(typeof value.formUrl!=='string'||value.formUrl.length>500)return false;
    if(typeof value.startsAt!=='string'||typeof value.endsAt!=='string')return false;
    if(value.formUrl){
      try{if(new URL(value.formUrl).protocol!=='https:')return false}
      catch{return false}
    }
    if(value.startsAt&&Number.isNaN(Date.parse(value.startsAt)))return false;
    if(value.endsAt&&Number.isNaN(Date.parse(value.endsAt)))return false;
    if(value.endsAt&&!value.startsAt)return false;
    return !value.startsAt||!value.endsAt||Date.parse(value.endsAt)>Date.parse(value.startsAt);
  };
  let voteSettings={formUrl:'',startsAt:'',endsAt:''};
  let voteSettingsLoadError='';
  try{
    const raw=localStorage.getItem(voteSettingsKey);
    if(raw!==null){
      const saved=JSON.parse(raw);
      if(!validVoteSettings(saved))throw new Error(text('voteConfigInvalid'));
      voteSettings=saved;
    }
  }catch(error){voteSettingsLoadError=error.message||text('voteConfigInvalid')}
  let preferences={palette:'forest',dark:false,slogan:true,customPalette:null,updatedAt:0};
  let preferencesLoadError='';
  const storedPreferences=[];
  try{
    const raw=localStorage.getItem(preferencesKey);
    if(raw!==null){
      const saved=parsePreferences(raw);
      if(!saved)throw new Error(text('settingsSaveError'));
      storedPreferences.push(saved);
    }
  }catch(error){preferencesLoadError=error.message||text('settingsSaveError')}
  try{
    const raw=readPreferenceCookie();
    if(raw!==null){
      const saved=parsePreferences(raw);
      if(!saved)throw new Error(text('settingsSaveError'));
      storedPreferences.push(saved);
    }
  }catch(error){preferencesLoadError=error.message||text('settingsSaveError')}
  storedPreferences.sort((a,b)=>b.updatedAt-a.updatedAt);
  if(storedPreferences.length){
    preferences=storedPreferences[0];
    preferencesLoadError='';
  }
  const applyPreferences=()=>{
    document.body.dataset.palette=preferences.palette;
    document.body.dataset.theme=preferences.dark?'dark':'light';
    document.body.classList.toggle('slogan-hidden',!preferences.slogan);
    if(preferences.palette==='custom'&&isValidCustomPalette(preferences.customPalette)){
      customPaletteKeys.forEach(key=>document.body.style.setProperty(`--${key}`,preferences.customPalette[key]));
    }else{
      customPaletteKeys.forEach(key=>document.body.style.removeProperty(`--${key}`));
    }
    const themeColor=document.querySelector('meta[name="theme-color"]');
    if(themeColor)themeColor.content=preferences.dark?'#171d1a':preferences.customPalette?.forest||'#174c38';
  };
  applyPreferences();
  const isSuggestion=value=>value&&
    typeof value.id==='string'&&value.id.length<=80&&
    typeof value.title==='string'&&value.title.length<=100&&
    typeof value.details==='string'&&value.details.length<=1200&&
    typeof value.category==='string'&&value.category.length<=40&&
    (value.grade===undefined||value.grade==='general'||['1','2','3','4','5'].includes(value.grade))&&
    typeof value.createdAt==='string'&&
    (value.completedAt===undefined||(typeof value.completedAt==='string'&&!Number.isNaN(Date.parse(value.completedAt))))&&
    (value.priority===undefined||priorities.includes(value.priority))&&
    (value.priorityReason===undefined||priorityReasons.has(value.priorityReason))&&
    (value.priorityOverride===undefined||typeof value.priorityOverride==='boolean')&&
    supportedStatuses.has(value.status);
  const readSuggestions=()=>{
    let raw;
    try{raw=localStorage.getItem(storageKey)}
    catch(error){throw new Error(text('storageError'),{cause:error})}
    if(raw===null)return [];
    let parsed;
    try{parsed=JSON.parse(raw)}
    catch(error){throw new Error(text('loadError'),{cause:error})}
    if(!Array.isArray(parsed)||!parsed.every(isSuggestion))throw new Error(text('loadError'));
    return parsed;
  };
  const saveSuggestions=suggestions=>{
    try{localStorage.setItem(storageKey,JSON.stringify(suggestions))}
    catch(error){throw new Error(text('saveError'),{cause:error})}
  };
  const makeProjectCard=suggestion=>{
    const article=make('article','card site-project-card');
    const meta=make('div','site-project-meta');
    meta.append(make('span','pill',text('projectStatus')));
    meta.append(make('time','site-date',formatDate(suggestion.approvedAt||suggestion.createdAt)));
    article.append(meta,make('h3','',suggestion.title));
    if(suggestion.category)article.append(make('span','muted',categoryName(suggestion.category)));
    article.append(make('p','',suggestion.details));
    return article;
  };
  const getApprovedSuggestions=suggestions=>suggestions
    .filter(item=>item.status==='approved'&&!item.completedAt)
    .sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  const home=document.getElementById('page-home');
  const homeMission=make('section','home-mission');
  homeMission.append(make('h2','',text('missionTitle')),make('p','',text('missionText')));
  const completedSection=make('section','home-completed');
  const completedHeading=make('div','home-section-heading');
  completedHeading.append(make('h2','',text('completedTitle')));
  completedSection.append(completedHeading,make('p','home-section-intro',text('completedIntro')));
  const completedGrid=make('div','home-completed-grid');
  completedGrid.setAttribute('aria-label',text('completedTitle'));
  completedSection.append(completedGrid);
  const homeFooter=make('footer','home-footer',`Collège Citoyen · ${text('brand')}`);
  home.replaceChildren(homeMission,completedSection,homeFooter);
  const projectDetail=make('section','page home-project-detail-page');
  projectDetail.id='page-completed-detail';
  document.querySelector('main').append(projectDetail);
  if(!pageNames.includes('completed-detail'))pageNames.push('completed-detail');
  let homeCompletedItems=new Map();
  let remoteApprovedProjects=[];
  let selectedCompletedId='';
  const heroStory=document.querySelector('.hero-story');
  heroStory.replaceChildren();
  const heroHeading=make('h1','',text('homeTitle'));
  const heroDescription=make('p','hero-project-description');
  const heroDate=make('time','hero-date');
  const heroMore=button(text('moreInfo'),'hero-more primary');
  const heroProjectImage=document.createElement('img');
  heroProjectImage.className='home-featured-image';
  heroProjectImage.alt='';
  heroStory.append(heroHeading,heroDescription,heroDate,heroMore);
  const renderProjectDetail=(project,navigate=false)=>{
    if(!project)return;
    selectedCompletedId=project.id;
    projectDetail.replaceChildren();
    const back=button(`← ${text('projectBack')}`,'home-project-back');
    const content=make('article','home-project-detail-card');
    const image=document.createElement('img');
    image.src=project.originalImageUrl||project.imageUrl||'reading-corner-illustration.svg';
    if(project.originalImageUrl)image.classList.add('home-project-detail-image-original');
    image.alt='';
    image.loading='lazy';
    const description=make('div','home-project-detail-copy');
    description.append(
      make('span','pill',project.completedAt?text('completedStatus'):text('projectStatus')),
      make('h2','',project.title),
      make('time','site-date',formatDate(project.completedAt||project.approvedAt||project.date)),
      make('p','',project.details)
    );
    content.append(description,image);
    projectDetail.append(back,content);
    if(navigate){
      document.querySelector('.home-hero').hidden=true;
      window.showPage('completed-detail');
    }
  };
  const renderHomeProjects=suggestions=>{
    const localEntries=suggestions
      .filter(item=>item.status==='approved'&&(item.completedAt||!item.homePlacement||item.homePlacement==='completed'))
      .map(item=>({
        ...item,
        id:item.id,
        title:cleanPresentationValue(item.presentation_title,item.title,text('untitledProject')),
        details:cleanPresentationValue(item.presentation_description,item.details,text('projectDescriptionUnavailable')),
        homePlacement:'completed',
        completedAt:item.completedAt||'',
        approvedAt:item.approvedAt||item.createdAt||''
      }))
      .sort((a,b)=>(b.completedAt||b.approvedAt||'').localeCompare(a.completedAt||a.approvedAt||''));
    const entries=[
      ...localEntries,
      ...remoteApprovedProjects.filter(item=>item.homePlacement==='completed')
    ].sort((a,b)=>(b.completedAt||b.approvedAt||b.createdAt||'').localeCompare(a.completedAt||a.approvedAt||a.createdAt||''));
    const featured=remoteApprovedProjects.find(item=>item.homePlacement==='featured');
    homeCompletedItems=new Map([...entries,...(featured?[featured]:[])].map(item=>[item.id,item]));
    completedGrid.replaceChildren();
    if(!entries.length)completedGrid.append(emptyState(text('noProjectsTitle'),text('noProjectsText')));
    entries.forEach(project=>{
      const card=button('', 'home-project-card');
      card.dataset.completedId=project.id;
      card.setAttribute('aria-label',`${text('projectDetails')}: ${project.title}`);
      const copyBlock=make('span','home-project-card-copy');
      copyBlock.append(
        make('span','pill',project.completedAt?text('completedStatus'):text('projectStatus')),
        make('span','home-project-card-title',project.title),
        make('span','home-project-card-description',project.details),
        make('time','site-date',formatDate(project.completedAt||project.approvedAt||project.date))
      );
      const image=document.createElement('img');
      image.src=project.imageUrl||'reading-corner-illustration.svg';
      image.alt='';
      image.loading='lazy';
      card.append(copyBlock,image);
      completedGrid.append(card);
    });
    if(featured){
      const homeHero=document.querySelector('.home-hero');
      homeHero.classList.add('has-featured-project');
      if(heroProjectImage.parentElement!==homeHero)homeHero.append(heroProjectImage);
      heroHeading.textContent=featured.title;
      heroDescription.textContent=featured.details;
      heroDescription.hidden=!featured.details;
      heroDate.textContent=formatDate(featured.completedAt||featured.approvedAt||featured.date);
      heroMore.dataset.completedId=featured.id;
      heroDate.hidden=false;
      heroMore.hidden=false;
      heroMore.style.display='';
      heroProjectImage.src=featured.imageUrl||'reading-corner-illustration.svg';
    }else{
      const homeHero=document.querySelector('.home-hero');
      homeHero.classList.remove('has-featured-project');
      heroProjectImage.remove();
      heroHeading.textContent=text('homeTitle');
      heroDescription.textContent='';
      heroDescription.hidden=true;
      heroDate.textContent='';
      heroDate.hidden=true;
      heroMore.hidden=true;
      heroMore.style.display='none';
      homeHero.style.backgroundImage='';
    }
    if(selectedCompletedId){
      const selected=homeCompletedItems.get(selectedCompletedId);
      if(selected)renderProjectDetail(selected);
      else{
        selectedCompletedId='';
        projectDetail.replaceChildren();
        if(projectDetail.classList.contains('active')){
          document.querySelector('.home-hero').hidden=false;
          window.showPage('home');
        }
      }
    }
  };
  window.cdeccApplyRemoteSuggestions=records=>{
    remoteApprovedProjects=(records||[]).filter(item=>item.status==='approved').map(item=>({
      ...item,
      title:cleanPresentationValue(item.presentation_title,item.title,text('untitledProject')),
      details:cleanPresentationValue(item.presentation_description,item.details,text('projectDescriptionUnavailable')),
      homePlacement:item.home_placement||'completed',
      completedAt:item.completed_at||'',
      approvedAt:item.approved_at||'',
      createdAt:item.created_at||'',
      imageUrl:item.image_path&&window.cdeccSupabase
        ?window.cdeccSupabase.storage.from('project-images').getPublicUrl(item.image_path).data.publicUrl
        :'',
      originalImageUrl:item.original_image_path&&window.cdeccSupabase
        ?window.cdeccSupabase.storage.from('project-images').getPublicUrl(item.original_image_path).data.publicUrl
        :''
    }));
    let localSuggestions=[];
    try{localSuggestions=readSuggestions()}
    catch(error){reportError(error.message||text('loadError'))}
    renderHomeProjects(localSuggestions);
  };
  completedGrid.addEventListener('click',event=>{
    const card=event.target.closest('[data-completed-id]');
    if(card)renderProjectDetail(homeCompletedItems.get(card.dataset.completedId),true);
  });
  heroMore.addEventListener('click',()=>renderProjectDetail(homeCompletedItems.get(heroMore.dataset.completedId),true));
  projectDetail.addEventListener('click',event=>{
    if(event.target.closest('.home-project-back')){
      selectedCompletedId='';
      document.querySelector('.home-hero').hidden=false;
      window.showPage('home');
      completedSection.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });

  const people=document.getElementById('page-people');
  const how=document.getElementById('page-how');
  how.replaceChildren();
  const main=document.querySelector('main');
  const elections=make('section','page');
  elections.id='page-elections';
  const resources=make('section','page');
  resources.id='page-resources';
  const vote=make('section','page');
  vote.id='page-vote';
  const voteTeamDetail=make('section','page vote-team-detail');
  voteTeamDetail.id='page-vote-team-detail';
  const settings=make('section','page settings-page');
  settings.id='page-settings';
  main.append(elections,resources,vote,voteTeamDetail,settings);
  ['elections','resources','vote'].forEach(page=>{
    if(!pageNames.includes(page))pageNames.push(page);
  });
  if(!pageNames.includes('vote-team-detail'))pageNames.push('vote-team-detail');
  if(!pageNames.includes('settings'))pageNames.push('settings');
  let selectedVoteTeam='';

  const makeInfoCard=(titleKey,descriptionKey,icon='•')=>{
    const card=make('article','card gov-info-card');
    card.append(make('span','gov-card-icon',icon),make('h3','',text(titleKey)),make('p','',text(descriptionKey)));
    return card;
  };
  const makePageLink=(labelKey,page,className='outline')=>{
    const link=button(text(labelKey),className);
    link.dataset.page=page;
    return link;
  };
  let activeCharterSearch=null;
  document.addEventListener('click',event=>{
    if(activeCharterSearch&&!activeCharterSearch.container.contains(event.target)){
      activeCharterSearch.close(false);
    }
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&activeCharterSearch?.isOpen()){
      event.preventDefault();
      activeCharterSearch.close();
    }
  });
  const renderCharter=()=>{
    activeCharterSearch?.clearHighlight();
    const articles=[
      {title:'charterArticleOne',prefix:'charterSection'},
      {title:'charterArticleTwo',prefix:'charterArticleTwoSection'}
    ];
    const articlePanels=make('div','charter-template-articles');
    articles.forEach((article,index)=>{
      const sections=make('div','charter-template-sections');
      ['One','Two','Three','Four','Five'].forEach((part,sectionIndex)=>{
        const key=`${article.prefix}${part}`;
        const section=make('section','charter-template-section');
        const title=make('h2','',text(`${key}Title`));
        title.id=`charter-article-${index+1}-section-${sectionIndex+1}-title`;
        const heading=make('div','charter-template-section-heading');
        heading.append(make('p','charter-template-number',text(key)),title);
        section.setAttribute('aria-labelledby',title.id);
        section.append(heading,make('p','charter-template-copy',text(`${key}Text`)));
        sections.append(section);
      });
      const panel=make('div','charter-template-panel');
      panel.append(make('h1','charter-template-article',text(article.title)),sections);
      articlePanels.append(panel);
    });
    const charterSearch=make('div','site-search-anchor charter-search-anchor');
    const charterSearchToggle=button('', 'search-mark charter-search-toggle');
    charterSearchToggle.setAttribute('aria-label',text('charterSearchLabel'));
    charterSearchToggle.setAttribute('aria-expanded','false');
    charterSearchToggle.append(
      make('span','search-glyph','⌕'),
      make('span','search-label',text('charterSearchTrigger'))
    );
    const charterSearchDropdown=make('section','site-search-dropdown');
    charterSearchDropdown.hidden=true;
    charterSearchDropdown.setAttribute('role','region');
    const charterSearchHeading=make('div','site-search-heading');
    const charterSearchTitle=make('h2','',text('charterSearchLabel'));
    charterSearchTitle.id='charter-search-title';
    charterSearchDropdown.id='charter-search-dropdown';
    charterSearchToggle.setAttribute('aria-controls',charterSearchDropdown.id);
    const charterSearchClose=button('×','site-search-close charter-search-close');
    charterSearchClose.setAttribute('aria-label',text('charterSearchClose'));
    charterSearchHeading.append(charterSearchTitle,charterSearchClose);
    const charterSearchLabel=make('label','site-search-label');
    charterSearchLabel.append(make('span','',text('charterSearchLabel')));
    const charterSearchInput=document.createElement('input');
    charterSearchInput.type='search';
    charterSearchInput.className='site-search-input';
    charterSearchInput.autocomplete='off';
    charterSearchInput.placeholder=text('charterSearchPlaceholder');
    charterSearchInput.setAttribute('aria-label',text('charterSearchLabel'));
    charterSearchLabel.append(charterSearchInput);
    const charterSearchResults=make('div','site-search-results');
    charterSearchResults.setAttribute('aria-label',text('charterSearchResults'));
    charterSearchResults.setAttribute('aria-live','polite');
    charterSearchInput.setAttribute('aria-controls','charter-search-results');
    charterSearchInput.setAttribute('aria-expanded','false');
    charterSearchResults.id='charter-search-results';
    charterSearchDropdown.setAttribute('aria-labelledby',charterSearchTitle.id);
    charterSearchDropdown.append(charterSearchHeading,charterSearchLabel,charterSearchResults);
    charterSearch.append(charterSearchToggle,charterSearchDropdown);
    const frame=make('section','charter-template-frame');
    frame.append(make('p','charter-template-note',text('charterTemplateNote')),charterSearch,articlePanels);
    const charterSections=[...articlePanels.querySelectorAll('.charter-template-section')];
    let matchingSections=[];
    let highlightedSection=null;
    let highlightTimer=0;
    const clearCharterHighlight=()=>{
      window.clearTimeout(highlightTimer);
      if(!highlightedSection)return;
      highlightedSection.querySelectorAll('mark.charter-search-highlight').forEach(mark=>{
        mark.replaceWith(document.createTextNode(mark.textContent));
        mark.parentElement?.normalize();
      });
      highlightedSection=null;
    };
    const highlightCharterTerms=(section,terms)=>{
      clearCharterHighlight();
      if(!terms.length)return;
      const walker=document.createTreeWalker(section,NodeFilter.SHOW_TEXT);
      const textNodes=[];
      while(walker.nextNode())if(walker.currentNode.data.trim())textNodes.push(walker.currentNode);
      textNodes.forEach(node=>{
        const source=node.data;
        const characters=[...source];
        const positions=[];
        let normalized='';
        let sourceOffset=0;
        characters.forEach(character=>{
          const normalizedCharacter=normalizeSearchText(character);
          for(let index=0;index<normalizedCharacter.length;index++){
            positions.push({start:sourceOffset,end:sourceOffset+character.length});
          }
          normalized+=normalizedCharacter;
          sourceOffset+=character.length;
        });
        const matches=[];
        terms.forEach(term=>{
          let index=normalized.indexOf(term);
          while(index!==-1){
            const first=positions[index];
            const last=positions[index+term.length-1];
            if(first&&last)matches.push({start:first.start,end:last.end});
            index=normalized.indexOf(term,index+term.length);
          }
        });
        matches.sort((a,b)=>a.start-b.start||a.end-b.end);
        const merged=matches.reduce((ranges,match)=>{
          const previous=ranges[ranges.length-1];
          if(previous&&match.start<=previous.end)previous.end=Math.max(previous.end,match.end);
          else ranges.push({...match});
          return ranges;
        },[]);
        if(!merged.length)return;
        const fragment=document.createDocumentFragment();
        let cursor=0;
        merged.forEach(({start,end})=>{
          if(start>cursor)fragment.append(document.createTextNode(source.slice(cursor,start)));
          const mark=make('mark','charter-search-highlight',source.slice(start,end));
          fragment.append(mark);
          cursor=end;
        });
        if(cursor<source.length)fragment.append(document.createTextNode(source.slice(cursor)));
        node.replaceWith(fragment);
      });
      highlightedSection=section;
      highlightTimer=window.setTimeout(clearCharterHighlight,3000);
    };
    const renderCharterSearch=()=>{
      const terms=searchTerms(charterSearchInput.value);
      charterSearchResults.replaceChildren();
      matchingSections=[];
      charterSearchInput.setAttribute('aria-expanded',String(terms.length>0));
      if(!terms.length)return;
      matchingSections=charterSections.filter(section=>{
        const content=normalizeSearchText(section.innerText);
        return terms.every(term=>content.includes(term));
      });
      if(!matchingSections.length){
        charterSearchResults.append(make('p','site-search-empty',text('charterSearchNoResults')));
        return;
      }
      matchingSections.forEach((section,index)=>{
        const result=button('', 'site-search-result charter-search-result');
        result.dataset.charterSearchResult=String(index);
        const heading=section.querySelector('h2');
        const title=heading?.textContent.trim()||'';
        const excerpt=section.querySelector('.charter-template-copy')?.textContent||'';
        result.append(make('strong','',title),make('span','',searchResultText(excerpt,charterSearchInput.value)));
        charterSearchResults.append(result);
      });
    };
    charterSearchInput.addEventListener('input',renderCharterSearch);
    charterSearchResults.addEventListener('click',event=>{
      const result=event.target.closest('[data-charter-search-result]');
      if(!result)return;
      const section=matchingSections[Number(result.dataset.charterSearchResult)];
      if(!section)return;
      const terms=searchTerms(charterSearchInput.value);
      charterSearchInput.value='';
      renderCharterSearch();
      section.tabIndex=-1;
      section.scrollIntoView({behavior:'smooth',block:'center'});
      section.focus({preventScroll:true});
      highlightCharterTerms(section,terms);
      closeCharterSearch(false);
    });
    const closeCharterSearch=(restoreFocus=true)=>{
      if(charterSearchDropdown.hidden)return;
      charterSearchDropdown.hidden=true;
      charterSearchToggle.setAttribute('aria-expanded','false');
      if(restoreFocus)charterSearchToggle.focus();
    };
    activeCharterSearch={
      container:charterSearch,
      close:closeCharterSearch,
      isOpen:()=>!charterSearchDropdown.hidden,
      clearHighlight:clearCharterHighlight
    };
    charterSearchToggle.addEventListener('click',()=>{
      const opening=charterSearchDropdown.hidden;
      charterSearchDropdown.hidden=!opening;
      charterSearchToggle.setAttribute('aria-expanded',String(opening));
      if(opening){
        charterSearchInput.value='';
        charterSearchResults.replaceChildren(make('p','site-search-empty',text('charterSearchHint')));
        charterSearchInput.setAttribute('aria-expanded','false');
        charterSearchInput.focus();
      }
    });
    charterSearchClose.addEventListener('click',()=>closeCharterSearch());
    how.replaceChildren(frame);
  };
  const voteAvailability=()=>{
    const now=Date.now();
    const startsAt=voteSettings.startsAt?Date.parse(voteSettings.startsAt):NaN;
    const endsAt=voteSettings.endsAt?Date.parse(voteSettings.endsAt):NaN;
    if(!voteSettings.formUrl)return {open:false,message:text('voteFormMissing')};
    if(!Number.isFinite(startsAt))return {open:false,message:text('voteScheduleMissing')};
    if(Number.isFinite(endsAt)&&endsAt<=now)return {open:false,message:text('voteScheduleClosed')};
    if(startsAt>now)return {open:false,message:text('voteScheduleNotOpen')};
    return {open:true,message:text('voteScheduleReady')};
  };
  const refreshVoteAvailability=()=>{
    const voteButton=vote.querySelector('.vote-submit');
    const status=vote.querySelector('.vote-disabled-note');
    if(!voteButton||!status)return;
    const availability=voteAvailability();
    voteButton.disabled=!availability.open;
    status.textContent=availability.message;
  };
  const renderGovernancePages=()=>{
    renderCharter();
    const memberSlotDefinitions=[
      {slotKey:'assembly-president',category:'assembly',sectionLabel:text('memberProfilesTitle'),groupLabel:text('rolePresident')},
      {slotKey:'assembly-vice-president',category:'assembly',sectionLabel:text('memberProfilesTitle'),groupLabel:text('roleVicePresident')},
      {slotKey:'assembly-secretary',category:'assembly',sectionLabel:text('memberProfilesTitle'),groupLabel:text('roleSecretary')},
      {slotKey:'assembly-treasurer',category:'assembly',sectionLabel:text('memberProfilesTitle'),groupLabel:text('roleTreasurer')},
      {slotKey:'assembly-administrative-spokesperson',category:'assembly',sectionLabel:text('memberProfilesTitle'),groupLabel:text('roleHighSpokesperson')},
      {slotKey:'assembly-student-spokesperson',category:'assembly',sectionLabel:text('memberProfilesTitle'),groupLabel:text('roleLowSpokesperson')},
      ...Array.from({length:5},(_,index)=>({
        slotKey:`secondary-${index+1}`,
        category:'secondary',
        level:index+1,
        sectionLabel:text('memberSecondaryRepsTitle'),
        groupLabel:text(`level${['One','Two','Three','Four','Five'][index]}`)
      })),
      ...Array.from({length:5},(_,levelIndex)=>Array.from({length:5},(_,representativeIndex)=>({
        slotKey:`class-${levelIndex+1}-${representativeIndex+1}`,
        category:'class',
        level:levelIndex+1,
        representativeIndex:representativeIndex+1,
        sectionLabel:text('classreps'),
        levelLabel:text(`level${['One','Two','Three','Four','Five'][levelIndex]}`),
        groupLabel:text('classRepresentative')
      }))).flat()
    ];
    window.cdeccMemberSlotDefinitions=memberSlotDefinitions;
    const makeMemberProfileCard=(slot,extraClass='')=>{
      const card=make('article',`member-profile-card${extraClass?` ${extraClass}`:''}`);
      card.dataset.memberSlot=slot.slotKey;
      card.dataset.memberDefaultGroup=slot.groupLabel;
      const photoPlaceholder=make('div','member-profile-photo-placeholder',text('memberPhotoPlaceholder'));
      photoPlaceholder.setAttribute('aria-label',text('memberPhotoPlaceholder'));
      const image=document.createElement('img');
      image.className='member-profile-photo';
      image.alt='';
      image.hidden=true;
      image.addEventListener('error',()=>{
        image.hidden=true;
        image.removeAttribute('src');
        photoPlaceholder.hidden=false;
      });
      card.append(
        photoPlaceholder,
        image,
        make('h3','member-profile-name',text('memberNamePlaceholder')),
        make('p','member-profile-role',slot.groupLabel)
      );
      return card;
    };
    const applyMemberProfiles=records=>{
      const profiles=new Map((records||[]).map(record=>[record.slot_key,record]));
      document.querySelectorAll('[data-member-slot]').forEach(card=>{
        const profile=profiles.get(card.dataset.memberSlot);
        const name=card.querySelector('.member-profile-name');
        const group=card.querySelector('.member-profile-role');
        const image=card.querySelector('.member-profile-photo');
        const placeholder=card.querySelector('.member-profile-photo-placeholder');
        name.textContent=profile?.display_name||text('memberNamePlaceholder');
        group.textContent=profile?.group_label||card.dataset.memberDefaultGroup||'';
        if(profile?.photo_url){
          image.src=profile.photo_url;
          image.hidden=false;
          placeholder.hidden=true;
        }else{
          image.removeAttribute('src');
          image.hidden=true;
          placeholder.hidden=false;
        }
      });
      const loadStatus=document.querySelector('.member-load-status');
      if(loadStatus){
        loadStatus.hidden=true;
        loadStatus.textContent='';
      }
    };
    window.cdeccApplyRemoteMembers=applyMemberProfiles;
    window.cdeccSetMemberLoadError=message=>{
      const loadStatus=document.querySelector('.member-load-status');
      if(!loadStatus)return;
      loadStatus.textContent=message;
      loadStatus.hidden=false;
      loadStatus.dataset.kind='error';
    };

    const candidateIntro=make('article','candidate-intro-blob');
    candidateIntro.append(
      make('span','gov-card-icon','✦'),
      make('h2','',text('candidateBlobTitle')),
      make('p','',text('candidateBlobText'))
    );
    const candidateRegister=button(text('candidateRegister'),'primary');
    candidateRegister.dataset.candidateRegister='';
    candidateIntro.append(candidateRegister);
    const candidateForm=make('form','card site-form candidate-form');
    candidateForm.hidden=true;
    const toggleCandidateForm=(show)=>{
      candidateForm.hidden=!show;
      const label=show?(document.documentElement.lang==='en'?'Close form':'Fermer le formulaire'):text('candidateRegister');
      candidateRegister.textContent=label;
      candidateRegister.setAttribute('aria-expanded',String(show));
      if(show){
        candidateForm.scrollIntoView({behavior:'smooth',block:'start'});
        const firstField=candidateForm.querySelector('input[name="candidate-team"]');
        if(firstField){firstField.focus({preventScroll:true});}
      }
    };
    candidateRegister.addEventListener('click',()=>toggleCandidateForm(candidateForm.hidden));
    const appendCandidateField=(id,key,tag='input',type='text')=>{
      const label=make('label','');
      label.htmlFor=id;
      label.append(make('span','',text(key)));
      const field=document.createElement(tag);
      field.id=id;
      field.name=id;
      if(tag==='input')field.type=type;
      label.append(field);
      candidateForm.append(label);
      return field;
    };
    const teamName=appendCandidateField('candidate-team','candidateTeam');
    teamName.maxLength=80;
    teamName.required=true;
    const positionFieldset=make('fieldset','candidate-position-fieldset');
    positionFieldset.append(make('legend','',text('candidateRoster')));
    const positionFields=[
      {id:'candidate-president',key:'candidatePresident'},
      {id:'candidate-vice-president',key:'candidateVicePresident'},
      {id:'candidate-treasurer',key:'candidateTreasurer'},
      {id:'candidate-secretary',key:'candidateSecretary'},
      {id:'candidate-high-voice',key:'candidateHighVoice',multiple:true,maxMembers:3},
      {id:'candidate-low-voice',key:'candidateLowVoice',multiple:true,maxMembers:3}
    ];
    positionFields.forEach(position=>{
      const label=make('label','candidate-position-field');
      label.append(make('span','',position.key==='candidateSectionRepresentative'
        ?text(position.key).replace('{section}',String(position.section))
        :text(position.key)));
      const field=document.createElement(position.multiple?'textarea':'input');
      if(!position.multiple)field.type='text';
      else field.rows=position.maxMembers||2;
      field.id=position.id;
      field.name=position.id;
      field.maxLength=position.multiple?500:100;
      if(position.maxMembers){
        field.placeholder=text('candidateVoicePlaceholder');
        field.addEventListener('input',()=>{
          const memberCount=field.value.split(/\r?\n/).map(name=>name.trim()).filter(Boolean).length;
          field.setCustomValidity(memberCount>position.maxMembers?text('candidateVoiceLimitError'):'');
        });
      }
      field.dataset.candidatePosition=position.id;
      label.append(field);
      positionFieldset.append(label);
      position.field=field;
    });
    const roster=document.createElement('input');
    roster.type='hidden';
    roster.id='candidate-roster';
    roster.name='candidate-roster';
    const ideas=appendCandidateField('candidate-ideas','candidateIdeas','textarea');
    ideas.maxLength=2000;
    ideas.required=true;
    const picture=appendCandidateField('candidate-picture','candidatePicture','input','file');
    picture.accept='image/jpeg,image/png,image/webp';
    picture.required=true;
    const pictureHelp=make('p','site-field-help',text('candidatePictureHelp'));
    candidateForm.append(positionFieldset,roster,pictureHelp);
    const candidateImageCropEditor=make('div','candidate-image-crop-editor');
    candidateImageCropEditor.hidden=true;
    candidateImageCropEditor.append(
      make('p','candidate-image-crop-title',text('candidateImageCropTitle')),
      make('p','candidate-image-crop-help',text('candidateImageCropHelp'))
    );
    const candidateImageCropCanvas=document.createElement('canvas');
    candidateImageCropCanvas.className='candidate-image-crop-canvas';
    candidateImageCropCanvas.tabIndex=0;
    candidateImageCropCanvas.setAttribute('role','img');
    candidateImageCropCanvas.setAttribute('aria-label',text('candidateImageCropHelp'));
    let candidateImageEditor=null;
    const initializeCandidateImageEditor=()=>{
      if(candidateImageEditor)return candidateImageEditor;
      if(typeof window.cdeccCreateCandidateImageCropEditor!=='function')throw new Error(text('candidateImageInvalid'));
      candidateImageEditor=window.cdeccCreateCandidateImageCropEditor(candidateImageCropCanvas,canvas=>{
        candidateImageCropEditor.hidden=false;
        candidateImageCropCanvas.hidden=false;
        candidatePreviewImage.hidden=true;
        candidatePreviewPlaceholder.hidden=true;
      });
      window.cdeccCandidateImageCropEditors??=new WeakMap();
      window.cdeccCandidateImageCropEditors.set(candidateForm,candidateImageEditor);
      return candidateImageEditor;
    };
    const backgroundColor=appendCandidateField('candidate-background','candidateBackground','input','color');
    backgroundColor.defaultValue='#396d59';
    const foregroundColor=appendCandidateField('candidate-foreground','candidateForeground','input','color');
    foregroundColor.defaultValue='#ffffff';
    const candidatePreview=make('article','candidate-preview-card');
    candidatePreview.tabIndex=0;
    candidatePreview.setAttribute('role','button');
    candidatePreview.style.cursor='pointer';
    candidatePreview.addEventListener('click',()=>toggleCandidateForm(true));
    candidatePreview.addEventListener('keydown',event=>{
      if(event.target===candidateImageCropCanvas)return;
      if(event.key==='Enter'||event.key===' '){
        event.preventDefault();
        toggleCandidateForm(true);
      }
    });
    candidateImageCropCanvas.addEventListener('click',event=>event.stopPropagation());
    const candidatePreviewCopy=make('div','candidate-preview-copy');
    const candidatePreviewTitle=make('h2','');
    const candidatePreviewIdeas=make('p','');
    const candidatePreviewRoster=make('div','candidate-preview-roster');
    const candidatePreviewRosterTitle=make('h3','',text('candidatePreviewMembers'));
    const candidatePreviewRosterList=make('ul','');
    candidatePreviewRoster.append(candidatePreviewRosterTitle,candidatePreviewRosterList);
    candidatePreviewCopy.append(
      make('span','pill',text('candidatePreviewLabel')),
      candidatePreviewTitle,
      candidatePreviewRoster,
      candidatePreviewIdeas
    );
    const candidatePreviewMedia=make('div','candidate-preview-media');
    const candidatePreviewImage=document.createElement('img');
    candidatePreviewImage.alt='';
    candidatePreviewImage.hidden=true;
    const candidatePreviewPlaceholder=make('p','',text('candidatePreviewImage'));
    candidateImageCropCanvas.hidden=true;
    candidatePreviewMedia.append(candidatePreviewImage,candidatePreviewPlaceholder,candidateImageCropCanvas);
    candidatePreview.append(candidatePreviewCopy,candidatePreviewMedia,candidateImageCropEditor);
    const updateCandidatePreview=()=>{
      candidatePreview.style.backgroundColor=backgroundColor.value;
      candidatePreview.style.color=foregroundColor.value;
      candidatePreviewTitle.textContent=teamName.value.trim()||text('candidateTeam');
      candidatePreviewIdeas.textContent=ideas.value.trim()||text('candidateIdeas');
      roster.value=positionFields.map(position=>{
        const names=position.field.value.split(/\r?\n/).map(name=>name.trim()).filter(Boolean);
        if(!names.length)return '';
        const label=position.key==='candidateSectionRepresentative'
          ?text(position.key).replace('{section}',String(position.section))
          :text(position.key);
        return `${label}: ${names.join(', ')}`;
      }).filter(Boolean).join('\n');
      candidatePreviewRosterList.replaceChildren();
      const members=roster.value.split(/\r?\n/).map(member=>member.trim()).filter(Boolean);
      members.forEach(member=>candidatePreviewRosterList.append(make('li','',member)));
      candidatePreviewRoster.hidden=members.length===0;
      candidatePreview.classList.toggle('has-many-members',members.length>=6);
      candidatePreview.classList.toggle('has-many-members-dense',members.length>=9);
    };
    candidateForm.addEventListener('reset',()=>{
      window.setTimeout(()=>{
        updateCandidatePreview();
        candidateImageEditor?.reset();
        candidatePreviewImage.removeAttribute('src');
        candidatePreviewImage.hidden=true;
        candidateImageCropCanvas.hidden=true;
        candidatePreviewPlaceholder.hidden=false;
        candidateImageCropEditor.hidden=true;
      },0);
    });
    candidateForm.append(candidatePreview);
    teamName.addEventListener('input',updateCandidatePreview);
    positionFields.forEach(position=>position.field.addEventListener('input',updateCandidatePreview));
    ideas.addEventListener('input',updateCandidatePreview);
    backgroundColor.addEventListener('input',updateCandidatePreview);
    foregroundColor.addEventListener('input',updateCandidatePreview);
    picture.addEventListener('change',()=>{
      const file=picture.files[0];
      if(file&&file.size<=maxCandidateImageSize&&['image/jpeg','image/png','image/webp'].includes(file.type)){
        try{
          candidateImageCropCanvas.hidden=false;
          candidatePreviewImage.hidden=true;
          candidatePreviewPlaceholder.hidden=true;
          candidateImageCropEditor.hidden=false;
          initializeCandidateImageEditor().load(file).catch(error=>{
            reportError(error);
            candidateImageCropCanvas.hidden=true;
            candidatePreviewPlaceholder.hidden=false;
            candidateImageCropEditor.hidden=true;
            setError(candidateForm.querySelector('.site-status'),error);
          });
        }catch(error){
          reportError(error);
          candidateImageCropCanvas.hidden=true;
          candidatePreviewPlaceholder.hidden=false;
          candidateImageCropEditor.hidden=true;
          setError(candidateForm.querySelector('.site-status'),error);
        }
      }else{
        candidatePreviewImage.removeAttribute('src');
        candidatePreviewImage.hidden=true;
        candidateImageCropCanvas.hidden=true;
        candidatePreviewPlaceholder.hidden=false;
        candidateImageCropEditor.hidden=true;
      }
    });
    updateCandidatePreview();
    const candidateStatus=make('p','site-status');
    candidateStatus.setAttribute('role','status');
    candidateStatus.setAttribute('aria-live','polite');
    const candidateSubmit=make('button','primary',text('candidateSubmit'));
    candidateSubmit.type='submit';
    candidateForm.append(candidateStatus,candidateSubmit);
    elections.replaceChildren(
      makePageHeading(text('navCandidates'),text('candidatePageTitle'),text('candidatePageText')),
      candidateIntro,
      candidateForm
    );

    const makePersonIcon=className=>{
      const icon=make('span',`member-person-icon${className?` ${className}`:''}`);
      icon.setAttribute('aria-hidden','true');
      return icon;
    };
    const makeMemberRole=(role,description)=>{
      const card=make('article','member-structure-role-card');
      card.append(makePersonIcon());
      const copy=make('div','member-structure-role-copy');
      copy.append(make('h4','member-structure-role',role));
      if(description)copy.append(make('p','member-structure-description',description));
      card.append(copy);
      return card;
    };
    const assemblyStructure=make('section','member-assembly-structure');
    const assemblyPanel=make('div','member-assembly-panel');
    assemblyPanel.append(make('h3','member-assembly-title',text('leadreps')));
    const assemblySlots=make('div','member-assembly-slots');
    [
      ['rolePresident','rolePresidentText'],
      ['roleTreasurer','roleTreasurerText'],
      ['roleHighSpokesperson','roleHighSpokespersonText'],
      ['roleVicePresident','roleVicePresidentText'],
      ['roleSecretary','roleSecretaryText'],
      ['roleLowSpokesperson','roleLowSpokespersonText']
    ].forEach(([role,description])=>
      assemblySlots.append(makeMemberRole(text(role),text(description)))
    );
    assemblyPanel.append(assemblySlots);
    assemblyStructure.append(assemblyPanel);
    const assemblyRepresentatives=make('div','member-assembly-representatives');
    for(let section=1;section<=5;section++){
      const role=text('candidateSectionRepresentative').replace('{section}',String(section));
      const representative=make('div','member-assembly-representative');
      representative.append(makePersonIcon('is-small'),make('span','',role));
      assemblyRepresentatives.append(representative);
    }
    assemblyStructure.append(assemblyRepresentatives);
    const classRepresentativeSlots=make('div','member-class-representative-slots');
    for(let section=1;section<=5;section++){
      const role=text('candidateSectionRepresentative').replace('{section}',String(section));
      const group=make('div','member-class-group');
      const classCard=make('article','member-class-card');
      const classHeading=make('div','member-class-card-heading');
      classHeading.append(makePersonIcon('is-small'),make('span','',role));
      const students=make('div','member-student-icons');
      students.setAttribute('aria-hidden','true');
      for(let student=0;student<6;student++)students.append(makePersonIcon('is-student'));
      classCard.append(classHeading,students);
      group.append(make('span','member-structure-arrow','↑'),classCard);
      classRepresentativeSlots.append(group);
    }
    const classRepresentativePanel=make('section','member-class-panel');
    classRepresentativePanel.append(
      make('h3','member-class-title',text('classreps')),
      make('p','member-class-description',text('levelResponsibilities')),
      classRepresentativeSlots
    );
    const memberStructure=make('div','member-structure-chart');
    memberStructure.append(assemblyStructure,classRepresentativePanel);
    const memberProfiles=make('section','member-profile-section');
    memberProfiles.append(make('h2','member-profile-title',text('memberProfilesTitle')));
    const memberLoadStatus=make('p','site-status member-load-status');
    memberLoadStatus.hidden=true;
    memberLoadStatus.setAttribute('role','status');
    memberLoadStatus.setAttribute('aria-live','polite');
    memberProfiles.append(memberLoadStatus);
    const memberProfileGrid=make('div','member-profile-grid');
    memberSlotDefinitions.filter(slot=>slot.category==='assembly')
      .forEach(slot=>memberProfileGrid.append(makeMemberProfileCard(slot)));
    memberProfiles.append(memberProfileGrid);
    const secondaryRepsSection=make('section','member-secondary-reps');
    secondaryRepsSection.append(make('h3','member-profile-title',text('memberSecondaryRepsTitle')));
    const secondaryRepsGrid=make('div','member-secondary-reps-grid');
    memberSlotDefinitions.filter(slot=>slot.category==='secondary')
      .forEach(slot=>secondaryRepsGrid.append(makeMemberProfileCard(slot,'member-secondary-rep-card')));
    secondaryRepsSection.append(secondaryRepsGrid);
    const classRepresentativeSection=make('section','member-class-reps-section');
    classRepresentativeSection.append(
      make('h3','member-profile-title',text('classreps'))
    );
    for(let level=1;level<=5;level++){
      const levelKey=`level${['One','Two','Three','Four','Five'][level-1]}`;
      const levelGroup=make('div','member-class-reps-level');
      levelGroup.append(make('h4','member-class-reps-level-title',text(levelKey)));
      const representatives=make('div','member-class-reps-grid');
      memberSlotDefinitions
        .filter(slot=>slot.category==='class'&&slot.level===level)
        .forEach(slot=>representatives.append(makeMemberProfileCard(slot,'member-class-rep-card')));
      levelGroup.append(representatives);
      classRepresentativeSection.append(levelGroup);
    }
    people.replaceChildren(
      makePageHeading(text('navMembers'),text('peopleTitle'),text('peopleText')),
      memberStructure,
      memberProfiles,
      secondaryRepsSection,
      classRepresentativeSection
    );

    const resourceCards=make('div','cards gov-resource-grid');
    [text('trainingMeetings'),text('trainingProposals'),text('trainingMinutes')].forEach((label,index)=>{
      const card=make('article','card gov-info-card');
      card.append(make('span','gov-card-icon',String(index+1)),make('h3','',label));
      resourceCards.append(card);
    });
    resources.replaceChildren(
      makePageHeading(text('navResources'),text('trainingTitle'),text('trainingText')),
      resourceCards,
      make('p','gov-pending',text('trainingPending')),
      makePageLink('backToAssembly','how','primary')
    );
    const makeVoteMoreLabel=label=>{
      const more=make('span','vote-team-more');
      more.textContent=label;
      return more;
    };
    const voteGrid=make('div','vote-team-grid');
    const voteMoreLabel=document.documentElement.lang==='fr'?'Plus d’informations':'More information';
    const publicVoteCandidates=Array.isArray(window.cdeccApprovedVoteCandidates)?window.cdeccApprovedVoteCandidates:[];
    if(publicVoteCandidates.length){
      publicVoteCandidates.forEach(candidate=>{
        const card=make('button','vote-team-card');
        card.type='button';
        card.dataset.voteTeam=`candidate-${candidate.id}`;
        card.setAttribute('aria-label',document.documentElement.lang==='fr' ? `${voteMoreLabel} sur ${candidate.team_name || 'Candidate'}` : `${voteMoreLabel} about ${candidate.team_name || 'Candidate'}`);
        card.style.backgroundColor=candidate.background||'#396d59';
        card.style.color=candidate.foreground||'#ffffff';
        const image=document.createElement('img');
        const photoUrl=candidate.photo_url||candidate.photo_path;
        if(photoUrl)image.src=photoUrl;
        else image.hidden=true;
        image.alt=candidate.team_name || 'Candidate photo';
        image.loading='lazy';
        card.append(make('h2','',candidate.team_name || 'Candidate'),image,makeVoteMoreLabel(voteMoreLabel));
        voteGrid.append(card);
      });
    }else{
      voteGrid.append(emptyState(text('voteNoCandidates'),text('voteNoCandidatesText')));
    }
    const voteButton=make('button','vote-submit',text('voteSubmit'));
    voteButton.type='button';
    const availability=voteAvailability();
    voteButton.disabled=!availability.open;
    const scheduleBlob=make('div','vote-schedule-blob');
    scheduleBlob.append(make('strong','',text('voteScheduleTitle')));
    const formatDateTime=value=>new Intl.DateTimeFormat(
      document.documentElement.lang==='en'?'en-CA':'fr-CA',
      {dateStyle:'medium',timeStyle:'short'}
    ).format(new Date(value));
    if(voteSettings.startsAt){
      scheduleBlob.append(make('span','',`${text('voteScheduleOpens')} : ${formatDateTime(voteSettings.startsAt)}`));
      if(voteSettings.endsAt)scheduleBlob.append(make('span','',`${text('voteScheduleCloses')} : ${formatDateTime(voteSettings.endsAt)}`));
    }else scheduleBlob.append(make('span','',text('voteScheduleMissing')));
    const voteStatus=make('p','vote-disabled-note',availability.message);
    const voteActionRow=make('div','vote-action-row');
    voteActionRow.append(scheduleBlob,voteButton);
    vote.replaceChildren(
      makePageHeading(text('navVote'),text('votePageTitle'),text('votePageIntro')),
      voteGrid,
      voteActionRow,
      voteStatus
    );
    if(selectedVoteTeam){
      const publicVoteCandidates=Array.isArray(window.cdeccApprovedVoteCandidates)?window.cdeccApprovedVoteCandidates:[];
      const candidate=publicVoteCandidates.find(item=>`candidate-${item.id}`===selectedVoteTeam);
      if(candidate){
        const detailCard=make('article','vote-team-detail-card');
        detailCard.style.backgroundColor=candidate.background||'#396d59';
        detailCard.style.color=candidate.foreground||'#ffffff';
        const detailImage=document.createElement('img');
        if(candidate.photo_url)detailImage.src=candidate.photo_url;
        else detailImage.hidden=true;
        detailImage.alt=candidate.team_name || 'Candidate photo';
        detailImage.loading='lazy';
        const detailCopy=make('div','vote-team-detail-copy');
        const detailRoster=make('section','vote-team-detail-roster');
        detailRoster.append(make('h2','',text('candidatePreviewMembers')));
        const rosterList=make('ul','');
        String(candidate.roster||'').split(/\r?\n/).map(member=>member.trim())
          .filter(Boolean)
          .map(member=>member
            .replace(/^Haute Parole(?=\s*:)/i,'Parole administrative')
            .replace(/^Basse Parole(?=\s*:)/i,'Parole étudiante'))
          .forEach(member=>rosterList.append(make('li','',member)));
        detailRoster.hidden=rosterList.childElementCount===0;
        detailRoster.append(rosterList);
        detailCopy.append(
          make('h1','',candidate.team_name || 'Candidate'),
          detailRoster,
          make('p','',candidate.ideas || candidate.team_name || '')
        );
        detailCard.append(detailCopy,detailImage);
        const back=button(`← ${text('voteTeamBack')}`,'vote-team-back');
        voteTeamDetail.replaceChildren(back,detailCard);
      }else voteTeamDetail.replaceChildren();
    }else voteTeamDetail.replaceChildren();
  };
  renderGovernancePages();
  window.cdeccApplyRemoteVoteSettings=settings=>{
    voteSettings=settings;
    voteSettingsLoadError='';
    renderGovernancePages();
    refreshVoteAvailability();
  };
  window.setInterval(refreshVoteAvailability,30000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)refreshVoteAvailability()});
  vote.addEventListener('click',event=>{
    if(event.target.closest('.vote-submit')){
      if(!voteSettings.formUrl||!validVoteSettings(voteSettings))return;
      window.open(voteSettings.formUrl,'_blank','noopener,noreferrer');
      return;
    }
    const more=event.target.closest('[data-vote-team]');
    if(!more)return;
    selectedVoteTeam=more.dataset.voteTeam;
    renderGovernancePages();
    window.showPage('vote-team-detail');
  });
  voteTeamDetail.addEventListener('click',event=>{
    if(!event.target.closest('.vote-team-back'))return;
    selectedVoteTeam='';
    voteTeamDetail.replaceChildren();
    window.showPage('vote');
  });
  elections.addEventListener('click',event=>{
    const register=event.target.closest('[data-candidate-register]');
    if(!register)return;
    const form=elections.querySelector('.candidate-form');
    if(!form)return;
    form.hidden=false;
    form.scrollIntoView({behavior:'smooth',block:'start'});
    form.querySelector('input')?.focus({preventScroll:true});
  });
  elections.addEventListener('submit',async event=>{
    const form=event.target.closest('.candidate-form');
    if(!form)return;
    event.preventDefault();
    const status=form.querySelector('.site-status');
    const teamName=form.querySelector('#candidate-team').value.trim();
    const roster=form.querySelector('#candidate-roster').value.trim();
    const ideas=form.querySelector('#candidate-ideas').value.trim();
    const picture=form.querySelector('#candidate-picture').files[0];
    if(!teamName||!roster||!ideas){
      setStatus(status,text('candidateRequired'),'error');
      return;
    }
    if(!picture||picture.size>maxCandidateImageSize||!['image/jpeg','image/png','image/webp'].includes(picture.type)){
      setStatus(status,text('candidateImageInvalid'),'error');
      return;
    }
    try{
      const savedApplications=localStorage.getItem(candidateStorageKey);
      const applications=savedApplications===null?[]:JSON.parse(savedApplications);
      if(!Array.isArray(applications))throw new Error(text('candidateSaveError'));
      const pictureId=`candidate-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
      await storeCandidateImage(pictureId,picture);
      applications.push({
        teamName,roster,ideas,pictureId,pictureType:picture.type,
        background:form.querySelector('#candidate-background').value,
        foreground:form.querySelector('#candidate-foreground').value,
        submittedAt:new Date().toISOString()
      });
      try{
        localStorage.setItem(candidateStorageKey,JSON.stringify(applications));
      }catch(error){
        await removeCandidateImage(pictureId);
        throw error;
      }
      form.reset();
      candidateImageEditor?.reset();
      candidateImageCropCanvas.hidden=true;
      candidateImageCropEditor.hidden=true;
      if(candidatePreviewImageUrl)URL.revokeObjectURL(candidatePreviewImageUrl);
      candidatePreviewImageUrl='';
      candidatePreviewImage.removeAttribute('src');
      candidatePreviewImage.hidden=true;
      candidatePreviewPlaceholder.hidden=false;
      updateCandidatePreview();
      setStatus(status,text('candidateSaved'),'success');
    }catch(error){setStatus(status,error.message||text('candidateSaveError'),'error')}
  });

  const sideNav=document.querySelector('.side');
  const sideRoutes=[
    ['elections','navCandidates','⚑'],
    ['how','navCharter','↗'],
    ['projects','navIdeas','✳'],
    ['people','navMembers','♧'],
    ['vote','navVote','✓']
  ];
  const routeLabels=[];
  sideNav.replaceChildren();
  sideRoutes.forEach(([page,key,icon])=>{
    const item=button('','');
    item.dataset.page=page;
    item.append(make('span','ico',icon),make('span','',text(key)));
    routeLabels.push({node:item.querySelectorAll('span')[1],key});
    sideNav.append(item);
  });
  const mobileNav=document.querySelector('.mobile');
  mobileNav.remove();
  const adminEntry=document.querySelector('.admin-entry');
  const updateNavigation=()=>{
    const english=document.documentElement.lang==='en';
    routeLabels.forEach(({node,key})=>node.textContent=text(key));
    document.querySelectorAll('.header-nav [data-page]').forEach(item=>{
      const key={home:'home',how:'navCharter',people:'navMembers',projects:'navIdeas',elections:'navCandidates',vote:'navVote'}[item.dataset.page];
      if(key)item.textContent=text(key);
    });
    document.querySelector('.settings-header-link').textContent=text('navSettings');
    document.querySelector('.branding-name small').textContent=english?'CDECC · Student Council':'CDECC · Conseil des élèves';
    adminEntry.textContent=english?'⚙ Admin version':'⚙ Version admin';
    adminEntry.setAttribute('aria-label',english?'Admin access':'Accès administrateur');
    document.querySelector('.pluriportail-link').setAttribute('aria-label',english?'Open Pluriportail in a new tab':'Ouvrir Pluriportail dans un nouvel onglet');
    document.getElementById('lang').setAttribute('aria-label',english?'Change language to French':'Passer en anglais');
  };
  updateNavigation();
  const syncGovernanceLanguage=()=>{
    renderGovernancePages();
    updateNavigation();
  };

  const projects=document.getElementById('page-projects');

  const news=document.getElementById('page-news');
  news.replaceChildren(
    makePageHeading(text('news'),text('latestNews'),text('noNewsText')),
    emptyState(text('noNewsTitle'),text('noNewsText'),'▤')
  );

  const participation=document.getElementById('page-participate');
  participation.remove();
  const participationRouteIndex=pageNames.indexOf('participate');
  if(participationRouteIndex!==-1)pageNames.splice(participationRouteIndex,1);
  const participationForm=make('form','card site-form site-proposal-form');
  participationForm.id='suggestform';
  participationForm.noValidate=true;
  participationForm.append(
    makePageHeading(text('participate'),text('participateTitle'),text('participateText'))
  );
  const categoryLabel=make('label','');
  categoryLabel.htmlFor='suggestion-category';
  categoryLabel.append(make('span','',text('category')));
  const categorySelect=document.createElement('select');
  categorySelect.id='suggestion-category';
  categorySelect.required=true;
  const categoryOptions=[
    ['',text('chooseCategory')],
    ['school-life',text('schoolLife')],
    ['activity',text('activity')],
    ['shared-spaces',text('sharedSpaces')],
    ['other',text('other')]
  ];
  categoryOptions.forEach(([value,label])=>{
    const option=make('option','',label);
    option.value=value;
    categorySelect.append(option);
  });
  categoryLabel.append(categorySelect);
  const gradeLabel=make('label','');
  gradeLabel.htmlFor='suggestion-grade';
  gradeLabel.append(make('span','',text('studentGrade')));
  const gradeSelect=document.createElement('select');
  gradeSelect.id='suggestion-grade';
  gradeSelect.name='grade';
  gradeSelect.required=true;
  [
    ['',text('chooseGrade')],
    ['1',text('gradeOne')],
    ['2',text('gradeTwo')],
    ['3',text('gradeThree')],
    ['4',text('gradeFour')],
    ['5',text('gradeFive')],
    ['general',text('generalGrade')]
  ].forEach(([value,label])=>{
    const option=make('option','',label);
    option.value=value;
    gradeSelect.append(option);
  });
  gradeLabel.append(gradeSelect);
  const titleLabel=make('label','');
  titleLabel.htmlFor='title';
  titleLabel.append(make('span','',text('ideaTitle')));
  const titleInput=document.createElement('input');
  titleInput.id='title';
  titleInput.name='title';
  titleInput.maxLength=160;
  titleInput.required=true;
  titleInput.placeholder=text('ideaTitlePlaceholder');
  titleLabel.append(titleInput);
  const detailsLabel=make('label','');
  detailsLabel.htmlFor='details';
  detailsLabel.append(make('span','',text('details')));
  const detailsInput=document.createElement('textarea');
  detailsInput.id='details';
  detailsInput.name='details';
  detailsInput.maxLength=1200;
  detailsInput.required=true;
  detailsInput.placeholder=text('detailsPlaceholder');
  detailsLabel.append(detailsInput);
  const hiddenCompatibility=make('div');
  hiddenCompatibility.hidden=true;
  const nameCompatibility=document.createElement('input');
  nameCompatibility.id='name';
  const classCompatibility=document.createElement('select');
  classCompatibility.id='class';
  const adminCompatibility=document.createElement('input');
  adminCompatibility.id='headline';
  const bodyCompatibility=document.createElement('textarea');
  bodyCompatibility.id='body';
  hiddenCompatibility.append(nameCompatibility,classCompatibility,adminCompatibility,bodyCompatibility);
  const formStatus=make('p','site-status');
  formStatus.setAttribute('role','status');
  formStatus.setAttribute('aria-live','polite');
  formStatus.dataset.storageStatus='';
  const submit=make('button','primary',text('submit'));
  submit.type='submit';
  participationForm.append(categoryLabel,gradeLabel,titleLabel,detailsLabel,formStatus,submit,hiddenCompatibility);
  projects.replaceChildren(participationForm);

  const admin=document.getElementById('page-admin');
  admin.replaceChildren();
  admin.classList.add('site-admin-page');
  const adminHeading=makePageHeading('',text('adminTitle'),text('adminText'));
  const adminNotice=make('p','site-admin-note',text('adminNotice'));
  const priorityHelp=make('p','site-priority-help',text('priorityHelp'));
  const adminStatus=make('p','site-status');
  adminStatus.setAttribute('role','status');
  adminStatus.setAttribute('aria-live','polite');
  adminStatus.dataset.storageStatus='';
  const toolbar=make('div','site-review-toolbar');
  const searchLabel=make('label','admin-search-label');
  searchLabel.append(make('span','',text('searchSuggestions')));
  const searchInput=document.createElement('input');
  searchInput.className='admin-search';
  searchInput.type='search';
  searchInput.autocomplete='off';
  searchInput.setAttribute('aria-label',text('searchSuggestions'));
  searchLabel.append(searchInput);
  const filters=make('div','site-review-filters');
  const reviewList=make('div','site-review-list');
  const allFilters=['pending','approved','rejected'];
  let activeFilter='pending';
  allFilters.forEach(status=>{
    const filter=button('', 'site-filter');
    filter.dataset.statusFilter=status;
    filters.append(filter);
  });
  toolbar.append(searchLabel,filters);
  const voteSettingsPanel=make('section','card admin-vote-settings');
  const voteSettingsStatus=make('p','site-status');
  voteSettingsStatus.setAttribute('role','status');
  voteSettingsStatus.setAttribute('aria-live','polite');
  const renderVoteAdminSettings=()=>{
    voteSettingsPanel.replaceChildren(
      make('h2','',text('voteAdminTitle')),
      make('p','site-admin-note',text('voteSettingsNotice'))
    );
    const form=make('form','site-form');
    const addVoteField=(id,key,type,value)=>{
      const label=make('label','');
      label.htmlFor=id;
      label.append(make('span','',text(key)));
      const input=document.createElement('input');
      input.id=id;
      input.name=id;
      input.type=type;
      input.value=value;
      if(type==='url')input.placeholder='https://forms.google.com/...';
      label.append(input);
      form.append(label);
      return input;
    };
    addVoteField('vote-form-url','voteFormUrl','url',voteSettings.formUrl);
    addVoteField('vote-starts-at','voteStartsAt','datetime-local',voteSettings.startsAt);
    addVoteField('vote-ends-at','voteEndsAt','datetime-local',voteSettings.endsAt);
    const status=make('p','site-status');
    status.setAttribute('role','status');
    status.setAttribute('aria-live','polite');
    const submit=make('button','primary',text('voteConfigSave'));
    submit.type='submit';
    form.append(status,submit);
    voteSettingsPanel.append(form);
    if(voteSettingsLoadError)setStatus(status,voteSettingsLoadError,'error');
  };
  renderVoteAdminSettings();
  admin.append(adminHeading,adminNotice,priorityHelp,adminStatus,toolbar,reviewList,voteSettingsPanel);
  admin.addEventListener('submit',event=>{
    const form=event.target.closest('.admin-vote-settings form');
    if(!form)return;
    event.preventDefault();
    const next={
      formUrl:form.querySelector('#vote-form-url').value.trim(),
      startsAt:form.querySelector('#vote-starts-at').value,
      endsAt:form.querySelector('#vote-ends-at').value
    };
    const status=form.querySelector('.site-status');
    if(!validVoteSettings(next)){
      setStatus(status,text('voteConfigInvalid'),'error');
      return;
    }
    try{
      localStorage.setItem(voteSettingsKey,JSON.stringify(next));
      voteSettings=next;
      voteSettingsLoadError='';
      renderGovernancePages();
      setStatus(voteSettingsPanel.querySelector('.site-status'),text('voteConfigSaved'),'success');
    }catch(error){setStatus(status,error.message||text('settingsSaveError'),'error')}
  });
  const settingsStatus=make('p','site-status');
  settingsStatus.setAttribute('role','status');
  settingsStatus.setAttribute('aria-live','polite');
  const languageButton=document.getElementById('lang');
  const renderSettings=()=>{
    const paletteCard=make('section','card settings-card');
    paletteCard.append(make('h2','',text('paletteTitle')));
    const paletteChoices=make('div','settings-choice-row');
    ['forest','ocean','plum'].forEach(palette=>{
      const choice=button(text(`palette${palette[0].toUpperCase()}${palette.slice(1)}`),'settings-choice');
      choice.dataset.palette=palette;
      choice.setAttribute('aria-pressed',String(preferences.palette===palette));
      paletteChoices.append(choice);
    });
    if(preferences.customPalette){
      const customChoice=button(text('customPalette'),'settings-choice');
      customChoice.dataset.palette='custom';
      customChoice.setAttribute('aria-pressed',String(preferences.palette==='custom'));
      paletteChoices.append(customChoice);
    }
    const customPaletteToggle=button(
      text(preferences.customPalette?'editCustomPalette':'createCustomPalette'),
      'custom-palette-toggle'
    );
    customPaletteToggle.dataset.customPaletteEditor='';
    customPaletteToggle.setAttribute('aria-expanded','false');
    const customPaletteEditor=make('div','custom-palette-editor');
    customPaletteEditor.hidden=true;
    const customColorFields=make('div','custom-palette-colors');
    const customColorLabels={
      forest:'customPaletteForest',
      deep:'customPaletteDeep',
      green:'customPaletteGreen',
      lime:'customPaletteLime'
    };
    customPaletteKeys.forEach(key=>{
      const label=make('label','custom-palette-color');
      label.append(make('span','',text(customColorLabels[key])));
      const input=document.createElement('input');
      input.type='color';
      input.value=preferences.customPalette?.[key]||defaultCustomPalette[key];
      input.dataset.customPaletteColor=key;
      input.setAttribute('aria-label',text(customColorLabels[key]));
      label.append(input);
      customColorFields.append(label);
    });
    const saveCustomPalette=button(text('saveCustomPalette'),'save-custom-palette','primary');
    saveCustomPalette.dataset.saveCustomPalette='';
    customPaletteEditor.append(customColorFields,saveCustomPalette);
    paletteCard.append(paletteChoices,customPaletteToggle,customPaletteEditor);
    const appearanceCard=make('section','card settings-card');
    appearanceCard.append(make('h2','',text('appearanceTitle')));
    const darkLabel=make('label','settings-switch');
    const darkToggle=document.createElement('input');
    darkToggle.type='checkbox';
    darkToggle.dataset.preference='dark';
    darkToggle.checked=preferences.dark;
    darkLabel.append(make('span','',text('themeLabel')),darkToggle);
    const sloganLabel=make('label','settings-switch');
    const sloganToggle=document.createElement('input');
    sloganToggle.type='checkbox';
    sloganToggle.dataset.preference='slogan';
    sloganToggle.checked=preferences.slogan;
    sloganLabel.append(make('span','',text('sloganLabel')),sloganToggle);
    appearanceCard.append(darkLabel,sloganLabel);
    const languageCard=make('section','card settings-card');
    languageCard.append(make('h2','',text('languageTitle')),languageButton);
    const adminCard=make('section','card settings-card');
    adminCard.append(
      make('h2','',text('adminAccessTitle')),
      make('p','',text('adminAccessText')),
      adminEntry
    );
    settings.replaceChildren(
      makePageHeading(text('navSettings'),text('settingsTitle'),text('settingsIntro')),
      paletteCard,
      appearanceCard,
      languageCard,
      adminCard,
      settingsStatus
    );
    if(preferencesLoadError)setStatus(settingsStatus,preferencesLoadError,'error');
  };
  renderSettings();
  const savePreferences=()=>{
    preferences.updatedAt=Date.now();
    applyPreferences();
    const serialized=JSON.stringify(preferences);
    let saved=false;
    let saveError;
    try{
      localStorage.setItem(preferencesKey,serialized);
      saved=true;
    }catch(error){saveError=error}
    try{
      const secure=location.protocol==='https:'?'; Secure':'';
      document.cookie=`${preferencesCookieName}=${encodeURIComponent(serialized)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
      saved=saved||readPreferenceCookie()===serialized;
    }catch(error){saveError??=error}
    if(!saved){
      const error=saveError||new Error(text('settingsSaveError'));
      preferencesLoadError=error.message||text('settingsSaveError');
      setStatus(settingsStatus,preferencesLoadError,'error');
      return;
    }
    preferencesLoadError='';
    setStatus(settingsStatus,text('preferencesSaved'),'success');
  };
  settings.addEventListener('click',event=>{
    const editCustom=event.target.closest('[data-custom-palette-editor]');
    if(editCustom){
      const editor=settings.querySelector('.custom-palette-editor');
      editor.hidden=!editor.hidden;
      editCustom.setAttribute('aria-expanded',String(!editor.hidden));
      return;
    }
    const saveCustom=event.target.closest('[data-save-custom-palette]');
    if(saveCustom){
      const customPalette=Object.fromEntries(customPaletteKeys.map(key=>[
        key,settings.querySelector(`[data-custom-palette-color="${key}"]`).value
      ]));
      if(!isValidCustomPalette(customPalette)){
        setStatus(settingsStatus,text('settingsSaveError'),'error');
        return;
      }
      preferences.customPalette=customPalette;
      preferences.palette='custom';
      savePreferences();
      renderSettings();
      setStatus(settingsStatus,text('customPaletteSaved'),'success');
      return;
    }
    const choice=event.target.closest('[data-palette]');
    if(!choice||!palettes.has(choice.dataset.palette))return;
    if(choice.dataset.palette==='custom'&&!preferences.customPalette)return;
    preferences.palette=choice.dataset.palette;
    settings.querySelectorAll('[data-palette]').forEach(item=>item.setAttribute('aria-pressed',String(item===choice)));
    savePreferences();
  });
  settings.addEventListener('change',event=>{
    const toggle=event.target.closest('[data-preference]');
    if(!toggle)return;
    preferences[toggle.dataset.preference]=toggle.checked;
    savePreferences();
  });
  const syncSavedPreferences=()=>{
    const candidates=[];
    try{
      const raw=localStorage.getItem(preferencesKey);
      if(raw!==null){
        const saved=parsePreferences(raw);
        if(saved)candidates.push(saved);
      }
    }catch(error){preferencesLoadError=error.message||text('settingsSaveError')}
    try{
      const raw=readPreferenceCookie();
      if(raw!==null){
        const saved=parsePreferences(raw);
        if(saved)candidates.push(saved);
      }
    }catch(error){preferencesLoadError=error.message||text('settingsSaveError')}
    candidates.sort((a,b)=>b.updatedAt-a.updatedAt);
    const latest=candidates[0];
    if(latest&&latest.updatedAt>preferences.updatedAt){
      preferences=latest;
      applyPreferences();
      renderSettings();
    }
  };
  window.addEventListener('storage',event=>{
    if(event.key===preferencesKey||event.key===null)syncSavedPreferences();
  });
  window.addEventListener('focus',syncSavedPreferences);
  window.addEventListener('pageshow',syncSavedPreferences);
  document.addEventListener('visibilitychange',()=>{
    if(document.visibilityState==='visible')syncSavedPreferences();
  });
  const drawerCards=document.getElementById('news-drawer-cards');
  const drawerIntro=document.querySelector('.news-drawer-intro');
  const drawerTitle=document.getElementById('news-drawer-title');
  const closeButton=document.querySelector('.news-drawer-close');
  const updateDrawer=approved=>{
    const latest=approved.slice(0,3);
    drawerCards.replaceChildren();
    drawerTitle.textContent=text('panelTitle');
    drawerIntro.textContent=latest.length?text('projectIntro'):text('emptyNewsPanel');
    latest.forEach(item=>drawerCards.append(makeProjectCard(item)));
    closeButton.setAttribute('aria-label',document.documentElement.lang==='en'?'Close news':'Fermer les actualités');
  };
  const statusLabel=status=>text(status);
  const updateFilters=(suggestions)=>{
    filters.querySelectorAll('[data-status-filter]').forEach(filter=>{
      const status=filter.dataset.statusFilter;
      const label=text(`filter${status[0].toUpperCase()}${status.slice(1)}`);
      const count=suggestions.filter(item=>item.status===status).length;
      filter.textContent=`${label} (${count})`;
      filter.setAttribute('aria-pressed',String(activeFilter===status));
    });
  };
  const renderAdmin=(suggestions)=>{
    updateFilters(suggestions);
    const searchTerm=searchInput.value.trim().toLocaleLowerCase();
    const visible=suggestions
      .filter(item=>item.status===activeFilter)
      .filter(item=>`${item.title} ${item.details} ${categoryName(item.category)} ${gradeName(item.grade)}`.toLocaleLowerCase().includes(searchTerm))
      .sort((a,b)=>{
        const priorityDifference=priorityOrder[suggestionPriority(a).priority]-priorityOrder[suggestionPriority(b).priority];
        return priorityDifference||b.createdAt.localeCompare(a.createdAt);
      });
    reviewList.replaceChildren();
    if(!visible.length){
      const hasStatusItems=suggestions.some(item=>item.status===activeFilter);
      reviewList.append(emptyState(
        text(hasStatusItems?'noMatchesTitle':'noSuggestionsTitle'),
        text(hasStatusItems?'noMatchesText':'noSuggestionsText')
      ));
      return;
    }
    visible.forEach(item=>{
      const article=make('article','card site-review-card');
      const meta=make('div','site-review-meta');
      const status=make('span',`pill${item.status==='rejected'?' site-rejection-label':''}`,item.completedAt?text('completedStatus'):statusLabel(item.status));
      const date=make('time','site-date',`${text('savedDate')} ${formatDate(item.createdAt)}`);
      meta.append(status,date);
      article.append(meta,make('h3','',item.title));
      const priority=suggestionPriority(item);
      const priorityRow=make('div','site-priority-row');
      priorityRow.append(make('span',`site-priority-badge site-priority-${priority.priority}`,text(`priority${priority.priority[0].toUpperCase()}${priority.priority.slice(1)}`)));
      priorityRow.append(make('span',priority.manual?'site-priority-manual':'site-priority-reason',text(priority.manual?'priorityManual':priority.reason)));
      article.append(priorityRow);
      article.append(make('span','muted',categoryName(item.category)));
      article.append(make('span','muted',gradeName(item.grade)));
      article.append(make('p','',item.details));
      const priorityLabel=make('label','site-priority-control');
      priorityLabel.append(make('span','',text('priorityHeader')));
      const prioritySelect=document.createElement('select');
      prioritySelect.dataset.priorityId=item.id;
      prioritySelect.setAttribute('aria-label',`${text('prioritySet')}: ${item.title}`);
      const automaticOption=make('option','',text('priorityAutomatic'));
      automaticOption.value='automatic';
      automaticOption.selected=!priority.manual;
      prioritySelect.append(automaticOption);
      priorities.forEach(value=>{
        const option=make('option','',text(`priority${value[0].toUpperCase()}${value.slice(1)}`));
        option.value=value;
        option.selected=priority.manual&&value===priority.priority;
        prioritySelect.append(option);
      });
      priorityLabel.append(prioritySelect);
      article.append(priorityLabel);
      const actions=make('div','site-review-actions');
      if(item.status!=='approved')actions.append(button(text('approve'),'approve','approve'));
      if(item.status!=='rejected')actions.append(button(text('reject'),'reject','reject'));
      if(item.status!=='pending')actions.append(button(text('reopen'),'','reopen'));
      if(item.status==='approved')actions.append(button(text(item.completedAt?'reopenIdea':'markCompleted'),item.completedAt?'':'approve',item.completedAt?'reopen-completed':'complete'));
      actions.append(button(text('remove'),'','remove'));
      actions.querySelectorAll('[data-action]').forEach(action=>{action.dataset.id=item.id});
      article.append(actions);
      reviewList.append(article);
    });
  };
  const renderAll=()=>{
    let suggestions;
    try{suggestions=readSuggestions()}
    catch(error){
      reportError(error.message||text('loadError'));
      reviewList.replaceChildren(emptyState(text('loadError'),text('loadError')));
      return;
    }
    renderHomeProjects(suggestions);
    const approved=getApprovedSuggestions(suggestions);
    renderAdmin(suggestions);
    updateDrawer(approved);
  };
  const createId=()=>{
    if(crypto.randomUUID)return crypto.randomUUID();
    return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  };

  participationForm.addEventListener('submit',event=>{
    event.preventDefault();
    const title=titleInput.value.trim();
    const details=detailsInput.value.trim();
    const category=categorySelect.value;
    const grade=gradeSelect.value;
    if(!title||!details||!category||!grade){
      setStatus(formStatus,text('required'),'error');
      if(!category)categorySelect.focus();
      else if(!grade)gradeSelect.focus();
      else if(!title)titleInput.focus();
      else detailsInput.focus();
      return;
    }
    try{
      const suggestions=readSuggestions();
      const priority=classifySuggestion({title,details,category});
      suggestions.push({
        id:createId(),
        title,
        details,
        category,
        grade,
        createdAt:new Date().toISOString(),
        status:'pending',
        priority:priority.priority,
        priorityReason:priority.reason,
        priorityOverride:false
      });
      saveSuggestions(suggestions);
      participationForm.reset();
      setStatus(formStatus,text('submitted'),'success');
      renderAll();
      setStatus(formStatus,text('submitted'),'success');
    }catch(error){
      setStatus(formStatus,error.message||text('submitError'),'error');
    }
  });

  filters.addEventListener('click',event=>{
    const filter=event.target.closest('[data-status-filter]');
    if(!filter)return;
    activeFilter=filter.dataset.statusFilter;
    renderAll();
  });
  searchInput.addEventListener('input',()=>renderAll());
  reviewList.addEventListener('change',event=>{
    const control=event.target.closest('[data-priority-id]');
    if(!control)return;
    try{
      const suggestions=readSuggestions();
      const item=suggestions.find(suggestion=>suggestion.id===control.dataset.priorityId);
      if(!item)return;
      if(control.value==='automatic'){
        delete item.priority;
        delete item.priorityReason;
        delete item.priorityOverride;
      }else{
        if(!priorities.includes(control.value))throw new Error(text('saveError'));
        item.priority=control.value;
        item.priorityReason='priorityManual';
        item.priorityOverride=true;
      }
      saveSuggestions(suggestions);
      renderAll();
    }catch(error){
      setStatus(adminStatus,error.message||text('saveError'),'error');
    }
  });
  reviewList.addEventListener('click',event=>{
    const action=event.target.closest('[data-action]');
    if(!action)return;
    if(action.dataset.action==='remove'&&!window.confirm(text('confirmRemove')))return;
    try{
      const suggestions=readSuggestions();
      const item=suggestions.find(suggestion=>suggestion.id===action.dataset.id);
      if(!item)return;
      if(action.dataset.action==='remove'){
        saveSuggestions(suggestions.filter(suggestion=>suggestion.id!==item.id));
      }else if(action.dataset.action==='complete'){
        if(item.status!=='approved')return;
        item.completedAt=new Date().toISOString();
        saveSuggestions(suggestions);
      }else if(action.dataset.action==='reopen-completed'){
        delete item.completedAt;
        saveSuggestions(suggestions);
      }else{
        const nextStatus={approve:'approved',reject:'rejected',reopen:'pending'}[action.dataset.action];
        if(!nextStatus)return;
        item.status=nextStatus;
        if(nextStatus==='approved')item.approvedAt=new Date().toISOString();
        else{
          delete item.approvedAt;
          delete item.completedAt;
        }
        saveSuggestions(suggestions);
      }
      renderAll();
    }catch(error){
      setStatus(adminStatus,error.message||text('saveError'),'error');
    }
  });
  document.querySelector('.news-drawer-all').addEventListener('click',()=>window.showPage('news'));
  document.getElementById('lang').addEventListener('click',()=>{
    const language=copy[document.documentElement.lang==='en'?'en':'fr'];
    news.querySelector('.eyebrow').textContent=language.news;
    news.querySelector('h1').textContent=language.latestNews;
    news.querySelector('.site-page-heading p').textContent=language.noNewsText;
    news.querySelector('.site-empty-state h2').textContent=language.noNewsTitle;
    news.querySelector('.site-empty-state p').textContent=language.noNewsText;
    homeMission.querySelector('h2').textContent=language.missionTitle;
    homeMission.querySelector('p').textContent=language.missionText;
    completedHeading.querySelector('h2').textContent=language.completedTitle;
    completedSection.querySelector('.home-section-intro').textContent=language.completedIntro;
    homeFooter.textContent=`Collège Citoyen · ${language.brand}`;
    participationForm.querySelector('.site-page-heading .eyebrow').textContent=language.participate;
    participationForm.querySelector('h1').textContent=language.participateTitle;
    participationForm.querySelector('.site-page-heading p').textContent=language.participateText;
    categoryLabel.querySelector('span').textContent=language.category;
    Array.from(categorySelect.options).forEach((option,index)=>{
      option.textContent=[language.chooseCategory,language.schoolLife,language.activity,language.sharedSpaces,language.other][index];
    });
    gradeLabel.querySelector('span').textContent=language.studentGrade;
    Array.from(gradeSelect.options).forEach((option,index)=>{
      option.textContent=[
        language.chooseGrade,
        language.gradeOne,
        language.gradeTwo,
        language.gradeThree,
        language.gradeFour,
        language.gradeFive,
        language.generalGrade
      ][index];
    });
    titleLabel.querySelector('span').textContent=language.ideaTitle;
    titleInput.placeholder=language.ideaTitlePlaceholder;
    detailsLabel.querySelector('span').textContent=language.details;
    detailsInput.placeholder=language.detailsPlaceholder;
    submit.textContent=language.submit;
    admin.querySelector('h1').textContent=language.adminTitle;
    admin.querySelector('.admin-portal-heading p').textContent=language.adminText;
    adminNotice.textContent=language.adminNotice;
    priorityHelp.textContent=language.priorityHelp;
    searchLabel.querySelector('span').textContent=language.searchSuggestions;
    searchInput.setAttribute('aria-label',language.searchSuggestions);
    syncGovernanceLanguage();
    renderSettings();
    renderVoteAdminSettings();
    renderAll();
  });
  window.addEventListener('storage',event=>{
    if(event.key===storageKey||event.key===null)renderAll();
  });
  document.querySelector('.demo')?.remove();
  const processNote=document.querySelector('[data-t="processnote"]');
  if(processNote)processNote.textContent=copy.fr.processNote;
  const originalToggleLabel=document.getElementById('news-toggle');
  const projectShortcut=document.getElementById('global-search-toggle');
  const updateHeaderLabels=()=>{
    originalToggleLabel.setAttribute('aria-label',document.documentElement.lang==='en'?'Open news':'Ouvrir les actualités');
    projectShortcut.querySelector('.search-label').textContent=document.documentElement.lang==='en'?'Search':'Rechercher';
    projectShortcut.setAttribute('aria-label',document.documentElement.lang==='en'?'Search the whole site':'Rechercher sur tout le site');
  };
  updateHeaderLabels();
  const globalSearchButton=document.getElementById('global-search-toggle');
  const searchAnchor=make('div','site-search-anchor');
  globalSearchButton.parentElement.insertBefore(searchAnchor,globalSearchButton);
  searchAnchor.append(globalSearchButton);
  const searchDropdown=make('section','site-search-dropdown');
  searchDropdown.hidden=true;
  searchDropdown.setAttribute('aria-labelledby','site-search-title');
  const searchHeading=make('div','site-search-heading');
  const searchTitle=make('h2','',document.documentElement.lang==='en'?'Search the site':'Rechercher sur le site');
  searchTitle.id='site-search-title';
  const searchClose=button('×','site-search-close');
  searchClose.setAttribute('aria-label',document.documentElement.lang==='en'?'Close search':'Fermer la recherche');
  searchHeading.append(searchTitle,searchClose);
  const globalSearchLabel=make('label','site-search-label');
  const globalSearchInput=document.createElement('input');
  globalSearchInput.type='search';
  globalSearchInput.className='site-search-input';
  globalSearchInput.autocomplete='off';
  globalSearchInput.setAttribute('aria-label',document.documentElement.lang==='en'?'Search all pages except the charter':'Rechercher partout sauf dans la charte');
  globalSearchInput.placeholder=document.documentElement.lang==='en'?'Search projects, teams, ideas…':'Rechercher des projets, des équipes, des idées…';
  globalSearchLabel.append(make('span','',document.documentElement.lang==='en'?'Search all pages except the Charter':'Rechercher dans toutes les pages sauf la Charte'),globalSearchInput);
  const globalSearchResults=make('div','site-search-results');
  globalSearchResults.setAttribute('aria-label',document.documentElement.lang==='en'?'Search results':'Résultats de recherche');
  globalSearchResults.setAttribute('aria-live','polite');
  searchDropdown.append(searchHeading,globalSearchLabel,globalSearchResults);
  searchAnchor.append(searchDropdown);
  searchDropdown.id='site-search-dropdown';
  searchDropdown.setAttribute('role','region');
  globalSearchButton.setAttribute('aria-controls',searchDropdown.id);
  globalSearchButton.setAttribute('aria-expanded','false');
  let currentSearchResults=[];
  const normalizeSearchText=value=>String(value||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase().replace(/\s+/g,' ').trim();
  const searchTerms=value=>normalizeSearchText(value).split(' ').filter(Boolean);
  const searchablePageIds=new Set(['page-home','page-elections','page-resources','page-vote','page-projects','page-people','page-news','page-participate']);
  const searchResultText=(value,query)=>{
    const text=value.replace(/\s+/g,' ').trim();
    if(text.length<=180)return text;
    const position=normalizeSearchText(text).indexOf(normalizeSearchText(query));
    const start=Math.max(0,position-65);
    return `${start?'…':''}${text.slice(start,start+150).trim()}${start+150<text.length?'…':''}`;
  };
  const renderGlobalSearch=()=>{
    const query=normalizeSearchText(globalSearchInput.value);
    const terms=searchTerms(query);
    globalSearchResults.replaceChildren();
    currentSearchResults=[];
    if(!query){
      globalSearchResults.append(make('p','site-search-empty',document.documentElement.lang==='en'?'Enter a word or phrase to search the site.':'Saisis un mot ou une expression pour lancer la recherche.'));
      return;
    }
    const candidates=[];
    const selectors='h1,h2,h3,h4,p,li,button,a,.home-project-card,.site-project-card,.vote-team-card';
    const addRoot=(root,pageId)=>{
      const elements=[];
      if(root.matches(selectors))elements.push(root);
      elements.push(...root.querySelectorAll(selectors));
      elements.forEach(element=>{
        const container=element.closest('.home-project-card,.site-project-card,.vote-team-card');
        if(container&&container!==element)return;
        if(element.closest('[hidden]'))return;
        const value=(element.innerText||element.textContent||'').replace(/\s+/g,' ').trim();
        const normalizedValue=normalizeSearchText(value);
        if(!value||!terms.every(term=>normalizedValue.includes(term)))return;
        candidates.push({element,pageId,value});
      });
    };
    document.querySelectorAll('main .page').forEach(root=>{
      if(searchablePageIds.has(root.id))addRoot(root,root.id);
    });
    const hero=document.querySelector('.home-hero');
    if(hero&&!hero.hidden)addRoot(hero,'page-home');
    (window.cdeccApprovedVoteCandidates||[]).forEach(candidate=>{
      const value=`${candidate.team_name||''} ${candidate.ideas||''}`.trim();
      const card=document.querySelector(`.vote-team-card[data-candidacy-id="${CSS.escape(String(candidate.id))}"]`);
      if(value&&terms.every(term=>normalizeSearchText(value).includes(term))&&
        !(card&&terms.every(term=>normalizeSearchText(card.innerText).includes(term)))){
        candidates.push({candidate,pageId:'page-vote-team-detail',value});
      }
    });
    currentSearchResults=candidates.slice(0,40);
    if(!currentSearchResults.length){
      globalSearchResults.append(make('p','site-search-empty',document.documentElement.lang==='en'?'No results found. Try another word or phrase.':'Aucun résultat. Essaie un autre mot ou une autre expression.'));
      return;
    }
    currentSearchResults.forEach((result,index)=>{
      const item=button('', 'site-search-result');
      item.dataset.searchResult=String(index);
      const pageRoute=result.pageId.replace(/^page-/,'');
      const pageButton=document.querySelector(`.header-nav [data-page="${pageRoute}"],.side [data-page="${pageRoute}"],.mobile [data-page="${pageRoute}"]`);
      const pageTitle=document.getElementById(result.pageId)?.querySelector('h1')?.innerText.trim();
      const pageLabel=result.candidate?(document.documentElement.lang==='en'?'Voting':'Vote'):(pageButton?.innerText.trim()||pageTitle||'');
      item.append(make('strong','',pageLabel),make('span','',searchResultText(result.value,globalSearchInput.value)));
      globalSearchResults.append(item);
    });
  };
  const updateGlobalSearchLanguage=()=>{
    const english=document.documentElement.lang==='en';
    updateHeaderLabels();
    searchTitle.textContent=english?'Search the site':'Rechercher sur le site';
    globalSearchLabel.querySelector('span').textContent=english?'Search all pages except the Charter':'Rechercher dans toutes les pages sauf la Charte';
    globalSearchResults.setAttribute('aria-label',english?'Search results':'Résultats de recherche');
    globalSearchInput.setAttribute('aria-label',english?'Search all pages except the charter':'Rechercher partout sauf dans la charte');
    globalSearchInput.placeholder=english?'Search projects, teams, ideas…':'Rechercher des projets, des équipes, des idées…';
    searchClose.setAttribute('aria-label',english?'Close search':'Fermer la recherche');
    if(!searchDropdown.hidden)renderGlobalSearch();
  };
  updateGlobalSearchLanguage();
  new MutationObserver(updateGlobalSearchLanguage).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  globalSearchButton?.addEventListener('click',()=>{
    const opening=searchDropdown.hidden;
    searchDropdown.hidden=!opening;
    globalSearchButton.setAttribute('aria-expanded',String(opening));
    if(opening){
      positionGlobalSearch();
      globalSearchInput.value='';
      renderGlobalSearch();
      globalSearchInput.focus();
    }
  });
  const closeGlobalSearch=(restoreFocus=true)=>{
    if(searchDropdown.hidden)return;
    searchDropdown.hidden=true;
    globalSearchButton.setAttribute('aria-expanded','false');
    if(restoreFocus)globalSearchButton.focus();
  };
  const updateGlobalSearchAvailability=()=>{
    const charterActive=how.classList.contains('active');
    globalSearchButton.disabled=charterActive;
    globalSearchButton.setAttribute('aria-disabled',String(charterActive));
    document.body.classList.toggle('charter-search-active',charterActive);
    if(charterActive)closeGlobalSearch(false);
  };
  window.cdeccApplyRemoteSiteSettings=settings=>{
    if(!settings||typeof settings!=='object')return;
    const visuals=settings.site_visuals&&typeof settings.site_visuals==='object'?settings.site_visuals:{};
    const colorVariables={
      forest:'forest',deep:'deep',green:'green',lime:'lime',paper:'paper',
      ink:'ink',muted:'muted',line:'line',soft:'soft',gold:'gold'
    };
    Object.entries(colorVariables).forEach(([key,variable])=>{
      if(/^#[0-9a-f]{6}$/i.test(visuals[key]||'')){
        document.documentElement.style.setProperty(`--${variable}`,visuals[key]);
      }
    });
    const logo=document.querySelector('.branding-logo img');
    if(logo){
      const logoUrl=validPublicImageUrl(visuals.logo_url);
      logo.src=logoUrl||'school-logo.jpg';
    }
    const hero=document.querySelector('.home-hero');
    const heroUrl=validPublicImageUrl(visuals.hero_url);
    if(hero){
      hero.style.backgroundImage=heroUrl
        ?`linear-gradient(90deg,rgba(14,35,29,.24),rgba(14,35,29,.02)),url("${heroUrl.replace(/["\\\n\r]/g,'')}")`
        :'';
      hero.classList.toggle('has-technical-image',Boolean(heroUrl));
    }
    if(typeof visuals.slogan==='string'&&visuals.slogan.trim()){
      window.cdeccSetSiteSlogan?.(visuals.slogan.trim());
    }
    const setFormOpen=(form,isOpen,closedMessage)=>{
      if(!form)return;
      form.querySelectorAll('input,textarea,select,button[type="submit"]').forEach(control=>{
        control.disabled=!isOpen;
      });
      let note=form.querySelector('.site-remote-closed-note');
      if(!isOpen){
        if(!note){
          note=document.createElement('p');
          note.className='site-admin-note site-remote-closed-note';
          note.setAttribute('role','status');
          form.append(note);
        }
        note.textContent=closedMessage;
        note.hidden=false;
      }else if(note){
        note.hidden=true;
      }
    };
    setFormOpen(
      participationForm,
      settings.ideas_open!==false,
      document.documentElement.lang==='en'?'Suggestion submissions are temporarily closed.':'Les propositions sont temporairement fermées.'
    );
    setFormOpen(
      document.querySelector('.candidate-form'),
      settings.candidacies_open!==false,
      document.documentElement.lang==='en'?'Candidacy submissions are temporarily closed.':'Les candidatures sont temporairement fermées.'
    );
  };
  const validPublicImageUrl=value=>{
    if(typeof value!=='string'||!value.trim())return '';
    try{
      const url=new URL(value);
      return url.protocol==='https:'?url.href:'';
    }catch{return ''}
  };

  updateGlobalSearchAvailability();
  new MutationObserver(updateGlobalSearchAvailability).observe(document.querySelector('main'),{
    subtree:true,attributes:true,attributeFilter:['class']
  });
  const positionGlobalSearch=()=>{
    const anchorRight=searchAnchor.getBoundingClientRect().right;
    const width=searchDropdown.getBoundingClientRect().width;
    const left=Math.max(12,Math.min(anchorRight-width,window.innerWidth-12-width));
    searchDropdown.style.right=`${anchorRight-width-left}px`;
  };
  searchClose.addEventListener('click',()=>closeGlobalSearch());
  globalSearchInput.addEventListener('input',renderGlobalSearch);
  window.addEventListener('resize',()=>{if(!searchDropdown.hidden)positionGlobalSearch()});
  document.addEventListener('click',event=>{
    if(!searchAnchor.contains(event.target))closeGlobalSearch(false);
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape'&&!searchDropdown.hidden){
      event.preventDefault();
      closeGlobalSearch();
    }
  });
  globalSearchResults.addEventListener('click',event=>{
    const resultButton=event.target.closest('[data-search-result]');
    if(!resultButton)return;
    const result=currentSearchResults[Number(resultButton.dataset.searchResult)];
    if(!result)return;
    closeGlobalSearch(false);
    if(result.candidate){
      selectedVoteTeam=`candidate-${result.candidate.id}`;
      renderGovernancePages();
      window.showPage('vote-team-detail');
      const hero=document.querySelector('.home-hero');
      if(hero)hero.hidden=true;
      return;
    }
    const page=result.element.closest('.page');
    const route=page?.id.replace(/^page-/,'')||'home';
    window.showPage(route);
    const hero=document.querySelector('.home-hero');
    if(hero)hero.hidden=route!=='home';
    result.element.scrollIntoView({behavior:'smooth',block:'center'});
  });
  originalToggleLabel.addEventListener('click',()=>{if(document.getElementById('news-drawer').open)renderAll()});
  document.getElementById('lang').addEventListener('click',()=>{
    updateHeaderLabels();
    renderAll();
  });
  renderAll();
})();
