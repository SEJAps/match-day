import iconPlayers from "@/assets/images/svg/jugadores-camiseta.svg";
import iconeTeams from "@/assets/images/svg/equipos.svg";
import iconClubs from "@/assets/images/svg/clubes.svg";

type ServiceCardForEveryNeed = {
  title: string;
  text: string;
  items: string[];
  bg: string;
  bgBtn?: string;
  textBtn: string;
  customColor?: string;
  icon: string;
};

const SERVICES_FOR_EVERY_NEED: ServiceCardForEveryNeed[] = [
  {
    title: "Jugadores",
    text: "Accede a tus estadísticas individuales, crea un perfil profesional y entra en el radar de otros equipos a través del marketplace. La herramienta ideal para destacar y encontrar nuevas oportunidades.",
    items: [
      "Perfil de jugador completo",
      "Estadísticas personales",
      "Acceso al mercado de fichajes",
      "Seguimiento de rendimiento",
    ],
    bg: "bg-primary-card",
    bgBtn: "bg-[#10B981]",
    textBtn: "Para Jugadores",
    customColor: "text-white",
    icon: iconPlayers,
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
    bg: "bg-secondary-card",
    bgBtn: "bg-[#3B82F6]",
    textBtn: "Para Equipos",
    customColor: "text-white",
    icon: iconeTeams,
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
    bg: "bg-tertiary-card",
    bgBtn: "bg-[#A855F7]",
    textBtn: "Para Clubes",
    customColor: "text-white",
    icon: iconClubs,
  },
];

export {
  SERVICES_FOR_EVERY_NEED,
  type ServiceCardForEveryNeed,
  iconPlayers,
  iconeTeams,
  iconClubs,
};
