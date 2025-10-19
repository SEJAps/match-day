import { COLOR } from "@/config";
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
      color: COLOR,
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
