import type { FC, ReactNode, ElementType } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { headingVariants } from "./heading.variants";

/**
 * Heading Component - Atomic Design Level: Atom
 *
 * Componente de encabezado reutilizable con múltiples niveles y estilos.
 * Elemento básico e indivisible para títulos y subtítulos.
 */

interface HeadingProps extends VariantProps<typeof headingVariants> {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

const Heading: FC<HeadingProps> = ({
  children,
  as: Component = "h2",
  level,
  weight,
  align,
  className,
  ...props
}) => {
  return (
    <Component
      className={cn(headingVariants({ level, weight, align }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Heading };
export type { HeadingProps };
