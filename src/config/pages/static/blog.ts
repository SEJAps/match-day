import type { BlogConfig } from "@/config/types";

export const BLOG_STATIC_PAGE: BlogConfig = {
  intro: {
    title: "Blog MatchDay",
    description: "Historias, novedades y análisis del fútbol moderno.",
    paragraphs: [
      "Bienvenido a nuestro blog. Aquí compartimos ideas y aprendizajes sobre cómo la tecnología impulsa el juego.",
    ],
  },
  featuredPosts: [
    {
      title: "Cómo medir el rendimiento real de un jugador",
      excerpt: "Un enfoque práctico con KPIs que sí importan.",
      href: "/blog/medir-rendimiento-jugador",
      tag: "Análisis",
      date: "2025-09-05",
    },
    {
      title: "De los datos a las decisiones en el banquillo",
      excerpt: "Casos reales de uso en equipos semi-profesionales.",
      href: "/blog/datos-a-decisiones",
      tag: "Casos de uso",
      date: "2025-08-12",
    },
    {
      title: "Videoanálisis: del resumen a la táctica",
      excerpt: "Qué mirar y cómo etiquetar para extraer valor.",
      href: "/blog/videoanalisis-tactico",
      tag: "Táctica",
      date: "2025-07-22",
    },
  ],
  categories: {
    title: "Categorías:",
    labels: ["analysis", "data", "tactics", "news"],
  },
};
