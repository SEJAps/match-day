import type { LegalPageConfig } from "@/config/types";

export const PRIVACY_POLICY_STATIC_PAGE: LegalPageConfig = {
  updatedAt: "2025-09-01",
  sections: [
    {
      heading: "Introducción",
      content: ["Esta política describe cómo tratamos tus datos en MatchDay."],
    },
    {
      heading: "Datos que recopilamos",
      content: [
        "Información de cuenta (nombre, email)",
        "Datos de uso (métricas agregadas)",
      ],
    },
    {
      heading: "Tus derechos",
      content: ["Acceso, rectificación y supresión de datos conforme a GDPR."],
    },
    {
      heading: "Bases legales del tratamiento",
      content: [
        "Consentimiento, ejecución de contrato e interés legítimo según corresponda.",
        "Solo conservamos los datos el tiempo necesario para cada finalidad.",
      ],
    },
    {
      heading: "Transferencias internacionales",
      content: [
        "Cuando sea necesario, aplicamos cláusulas contractuales tipo y medidas adicionales para proteger tus datos.",
      ],
    },
    {
      heading: "Seguridad",
      content: [
        "Controles de acceso, cifrado en tránsito y en reposo, y auditorías periódicas.",
      ],
    },
  ],
};
