import type { HeroSection, HeroBg } from "@/config/types";
import HERO_BG_LAYER_SRC from "@/assets/images/png/hero-bg-layer.png";
import HERO_BG_MAIN_SRC from "@/assets/images/png/hero-bg-main.png";
import profilePalyer from "@/assets/images/svg/profile-player.svg";
import eye from "@/assets/images/svg/eye.svg";
import spaceShip from "@/assets/images/svg/space-ship.svg";
import soccerBall from "@/assets/images/svg/soccer-ball.svg";

export interface PlayersPageConfig {
  hero: HeroSection;
  heroBgImages: HeroBg[];
  heroCtas?: { label: string; variant: "success" | "outline" }[];
}

export const PLAYERS_PAGE: PlayersPageConfig = {
  hero: {
    title: "¿Quieres que te vean?",
    description: "Haz que cada partido cuente.",
    list: {
      title: "Impulsa tu carrera desde hoy.",
      items: [
        { icon: profilePalyer, text: "Crea tu perfil gratis" },
        { icon: soccerBall, text: "Sube tus estadísticas" },
        { icon: eye, text: "Hazte visible para clubes" },
        { icon: spaceShip, text: "Empieza a destacar hoy" },
      ],
    },
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
    { label: "Reagistrate", variant: "success" },
    { label: "Ver planes", variant: "outline" },
  ],
};
