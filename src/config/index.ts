

const THEME_LOGO = {
  dark: "#333",
  ligth: "var(--blue-color)",
  customColor: "var(--pink)",
};

export type TCard = {
  title: string;
  text: string;
  items: string[];
  bg: string;
  bgBtn?: string;
  textBtn: string;
  customColor?: string;
}

const CARD_DESCRIPTIONS: TCard[] = [
  {
    title: "Jugadores",
    text: "Accede a tus estadísticas individuales, crea un perfil profesional y entra en el radar de otros equipos a través del marketplace. La herramienta ideal para destacar y encontrar nuevas oportunidades.",
    items: [
      "Perfil de jugador completo",
      "Estadísticas personales",
      "Acceso al mercado de fichajes",
      "Seguimiento de rendimiento",
    ],
    bg: "#ECFDF5",
    bgBtn: "#10B981",
    textBtn: "Para Jugadores",
    customColor: "#009900",
  },
  {
    title: "Equipos",
    text: "Organiza entrenamientos, crea alineaciones, registra estadísticas de partidos y gestiona convocatorias con una sola herramienta. Todo lo que tu cuerpo técnico necesita, desde el banquillo hasta el mercado de fichajes.",
    items: [
      "Gestión y estadísticas de plantilla",
      "Creación y organización de entrenamientos",
      "Búsqueda de jugadores en el mercado",
      "Análisis de rendimiento",
    ],
    bg: "#DBEAFE",
    bgBtn: "#3B82F6",
    textBtn: "Para Equipos",
    customColor: "#000099",
  },
  {
    title: "Clubs",
    text: "Gestiona todos tus equipos desde un solo panel. Organiza plantillas, analiza el rendimiento, potencia la estructura deportiva y refuerza cada categoría con el marketplace de fichajes.",
    items: [
      "Gestión multi-equipo",
      "Dashboard ejecutivo",
      "Mercado de fichajes avanzado",
      "Reportes personalizados",
    ],
    bg: "#F3E8FF",
    bgBtn: "#A855F7",
    textBtn: "Para Clubes",
    customColor: "#990000",
  },
];

export {
  THEME_LOGO,
  CARD_DESCRIPTIONS,
}