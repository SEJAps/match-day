import profilePalyer from "@/assets/images/svg/profile-player.svg";
import eye from "@/assets/images/svg/eye.svg";
import spaceShip from "@/assets/images/svg/space-ship.svg";
import soccerBall from "@/assets/images/svg/soccer-ball.svg";
import ARTWORK from "@/assets/images/png/ARTWORK.png";

type HeroSection = {
  title: string;
  description: string;
  image?: {
    width?: number;
    height?: number;
    src: string;
    alt?: string;
  };
  list?: {
    title: string;
    items: {
      icon: string;
      text: string;
    }[];
  };
};

const YOU_WANT_TO_SEE: HeroSection = {
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
};

const WHERE_YOU_WIN_ON_GAME_DAY: HeroSection = {
  title: "Donde se gana el día de partido",
  description:
    "La plataforma completa para estadísticas, gestión de equipos y mercado de fichajes en el fútbol.",
  image: {
    width: 256,
    height: 256,
    src: ARTWORK,
    alt: "Artwork",
  },
};

export { YOU_WANT_TO_SEE, WHERE_YOU_WIN_ON_GAME_DAY, type HeroSection };
