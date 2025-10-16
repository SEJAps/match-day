import type { FC, ReactNode } from "react";
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
}

const Card: FC<CardProps> = ({
  bg,
  bgBtn,
  title,
  text,
  items,
  label,
  icon,
}) => {
  return (
    <article
      className={`flex flex-col gap-2 rounded-2xl shadow-sm`}
      style={{
        background: bg || "white",
      }}
    >
      <header className="flex flex-col gap-4 mb-2 pt-14">
        <div className="flex items-center ml-8">{icon}</div>
        <Heading as="h4" level="h4" weight="bold" className="w-full pl-8">
          {title}
        </Heading>
      </header>

      <Text size="base" className="mx-8 mr-4">
        {text}
      </Text>

      {items && items.length > 0 && (
        <List variant="disc" spacing="sm" padding="lg" className="italic mb-4">
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
          className="w-full"
          style={{
            background: bgBtn,
            color: "white",
          }}
        >
          {label}
        </Button>
      </footer>
    </article>
  );
};

export default Card;
export type { CardProps };
