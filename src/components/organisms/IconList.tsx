import type { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { List, ListItem, Image } from "@/components/atoms";
import type { ListItemProps } from "@/components/atoms/ListItem/ListItem";

export interface IconListItem {
  text: ReactNode;
  className?: string;
  iconSrc?: string;
  iconAlt?: string;
  iconNode?: ReactNode;
}

interface IconListProps {
  items: IconListItem[];
  spacing?: "none" | "sm" | "base" | "lg" | "xl";
  padding?: "none" | "sm" | "base" | "lg" | "xl";
  listClassName?: string;
  itemClassName?: string;
  iconSize?: number; // px
  align?: "start" | "center";
  iconClassName?: string;
  itemColor?: ListItemProps["color"];
}

const IconList: FC<IconListProps> = ({
  items,
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

  return (
    <List
      variant={anyIcon ? "none" : "disc"}
      spacing={spacing}
      padding={padding}
      className={cn("flex flex-col", listClassName)}
    >
      {items.map((item, idx) => (
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
      ))}
    </List>
  );
};

export default IconList;
