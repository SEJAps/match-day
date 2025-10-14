import { cva } from "class-variance-authority";

/**
 * Heading Variants - CVA Configuration
 *
 * Define las variantes de estilo para el componente Heading.
 * Niveles semánticos, pesos y alineaciones disponibles.
 */

export const headingVariants = cva(
  // Base classes
  "font-sans tracking-tight",
  {
    variants: {
      level: {
        h1: "text-4xl md:text-5xl lg:text-6xl leading-tight",
        h2: "text-3xl md:text-4xl lg:text-5xl leading-tight",
        h3: "text-2xl md:text-3xl lg:text-4xl leading-snug",
        h4: "text-xl md:text-2xl lg:text-3xl leading-snug",
        h5: "text-lg md:text-xl lg:text-2xl leading-normal",
        h6: "text-base md:text-lg lg:text-xl leading-normal",
      },
      weight: {
        light: "font-light",
        normal: "font-normal",
        medium: "font-medium",
        semibold: "font-semibold",
        bold: "font-bold",
        extrabold: "font-extrabold",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
    },
    defaultVariants: {
      level: "h2",
      weight: "bold",
      align: "left",
    },
  },
);
