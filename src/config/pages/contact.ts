import type { HeroBg, ContactSectionConfig } from "@/config/types";
import HERO_BG_LAYER_SRC from "@/assets/images/png/hero-bg-layer.png";
import HERO_BG_MAIN_SRC from "@/assets/images/png/hero-bg-main.png";

export interface ContactPageConfig {
  hero: {
    title: string;
    description: string;
  };
  heroBgImages: HeroBg[];
  heroCtas?: { label: string; variant: "success" | "outline" }[];
  contactSection: ContactSectionConfig;
}

export const CONTACT_PAGE: ContactPageConfig = {
  hero: {
    title: "Hablemos",
    description: "Cuéntanos en qué podemos ayudarte",
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
  heroCtas: [{ label: "Escribir ahora", variant: "success" }],
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
