import type { FC, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../../utils/cn";
import { listItemVariants } from "./listItem.variants";

/**
 * ListItem Component - Atomic Design Level: Atom
 *
 * Componente de elemento de lista individual.
 * Elemento básico para items dentro de listas ordenadas o no ordenadas.
 */

interface ListItemProps extends VariantProps<typeof listItemVariants> {
  children: ReactNode;
  className?: string;
}

const ListItem: FC<ListItemProps> = ({
  children,
  size,
  weight,
  color,
  className,
  ...props
}) => {
  return (
    <li
      className={cn(listItemVariants({ size, weight, color }), className)}
      {...props}
    >
      {children}
    </li>
  );
};

export { ListItem };
export type { ListItemProps };
