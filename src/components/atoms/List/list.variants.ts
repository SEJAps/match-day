import { cva } from "class-variance-authority";

/**
 * List Variants - CVA Configuration
 *
 * Define las variantes de estilo para el componente List.
 * Tipos de marcadores, espaciado y padding disponibles.
 */

export const listVariants = cva(
  // Base classes
  "w-full",
  {
    variants: {
      variant: {
        disc: "list-disc list-inside",
        decimal: "list-decimal list-inside",
        none: "list-none",
        square: "list-square list-inside",
        circle: "list-circle list-inside",
        dash: "list-none [&>li]:before:content-['-'] [&>li]:before:mr-2",
        check:
          "list-none [&>li]:before:content-['✓'] [&>li]:before:mr-2 [&>li]:before:text-green-600",
        image: "list-inside", // marcador por imagen manejado vía style.listStyleImage
      },
      spacing: {
        none: "space-y-0",
        sm: "space-y-1",
        base: "space-y-2",
        lg: "space-y-3",
        xl: "space-y-4",
      },
      padding: {
        none: "p-0",
        sm: "pl-4",
        base: "pl-6",
        lg: "pl-8",
        xl: "pl-12",
      },
    },
    defaultVariants: {
      variant: "disc",
      spacing: "sm",
      padding: "base",
    },
  },
);
