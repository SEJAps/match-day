import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Cargamos recursos desde los JSON bajo config para mantener la edición no técnica
import esCommon from "@/config/i18n/locales/es/common.json";
import enCommon from "@/config/i18n/locales/en/common.json";
import caCommon from "@/config/i18n/locales/ca/common.json";

export const DEFAULT_LOCALE = "es" as const;

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LOCALE,
    supportedLngs: ["es", "en", "ca"],
    ns: ["common"],
    defaultNS: "common",
    resources: {
      es: { common: esCommon },
      en: { common: enCommon },
      ca: { common: caCommon },
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
