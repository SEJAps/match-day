import type { FC, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { Button, Heading, Text, List, ListItem } from "../atoms";

/**
 * Card Component - Atomic Design Level: Molecule
 *
 * Componente de tarjeta que combina múltiples átomos (Heading, Text, List, Button)
 * para formar una unidad funcional compleja. Ahora usa átomos reutilizables.
 */

interface CardProps {
  bg?: string;
  bgBtn?: string;
  title: string;
  text: string;
  items?: string[];
  label: string;
  icon?: ReactNode;
  /**
   * Índice del elemento en el listado (0-based). Si es impar (index % 2 === 1),
   * la tarjeta móvil ocupará el 100% del ancho.
   */
  index?: number;
  /**
   * Forzar comportamiento impar de manera explícita (tiene prioridad sobre index).
   */
  isOdd?: boolean;
  /**
   * Fuerza que en móvil la tarjeta ocupe 100% del ancho (tiene prioridad sobre index/isOdd).
   */
  mobileFullWidth?: boolean;
}

const Card: FC<CardProps> = ({
  bg,
  bgBtn,
  title,
  text,
  items,
  label,
  icon,
  index,
  isOdd,
  mobileFullWidth,
}) => {
  const odd =
    typeof isOdd === "boolean"
      ? isOdd
      : typeof index === "number"
        ? index % 2 === 1
        : false;
  // Prioridad: prop explícita > heurística por index impar.
  const autoFullMobile =
    typeof mobileFullWidth === "boolean" ? mobileFullWidth : odd;
  return (
    <>
      {/* Desktop View */}
      <article className="hidden sm:flex flex-col">
        <header className="flex flex-col items-center sm:items-start gap-4 mb-2 pt-14">
          <div className="flex items-center sm:ml-8">{icon}</div>
          <Heading
            as="h3"
            level="h4"
            weight="bold"
            className="w-full text-center sm:text-left sm:pl-8"
          >
            {title}
          </Heading>
        </header>

        <Text size="base" className="mx-8 mr-4">
          {text}
        </Text>

        {items && items.length > 0 && (
          <List
            variant="disc"
            spacing="sm"
            padding="lg"
            className="flex flex-col italic my-4"
          >
            {items.map((item) => (
              <ListItem key={item} size="sm" color="italic">
                {item}
              </ListItem>
            ))}
          </List>
        )}

        <footer className="mb-14 flex-1 flex items-end px-8">
          <Button
            variant="primary"
            size="default"
            className="px-4 text-xs"
            style={{
              background: bgBtn,
              color: "white",
            }}
          >
            {label}
          </Button>
        </footer>
      </article>
      {/* Mobile View */}
      <article
        className={cn(
          "flex flex-col sm:hidden gap-2 rounded-2xl overflow-visible",
          // Estilo moderno sutil
          "border border-black/10 shadow-sm hover:shadow-md active:scale-[0.99] transition will-change-transform",
          autoFullMobile && "w-full",
        )}
        style={{
          background: bg || "white",
        }}
        data-odd={odd ? "true" : "false"}
      >
        <header className="flex flex-col items-center sm:items-start gap-4 mb-2 pt-6">
          <div className="flex items-center">{icon}</div>
          <Heading
            as="h3"
            level="h2"
            weight="bold"
            className="w-full text-center sm:text-left px-4"
          >
            {title}
          </Heading>
        </header>

        <Text
          className={cn(
            "m-4 leading-snug",
            // En móvil, truncar a 2 líneas; en sm+ mostrar completo
            "line-clamp-2 sm:line-clamp-none",
          )}
        >
          {text}
        </Text>

        {/* Lista oculta en mobile */}

        <footer className="mt-auto px-4 pb-4">
          <Button
            variant="primary"
            size="default"
            className="w-full sm:w-auto px-4"
            style={{
              background: bgBtn,
              color: "white",
            }}
          >
            {label}
          </Button>
        </footer>
      </article>
    </>
  );
};

export default Card;
export type { CardProps };
