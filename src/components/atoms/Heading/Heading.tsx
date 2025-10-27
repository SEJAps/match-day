import type { FC, ReactNode, ElementType } from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { headingVariants } from "./heading.variants";

/**
 * Heading Component - Atomic Design Level: Atom
 *
 * Componente de encabezado reutilizable con múltiples niveles y estilos.
 * Elemento básico e indivisible para títulos e subtítulos.
 */

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  color?:
    | "dark"
    | "default"
    | "muted"
    | "light"
    | "white"
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "info"
    | "success"
    | null
    | undefined;
}

const Heading: FC<HeadingProps> = ({
  children,
  as: Component = "h1",
  level,
  weight,
  align,
  color,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(
        headingVariants({ level, color, weight, align }),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Heading };
export type { HeadingProps };
