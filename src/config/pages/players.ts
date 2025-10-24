import type { HeroSection, HeroBg } from "@/config/types";
import type { PlanTier, PlanFeatureRow } from "@/types/plan";
import HERO_BG_LAYER_SRC from "@/assets/images/png/hero-bg-layer.png";
import HERO_BG_MAIN_SRC from "@/assets/images/png/hero-bg-main.png";
import FRAME_427 from "@/assets/images/png/frame-427318449.png";
import DESTACA_PERFIL from "@/assets/images/png/destaca-perfil.png";
import profilePalyer from "@/assets/images/svg/profile-player.svg";
import eye from "@/assets/images/svg/eye.svg";
import spaceShip from "@/assets/images/svg/space-ship.svg";
import soccerBall from "@/assets/images/svg/soccer-ball.svg";

type SectionsConfig = {
  title: string;
  items: string[];
  photo: string;
};
type Sections = {
  marketplace: SectionsConfig;
  professionalProfile: SectionsConfig;
  personalStatistics: SectionsConfig;
  subscriptionPlans: {
    title: string;
    tiers: PlanTier[];
    features: PlanFeatureRow[];
  };
};
export interface PlayersPageConfig {
  hero: HeroSection;
  sections: Sections;
  heroBgImages: HeroBg[];
  heroCtas?: { label: string; variant: "success" | "outline" }[];
}

export const PLAYERS_PAGE: PlayersPageConfig = {
  hero: {
    title: "¿Quieres que te vean?",
    description: "Haz que cada partido cuente.",
    list: {
      title: "Impulsa tu carrera desde hoy.",
      items: [
        { icon: profilePalyer, text: "Crea tu perfil gratis" },
        { icon: soccerBall, text: "Sube tus estadísticas" },
        { icon: eye, text: "Hazte visible para clubes" },
        { icon: spaceShip, text: "Empieza a destacar hoy" },
      ],
    },
  },
  sections: {
    marketplace: {
      title: "Conéctate con equipos a través del marketplace de fichajes.",
      items: [
        "Descubre qué equipos están buscando jugadores como tú.",
        "Postúlate a oportunidades reales o deja que los equipos te encuentren.",
        "Tú decides cuándo dar el salto y a dónde.",
      ],
      photo: FRAME_427,
    },
    professionalProfile: {
      title: "Destaca con tu perfil profesional incluyendo datos y vídeos.",
      items: [
        "Diseña un perfil completo a tu gusto.",
        "Sube clips de tus mejores jugadas, añade tus estadísticas destacadas y completa tu historial deportivo.",
        "Es tu carta de presentación para llamar la atención de equipos y ojeadores.",
      ],
      photo: DESTACA_PERFIL,
    },
    personalStatistics: {
      title: "Accede a tus estadísticas personales de cada partido.",
      items: [
        "Lleva un registro detallado de tu rendimiento: minutos jugados, goles, asistencias, recuperaciones, pases, y mucho más.",
        "Conoce tus puntos fuertes y detecta dónde puedes mejorar.",
        "Toda tu evolución, organizada y accesible en un clic.",
      ],
      photo: DESTACA_PERFIL,
    },
    subscriptionPlans: {
      title: "Planes de subscripción.",
      tiers: [
        {
          id: "basic",
          title: "Básico",
          price: "0€/año",
          description: "Para jugadores que quieren iniciarse en la plataforma.",
          cta: { label: "Empezar", variant: "view" },
        },
        {
          id: "pro",
          title: "Pro",
          price: "40€/año",
          description: "Para jugadores que quieren iniciarse en la plataforma.",
          cta: { label: "Empezar", variant: "success" },
        },
      ],
      features: [
        { label: "Perfil", values: {}, group: true },
        {
          label: "Creación de perfil (foto, posición, trayectoria...)",
          values: { basic: "x", pro: "v" },
        },
        {
          label:
            "Registro de estadísticas personales básicas (goles, minutos, partidos)",
          values: { basic: "10", pro: "25" },
        },
        {
          label: "Estadísticas avanzadas (pases, duelos, recuperaciones, etc.)",
          values: { basic: "Light", pro: "v" },
        },
        {
          label: "Carga de fotos y vídeos de mejores jugadas en el perfil",
          values: { basic: "10", pro: "25" },
        },
        { label: "Oportunidades y visibilidad", values: {}, group: true },
        {
          label: "Acceso al marketplace de fichajes",
          values: { basic: "x", pro: "v" },
        },
        {
          label: "Postularte a ofertas en el marketplace",
          values: { basic: "10", pro: "25" },
        },
        {
          label: "Ser encontrado por equipos (visibilidad prioritaria)",
          values: { basic: "Light", pro: "v" },
        },
        {
          label: "Recomendaciones personalizadas de equipos",
          values: { basic: "10", pro: "25" },
        },
        {
          label: "Opción de perfil privado",
          values: { basic: "Light", pro: "v" },
        },
        {
          label: "Contacto directo con clubes y entrenadores interesados",
          values: { basic: "10", pro: "25" },
        },
        { label: "Herramientas", values: {}, group: true },
        {
          label:
            "Descarga de informes en PDF/Excel para mostrar rendimiento (gráficas de evolución por partido y temporada)",
          values: { basic: "x", pro: "v" },
        },
        {
          label: "Soporte prioritario",
          values: { basic: "10", pro: "25" },
        },
      ],
    },
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
  heroCtas: [
    { label: "Reagistrate", variant: "success" },
    { label: "Ver planes", variant: "outline" },
  ],
};
