import listItemImage from "@/assets/images/svg/list-item-image.svg";
import ARTWORK from "@/assets/images/png/ARTWORK.png";
import HERO_BG_LAYER_SRC from "@/assets/images/png/hero-bg-layer.png";
import HERO_BG_MAIN_SRC from "@/assets/images/png/hero-bg-main.png";
import type { HeroSection, HeroBg, ContactSectionConfig } from "@/config/types";

export interface FeatureItemConfig {
  text: string;
  iconSrc: string;
  iconAlt: string;
}

export interface MatchDayPageConfig {
  hero: HeroSection; // título, descripción e imagen usada en el heroContent
  heroBgImages: HeroBg[]; // capas del fondo del hero (por página)
  heroCtas?: { label: string; variant: "success" | "outline" }[];
  intro: {
    heading: string;
    paragraph: string;
  };
  featuresSection: {
    heading: string;
    description: string;
    features: FeatureItemConfig[];
  };
  contactSection: ContactSectionConfig;
}

export const MATCHDAY_PAGE: MatchDayPageConfig = {
  hero: {
    title: "Donde se gana el día de partido",
    description:
      "La plataforma completa para estadísticas, gestión de equipos y mercado de fichajes en el fútbol.",
    image: {
      width: 1440,
      height: 256,
      src: ARTWORK,
      alt: "Artwork",
    },
  },
  heroBgImages: [
    {
      src: HERO_BG_LAYER_SRC,
      width: 512,
      height: 256,
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
    { label: "Empezar Ahora", variant: "success" },
    { label: "Ver Demo", variant: "outline" },
  ],
  intro: {
    heading: "Plataforma todo en uno para jugadores, equipos y clubes",
    paragraph:
      "Desde las estadísticas del partido hasta el próximo fichaje, Match Day es tu control total para analizar, entrenar y gestionar tu equipo o tu carrera.",
  },
  featuresSection: {
    heading:
      "Todo lo que necesitas, antes, durante y después del día de partido",
    description: "Fácil, rápido y todo desde una misma plataforma.",
    features: [
      {
        text: "Estadísticas en tiempo real",
        iconSrc: listItemImage,
        iconAlt: "Icono",
      },
      {
        text: "Mercado de fichajes integrado",
        iconSrc: listItemImage,
        iconAlt: "Icono",
      },
      {
        text: "Gestión completa de equipos",
        iconSrc: listItemImage,
        iconAlt: "Icono",
      },
    ],
  },
  contactSection: {
    title: "Contacta con nosotros",
    subtitle: "¿Listo para revolucionar tu experiencia futbolística?",
    description:
      "Estamos aquí para ayudarte. Cuéntanos tu caso y te responderemos en menos de 24 horas.",
    highlights: [
      "Soporte en español e inglés",
      "Respuesta media en 24h",
      "Equipo técnico y comercial",
    ],
    info: {
      address: "Calle Ejemplo 123, Madrid, España",
      phone: "+34 123 456 789",
      email: "hola@matchday.com",
    },
    mapImageUrl:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
  },
};
