import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
};

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: "en", // Default language
    debug: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "cookie", "navigator", "querystring"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
