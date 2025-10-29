import type { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { List, ListItem } from "@/components/atoms";
import { Image } from "@/components/atoms";
import type { ListItemProps } from "@/components/atoms/ListItem/ListItem";

type MarkerVariant =
  | "disc"
  | "decimal"
  | "none"
  | "square"
  | "circle"
  | "dash"
  | "check"
  | "image";

type SpacingVariant = "none" | "sm" | "base" | "lg" | "xl";
type PaddingVariant = "none" | "sm" | "base" | "lg" | "xl";

export interface FeatureItem {
  text: ReactNode;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconNode?: ReactNode;
}

interface FeatureListProps {
  items: FeatureItem[];
  variant?: MarkerVariant; // marcador cuando no hay iconos
  /** URL de la imagen a usar como marcador cuando variant = "image" */
  markerSrc?: string;
  spacing?: SpacingVariant;
  padding?: PaddingVariant;
  listClassName?: string; // clases para la lista (ul/ol)
  itemClassName?: string; // clases para cada li
  iconSize?: number; // px
  align?: "start" | "center"; // alineación vertical del icono
  iconClassName?: string; // clases para el icono (Image o nodo)
  itemColor?: ListItemProps["color"]; // color del texto del item
}

const FeatureList: FC<FeatureListProps> = ({
  items,
  variant = "none",
  markerSrc,
  spacing = "base",
  padding = "none",
  listClassName,
  itemClassName,
  iconSize,
  align = "start",
  iconClassName,
  itemColor,
}) => {
  const anyIcon = items.some((it) => it.iconNode || it.iconSrc);

  if (anyIcon) {
    return (
      <List
        variant="none"
        spacing={spacing}
        padding={padding}
        className={`flex flex-col  mx-auto md:min-w-96 ${listClassName}`}
      >
        {items.map((item, idx) => {
          // Si es inpar al aderecha si es para izquierda
          return (
            <ListItem
              key={idx}
              className={cn(
                "flex gap-3 w-full",
                align === "center" ? "items-center" : "items-start",
                itemClassName,
                item.className,
              )}
              color={itemColor}
            >
              {item.iconNode ? (
                <span className={cn("shrink-0", iconClassName)} aria-hidden>
                  {item.iconNode}
                </span>
              ) : item.iconSrc ? (
                <Image
                  src={item.iconSrc}
                  alt={item.iconAlt ?? ""}
                  width={iconSize}
                  height={iconSize}
                  className={cn("shrink-0", iconClassName)}
                  fit="contain"
                />
              ) : null}
              <span className="leading-relaxed">{item.text}</span>
            </ListItem>
          );
        })}
      </List>
    );
  }

  return (
    <List
      variant={variant}
      markerSrc={markerSrc}
      spacing={spacing}
      padding={padding}
      className={listClassName}
    >
      {items.map((item, idx) => (
        <ListItem
          key={idx}
          className={cn(itemClassName, item.className)}
          color={itemColor}
        >
          {item.text}
        </ListItem>
      ))}
    </List>
  );
};

export default FeatureList;
