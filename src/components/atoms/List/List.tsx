import type { FC, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { listVariants } from "./list.variants";

/**
 * List Component - Atomic Design Level: Atom
 *
 * Componente de lista reutilizable con múltiples estilos y tipos.
 * Elemento básico para listas ordenadas, no ordenadas y de definición.
 */

interface ListProps extends VariantProps<typeof listVariants> {
  children: ReactNode;
  ordered?: boolean;
  className?: string;
}

const List: FC<ListProps> = ({
  children,
  ordered = false,
  variant,
  spacing,
  padding,
  className,
  ...props
}) => {
  const Component = ordered ? "ol" : "ul";

  return (
    <Component
      className={cn(listVariants({ variant, spacing, padding }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export { List };
export type { ListProps };
