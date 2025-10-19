import type { ElementType, FC } from "react";
import { Heading, Text } from "../atoms";

type SectionHeaderProps = {
  title?: string;
  asTitle?: ElementType;
  alignTitle?: "left" | "center" | "right" | null | undefined;
  levelTitle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
  description?: string;
  alignDescription?: "left" | "center" | "right" | null | undefined;
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title = "Section Title",
  asTitle = "h1",
  levelTitle = "h1",
  alignTitle,
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eius!",
  alignDescription = "center",
}) => {
  return (
    <>
      <Heading as={asTitle} level={levelTitle} align={alignTitle}>
        {title}
      </Heading>
      <Text align={alignDescription}>{description}</Text>
    </>
  );
};
export { SectionHeader };
