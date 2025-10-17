import type { LegalPageConfig } from "@/config/types";

export const COOKIES_POLICY_STATIC_PAGE: LegalPageConfig = {
  updatedAt: "2025-09-01",
  sections: [
    {
      heading: "Qué son las cookies",
      content: [
        "Pequeños archivos de texto que ayudan a recordar tus preferencias y mejorar tu experiencia.",
      ],
    },
    {
      heading: "Tipos de cookies que usamos",
      content: [
        "Estrictamente necesarias (autenticación, seguridad)",
        "De rendimiento (analítica anónima)",
        "De funcionalidades (preferencias de idioma)",
      ],
    },
    {
      heading: "Cómo gestionar tus cookies",
      content: [
        "Puedes aceptar, rechazar o ajustar categorías desde el banner de consentimiento.",
        "También puedes borrar cookies desde la configuración de tu navegador.",
      ],
    },
  ],
};
