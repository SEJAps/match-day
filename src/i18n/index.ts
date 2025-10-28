import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Cargamos recursos desde los JSON bajo config para mantener la edición no técnica
import esCommon from "@/config/i18n/locales/es/common.json";
import enCommon from "@/config/i18n/locales/en/common.json";
import caCommon from "@/config/i18n/locales/ca/common.json";

import esPages from "@/config/i18n/locales/es/pages.json";
import enPages from "@/config/i18n/locales/en/pages.json";
import caPages from "@/config/i18n/locales/ca/pages.json";

export const DEFAULT_LOCALE = "ca" as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: ["es", "en", "ca"],
    ns: ["common", "pages"],
    defaultNS: "common",
    resources: {
      es: { common: esCommon, pages: esPages },
      en: { common: enCommon, pages: enPages },
      ca: { common: caCommon, pages: caPages },
    },
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

// Accesibilidad: sincronizar <html lang> con el idioma activo
if (typeof document !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    try {
      document.documentElement.setAttribute("lang", lng);
    } catch {
      // noop
    }
  });
}

export default i18n;
