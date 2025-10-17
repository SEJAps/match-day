import type { HelpCenterConfig } from "@/config/types";

export const HELP_CENTER_STATIC_PAGE: HelpCenterConfig = {
  intro: {
    title: "Centro de Ayuda",
    description: "Encuentra respuestas rápidas y guías paso a paso.",
  },
  categories: [
    {
      title: "Primeros pasos",
      articles: [
        { title: "Crear tu primer equipo", href: "/help/primer-equipo" },
        { title: "Invitar a tu staff", href: "/help/invitar-staff" },
      ],
    },
    {
      title: "Análisis y métricas",
      articles: [
        { title: "KPIs esenciales", href: "/help/kpis" },
        { title: "Exportar informes", href: "/help/exportar-informes" },
      ],
    },
  ],
  faqs: [
    {
      question: "¿Puedo usar MatchDay sin conexión?",
      answer:
        "Puedes registrar eventos offline y sincronizar cuando recuperes conexión.",
    },
    {
      question: "¿Cómo comparto un informe?",
      answer:
        "Desde la sección de informes, pulsa 'Compartir' y elige el canal preferido.",
    },
  ],
};
