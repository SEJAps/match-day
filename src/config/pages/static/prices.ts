import type { PricingConfig } from "@/config/types";

export const PRICES_STATIC_PAGE: PricingConfig = {
  intro: {
    title: "Planes y precios",
    description: "Elige el plan que mejor se adapte a tu club.",
  },
  tiers: [
    {
      name: "Starter",
      monthlyPrice: "Free",
      description: "Para comenzar a probar la plataforma",
      features: ["1 equipo", "Hasta 10 jugadores", "Informes básicos"],
      ctaLabel: "Crear cuenta",
    },
    {
      name: "Pro",
      monthlyPrice: 29,
      description: "Para clubs en crecimiento",
      features: [
        "Hasta 5 equipos",
        "Jugadores ilimitados",
        "Análisis avanzados",
      ],
      ctaLabel: "Probar 14 días",
      mostPopular: true,
    },
    {
      name: "Elite",
      monthlyPrice: 99,
      description: "Para organizaciones y academias",
      features: [
        "Equipos ilimitados",
        "Integraciones y API",
        "Soporte prioritario",
      ],
      ctaLabel: "Contactar ventas",
    },
  ],
  notes: [
    "Precios en EUR, impuestos no incluidos.",
    "Descuentos anuales disponibles bajo consulta.",
  ],
};
