import type { FC, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { textVariants } from "./text.variants";

/**
 * Text Component - Atomic Design Level: Atom
 *
 * Componente de texto reutilizable con múltiples tamaños y estilos.
 * Elemento básico para párrafos, descripciones y contenido textual.
 */

interface TextProps extends VariantProps<typeof textVariants> {
  children: ReactNode;
  className?: string;
}

const Text: FC<TextProps> = ({
  children,
  size,
  weight,
  color,
  align,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(textVariants({ size, weight, color, align }), className)}
      {...props}
    >
      {children}
    </p>
  );
};

export { Text };
export type { TextProps };
