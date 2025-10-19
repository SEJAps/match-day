import { cva } from "class-variance-authority";

/**
 * Text Variants - CVA Configuration
 *
 * Define las variantes de estilo para el componente Text.
 * Tamaños, pesos, colores y alineaciones disponibles.
 */

export const textVariants = cva(
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
        "2xl": "text-2xl",
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
        muted: "text-gray-400",
        light: "text-gray-400",
        white: "text-white",
        primary: "text-green-600",
        secondary: "text-blue-600",
        danger: "text-red-600",
        warning: "text-yellow-600",
        success: "text-[#00BC7D]",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
        justify: "text-justify",
      },
    },
    defaultVariants: {
      size: "base",
      weight: "normal",
      color: "default",
      align: "left",
    },
  },
);
