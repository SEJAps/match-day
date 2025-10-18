import type { ContactSectionConfig } from "@/config/types";

export interface ContactPageConfig {
  hero: {
    title: string;
    subtitle?: string;
    description: string;
  };
  heroCtas?: { label: string; variant: "success" | "outline" }[];
  contact: ContactSectionConfig;
}

export const CONTACT_PAGE: ContactPageConfig = {
  hero: {
    title: "Hablemos",
    subtitle: "¿Cuéntanos en qué podemos ayudarte?",
    description: "",
  },
  heroCtas: [{ label: "Escribir ahora", variant: "success" }],
  contact: {
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
