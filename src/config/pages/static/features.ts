import type { FeaturesConfig } from "@/config/types";

export const FEATURES_STATIC_PAGE: FeaturesConfig = {
  intro: {
    title: "Lo que nos hace diferentes",
    description: "Capacidades clave que elevan el rendimiento.",
  },
  groups: [
    {
      title: "Scouting y análisis",
      items: [
        "KPIs personalizables por rol",
        "Etiquetado de jugadas y eventos",
        "Comparativas entre temporadas",
      ],
    },
    {
      title: "Equipo y club",
      items: [
        "Gestión de plantillas y lesiones",
        "Integración con wearables",
        "Informes listos para directiva",
      ],
    },
  ],
};
