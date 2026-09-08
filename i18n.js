(function () {
  const translations = {
    fr: {
      accueil: 'Accueil',
      apropos: 'A propos',
      services: 'Services',
      actualites: 'Actualites',
      astuces: 'Astuces',
      contact: 'Contact',
      devis: 'Demander un devis',
      decouvrir: 'Decouvrir',
      auditGratuit: 'Audit & Devis gratuit',
      hero_kicker: '<span class="dot" aria-hidden="true"></span>IT Premium & Cybersécurité - Douala, Cameroun',
      heroTitle: 'Architecture <span class="slash">/</span> Informatique <span class="slash">/</span> <span class="accent">de Confiance</span>.',
      heroDesc: 'E-JARNAULD SOFT accompagne les entreprises au Cameroun avec des solutions IT premium : securite, infogerance, infrastructure, integration et cablage - avec une execution rapide, maitrisee et orientee resultats.',
      services_title: 'Solutions de Pointe',
      services_sub: 'Des solutions fiables pour proteger, connecter et faire grandir votre entreprise.'
    },
    en: {
      accueil: 'Home',
      apropos: 'About Us',
      services: 'Services',
      actualites: 'News',
      astuces: 'Tips',
      contact: 'Contact',
      devis: 'Request a quote',
      decouvrir: 'Discover',
      auditGratuit: 'Free audit & quote',
      hero_kicker: '<span class="dot" aria-hidden="true"></span>Premium IT & Cybersecurity - Douala, Cameroon',
      heroTitle: 'Trusted <span class="slash">/</span> IT <span class="slash">/</span> <span class="accent">Architecture</span>.',
      heroDesc: 'E-JARNAULD SOFT supports companies in Cameroon with premium IT solutions: security, managed services, infrastructure, integration and cabling - delivered quickly, reliably and with measurable results.',
      services_title: 'Advanced Solutions',
      services_sub: 'Reliable solutions to protect, connect and grow your business.'
    }
  };

  const pageNames = {
    'index.html': 'index.html',
    'about.html': 'about.html',
    'services.html': 'services.html',
    'actualites.html': 'actualites.html',
    'astuces.html': 'astuces.html',
    'contact.html': 'contact.html',
    'cgv.html': 'cgv.html',
    'confidentialite.html': 'confidentialite.html'
  };

  const englishPhrases = {
    'Solutions Informatiques': 'IT Solutions',
    'Basé à Douala, Cameroun.': 'Based in Douala, Cameroon.',
    'Demander un Devis': 'Request a Quote',
    'Appeler / WhatsApp': 'Call / WhatsApp',
    'Cabinet d\'ingénierie IT et cybersécurité basé à Douala.': 'IT engineering and cybersecurity firm based in Douala.',
    'Liens Rapides': 'Quick Links',
    'Coordonnées': 'Contact Details',
    'Réseau Informatique': 'Computer Networks',
    'Infogérance': 'Managed IT Services',
    'Téléphonie d\'Entreprise': 'Business Telephony',
    'Télécommunications': 'Telecommunications',
    'Vidéosurveillance': 'Video Surveillance',
    'Réponse moyenne : moins de 2 heures': 'Average response: under 2 hours',
    'Tous': 'All',
    'Sécurité': 'Security',
    'Maintenance': 'Maintenance',
    'Infrastructure': 'Infrastructure',
    'Cloud': 'Cloud',
    'Contactez-nous': 'Contact us',
    'Voir Services': 'View Services',
    'Parler à un expert': 'Talk to an expert',
    'Démarrer un projet': 'Start a project',
    'Envoyer un message': 'Send a message',
    'Envoyer le message →': 'Send message →',
    'Objet / Sujet': 'Subject / Topic',
    'Demande de Devis': 'Quote request',
    'Support Technique': 'Technical support',
    'Demande d\'Audit IT/Cyber': 'IT/Cyber audit request',
    'Autre': 'Other',
    'Au cœur de l\'innovation mondiale.': 'At the heart of global innovation.',
    'Maîtrisez votre ordinateur.': 'Master your computer.',
    'L\'excellence technique au service de votre infrastructure.': 'Technical excellence for your infrastructure.',
    'Des services conçus pour la performance.': 'Services designed for performance.',
    'Solutions de Pointe': 'Advanced Solutions',
    'Catalogue de Services': 'Service Catalog',
    'Les Piliers de notre Expertise': 'The Pillars of Our Expertise',
    'Chiffres clés': 'Key Figures',
    'L\'équipe derrière l\'excellence.': 'The team behind excellence.',
    'Questions Fréquentes.': 'Frequently Asked Questions.',
    'Un besoin spécifique ?': 'Have a specific need?',
    'Raccourcis qui changent tout': 'Shortcuts that change everything',
    'Boostez les performances de votre PC': 'Boost your PC performance',
    'Voir les étapes ↓': 'View steps ↓',
    'Sélection éditoriale': 'Editor\'s selection',
    'Lire →': 'Read →',
    'Confidentialité': 'Privacy',
    'Tous droits réservés.': 'All rights reserved.',
    'Depuis 2014': 'Since 2014',
    'Ingénierie de Précision': 'Precision Engineering',
    'Support 24/7': '24/7 Support',
    'Excellence Certifiée': 'Certified Excellence',
    'Innovation Continue': 'Continuous Innovation',
    'Sécurité Maximale': 'Maximum Security',
    'Clients Institutionnels': 'Institutional Clients',
    'Années d\'Expérience': 'Years of Experience',
    'Taux de Satisfaction': 'Customer Satisfaction Rate'
    , 'Câblage': 'Cabling'
    , 'CÂBLAGE': 'CABLING'
    , 'SÉCURITÉ': 'SECURITY'
    , '500+ clients · Évalué 4.9/5': '500+ clients · Rated 4.9/5'
    , 'Pen-Testing, sécurisation cloud et pare-feux industriels pour une protection sans compromis.': 'Pen-testing, cloud hardening and industrial firewalls for uncompromising protection.'
    , 'Infogérance, helpdesk et mises à jour critiques — avec supervision et continuité d’activité.': 'Managed IT services, helpdesk and critical updates with monitoring and business continuity.'
    , 'Téléphonie IP, files d’attente et intégration CRM pour fluidifier vos opérations.': 'IP telephony, call queues and CRM integration to streamline your operations.'
    , 'Des solutions d’excellence.': 'Solutions built for excellence.'
    , 'Ingénieurs certifiés pour bâtir des processus sécurité conformes et mesurables.': 'Certified engineers build compliant and measurable security processes.'
    , 'SLA réponse rapide pour réduire l’impact des incidents et garantir la continuité.': 'Fast-response SLAs reduce incident impact and ensure continuity.'
    , 'Données au Cameroun.': 'Data hosted in Cameroon.'
    , 'Tarification transparente et hébergement adapté à votre contexte local.': 'Transparent pricing and hosting adapted to your local context.'
    , 'Une équipe d’intervention orientée expertise et qualité de service, pensée pour les entreprises premium.': 'An expert intervention team focused on service quality for premium businesses.'
    , 'Un aperçu clair, sans jargon inutile.': 'A clear overview, without unnecessary jargon.'
    , 'Prêt à sécuriser votre avenir numérique ?': 'Ready to secure your digital future?'
    , 'Nos ingénieurs répondent sous 2 heures. Audit IT gratuit et sans engagement.': 'Our engineers respond within 2 hours. Free, no-obligation IT audit.'
    , 'Un accompagnement premium, de l’audit à la mise en production — avec une communication claire.': 'Premium support from audit to production, with clear communication.'
    , 'Quels sont vos délais d’intervention à Douala ?': 'What is your response time in Douala?'
    , 'Comment garantissez-vous la sécurité de nos données ?': 'How do you protect our data?'
    , 'Proposez-vous des contrats d’infogérance longue durée ?': 'Do you offer long-term managed IT contracts?'
    , 'Oui. Nous proposons des contrats d’infogérance longue durée adaptés à votre organisation : SLA,': 'Yes. We offer long-term managed IT contracts tailored to your organization: SLAs,'
    , 'Utilisez les boutons ci-dessus pour initier une demande.': 'Use the buttons above to start a request.'
    , 'À propos': 'About Us'
    , 'Actualités': 'News'
    , 'Chez E-JARNAULD SOFT, nous transformons vos besoins IT en systèmes fiables et sécurisés. Notre approche est': 'At E-JARNAULD SOFT, we turn your IT needs into reliable and secure systems. Our approach is'
    , 'structurée : audit, conception, déploiement, puis amélioration continue — avec un accompagnement local à Douala.': 'structured: audit, design, deployment, then continuous improvement, with local support in Douala.'
    , 'Cette landing page est un modèle UI ; les actions peuvent être reliées à votre formulaire/contact réel.': 'This landing page is a UI model; the actions can be connected to your real contact form.'
    , 'Explorer →': 'Explore →'
    , 'Sécurisé': 'Secure'
    , 'Cat6A, fibre optique et baies de brassage pour une infrastructure réseau robuste et durable.': 'Cat6A, fiber optic cabling and patch cabinets for a robust and durable network infrastructure.'
    , 'Réactivité & Transparence': 'Responsiveness & Transparency'
    , 'Douala • Cameroun': 'Douala • Cameroon'
    , 'Douala, Cameroun': 'Douala, Cameroon'
    , 'PERFORMANCE': 'PERFORMANCE'
    , 'Intervention locale & déploiements maîtrisés.': 'Local response and controlled deployments.'
    , 'Des livrables clairs : audit, architecture, déploiement et suivi.': 'Clear deliverables: audit, architecture, deployment and follow-up.'
    , 'Démarrage rapide': 'Fast start'
    , 'Opérationnel': 'Operational'
    , 'Sécurisation Cloud & Hybride': 'Cloud & Hybrid Security'
    , 'Infogérance Complète': 'Complete Managed IT Services'
    , 'Maintenance Préventive': 'Preventive Maintenance'
    , 'Réseaux Informatiques': 'Computer Networks'
    , 'Câblage Structuré': 'Structured Cabling'
    , 'Vidéosurveillance & Contrôle d’accès': 'Video Surveillance & Access Control'
    , 'Vidéosurveillance & Contrôle d\'accès': 'Video Surveillance & Access Control'
    , 'Demander un devis →': 'Request a quote →'
    , 'Demander un devis': 'Request a quote'
    , 'Découvrez notre gamme complète d’interventions techniques,': 'Explore our complete range of technical services,'
    , 'de la cybersécurité avancée au déploiement de réseaux télécoms.': 'from advanced cybersecurity to telecom network deployment.'
    , 'Tests d’intrusion, analyse de vulnérabilités, rapport détaillé et plan de remédiation.': 'Penetration testing, vulnerability analysis, detailed reporting and remediation planning.'
    , 'Protection de vos environnements cloud AWS, Azure et hybrides contre les cybermenaces.': 'Protecting your AWS, Azure and hybrid cloud environments from cyber threats.'
    , 'Gestion totale de votre parc informatique, helpdesk réactif et mises à jour critiques.': 'Complete management of your IT estate, responsive helpdesk and critical updates.'
    , 'Interventions régulières pour anticiper les pannes et garantir la continuité de service.': 'Regular interventions to prevent failures and ensure service continuity.'
    , 'Déploiement de standards IP, files d’attente intelligentes et intégration CRM.': 'Deployment of IP systems, intelligent call queues and CRM integration.'
    , 'Architecture, déploiement et sécurisation de réseaux LAN/WAN/Wi-Fi d’entreprise.': 'Architecture, deployment and security for business LAN/WAN/Wi-Fi networks.'
    , 'Câblage Cat6A, fibre optique, baies de brassage et certification de liens.': 'Cat6A cabling, fiber optics, patch cabinets and link certification.'
    , 'Installation de systèmes CCTV IP, contrôle d’accès biométrique et supervision à distance.': 'Installation of IP CCTV, biometric access control and remote monitoring.'
    , "Découvrez notre gamme complète d'interventions techniques,": 'Explore our complete range of technical services,'
    , "de la cybersécurité avancée au déploiement de réseaux télécoms.": 'from advanced cybersecurity to telecom network deployment.'
    , "Tests d'intrusion, analyse de vulnérabilités, rapport détaillé et plan de remédiation.": 'Penetration testing, vulnerability analysis, detailed reporting and remediation planning.'
    , "Protection de vos environnements cloud AWS, Azure et hybrides contre les cybermenaces.": 'Protecting your AWS, Azure and hybrid cloud environments from cyber threats.'
    , "Déploiement de standards IP, files d'attente intelligentes et intégration CRM.": 'Deployment of IP systems, intelligent call queues and CRM integration.'
    , "Architecture, déploiement et sécurisation de réseaux LAN/WAN/Wi-Fi d'entreprise.": 'Architecture, deployment and security for business LAN/WAN/Wi-Fi networks.'
    , "Installation de systèmes CCTV IP, contrôle d'accès biométrique et supervision à distance.": 'Installation of IP CCTV, biometric access control and remote monitoring.'
    , 'Test boîte noire/blanche': 'Black-box/white-box testing'
    , 'Rapport de conformité': 'Compliance report'
    , 'Suivi post-audit': 'Post-audit follow-up'
    , 'Firewall cloud': 'Cloud firewall'
    , 'Chiffrement des données': 'Data encryption'
    , 'Surveillance 24/7': '24/7 monitoring'
    , 'Helpdesk dédié': 'Dedicated helpdesk'
    , 'Mises à jour automatisées': 'Automated updates'
    , 'Rapports mensuels': 'Monthly reports'
    , 'Visites planifiées': 'Scheduled visits'
    , 'Diagnostics complets': 'Complete diagnostics'
    , 'Remplacement matériel': 'Hardware replacement'
    , "Enregistrement des appels": 'Call recording'
    , 'Intégration CRM': 'CRM integration'
    , "Plan d'adressage IP": 'IP addressing plan'
    , 'VPN sécurisé': 'Secure VPN'
    , 'Supervision réseau': 'Network monitoring'
    , 'Câblage Cat6A/Fibre': 'Cat6A/Fiber cabling'
    , 'Baies de brassage': 'Patch cabinets'
    , 'Certification Fluke': 'Fluke certification'
    , 'Caméras IP HD': 'HD IP cameras'
    , 'Contrôle biométrique': 'Biometric access control'
    , 'Accès à distance': 'Remote access'
  };

  const englishWords = {
    ' et ': ' and ', ' ou ': ' or ', ' avec ': ' with ', ' pour ': ' for ',
    ' votre ': ' your ', ' vos ': ' your ', ' notre ': ' our ', ' nos ': ' our ',
    ' les ': ' the ', ' des ': ' of ', ' une ': ' a ', ' un ': ' a ',
    ' de ': ' of ', ' du ': ' of the ', ' d\'': ' of ', ' au ': ' to the ',
    ' aux ': ' to the ', ' dans ': ' in ', ' sur ': ' on ', ' par ': ' by ',
    ' sans ': ' without ', ' entre ': ' between ', ' qui ': ' that ',
    ' nous ': ' we ', ' vous ': ' you ', ' est ': ' is ', ' sont ': ' are ',
    ' plus ': ' more ', ' moins ': ' less ', ' sous ': ' under ', ' après ': ' after ',
    ' avant ': ' before ', ' depuis ': ' since ', ' chaque ': ' each ',
    ' nombreux ': ' many ', ' nombreuses ': ' many ', ' rapide ': ' fast ',
    ' rapides ': ' fast ', ' essentielle': ' essential', ' essentiels': ' essential',
    ' sécurité': ' security', ' cybersécurité': ' cybersecurity',
    ' entreprise': ' business', ' entreprises': ' businesses', ' données': ' data ',
    ' équipe': ' team', ' équipes': ' teams', ' réseau': ' network',
    ' réseaux': ' networks', ' système': ' system', ' systèmes': ' systems',
    ' solution': ' solution', ' solutions': ' solutions', ' gratuit': ' free',
    ' gratuite': ' free', ' techniques': ' technical', ' technique': ' technical',
    ' sécurisé': ' secure', ' sécuriser': ' secure', ' clients': ' clients',
    ' monde': ' world', ' innovation': ' innovation', ' qualité': ' quality',
    ' service': ' service', ' services': ' services', ' performance': ' performance',
    ' performances': ' performance', ' besoin': ' need', ' besoins': ' needs',
    ' projet': ' project', ' projets': ' projects', ' gestion': ' management',
    ' maintenance': ' maintenance', ' installation': ' installation',
    ' informations': ' information', ' information': ' information',
    ' application': ' application', ' applications': ' applications',
    ' ordinateur': ' computer', ' ordinateur.': ' computer.', ' pannes': ' failures',
    ' problèmes': ' problems', ' jour': ' update', ' mises à jour': ' updates',
    ' ouvrir': ' open', ' cliquez': ' click', ' sélectionnez': ' select',
    ' choisissez': ' choose', ' redémarrez': ' restart', ' envoyez': ' send',
    ' répondre': ' respond', ' garantir': ' ensure', ' améliorer': ' improve',
    ' protéger': ' protect', ' protection': ' protection', ' développement': ' development',
    ' déploiement': ' deployment', ' analyse': ' analysis', ' audit': ' audit',
    ' outils': ' tools', ' fichiers': ' files', ' fenêtre': ' window',
    ' fenêtres': ' windows', ' paramètres': ' settings', ' stockage': ' storage',
    ' recherche': ' search', ' étape': ' step', ' étapes': ' steps',
    ' complet': ' complete', ' complète': ' complete', ' clairement': ' clearly',
    ' moyenne': ' average', ' local': ' local', ' locale': ' local',
    ' international': ' international', ' meilleures': ' best', ' pratiques': ' practices',
    ' aujourd\'hui': ' today', ' demain': ' tomorrow', ' fin ': ' end ',
    ' avec ': ' with ', ' fait ': ' done ', ' faire ': ' make ', ' peut ': ' can ',
    ' peuvent ': ' can ', ' permet ': ' enables ', ' permettant ': ' enabling '
  };

  const originalTextNodes = [];

  function translateVisibleText(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parentName = node.parentElement?.tagName;
      if (parentName === 'SCRIPT' || parentName === 'STYLE' || parentName === 'NOSCRIPT') continue;
      if (!originalTextNodes.some((entry) => entry.node === node)) originalTextNodes.push({ node, value: node.nodeValue });
    }
    originalTextNodes.forEach((entry) => {
      entry.node.nodeValue = entry.value;
      if (language !== 'en') return;
      let value = entry.value;
      const trimmed = value.trim();
      if (!trimmed) return;
      if (englishPhrases[trimmed]) {
        entry.node.nodeValue = value.replace(trimmed, englishPhrases[trimmed]);
        return;
      }
      Object.entries(englishPhrases).forEach(([french, english]) => {
        value = value.split(french).join(english);
      });
      Object.entries(englishWords).forEach(([french, english]) => {
        value = value.split(french).join(english);
      });
      entry.node.nodeValue = value;
    });
  }

  function getLanguage() {
    const requested = new URLSearchParams(window.location.search).get('lang');
    const saved = window.localStorage.getItem('site-language');
    return requested === 'en' || requested === 'fr' ? requested : (saved || 'fr');
  }

  function setLanguage(language) {
    const currentLanguage = language === 'en' ? 'en' : 'fr';
    const dictionary = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = currentLanguage === 'en'
      ? 'E-JARNAULD SOFT — Premium IT Solutions (Douala)'
      : 'E-JARNAULD SOFT — Solutions Informatiques premium (Douala)';
    window.localStorage.setItem('site-language', currentLanguage);
    translateVisibleText(currentLanguage);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const value = dictionary[element.dataset.i18nHtml];
      if (value) element.innerHTML = value;
    });
    document.querySelectorAll('a.btn-primary[href*="contact"], a.btn-primary[href="#contact"]').forEach((link) => {
      if (!link.dataset.i18n) link.textContent = dictionary.devis;
    });
    document.querySelectorAll('[data-i18n-link]').forEach((link) => {
      const key = link.dataset.i18nLink;
      if (dictionary[key]) link.textContent = dictionary[key];
      const currentTarget = link.getAttribute('href')?.split('/').pop()?.split('?')[0] || 'index.html';
      const target = pageNames[currentTarget];
      if (target) link.href = currentLanguage === 'en' ? `en/${target}?lang=en` : target;
    });
    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      const active = button.dataset.langToggle === currentLanguage;
      button.setAttribute('aria-pressed', String(active));
    });
  }

  function initI18n() {
    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.addEventListener('click', () => setLanguage(button.dataset.langToggle));
    });
    setLanguage(getLanguage());
  }

  window.i18n = { initI18n, setLanguage };
})();
