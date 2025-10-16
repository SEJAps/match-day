import advancedStatistics from "@/assets/images/svg/advanced-statistics.svg";
import analysis from "@/assets/images/svg/complete-management.svg";
import reports from "@/assets/images/svg/planning.svg";

export type ServicesPageCard = {
  title: string;
  text: string;
  icon: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: "vertical" | "horizontal";
};

export const SERVICES_PAGE_CARDS: ServicesPageCard[] = [
  {
    title: "Estadísticas Avanzadas",
    text: "Accede a métricas detalladas de jugadores y equipos con análisis en tiempo real y reportes personalizados.",
    icon: advancedStatistics,
    ctaLabel: "Saber más",
    ctaHref: "/features/estadisticas",
  },
  {
    title: "Análisis de Rendimiento",
    text: "Evalúa el rendimiento de los jugadores con datos precisos y visualizaciones efectivas.",
    icon: analysis,
    ctaLabel: "Ver ejemplos",
    ctaHref: "/features/analisis",
    variant: "horizontal",
  },
  {
    title: "Informes Personalizados",
    text: "Crea informes a medida para tus necesidades específicas y toma decisiones informadas.",
    icon: reports,
    ctaLabel: "Solicitar demo",
    ctaHref: "/contacto",
  },
];
