import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', 
    },
    debug: true,
    fallbackLng: 'ar', 
    load: 'languageOnly', 
    detection: {
      order: [
        'htmltag',
        'cookie',
        'localStorage',
        'sessionStorage',
        'navigator',
        'path',
        'subdomain'
      ],
      caches: ['cookie'],
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;