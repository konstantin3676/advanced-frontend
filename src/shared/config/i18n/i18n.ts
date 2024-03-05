import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const ns = ['translation'];
const supportedLngs = ['ru', 'en'];
const resources = ns.reduce<Record<string, Record<string, string>>>(
  (acc, n) => {
    supportedLngs.forEach((lng) => {
      if (!acc[lng]) {
        acc[lng] = {};
      }

      acc[lng] = {
        ...acc[lng],
        [n]: require(`../../../../public/locales/${lng}/${n}.json`),
      };
    });
    return acc;
  },
  {}
);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns,
    resources,
    supportedLngs,
    fallbackLng: 'ru',
    load: 'languageOnly',
    defaultNS: 'translation',
    debug: __IS_DEV__,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
