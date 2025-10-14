import { NavLink } from "react-router";
import type { FC } from "react";
import { Logo } from "../atoms";

/**
 * LogoBrand Component - Atomic Design Level: Molecule
 *
 * Molécula que combina el átomo Logo con funcionalidad de navegación.
 * Permite configurar el comportamiento de navegación y las props del logo.
 */

// Esquemas de colores predefinidos para LogoBrand
const colorSchemes = {
  default: {
    // Colores por defecto (fondo oscuro solicitado)
    liveFill: "#F2F7F9",
    liveStroke: "#10B981",
    liveCircleFill: "#0F6E5D",
    fieldFill: "#0F6E5D",
    backgroundFill: "#0D2128",
    detailsFill: "#E8F5F3",
    shadowsFill: "#27414B",
    textFill: "#F2F7F9",
    textStroke: "#10B981",
    outlineFill: "#2E5664",
  },
  brandDark: {
    // Preset explícito con los colores por defecto actuales
    liveFill: "#F2F7F9",
    liveStroke: "#10B981",
    liveCircleFill: "#0F6E5D",
    fieldFill: "#0F6E5D",
    backgroundFill: "#0D2128",
    detailsFill: "#E8F5F3",
    shadowsFill: "#27414B",
    textFill: "#F2F7F9",
    textStroke: "#10B981",
    outlineFill: "#2E5664",
  },
  light: {
    liveFill: "#f9fafb", // light
    liveStroke: "#10b981", // custom
    liveCircleFill: "#1f2937", // dark
    fieldFill: "#1f2937", // dark
    backgroundFill: "#EFEAE1",
    detailsFill: "#E8F5F3",
    shadowsFill: "#0D2128",
    textFill: "#000000",
    textStroke: "#10B981",
    outlineFill: "#172930",
  },
  warning: {
    liveFill: "#fef3c7", // light
    liveStroke: "#f59e0b", // custom
    liveCircleFill: "#92400e", // dark
    fieldFill: "#92400e", // dark
    backgroundFill: "#EFEAE1",
    detailsFill: "#E8F5F3",
    shadowsFill: "#0D2128",
    textFill: "#000000",
    textStroke: "#10B981",
    outlineFill: "#172930",
  },
  error: {
    liveFill: "#fee2e2", // light
    liveStroke: "#ef4444", // custom
    liveCircleFill: "#991b1b", // dark
    fieldFill: "#991b1b", // dark
    backgroundFill: "#EFEAE1",
    detailsFill: "#E8F5F3",
    shadowsFill: "#0D2128",
    textFill: "#000000",
    textStroke: "#10B981",
    outlineFill: "#172930",
  },
  success: {
    liveFill: "#d1fae5", // light
    liveStroke: "#10b981", // custom
    liveCircleFill: "#065f46", // dark
    fieldFill: "#065f46", // dark
    backgroundFill: "#EFEAE1",
    detailsFill: "#E8F5F3",
    shadowsFill: "#0D2128",
    textFill: "#000000",
    textStroke: "#10B981",
    outlineFill: "#172930",
  },
  brandLight: {
    // Preset basado en el SVG original de fondo claro
    liveFill: "#F2F7F9",
    liveStroke: "#10B981",
    liveCircleFill: "#0F6E5D",
    fieldFill: "#0F6E5D",
    backgroundFill: "#EFEAE1",
    detailsFill: "#E8F5F3",
    shadowsFill: "#0D2128",
    textFill: "#F2F7F9",
    textStroke: "#10B981",
    outlineFill: "#172930",
  },
  dark: {
    // Fondo oscuro solicitado
    backgroundFill: "#0D2128",
    // Ajustes para buen contraste sobre fondo oscuro
    liveFill: "#F2F7F9",
    liveStroke: "#10B981",
    liveCircleFill: "#0F6E5D",
    fieldFill: "#0F6E5D",
    detailsFill: "#E8F5F3",
    // Sombras ligeramente más claras que el fondo para que se aprecien
    shadowsFill: "#27414B",
    textFill: "#F2F7F9",
    textStroke: "#10B981",
    outlineFill: "#2E5664",
  },
} as const;

type ColorScheme = keyof typeof colorSchemes;

interface LogoBrandProps {
  /** Ruta a la que navegar cuando se hace click en el logo */
  to?: string;
  /** Props para el componente Logo */
  logoProps?: Parameters<typeof Logo>[0];
  /** Si debe mostrar el logo como link navegable */
  navigable?: boolean;
  /** Clases CSS adicionales para el contenedor */
  className?: string;
  /** Esquema de colores predefinido */
  colorScheme?: ColorScheme;
}

const LogoBrand: FC<LogoBrandProps> = ({
  to = "/",
  logoProps,
  navigable = true,
  className = "inline-flex items-center justify-center",
  colorScheme = "default",
}) => {
  // Resolver colores: primero logoProps.colors, luego colorScheme, finalmente default
  const resolvedColors = logoProps?.colors || colorSchemes[colorScheme];

  const LogoComponent = (
    <Logo
      {...logoProps}
      size={logoProps?.size || { x: 169, y: 159 }}
      colors={resolvedColors}
    />
  );

  if (!navigable) {
    return <div className={className}>{LogoComponent}</div>;
  }

  return (
    <div className={className}>
      <NavLink to={to} aria-label="Ir a página principal">
        {LogoComponent}
      </NavLink>
    </div>
  );
};

export default LogoBrand;
export type { LogoBrandProps, ColorScheme };
