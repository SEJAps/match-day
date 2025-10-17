import type { LegalPageConfig } from "@/config/types";

export const TERMS_OF_SERVICE_STATIC_PAGE: LegalPageConfig = {
  updatedAt: "2025-09-01",
  sections: [
    {
      heading: "Uso del servicio",
      content: [
        "Acepte los términos para utilizar MatchDay.",
      ],
    },
    {
      heading: "Limitación de responsabilidad",
      content: [
        "MatchDay no será responsable por daños indirectos o consecuentes.",
      ],
    },
    {
      heading: "Cambios en los términos",
      content: [
        "Podemos actualizar estos términos. Te notificaremos con antelación.",
      ],
    },
    {
      heading: "Cuenta y seguridad",
      content: [
        "El usuario es responsable de mantener la confidencialidad de sus credenciales.",
      ],
    },
    {
      heading: "Uso aceptable",
      content: [
        "Quedan prohibidas actividades que afecten la disponibilidad o integridad del servicio.",
      ],
    },
  ],
};
