import { cva } from "class-variance-authority";

/**
 * ListItem Variants - CVA Configuration
 *
 * Define las variantes de estilo para el componente ListItem.
 * Tamaños, pesos y colores para elementos de lista.
 */

export const listItemVariants = cva(
  // Base classes
  "font-sans leading-relaxed",
  {
    variants: {
      size: {
        xs: "text-xs",
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
      },
      color: {
        default: "text-gray-900",
        muted: "text-gray-600",
        light: "text-gray-400",
        white: "text-white",
        primary: "text-green-600",
        secondary: "text-blue-600",
        italic: "text-gray-700 italic",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
      color: "default",
    },
  },
);
