(function () {
  const translations = {
    fr: {
      accueil: 'Accueil',
      apropos: 'À Propos',
      services: 'Services',
      actualites: 'Actualités',
      astuces: 'Astuces',
      contact: 'Contact',
      devis: 'Demander un devis',
      decouvrir: 'Découvrir nos solutions',
      auditGratuit: 'Audit & Devis gratuit',
      hero_kicker: 'IT Premium & Cybersécurité — Douala, Cameroun',
      heroTitle: 'Architecture Informatique de Confiance.',
      heroDesc: 'E-JARNAULD SOFT accompagne les entreprises au Cameroun avec des solutions IT haut de gamme : cybersécurité, infogérance, infrastructure, télécoms et câblage structuré.',
      services_title: 'Solutions Informatiques de Pointe',
      services_sub: 'Des services d\'ingénierie fiables pour protéger, connecter et propulser votre entreprise.',
      stats_clients: 'Clients Entreprises',
      stats_sla: 'Disponibilité SLA',
      stats_exp: 'Années d\'Excellence',
      stats_inter: 'Délai d\'intervention moyen',
      footer_slogan: 'Cabinet d\'ingénierie informatique et de cybersécurité basé à Akwa, Douala. Solutions sur-mesure pour PME et grandes institutions.',
      rights: 'Tous droits réservés.',
      cgv_title: 'Conditions Générales de Vente (CGV)',
      conf_title: 'Politique de Confidentialité'
    },
    en: {
      accueil: 'Home',
      apropos: 'About Us',
      services: 'Services',
      actualites: 'News',
      astuces: 'Tips',
      contact: 'Contact',
      devis: 'Request a Quote',
      decouvrir: 'Discover Solutions',
      auditGratuit: 'Free Audit & Quote',
      hero_kicker: 'Premium IT & Cybersecurity — Douala, Cameroon',
      heroTitle: 'Trusted Enterprise IT Architecture.',
      heroDesc: 'E-JARNAULD SOFT supports businesses in Cameroon with top-tier IT solutions: cybersecurity, managed services, infrastructure, telecoms, and structured cabling.',
      services_title: 'Cutting-Edge IT Solutions',
      services_sub: 'Reliable engineering services to protect, connect, and empower your enterprise.',
      stats_clients: 'Corporate Clients',
      stats_sla: 'SLA Availability',
      stats_exp: 'Years of Excellence',
      stats_inter: 'Average Response Time',
      footer_slogan: 'IT engineering and cybersecurity firm based in Akwa, Douala. Tailored solutions for SMEs and institutions.',
      rights: 'All rights reserved.',
      cgv_title: 'Terms of Service',
      conf_title: 'Privacy Policy'
    }
  };

  const phrasesDict = {
    // English mapping for common UI strings
    'Solutions Informatiques': 'IT Solutions',
    'Basé à Douala, Cameroun.': 'Based in Douala, Cameroon.',
    'Basé à Akwa, Douala': 'Based in Akwa, Douala',
    'Demander un Devis': 'Request a Quote',
    'Appeler / WhatsApp': 'Call / WhatsApp',
    'Ingénierie IT & Cybersécurité': 'IT Engineering & Cybersecurity',
    'Liens Rapides': 'Quick Links',
    'Coordonnées': 'Contact Info',
    'Pen-Testing & Audit Cyber': 'Pen-Testing & Cyber Audit',
    'Sécurisation Cloud & Hybride': 'Cloud & Hybrid Security',
    'Infogérance Complète & Helpdesk': 'Full Managed IT & Helpdesk',
    'Maintenance Préventive': 'Preventive Maintenance',
    'Téléphonie IP & Télécoms': 'IP Telephony & Telecoms',
    'Réseaux Informatiques & Wi-Fi': 'Computer Networks & Wi-Fi',
    'Câblage Structuré & Baies': 'Structured Cabling & Cabinets',
    'Vidéosurveillance & Contrôle d\'Accès': 'Video Surveillance & Access Control',
    'Réponse moyenne : moins de 2 heures': 'Average response: under 2 hours',
    'Réponse garantie sous 2 heures': 'Guaranteed response under 2 hours',
    'Tous': 'All',
    'Sécurité': 'Security',
    'Infrastructure': 'Infrastructure',
    'Cloud': 'Cloud',
    'Télécoms': 'Telecoms',
    'Contactez-nous': 'Contact Us',
    'Voir les Services': 'Explore Services',
    'Parler à un expert': 'Speak to an Expert',
    'Envoyer le message': 'Send Message',
    'Nom complet': 'Full Name',
    'Adresse Email': 'Email Address',
    'Numéro de Téléphone': 'Phone Number',
    'Objet / Sujet': 'Subject / Topic',
    'Message ou détails du projet': 'Message or Project Details',
    'Demande de Devis': 'Quote Request',
    'Support Technique': 'Technical Support',
    'Audit Cyber': 'Cyber Audit',
    'Autre Demande': 'Other Request',
    'En savoir plus': 'Learn More',
    'Lire l\'article': 'Read Article',
    'Rechercher une astuce ou un article...': 'Search for a tip or article...',
    'Toutes les catégories': 'All Categories',
    'Raccourcis Clavier': 'Keyboard Shortcuts',
    'Optimisation PC': 'PC Optimization',
    'Hygiène Cyber': 'Cyber Hygiene',
    'Dépannage Réseau': 'Network Troubleshooting',
    'Fermer': 'Close'
  };

  const originalNodes = new Map();

  function translatePageText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parentTag = node.parentElement?.tagName;
      if (parentTag === 'SCRIPT' || parentTag === 'STYLE' || parentTag === 'NOSCRIPT') continue;
      
      if (!originalNodes.has(node)) {
        originalNodes.set(node, node.nodeValue);
      }
      
      const originalText = originalNodes.get(node);
      let text = originalText;
      
      if (lang === 'en') {
        const trimmed = text.trim();
        if (phrasesDict[trimmed]) {
          text = text.replace(trimmed, phrasesDict[trimmed]);
        } else {
          Object.entries(phrasesDict).forEach(([fr, en]) => {
            if (text.includes(fr)) {
              text = text.replaceAll(fr, en);
            }
          });
        }
      }
      node.nodeValue = text;
    }
  }

  function getLanguage() {
    const urlLang = new URLSearchParams(window.location.search).get('lang');
    const savedLang = localStorage.getItem('site-language');
    return (urlLang === 'en' || urlLang === 'fr') ? urlLang : (savedLang || 'fr');
  }

  function setLanguage(lang) {
    const targetLang = lang === 'en' ? 'en' : 'fr';
    const dict = translations[targetLang];
    
    document.documentElement.lang = targetLang;
    localStorage.setItem('site-language', targetLang);

    // Mettre à jour les éléments data-i18n
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (dict[key]) el.innerHTML = dict[key];
    });

    document.querySelectorAll('[data-i18n-link]').forEach((el) => {
      const key = el.dataset.i18nLink;
      if (dict[key]) el.textContent = dict[key];
    });

    // Traduction automatique du texte visible
    translatePageText(targetLang);

    // Mettre à jour l'état visuel des boutons de langue
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      const isActive = btn.dataset.langToggle === targetLang;
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  function initI18n() {
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', () => setLanguage(btn.dataset.langToggle));
    });
    setLanguage(getLanguage());
  }

  window.i18n = { initI18n, setLanguage, getLanguage };
})();
