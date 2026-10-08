(function () {
  const storageKey = 'site-language';
  const supportedLanguages = ['fr', 'en'];
  const originalTextNodes = new Map();
  let currentPhrases = null;
  let initializationPromise;

  function showLoadError(error) {
    console.error('Unable to load site translations.', error);
    let notice = document.getElementById('language-load-error');

    if (!notice) {
      notice = document.createElement('p');
      notice.id = 'language-load-error';
      notice.setAttribute('role', 'alert');
      Object.assign(notice.style, {
        position: 'fixed',
        bottom: '16px',
        left: '16px',
        zIndex: '9999',
        maxWidth: 'min(420px, calc(100vw - 32px))',
        margin: '0',
        padding: '12px 16px',
        border: '1px solid #f0ad4e',
        borderRadius: '8px',
        background: '#fff3cd',
        color: '#664d03',
        font: '14px/1.5 sans-serif',
      });
      document.body.appendChild(notice);
    }

    notice.textContent = window.location.protocol === 'file:'
      ? 'Les traductions nécessitent un serveur local. Lancez demarrer-site.bat puis ouvrez http://127.0.0.1:8000.'
      : 'Impossible de charger les traductions. Vérifiez que les fichiers locales/fr.json et locales/en.json sont publiés.';
  }

  function getLanguage() {
    const savedLanguage = localStorage.getItem(storageKey);
    if (supportedLanguages.includes(savedLanguage)) return savedLanguage;

    const urlLanguage = new URLSearchParams(window.location.search).get('lang');
    if (supportedLanguages.includes(urlLanguage)) return urlLanguage;

    return navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr';
  }

  function translateTextNodes(phrases) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('[data-i18n], [data-i18n-link], script, style, noscript')) continue;

      if (!originalTextNodes.has(node)) {
        originalTextNodes.set(node, node.nodeValue);
      }

      let translatedText = originalTextNodes.get(node);
      for (const [sourceText, targetText] of Object.entries(phrases)) {
        if (sourceText && translatedText.includes(sourceText)) {
          translatedText = translatedText.replaceAll(sourceText, targetText);
        }
      }
      node.nodeValue = translatedText;
    }
  }

  async function changeLanguage(lang) {
    if (!supportedLanguages.includes(lang)) {
      throw new RangeError(`Unsupported language: ${lang}`);
    }

    const response = await fetch(`locales/${lang}.json`);
    if (!response.ok) {
      throw new Error(`Could not load locales/${lang}.json (${response.status})`);
    }

    const dictionary = await response.json();
    document.getElementById('language-load-error')?.remove();
    currentPhrases = dictionary.phrases || {};
    document.documentElement.lang = lang;
    localStorage.setItem(storageKey, lang);

    document.querySelectorAll('[data-i18n], [data-i18n-link]').forEach((element) => {
      const key = element.dataset.i18n || element.dataset.i18nLink;
      const translation = dictionary.translations[key];
      if (translation !== undefined) element.textContent = translation;
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const translation = dictionary.translations[element.dataset.i18nPlaceholder];
      if (translation !== undefined) element.setAttribute('placeholder', translation);
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const translation = dictionary.translations[element.dataset.i18nAriaLabel];
      if (translation !== undefined) element.setAttribute('aria-label', translation);
    });

    document.querySelectorAll('img[data-src-en]').forEach((image) => {
      if (!image.dataset.srcFr) {
        image.dataset.srcFr = image.getAttribute('src');
      }

      const source = lang === 'en' ? image.dataset.srcEn : image.dataset.srcFr;
      if (source && image.getAttribute('src') !== source) {
        image.setAttribute('src', source);
      }
    });

    translateTextNodes(currentPhrases);

    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.langToggle === lang));
    });
  }

  function initI18n() {
    if (initializationPromise) return initializationPromise;

    document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        changeLanguage(button.dataset.langToggle).catch((error) => {
          showLoadError(error);
        });
      });
    });

    initializationPromise = changeLanguage(getLanguage());
    return initializationPromise;
  }

  window.changeLanguage = changeLanguage;
  window.i18n = {
    initI18n,
    setLanguage: changeLanguage,
    getLanguage,
  };

  const contentObserver = new MutationObserver(() => {
    if (currentPhrases) translateTextNodes(currentPhrases);
  });
  contentObserver.observe(document.body, { childList: true, subtree: true });

  initI18n().catch((error) => {
    showLoadError(error);
  });
})();
