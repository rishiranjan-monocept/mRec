// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../locales/en.json";
// import es from "./locales/es.json";
import hi from "../locales/hi.json";

i18n
  .use(LanguageDetector) // detect browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      //   es: { translation: es },
      hi: { translation: hi },
    },
    fallbackLng: "en", // default if no match
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
