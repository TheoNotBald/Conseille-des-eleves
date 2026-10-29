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
      completedTemplateLabel:'Exemple fictif · modèle',
      moreInfo:'Découvrir plus →',
      voteTemplateTitle:'La boîte de vote',
      voteTemplateText:'Cette maquette montre où un vote pourra apparaître. Aucun vote n’est ouvert ni enregistré pour le moment.',
      voteOptionOne:'Option de vote à définir',
      voteOptionTwo:'Une autre option à définir',
      voteDisabled:'Le vote en ligne n’est pas encore disponible.',
      votePageTitle:'Système du vote',
      votePageIntro:'Découvrez les équipes candidates. Les équipes et leurs propositions sont des exemples fictifs; aucun vote n’est ouvert.',
      voteTeamOne:'Parti du renouveau étudiant',
      voteTeamOneText:'Une équipe fictive qui propose de mieux faire circuler les idées et les nouvelles entre les élèves.',
      voteTeamTwo:'Parti de la vie scolaire',
      voteTeamTwoText:'Une équipe fictive qui souhaite créer davantage d’activités et de moments rassembleurs.',
      voteTeamThree:'Parti des espaces accueillants',
      voteTeamThreeText:'Une équipe fictive qui veut améliorer les espaces communs et les rendre agréables pour tous.',
      voteTeamFour:'Parti de la voix étudiante',
      voteTeamFourText:'Une équipe fictive qui met l’écoute et la représentation des élèves au premier plan.',
      voteTeamFive:'Parti des idées en action',
      voteTeamFiveText:'Une équipe fictive qui souhaite accompagner les propositions jusqu’à leur réalisation.',
      voteTeamSix:'Parti d’un collège durable',
      voteTeamSixText:'Une équipe fictive qui propose des gestes concrets pour prendre soin de la communauté scolaire.',
      voteTeamMore:'Plus d’information →',
      voteTeamBack:'Retour au vote',
      voteTeamTemplateLabel:'Équipe fictive · modèle',
      voteTeamImageAlt:'Photo modèle d’une équipe candidate fictive',
      voteSubmit:'Voter',
      voteReleaseNote:'Le vote n’est pas encore ouvert. Le bouton sera activé lorsque le scrutin sera officiellement lancé.',
      candidatePageTitle:'Les candidatures',
      candidatePageText:'Les renseignements sur les candidatures et les personnes candidates seront publiés lorsque le processus sera confirmé.',
      candidateInfoTitle:'Se présenter au Conseil des élèves',
      candidateInfoText:'Les dates, les critères et les façons de déposer une candidature restent à confirmer avec l’école.',
      candidatePending:'Aucune candidature ni aucun résultat officiel n’est publié pour le moment.',
      navIdeas:'Idées',
      navCandidates:'Candidature',
      navMembers:'Membres',
      charterTemplateNote:'Projet de charte constitutionnelle — à réviser et à faire approuver par l’école avant adoption.',
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
      flowStudents:'Élèves',
      flowClass:'Élection du représentant de classe',
      flowLevel:'Conseil de niveau · chaque semaine',
      flowAssembly:'Assemblée citoyenne · chaque mois',
      flowReturn:'Suivi partagé avec les élèves',
      flowStudentsText:'Les élèves partagent les idées, les questions et les besoins de leur classe.',
      flowClassText:'Un représentant élu recueille les sujets et les transmet à son niveau.',
      flowLevelText:'Les représentants rapprochent les enjeux communs et choisissent les sujets à faire avancer.',
      flowAssemblyText:'Les représentants discutent des propositions et coordonnent le suivi avec l’école.',
      flowReturnText:'Les nouvelles et le suivi des sujets reviennent aux élèves par les Conseils de niveau.',
      structureSub:'Un parcours proposé pour faire circuler les idées des élèves jusqu’à l’Assemblée, puis partager le suivi.',
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
      memberLeadOne:'Remi Ouellet',
      memberLeadOneRole:'Président',
      memberLeadOneBio:'Exemple de présentation du président du Conseil des élèves.',
      memberLeadTwo:'Camille Gagnon',
      memberLeadTwoRole:'Vice-présidente',
      memberLeadTwoBio:'Exemple de présentation de la vice-présidente du Conseil des élèves.',
      assemblyMemberSecretary:'Louis Martel',
      assemblyMemberPresident:'Émile Bouchard',
      assemblyMemberVicePresident:'Camille Gagnon',
      assemblyMemberHighSpokesperson:'Amélie Dubois',
      assemblyMemberTreasurer:'Noah Ali',
      assemblyMemberLowSpokesperson:'Jules Morin',
      leadreps:'Assemblée citoyenne',
      leadsub:'Exemples de responsabilités à adapter et à confirmer avec les élèves et l’école.',
      classreps:'Représentants de classe',
      classsub:'Exemples fictifs : chaque représentant recueille la voix de sa classe et partage le suivi.',
      classMemberOne:'Alexandre Roy',
      classMemberTwo:'Sofia Tremblay',
      classMemberThree:'Thomas Nguyen',
      classMemberFour:'Maya Bouchard',
      classMemberFive:'Elliot Gagnon',
      classMemberRoleOne:'Représentant de classe · Secondaire 1',
      classMemberRoleTwo:'Représentante de classe · Secondaire 2',
      classMemberRoleThree:'Représentant de classe · Secondaire 3',
      classMemberRoleFour:'Représentante de classe · Secondaire 4',
      classMemberRoleFive:'Représentant de classe · Secondaire 5',
      classMemberGroupOne:'Groupes 101-106',
      classMemberGroupTwo:'Groupes 201-206',
      classMemberGroupThree:'Groupes 301-306',
      classMemberGroupFour:'Groupes 401-406',
      classMemberGroupFive:'Groupes 511-516',
      memberTemplateNote:'MODÈLE À ADAPTER · Tous les noms et profils ci-dessous sont fictifs. Cette structure et ces responsabilités sont des propositions, pas des règles officielles; elles doivent être discutées et confirmées avec l’école.',
      classRepResponsibility:'Recueille les idées de sa classe, les transmet au Conseil de niveau et partage le suivi avec ses camarades.',
      roleVicePresident:'Vice-président',
      roleVicePresidentText:'Remplace la présidence au besoin et apporte un second point de vue.',
      roleSecretary:'Secrétaire',
      roleSecretaryText:'Consigne les comptes rendus, les décisions et les renseignements importants.',
      roleTreasurer:'Trésorier',
      roleTreasurerText:'Suit les dossiers financiers et les budgets proposés, selon les règles de l’école.',
      roleLowSpokesperson:'Basse-parole',
      roleHighSpokesperson:'Haute-parole',
      roleLowSpokespersonText:'Recueille les idées et préoccupations des élèves et les transmet à l’Assemblée.',
      roleHighSpokespersonText:'Partage avec les élèves les nouvelles et les suivis de l’Assemblée.',
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
      approvedProjects:'Projets approuvés',
      latestNews:'Actualités',
      noProjectsTitle:'Aucun projet pour le moment',
      noProjectsText:'Les projets approuvés par le Conseil des élèves apparaîtront ici.',
      projectSearch:'Rechercher dans les idées',
      projectSearchPlaceholder:'Titre, description ou catégorie',
      noNewsTitle:'Aucune actualité pour le moment',
      noNewsText:'Les actualités, les mises à jour des projets terminés et les comptes rendus approuvés seront publiés ici lorsqu’ils seront disponibles.',
      peopleTitle:'Représentants',
      peopleText:'Les représentants assurent le lien entre les classes et le Conseil des élèves.',
      noPeopleTitle:'Les représentants seront bientôt présentés',
      noPeopleText:'Les informations sur les représentants seront ajoutées lorsqu’elles seront confirmées.',
      projectIntro:'Les idées approuvées par le Conseil des élèves sont réunies ici.',
      markCompleted:'Marquer comme terminé',
      reopenIdea:'Remettre dans Idées',
      completedStatus:'Projet terminé',
      processNote:'Le Conseil partage les nouvelles et le suivi des propositions avec la communauté scolaire.',
      participateTitle:'Une idée pour améliorer la vie à l’école ?',
      participateText:'Décris ta proposition. Après examen, une idée approuvée sera publiée dans les projets.',
      category:'Catégorie',
      chooseCategory:'Choisir une catégorie',
      schoolLife:'Vie à l’école',
      activity:'Activité ou événement',
      sharedSpaces:'Espaces communs',
      other:'Autre',
      ideaTitle:'Titre de la proposition',
      ideaTitlePlaceholder:'Ex. : Aménager un coin lecture',
      details:'Décris ton idée',
      detailsPlaceholder:'Explique ce que tu proposes et en quoi cela aiderait la communauté.',
      submit:'Envoyer la proposition',
      storageNotice:'Pour le moment, les propositions sont enregistrées uniquement dans ce navigateur, sans compte ni base de données. Elles ne sont pas partagées entre appareils et toute personne utilisant cet appareil peut les consulter. N’indique aucun nom, renseignement personnel ou détail confidentiel.',
      submitted:'La proposition a été enregistrée. Merci de contribuer !',
      submitError:'Impossible d’enregistrer la proposition dans ce navigateur. Réessaie plus tard.',
      required:'Ajoute un titre, une catégorie et une description avant l’envoi.',
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
      storageStatus:'Les propositions de cet appareil sont enregistrées dans ce navigateur uniquement.',
      projectStatus:'Projet approuvé',
      confirmRemove:'Supprimer définitivement cette proposition de ce navigateur ?',
      priorityHeader:'Priorité de révision',
      priorityHelp:'Tri automatique par quelques mots-clés, sans IA : vérifie chaque proposition, car le classement peut se tromper. Rien n’est rejeté automatiquement et la priorité peut être modifiée.',
      priorityNormal:'Normale',
      priorityYellow:'À vérifier',
      priorityRed:'Signalée',
      priorityManual:'Priorité modifiée manuellement',
      priorityAutomatic:'Automatique (suggestion)',
      prioritySet:'Modifier la priorité de révision',
      priorityReasonSchool:'Des repères liés à l’école ont été détectés.',
      priorityReasonUnclear:'Le lien avec l’école n’est pas clair; une vérification est suggérée.',
      priorityReasonOffTopic:'Le sujet semble possiblement sans lien avec l’école.',
      priorityReasonLanguage:'Le texte contient un langage à vérifier.',
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
      completedTemplateLabel:'Fictional example · template',
      moreInfo:'Discover more →',
      voteTemplateTitle:'The voting booth',
      voteTemplateText:'This is a preview of where a vote could appear. No vote is currently open or recorded.',
      voteOptionOne:'Voting option to be decided',
      voteOptionTwo:'Another option to be decided',
      voteDisabled:'Online voting is not available yet.',
      votePageTitle:'Voting system',
      votePageIntro:'Explore the candidate teams. The teams and their platforms are fictional examples; voting is not open.',
      voteTeamOne:'Student Renewal Party',
      voteTeamOneText:'A fictional team proposing better ways to share ideas and updates among students.',
      voteTeamTwo:'School Life Party',
      voteTeamTwoText:'A fictional team hoping to create more activities and opportunities to come together.',
      voteTeamThree:'Welcoming Spaces Party',
      voteTeamThreeText:'A fictional team looking to improve shared spaces and make them welcoming for everyone.',
      voteTeamFour:'Student Voice Party',
      voteTeamFourText:'A fictional team putting listening to and representing students first.',
      voteTeamFive:'Ideas in Action Party',
      voteTeamFiveText:'A fictional team hoping to support proposals all the way through to completion.',
      voteTeamSix:'Sustainable School Party',
      voteTeamSixText:'A fictional team proposing practical ways to care for the school community.',
      voteTeamMore:'More information →',
      voteTeamBack:'Back to voting',
      voteTeamTemplateLabel:'Fictional team · template',
      voteTeamImageAlt:'Template photo of a fictional candidate team',
      voteSubmit:'Vote',
      voteReleaseNote:'Voting is not open yet. This button will be enabled when voting officially begins.',
      candidatePageTitle:'Candidate applications',
      candidatePageText:'Information about candidates and applications will be published once the process is confirmed.',
      candidateInfoTitle:'Run for Student Council',
      candidateInfoText:'Dates, eligibility, and application steps still need to be confirmed with the school.',
      candidatePending:'No candidates or official results are published yet.',
      navIdeas:'Ideas',
      navCandidates:'Candidates',
      navMembers:'Members',
      charterTemplateNote:'Draft constitution-style charter — to be reviewed and approved by the school before adoption.',
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
      flowStudents:'Students',
      flowClass:'Class representative elected',
      flowLevel:'Level Council · weekly',
      flowAssembly:'Student Assembly · monthly',
      flowReturn:'Updates shared back with students',
      flowStudentsText:'Students share ideas, questions, and concerns from their class.',
      flowClassText:'An elected representative gathers topics and brings them to the level.',
      flowLevelText:'Representatives connect shared concerns and choose topics to bring forward.',
      flowAssemblyText:'Representatives discuss proposals and coordinate follow-up with the school.',
      flowReturnText:'Updates and follow-up are shared back with students through the Level Councils.',
      structureSub:'A proposed path for student ideas to reach the Assembly and for updates to make their way back.',
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
      memberLeadOne:'Remi Ouellet',
      memberLeadOneRole:'President',
      memberLeadOneBio:'Example profile for the Student Council president.',
      memberLeadTwo:'Camille Gagnon',
      memberLeadTwoRole:'Vice-President',
      memberLeadTwoBio:'Example profile for the Student Council vice-president.',
      assemblyMemberSecretary:'Louis Martel',
      assemblyMemberPresident:'Emile Bouchard',
      assemblyMemberVicePresident:'Camille Gagnon',
      assemblyMemberHighSpokesperson:'Amélie Dubois',
      assemblyMemberTreasurer:'Noah Ali',
      assemblyMemberLowSpokesperson:'Jules Morin',
      leadreps:'Student Assembly',
      leadsub:'Example responsibilities to adapt and confirm with students and the school.',
      classreps:'Class representatives',
      classsub:'Fictional examples: each representative gathers their class’s views and shares updates.',
      classMemberOne:'Alexandre Roy',
      classMemberTwo:'Sofia Tremblay',
      classMemberThree:'Thomas Nguyen',
      classMemberFour:'Maya Bouchard',
      classMemberFive:'Elliot Gagnon',
      classMemberRoleOne:'Class representative · Secondary 1',
      classMemberRoleTwo:'Class representative · Secondary 2',
      classMemberRoleThree:'Class representative · Secondary 3',
      classMemberRoleFour:'Class representative · Secondary 4',
      classMemberRoleFive:'Class representative · Secondary 5',
      classMemberGroupOne:'Groups 101-106',
      classMemberGroupTwo:'Groups 201-206',
      classMemberGroupThree:'Groups 301-306',
      classMemberGroupFour:'Groups 401-406',
      classMemberGroupFive:'Groups 511-516',
      memberTemplateNote:'TEMPLATE TO ADAPT · All names and profiles below are fictional. This structure and these responsibilities are proposals, not official rules; they should be discussed and confirmed with the school.',
      classRepResponsibility:'Gathers ideas from the class, brings them to the Level Council, and shares updates with classmates.',
      roleVicePresident:'Vice-President',
      roleVicePresidentText:'Steps in when needed and provides a second point of view.',
      roleSecretary:'Secretary',
      roleSecretaryText:'Records meeting minutes, decisions, and important information.',
      roleTreasurer:'Treasurer',
      roleTreasurerText:'Oversees financial records and proposed budgets, subject to school rules.',
      roleLowSpokesperson:'Student voice spokesperson',
      roleHighSpokesperson:'Assembly updates spokesperson',
      roleLowSpokespersonText:'Gathers students’ ideas and concerns and brings them to the Assembly.',
      roleHighSpokespersonText:'Shares Assembly news and follow-up with students.',
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
      approvedProjects:'Approved projects',
      latestNews:'News',
      noProjectsTitle:'No projects yet',
      noProjectsText:'Projects approved by the Student Council will appear here.',
      projectSearch:'Search ideas',
      projectSearchPlaceholder:'Title, description, or category',
      noNewsTitle:'No news yet',
      noNewsText:'News, completed-project updates, and approved meeting summaries will be published here when available.',
      peopleTitle:'Representatives',
      peopleText:'Representatives connect their classes with the Student Council.',
      noPeopleTitle:'Representatives will be introduced soon',
      noPeopleText:'Representative information will be added once it has been confirmed.',
      projectIntro:'Ideas approved by the Student Council are collected here.',
      markCompleted:'Mark as completed',
      reopenIdea:'Return to Ideas',
      completedStatus:'Completed project',
      processNote:'The Student Council shares updates and proposal follow-up with the school community.',
      participateTitle:'Have an idea to improve school life?',
      participateText:'Describe your suggestion. Once reviewed, an approved idea will be published under Projects.',
      category:'Category',
      chooseCategory:'Choose a category',
      schoolLife:'School life',
      activity:'Activity or event',
      sharedSpaces:'Shared spaces',
      other:'Other',
      ideaTitle:'Suggestion title',
      ideaTitlePlaceholder:'e.g. Create a reading corner',
      details:'Describe your idea',
      detailsPlaceholder:'Explain what you suggest and how it would help the community.',
      submit:'Submit suggestion',
      storageNotice:'For now, suggestions are saved only in this browser, without an account or database. They are not shared across devices, and anyone using this device may be able to view them. Do not include names, personal information, or confidential details.',
      submitted:'Your suggestion has been saved. Thank you for contributing!',
      submitError:'This browser could not save your suggestion. Please try again later.',
      required:'Add a title, category, and description before submitting.',
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
      storageStatus:'Suggestions on this device are saved in this browser only.',
      projectStatus:'Approved project',
      confirmRemove:'Permanently delete this suggestion from this browser?',
      priorityHeader:'Review priority',
      priorityHelp:'Automatic sorting uses a small set of keywords, not AI. Review every suggestion because the label can be wrong. Nothing is rejected automatically, and the priority can be changed.',
      priorityNormal:'Normal',
      priorityYellow:'Needs review',
      priorityRed:'Flagged',
      priorityManual:'Priority changed manually',
      priorityAutomatic:'Automatic (suggested)',
      prioritySet:'Change review priority',
      priorityReasonSchool:'School-related terms were detected.',
      priorityReasonUnclear:'The school connection is unclear; review is suggested.',
      priorityReasonOffTopic:'The topic may be unrelated to school.',
      priorityReasonLanguage:'The text contains language that needs review.',
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
    candidateBlobText:'Présente ton équipe, les personnes qui la composent et les idées que vous souhaitez défendre. Le formulaire de candidature est un prototype et conserve les informations uniquement dans ce navigateur.',
    candidateRegister:'S’inscrire comme candidat',
    candidateTeam:'Nom du parti ou de l’équipe',
    candidateRoster:'Noms et postes des membres',
    candidateRosterHelp:'Inscris une personne et son poste par ligne.',
    candidateIdeas:'Idées et propositions de l’équipe',
    candidatePicture:'Photo de l’équipe',
    candidatePictureHelp:'Image JPG, PNG ou WebP de 50 Mo maximum.',
    candidateBackground:'Couleur de fond',
    candidateForeground:'Couleur du texte',
    candidatePreviewLabel:'Aperçu de l’équipe',
    candidatePreviewMembers:'Membres de l’équipe',
    candidatePreviewImage:'La photo de l’équipe apparaîtra ici.',
    candidateSubmit:'Enregistrer la candidature',
    candidatePrivacy:'Prototype uniquement : la candidature est enregistrée dans ce navigateur et n’est pas envoyée à l’école. N’ajoute pas de renseignements personnels réels.',
    candidateSaved:'La candidature a été enregistrée dans ce navigateur seulement.',
    candidateRequired:'Remplis le nom de l’équipe, les membres et les idées.',
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
    adminAccessText:'Ouvre les outils de gestion du prototype.',
    adminAccessButton:'Ouvrir la version admin',
    legalTitle:'Légal',
    legalText:'Modèle à compléter et à gérer par l’école avant la mise en ligne officielle.',
    legalPrivacy:'Confidentialité et renseignements personnels',
    legalTerms:'Conditions d’utilisation',
    settingsSaveError:'Les préférences n’ont pas pu être enregistrées sur cet appareil.',
    structureTitle:'Structure de représentation',
  });
  Object.assign(copy.en,{
    navSettings:'Settings',
    charterSoonTitle:'The charter is being prepared',
    charterSoonText:'The charter will be published here once it has been drafted and approved.',
    candidateBlobTitle:'How to become a candidate',
    candidateBlobText:'Introduce your team, its members, and the ideas you want to support. This application form is a prototype and stores information only in this browser.',
    candidateRegister:'Register as a candidate',
    candidateTeam:'Party or team name',
    candidateRoster:'Members’ names and positions',
    candidateRosterHelp:'Enter one person and position per line.',
    candidateIdeas:'Team ideas and proposals',
    candidatePicture:'Team picture',
    candidatePictureHelp:'JPG, PNG, or WebP image up to 50 MB.',
    candidateBackground:'Background color',
    candidateForeground:'Text color',
    candidatePreviewLabel:'Team preview',
    candidatePreviewMembers:'Team members',
    candidatePreviewImage:'The team picture will appear here.',
    candidateSubmit:'Save application',
    candidatePrivacy:'Prototype only: the application is saved in this browser and is not sent to the school. Do not enter real personal information.',
    candidateSaved:'The application was saved in this browser only.',
    candidateRequired:'Enter the team name, members, and ideas.',
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
    adminAccessText:'Open the prototype management tools.',
    adminAccessButton:'Open admin version',
    legalTitle:'Legal',
    legalText:'Template for the school to complete and manage before an official launch.',
    legalPrivacy:'Privacy and personal information',
    legalTerms:'Terms of use',
    settingsSaveError:'Preferences could not be saved on this device.',
    structureTitle:'Representation structure'
  });

  const text=(key)=>copy[document.documentElement.lang==='en'?'en':'fr'][key];
  const completedTemplates={
    fr:[
      {id:'template-reading',title:'Un coin lecture aménagé',date:'2026-06-12',details:'Un espace calme a été aménagé avec des livres et des places confortables pour lire ou se détendre pendant les pauses.'},
      {id:'template-talents',title:'Une semaine des talents',date:'2026-05-22',details:'Les élèves ont partagé leurs créations, leurs passions et leurs talents lors d’activités organisées dans l’école.'},
      {id:'template-welcome',title:'Des activités pour accueillir les élèves',date:'2026-04-17',details:'Des activités conçues par les élèves ont aidé chacun à découvrir les espaces, les ressources et la vie de l’école.'},
      {id:'template-garden',title:'Un espace commun plus accueillant',date:'2026-03-20',details:'Une zone commune a été repensée avec des sièges et des idées choisies pour rendre les pauses plus agréables.'}
    ],
    en:[
      {id:'template-reading',title:'A new reading corner',date:'2026-06-12',details:'A quiet space with books and comfortable seating was created for reading or relaxing during breaks.'},
      {id:'template-talents',title:'A week of student talents',date:'2026-05-22',details:'Students shared their creations, interests, and talents through activities organized at school.'},
      {id:'template-welcome',title:'Activities to welcome students',date:'2026-04-17',details:'Student-led activities helped everyone discover school spaces, resources, and community life.'},
      {id:'template-garden',title:'A more welcoming shared space',date:'2026-03-20',details:'A common area was refreshed with seating and student-selected ideas to make breaks more enjoyable.'}
    ]
  };
  const priorities=['normal','yellow','red'];
  const priorityOrder={normal:0,yellow:1,red:2};
  const priorityReasons=new Set(['priorityManual','priorityReasonSchool','priorityReasonUnclear','priorityReasonOffTopic','priorityReasonLanguage']);
  const schoolTerms=new Set((
    'school schools student students class classroom classes teacher teachers lesson lessons learning course courses subject subjects homework study library book books reading cafeteria lunch food kitchen bathroom washroom locker hallway corridor playground gym sports club clubs event events meeting assembly council representative representatives safety safe wellbeing well-being health accessibility accessible inclusion inclusive bullying transport bus schoolyard uniform technology computer internet schedule timetable exam exams bench benches furniture support accommodation accommodations calendar '+
    'ecole scolaire eleve eleves classe classes cours professeur professeurs enseignant enseignante enseignants enseignement apprentissage devoirs etude etudier bibliotheque livre livres lecture cafetaria cafet cafeteria repas diner nourriture cantine salle toilettes corridor casier cour recre gymnase sport club clubs evenement evenements reunion assemblee conseil representant representants securite sante accessibilite inclusion intimidation transport autobus horaire examen examens ordinateur ordinateurs banc bancs mobilier adaptation adaptations calendrier'
  ).split(/\s+/));
  const activityTerms=new Set('art arts music theater theatre chess robotics musique echecs robotique'.split(/\s+/));
  const profanityTerms=new Set((
    'fuck fucking fucked shit bullshit bitch bastard asshole assholes damn dick dumbass piss crap motherfucker '+
    'merde putain pute con connard connasse salope salaud enculer encule foutre bordel chiant chier'
  ).split(/\s+/));
  const offTopicPatterns=[
    /\b(?:bitcoin|cryptocurrency|crypto trading|stock portfolio|invest in stocks|tinder|dating app|my dating profile|my car|my dog|my cat|my personal business|sell my product|video games?|playstation|xbox|fortnite|minecraft|my vacation|holiday trip)\b/,
    /\b(?:cryptomonnaie|trading crypto|portefeuille boursier|investir en bourse|tinder|application de rencontre|mon profil de rencontre|mon chien|mon chat|ma voiture|mon entreprise personnelle|vendre mon produit|jeux video|playstation|xbox|fortnite|minecraft|mes vacances|voyage de vacances)\b/
  ];
  const normalizedWords=value=>String(value||'')
    .normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase()
    .match(/[a-z0-9]+/g)||[];
  const classifySuggestion=suggestion=>{
    const raw=`${suggestion.title} ${suggestion.details}`.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
    const words=normalizedWords(raw);
    if(words.some(word=>profanityTerms.has(word)))return {priority:'red',reason:'priorityReasonLanguage'};
    const hasSchoolContext=words.some(word=>schoolTerms.has(word))||
      (suggestion.category!=='other'&&words.some(word=>activityTerms.has(word)));
    if(offTopicPatterns.some(pattern=>pattern.test(raw))&&!hasSchoolContext)return {priority:'red',reason:'priorityReasonOffTopic'};
    if(offTopicPatterns.some(pattern=>pattern.test(raw)))return {priority:'yellow',reason:'priorityReasonUnclear'};
    if(hasSchoolContext&&words.length>=4)return {priority:'normal',reason:'priorityReasonSchool'};
    return {priority:'yellow',reason:'priorityReasonUnclear'};
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
  const palettes=new Set(['forest','ocean','plum']);
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
  let preferences={palette:'forest',dark:false,slogan:true};
  let preferencesLoadError='';
  try{
    const raw=localStorage.getItem(preferencesKey);
    if(raw!==null){
      const saved=JSON.parse(raw);
      if(!saved||!palettes.has(saved.palette)||typeof saved.dark!=='boolean'||typeof saved.slogan!=='boolean')throw new Error(text('settingsSaveError'));
      preferences={palette:saved.palette,dark:saved.dark,slogan:saved.slogan};
    }
  }catch(error){preferencesLoadError=error.message||text('settingsSaveError')}
  const applyPreferences=()=>{
    document.body.dataset.palette=preferences.palette;
    document.body.dataset.theme=preferences.dark?'dark':'light';
    document.body.classList.toggle('slogan-hidden',!preferences.slogan);
  };
  applyPreferences();
  const isSuggestion=value=>value&&
    typeof value.id==='string'&&value.id.length<=80&&
    typeof value.title==='string'&&value.title.length<=100&&
    typeof value.details==='string'&&value.details.length<=1200&&
    typeof value.category==='string'&&value.category.length<=40&&
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
  const renderApproved=(suggestions)=>{
    const approved=suggestions.filter(item=>item.status==='approved'&&!item.completedAt).sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
    const query=projectSearchInput.value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
    const matches=query?approved.filter(item=>{
      const searchable=[item.title,item.details,item.category,categoryName(item.category)].join(' ').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase();
      return searchable.includes(query);
    }):approved;
    const list=document.createElement('div');
    list.className='site-project-list';
    if(matches.length)matches.forEach(item=>list.append(makeProjectCard(item)));
    else if(query)list.append(emptyState(text('noMatchesTitle'),text('noMatchesText')));
    else list.append(emptyState(text('noProjectsTitle'),text('noProjectsText')));
    document.querySelector('#page-projects .site-project-list')?.replaceWith(list);
    return approved;
  };

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
  let selectedCompletedId='';
  const heroStory=document.querySelector('.hero-story');
  heroStory.replaceChildren();
  const heroHeading=make('h1','',text('homeTitle'));
  const heroDate=make('time','hero-date');
  const heroMore=button(text('moreInfo'),'hero-more primary');
  heroStory.append(heroHeading,heroDate,heroMore);
  const renderProjectDetail=(project,navigate=false)=>{
    if(!project)return;
    selectedCompletedId=project.id;
    projectDetail.replaceChildren();
    const back=button(`← ${text('projectBack')}`,'home-project-back');
    const content=make('article','home-project-detail-card');
    const image=document.createElement('img');
    image.src='reading-corner-illustration.svg';
    image.alt='';
    image.loading='lazy';
    const description=make('div','home-project-detail-copy');
    description.append(
      make('span','pill',project.isTemplate?text('completedTemplateLabel'):text('completedStatus')),
      make('h2','',project.title),
      make('time','site-date',formatDate(project.completedAt||project.date)),
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
    const actual=suggestions
      .filter(item=>item.status==='approved'&&item.completedAt)
      .sort((a,b)=>b.completedAt.localeCompare(a.completedAt))
      .map(item=>({...item,id:item.id,isTemplate:false}));
    const templates=completedTemplates[document.documentElement.lang==='en'?'en':'fr'];
    const entries=[...actual,...templates.slice(0,Math.max(0,4-actual.length)).map(item=>({...item,isTemplate:true}))];
    homeCompletedItems=new Map(entries.map(item=>[item.id,item]));
    completedGrid.replaceChildren();
    entries.forEach(project=>{
      const card=button('', 'home-project-card');
      card.dataset.completedId=project.id;
      card.setAttribute('aria-label',`${text('projectDetails')}: ${project.title}`);
      const copyBlock=make('span','home-project-card-copy');
      copyBlock.append(
        make('span','pill',project.isTemplate?text('completedTemplateLabel'):text('completedStatus')),
        make('span','home-project-card-title',project.title),
        make('span','home-project-card-description',project.details),
        make('time','site-date',formatDate(project.completedAt||project.date))
      );
      const image=document.createElement('img');
      image.src='reading-corner-illustration.svg';
      image.alt='';
      image.loading='lazy';
      card.append(copyBlock,image);
      completedGrid.append(card);
    });
    const featured=entries[0];
    if(featured){
      heroHeading.textContent=featured.title;
      heroDate.textContent=formatDate(featured.completedAt||featured.date);
      heroMore.dataset.completedId=featured.id;
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
  const renderCharter=()=>{
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
    const frame=make('section','charter-template-frame');
    frame.append(make('p','charter-template-note',text('charterTemplateNote')),articlePanels);
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
    const roster=appendCandidateField('candidate-roster','candidateRoster','textarea');
    roster.maxLength=1200;
    roster.required=true;
    roster.placeholder=text('candidateRosterHelp');
    const ideas=appendCandidateField('candidate-ideas','candidateIdeas','textarea');
    ideas.maxLength=2000;
    ideas.required=true;
    const picture=appendCandidateField('candidate-picture','candidatePicture','input','file');
    picture.accept='image/jpeg,image/png,image/webp';
    picture.required=true;
    const pictureHelp=make('p','site-field-help',text('candidatePictureHelp'));
    candidateForm.append(pictureHelp);
    const backgroundColor=appendCandidateField('candidate-background','candidateBackground','input','color');
    backgroundColor.value='#396d59';
    const foregroundColor=appendCandidateField('candidate-foreground','candidateForeground','input','color');
    foregroundColor.value='#ffffff';
    const candidatePreview=make('article','candidate-preview-card');
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
      candidatePreviewIdeas,
      candidatePreviewRoster
    );
    const candidatePreviewMedia=make('div','candidate-preview-media');
    const candidatePreviewImage=document.createElement('img');
    candidatePreviewImage.alt='';
    candidatePreviewImage.hidden=true;
    const candidatePreviewPlaceholder=make('p','',text('candidatePreviewImage'));
    candidatePreviewMedia.append(candidatePreviewImage,candidatePreviewPlaceholder);
    candidatePreview.append(candidatePreviewCopy,candidatePreviewMedia);
    let candidatePreviewImageUrl='';
    const updateCandidatePreview=()=>{
      candidatePreview.style.backgroundColor=backgroundColor.value;
      candidatePreview.style.color=foregroundColor.value;
      candidatePreviewTitle.textContent=teamName.value.trim()||text('candidateTeam');
      candidatePreviewIdeas.textContent=ideas.value.trim()||text('candidateIdeas');
      candidatePreviewRosterList.replaceChildren();
      const members=roster.value.split(/\r?\n/).map(member=>member.trim()).filter(Boolean);
      members.forEach(member=>candidatePreviewRosterList.append(make('li','',member)));
      candidatePreviewRoster.hidden=members.length===0;
    };
    candidateForm.append(candidatePreview);
    teamName.addEventListener('input',updateCandidatePreview);
    roster.addEventListener('input',updateCandidatePreview);
    ideas.addEventListener('input',updateCandidatePreview);
    backgroundColor.addEventListener('input',updateCandidatePreview);
    foregroundColor.addEventListener('input',updateCandidatePreview);
    picture.addEventListener('change',()=>{
      if(candidatePreviewImageUrl)URL.revokeObjectURL(candidatePreviewImageUrl);
      candidatePreviewImageUrl='';
      const file=picture.files[0];
      if(file&&file.size<=maxCandidateImageSize&&['image/jpeg','image/png','image/webp'].includes(file.type)){
        candidatePreviewImageUrl=URL.createObjectURL(file);
        candidatePreviewImage.src=candidatePreviewImageUrl;
        candidatePreviewImage.hidden=false;
        candidatePreviewPlaceholder.hidden=true;
      }else{
        candidatePreviewImage.removeAttribute('src');
        candidatePreviewImage.hidden=true;
        candidatePreviewPlaceholder.hidden=false;
      }
    });
    updateCandidatePreview();
    const candidatePrivacy=make('p','site-privacy-note',text('candidatePrivacy'));
    const candidateStatus=make('p','site-status');
    candidateStatus.setAttribute('role','status');
    candidateStatus.setAttribute('aria-live','polite');
    const candidateSubmit=make('button','primary',text('candidateSubmit'));
    candidateSubmit.type='submit';
    candidateForm.append(candidatePrivacy,candidateStatus,candidateSubmit);
    elections.replaceChildren(
      makePageHeading(text('navCandidates'),text('candidatePageTitle'),text('candidatePageText')),
      candidateIntro,
      candidateForm
    );

    const makeMemberCard=(nameKey,roleKey,initials,responsibilityKey='',groupKey='')=>{
      const card=make('article','member-card');
      const portrait=make('div','member-portrait');
      portrait.append(make('span','member-initials',initials));
      const details=make('div','member-card-details');
      details.append(make('h3','',text(nameKey)),make('p','member-role',text(roleKey)));
      if(responsibilityKey)details.append(make('p','member-bio',text(responsibilityKey)));
      if(groupKey)details.append(make('p','member-group',text(groupKey)));
      card.append(portrait,details);
      return card;
    };
    const leadMembers=make('div','member-grid member-grid-leads');
    leadMembers.append(
      makeMemberCard('assemblyMemberSecretary','roleSecretary','LM','roleSecretaryText'),
      makeMemberCard('assemblyMemberPresident','rolePresident','EB','rolePresidentText'),
      makeMemberCard('assemblyMemberVicePresident','roleVicePresident','CG','roleVicePresidentText'),
      makeMemberCard('assemblyMemberHighSpokesperson','roleHighSpokesperson','AD','roleHighSpokespersonText'),
      makeMemberCard('assemblyMemberTreasurer','roleTreasurer','NA','roleTreasurerText'),
      makeMemberCard('assemblyMemberLowSpokesperson','roleLowSpokesperson','JM','roleLowSpokespersonText')
    );
    const structure=make('ol','gov-flow members-structure');
    [
      ['flowStudents','flowStudentsText'],
      ['flowClass','flowClassText'],
      ['flowLevel','flowLevelText'],
      ['flowAssembly','flowAssemblyText'],
      ['flowReturn','flowReturnText']
    ].forEach(([key,descriptionKey],index)=>{
      const step=make('li','gov-flow-step');
      step.append(make('span','gov-flow-number',String(index+1)),make('h3','',text(key)),make('p','',text(descriptionKey)));
      structure.append(step);
    });
    const classMembers=make('div','member-groups');
    [
      ['classMemberOne','classMemberRoleOne','AR','classMemberGroupOne'],
      ['classMemberTwo','classMemberRoleTwo','ST','classMemberGroupTwo'],
      ['classMemberThree','classMemberRoleThree','TN','classMemberGroupThree'],
      ['classMemberFour','classMemberRoleFour','MB','classMemberGroupFour'],
      ['classMemberFive','classMemberRoleFive','EG','classMemberGroupFive']
    ].forEach(([nameKey,roleKey,initials,groupKey])=>{
      const group=make('section','member-group-section');
      group.append(make('h3','',text(groupKey)));
      const groupCards=make('div','member-grid member-grid-classes');
      groupCards.append(makeMemberCard(nameKey,roleKey,initials,'classRepResponsibility',groupKey));
      group.append(groupCards);
      classMembers.append(group);
    });
    people.replaceChildren(
      makePageHeading(text('navMembers'),text('peopleTitle'),text('peopleText')),
      make('p','member-template-note',text('memberTemplateNote')),
      sectionHeading(text('structureTitle'),text('structureSub')),
      structure,
      sectionHeading(text('leadreps'),text('leadsub')),
      leadMembers,
      sectionHeading(text('classreps'),text('classsub')),
      classMembers
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
    const voteGrid=make('div','vote-team-grid');
    const voteTeams=Array.from({length:6},(_,index)=>({
      key:['voteTeamOne','voteTeamTwo','voteTeamThree','voteTeamFour','voteTeamFive','voteTeamSix'][index]
    }));
    voteTeams.forEach(team=>{
      const card=make('article','vote-team-card');
      const image=document.createElement('img');
      image.src='vote-team-template.jpg';
      image.alt=text('voteTeamImageAlt');
      image.loading='lazy';
      const more=button(text('voteTeamMore'),'vote-team-more');
      more.dataset.voteTeam=team.key;
      card.append(make('h2','',text(team.key)),image,more);
      voteGrid.append(card);
    });
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
      const team=voteTeams.find(item=>item.key===selectedVoteTeam);
      if(team){
        const detailCard=make('article','vote-team-detail-card');
        const detailImage=document.createElement('img');
        detailImage.src='vote-team-template.jpg';
        detailImage.alt=text('voteTeamImageAlt');
        detailImage.loading='lazy';
        const detailCopy=make('div','vote-team-detail-copy');
        detailCopy.append(
          make('span','pill',text('voteTeamTemplateLabel')),
          make('h1','',text(team.key)),
          make('p','',text(`${team.key}Text`))
        );
        detailCard.append(detailCopy,detailImage);
        const back=button(`← ${text('voteTeamBack')}`,'vote-team-back');
        voteTeamDetail.replaceChildren(back,detailCard);
      }
    }else voteTeamDetail.replaceChildren();
  };
  renderGovernancePages();
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
  const projectSearchLabel=make('label','site-project-search-label');
  projectSearchLabel.append(make('span','',text('projectSearch')));
  const projectSearchInput=document.createElement('input');
  projectSearchInput.className='site-project-search';
  projectSearchInput.type='search';
  projectSearchInput.autocomplete='off';
  projectSearchInput.placeholder=text('projectSearchPlaceholder');
  projectSearchInput.setAttribute('aria-label',text('projectSearch'));
  projectSearchLabel.append(projectSearchInput);
  projects.replaceChildren(
    makePageHeading(text('projects'),text('approvedProjects'),text('projectIntro')),
    projectSearchLabel,
    make('div','site-project-list')
  );

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
  const titleLabel=make('label','');
  titleLabel.htmlFor='title';
  titleLabel.append(make('span','',text('ideaTitle')));
  const titleInput=document.createElement('input');
  titleInput.id='title';
  titleInput.name='title';
  titleInput.maxLength=100;
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
  const privacy=make('p','site-privacy-note',text('storageNotice'));
  const formStatus=make('p','site-status');
  formStatus.setAttribute('role','status');
  formStatus.setAttribute('aria-live','polite');
  formStatus.dataset.storageStatus='';
  const submit=make('button','primary',text('submit'));
  submit.type='submit';
  participationForm.append(categoryLabel,titleLabel,detailsLabel,privacy,formStatus,submit,hiddenCompatibility);
  projects.insertBefore(participationForm,projectSearchLabel);

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
    paletteCard.append(paletteChoices);
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
    applyPreferences();
    try{
      localStorage.setItem(preferencesKey,JSON.stringify(preferences));
      preferencesLoadError='';
      setStatus(settingsStatus,text('preferencesSaved'),'success');
    }catch(error){setStatus(settingsStatus,error.message||text('settingsSaveError'),'error')}
  };
  settings.addEventListener('click',event=>{
    const choice=event.target.closest('[data-palette]');
    if(!choice||!palettes.has(choice.dataset.palette))return;
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
      .filter(item=>`${item.title} ${item.details} ${categoryName(item.category)}`.toLocaleLowerCase().includes(searchTerm))
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
    setStatus(formStatus,text('storageStatus'));
    setStatus(adminStatus,text('storageStatus'));
    renderHomeProjects(suggestions);
    const approved=renderApproved(suggestions);
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
    if(!title||!details||!category){
      setStatus(formStatus,text('required'),'error');
      if(!category)categorySelect.focus();
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
  projectSearchInput.addEventListener('input',()=>renderAll());
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
    projects.querySelector('h1').textContent=language.approvedProjects;
    projects.querySelector('.site-page-heading p').textContent=language.projectIntro;
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
    participationForm.querySelector('h1').textContent=language.participateTitle;
    participationForm.querySelector('.site-page-heading p').textContent=language.participateText;
    categoryLabel.querySelector('span').textContent=language.category;
    Array.from(categorySelect.options).forEach((option,index)=>{
      option.textContent=[language.chooseCategory,language.schoolLife,language.activity,language.sharedSpaces,language.other][index];
    });
    titleLabel.querySelector('span').textContent=language.ideaTitle;
    titleInput.placeholder=language.ideaTitlePlaceholder;
    detailsLabel.querySelector('span').textContent=language.details;
    detailsInput.placeholder=language.detailsPlaceholder;
    privacy.textContent=language.storageNotice;
    submit.textContent=language.submit;
    admin.querySelector('h1').textContent=language.adminTitle;
    admin.querySelector('.site-page-heading p').textContent=language.adminText;
    adminNotice.textContent=language.adminNotice;
    priorityHelp.textContent=language.priorityHelp;
    searchLabel.querySelector('span').textContent=language.searchSuggestions;
    searchInput.setAttribute('aria-label',language.searchSuggestions);
    projectSearchLabel.querySelector('span').textContent=language.projectSearch;
    projectSearchInput.placeholder=language.projectSearchPlaceholder;
    projectSearchInput.setAttribute('aria-label',language.projectSearch);
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
  const projectShortcut=document.querySelector('.header-tools [data-page="projects"]');
  const updateHeaderLabels=()=>{
    originalToggleLabel.setAttribute('aria-label',document.documentElement.lang==='en'?'Open news':'Ouvrir les actualités');
    projectShortcut.querySelector('.search-label').textContent=document.documentElement.lang==='en'?'Ideas':'Idées';
    projectShortcut.setAttribute('aria-label',document.documentElement.lang==='en'?'Open project search':'Ouvrir la recherche dans les projets');
  };
  updateHeaderLabels();
  projectShortcut.addEventListener('click',()=>setTimeout(()=>{
    projectSearchInput.focus();
    projectSearchInput.scrollIntoView({behavior:'smooth',block:'center'});
  },0));
  originalToggleLabel.addEventListener('click',()=>{if(document.getElementById('news-drawer').open)renderAll()});
  document.getElementById('lang').addEventListener('click',()=>{
    updateHeaderLabels();
    renderAll();
  });
  renderAll();
})();
