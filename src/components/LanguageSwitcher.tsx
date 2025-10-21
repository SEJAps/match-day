import type { FC } from "react";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "ca", label: "CA" },
];

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const changeLang = async (lng: string) => {
    try {
      await i18n.changeLanguage(lng);
      // Persistencia extra por si el detector no cachea en algunos navegadores
      localStorage.setItem("i18nextLng", lng);
      // Actualizar lang del html para accesibilidad
      document?.documentElement?.setAttribute("lang", lng);
    } catch {
      // noop
    }
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-md bg-white/5 p-1 border border-white/10">
      {LANGS.map(({ code, label }) => {
        const isActive = i18n.resolvedLanguage === code;
        return (
          <button
            title={label}
            key={code}
            type="button"
            onClick={() => changeLang(code)}
            aria-pressed={isActive}
            className={`px-2.5 py-1 text-xs font-medium rounded ${
              isActive
                ? "bg-emerald-500 text-white"
                : "text-neutral-200 hover:bg-white/10"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
