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
  | "check";

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
  spacing = "base",
  padding = "base",
  listClassName,
  itemClassName,
  iconSize = 20,
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
        className={`p-6 sm:p-6 min-h-34 max-w-80 md:min-w-96 mx-auto ${listClassName}`}
      >
        {items.map((item, idx) => (
          <ListItem
            key={idx}
            className={cn(
              "flex gap-3",
              align === "center" ? "items-center" : "items-start",
              itemClassName,
              item.className
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
        ))}
      </List>
    );
  }

  return (
    <List
      variant={variant}
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
