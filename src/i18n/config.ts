import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ptTranslations from '../messages/pt.json';
import enTranslations from '../messages/en.json';

export const defaultLocale = 'pt';
export const locales = ['pt', 'en'] as const;
export type Locale = (typeof locales)[number];

const resources = {
  pt: {
    translation: ptTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: defaultLocale,
    lng: defaultLocale,
    debug: false,
    
    detection: {
      order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;