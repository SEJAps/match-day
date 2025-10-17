import type { FC, ReactNode, CSSProperties } from "react";
import { cn } from "@/utils/cn";
import { Image } from "@/components/atoms";
import type { ImageProps } from "@/components/atoms/Image/Image";

export type PictureImage = ImageProps & {
  id?: string;
};

export interface PictureProps {
  images: PictureImage[];
  className?: string; // clases del contenedor <picture>
  itemClassName?: string; // clases aplicadas a cada imagen
  absolute?: boolean; // si true, cada imagen se posiciona absoluta y rellena el contenedor
  overlay?: ReactNode; // capa opcional (degradados, patrones, etc.)
  style?: CSSProperties;
  role?: string;
}

/**
 * Picture - Organism
 * Componente para renderizar múltiples imágenes apiladas dentro de un <picture>.
 * Útil para fondos del hero con varias capas (e.g., capas background importadas) y un overlay.
 */
const Picture: FC<PictureProps> = ({
  images,
  className,
  itemClassName,
  absolute = false,
  overlay,
  style,
  role,
}) => {
  return (
    <picture
      role={role}
      className={cn(className, absolute && "absolute top-0 w-full h-full")}
      style={style}
    >
      {images.map((img, idx) => (
        <Image
          key={img.id ?? `${img.src}-${idx}`}
          {...img}
          className={cn(
            absolute && "absolute w-full h-full",
            itemClassName,
            img.className,
          )}
          fit={img.fit ?? (absolute ? "cover" : undefined)}
          loading={img.loading ?? (idx === 0 ? "eager" : "lazy")}
        />
      ))}
      {overlay}
    </picture>
  );
};

export default Picture;
