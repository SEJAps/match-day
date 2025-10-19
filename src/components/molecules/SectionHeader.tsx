import type { ElementType, FC } from "react";
import { Heading, Text, textVariants } from "../atoms";
import type { VariantProps } from "class-variance-authority";

type SectionHeaderProps = {
  title?: string;
  asTitle?: ElementType;
  alignTitle?: "left" | "center" | "right" | null | undefined;
  levelTitle?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
  description?: string;
  alignDescription?: "left" | "center" | "right" | null | undefined;
  color?: VariantProps<typeof textVariants>["color"];
};

const SectionHeader: FC<SectionHeaderProps> = ({
  title = "Section Title",
  asTitle = "h1",
  levelTitle = "h1",
  alignTitle,
  description = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, eius!",
  alignDescription = "center",
  color,
}) => {
  return (
    <>
      <Heading as={asTitle} level={levelTitle} align={alignTitle} color={color}>
        {title}
      </Heading>
      <Text align={alignDescription}>{description}</Text>
    </>
  );
};
export { SectionHeader };
