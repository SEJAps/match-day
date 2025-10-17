import type { HeroSection, HeroBg } from "@/config/types";
import HERO_BG_LAYER_SRC from "@/assets/images/png/hero-bg-layer.png";
import HERO_BG_MAIN_SRC from "@/assets/images/png/hero-bg-main.png";

export interface TeamsPageConfig {
  hero: HeroSection;
  heroBgImages: HeroBg[];
  heroCtas?: { label: string; variant: "success" | "outline" }[];
}

export const TEAMS_PAGE: TeamsPageConfig = {
  hero: {
    title: "Entrena mejor. Organiza más. Rinde como un equipo profesional.",
    description:
      "Match Day te ayuda a preparar cada detalle de manera rápida y eficaz. Optimiza tu tiempo y sácate el máximo potencial como entrenador para sacar el máximo rendimiento de tu equipo. Porque cuando llega el día de partido, nada puede quedar al azar..",
  },
  heroBgImages: [
    {
      src: HERO_BG_LAYER_SRC,
      width: 1400,
      height: 680,
      alt: "Capa de fondo hero (patrón)",
      fit: "cover",
      loading: "eager",
    },
    {
      src: HERO_BG_MAIN_SRC,
      width: 1400,
      height: 680,
      alt: "Fondo principal hero",
      fit: "cover",
      loading: "eager",
    },
  ],
  heroCtas: [
    { label: "Crear equipo", variant: "success" },
    { label: "Ver funcionalidades", variant: "outline" },
  ],
};
