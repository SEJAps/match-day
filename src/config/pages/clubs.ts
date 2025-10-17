import type { HeroSection, HeroBg } from "@/config/types";
import HERO_BG_LAYER_SRC from "@/assets/images/png/hero-bg-layer.png";
import HERO_BG_MAIN_SRC from "@/assets/images/png/hero-bg-main.png";

export interface ClubsPageConfig {
  hero: HeroSection;
  heroBgImages: HeroBg[];
  heroCtas?: { label: string; variant: "success" | "outline" }[];
}

export const CLUBS_PAGE: ClubsPageConfig = {
  hero: {
    title: "Encuentra talento y potencia tu club",
    description: "Explora perfiles, analiza rendimiento y gestiona tu cantera.",
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
    { label: "Publicar vacante", variant: "success" },
    { label: "Explorar jugadores", variant: "outline" },
  ],
};
