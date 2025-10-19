import { ALIGN, COLOR, TITLE_LEVEL, WEIGHT } from "@/config";
import { cva } from "class-variance-authority";
/**
 * Heading Variants - CVA Configuration
 *
 * Define las variantes de estilo para el componente Heading.
 * Niveles semánticos, pesos y alineaciones disponibles.
 */

const DEFAULT_VARIANTS_HEADINGS = {
  level: "h1",
  as: "h1",
  weight: "bold",
  align: "left",
  color: "dark",
} as const;

const headingVariants = cva(
  // Base classes
  "tracking-tight",
  {
    variants: {
      level: TITLE_LEVEL,
      color: COLOR,
      weight: WEIGHT,
      align: ALIGN,
    },
    defaultVariants: DEFAULT_VARIANTS_HEADINGS,
  },
);

export { headingVariants };
