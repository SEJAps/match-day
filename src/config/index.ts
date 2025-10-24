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
  default: "text-dark",
  muted: "text-muted",
  light: "text-light",
  dark: "text-dark",
  white: "text-white",
  primary: "text-primary",
  secondary: "text-secondary",
  danger: "text-danger",
  warning: "text-warning",
  info: "text-info",
  success: "text-success",
};
const BUTTONS_BACKGROUND = {
  default: "bg-dark",
  muted: "bg-muted",
  light: "bg-light",
  dark: "bg-dark",
  white: "bg-white",
  primary: "bg-primary",
  secondary: "bg-secondary",
  danger: "bg-danger",
  warning: "bg-warning",
  success: "bg-success",
  info: "text-info",
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
