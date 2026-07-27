import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import ptTranslation from './locales/pt.json';
import frTranslation from './locales/fr.json';

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
  pt: { translation: ptTranslation },
  fr: { translation: frTranslation },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
