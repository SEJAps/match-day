import type { FC, ReactNode, CSSProperties } from "react";
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
  /**
   * Cuando variant = "image", URL de la imagen a usar como marcador (list-style-image)
   */
  markerSrc?: string;
  style?: CSSProperties;
}

const List: FC<ListProps> = ({
  children,
  ordered = false,
  variant,
  spacing,
  padding,
  className,
  markerSrc,
  style,
  ...props
}) => {
  const Component = ordered ? "ol" : "ul";
  const isImageMarker = variant === "image";
  // Merge styles to support list-style-image without breaking external styles
  const mergedStyle = {
    ...style,
    ...(isImageMarker && markerSrc
      ? { listStyleImage: `url(${markerSrc})` }
      : undefined),
  } as React.CSSProperties;

  return (
    <Component
      className={`list-none list-inside ${cn(listVariants({ variant, spacing, padding }), className)} `}
      {...props}
      style={mergedStyle}
    >
      {children}
    </Component>
  );
};

export { List };
export type { ListProps };
