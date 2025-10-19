// Barrel principal de configuración
// Páginas estáticas (cards de Servicios)
export * from "./services-page";
// Tipos de configuración
export * from "./types";
// Configs de contenido por página
export * from "./pages/matchday";
export * from "./pages/players";
export * from "./pages/teams";
export * from "./pages/clubs";
export * from "./pages/contact";
// Páginas estáticas (contenido sin hero)
export * from "./pages/static/blog";
export * from "./pages/static/features";
export * from "./pages/static/help-center";
export * from "./pages/static/not-found";
export * from "./pages/static/prices";
export * from "./pages/static/privacy-policy";
export * from "./pages/static/services";
export * from "./pages/static/terms-of-service";
export * from "./pages/static/cookies";

const COLOR = {
  default: "text-[#333]",
  muted: "text-gray-300",
  light: "text-gray-300",
  dark: "text-[#333]",
  white: "text-white",
  primary: "text-green-300",
  secondary: "text-blue-300",
  danger: "text-red-300",
  warning: "text-yellow-300",
  info: "text-pink-300",
  success: "text-[#00BC7D]",
};
const BUTTONS_BACKGROUND = {
  default: "bg-gray-900",
  muted: "bg-gray-300",
  light: "bg-gray-300",
  dark: "bg-neutral-800",
  white: "bg-white",
  primary: "bg-green-300",
  secondary: "bg-blue-300",
  danger: "bg-red-300",
  warning: "bg-yellow-300",
  success: "bg-[#00BC7D]",
  info: "text-pink-300",
};
const WEIGHT = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const TITLE_LEVEL = {
  h1: "text-4xl md:text-5xl lg:text-6xl leading-tight",
  h2: "text-3xl md:text-4xl lg:text-5xl leading-tight",
  h3: "text-2xl md:text-3xl lg:text-4xl leading-snug",
  h4: "text-xl md:text-2xl lg:text-3xl leading-snug",
  h5: "text-lg md:text-xl lg:text-2xl leading-normal",
  h6: "text-base md:text-lg lg:text-xl leading-normal",
};
const TEXT_LEVEL = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  xxl: "text-2xl",
};
const ALIGN = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export { COLOR, WEIGHT, ALIGN, TITLE_LEVEL, TEXT_LEVEL, BUTTONS_BACKGROUND };
