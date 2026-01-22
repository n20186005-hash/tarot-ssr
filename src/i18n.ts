import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import zhHant from "./locales/zh-Hant.json";

// Detect browser language but prioritize explicit user choice
const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: "zhHantDetector",
  lookup(options) {
    if (typeof navigator === 'undefined') return undefined;
    const lang = navigator.language;
    if (lang && lang.startsWith("zh")) {
      return "zh-Hant";
    }
    return undefined;
  },
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      "zh-Hant": { translation: zhHant },
    },
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: false // Fix React Suspense error in SSR/Hydration
    }
  });

export default i18n;
