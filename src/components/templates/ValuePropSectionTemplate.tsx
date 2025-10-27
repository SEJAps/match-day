import type { FC, ReactNode } from "react";
import { Heading, Text } from "../atoms";

interface ValuePropSectionTemplateProps {
  title?: string;
  description?: string;
  children: ReactNode;
}

const ValuePropSectionTemplate: FC<ValuePropSectionTemplateProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article className="container flex flex-col gap-12 mx-auto py-20">
      {title && title.length > 0 && (
        <Heading as="h1" level="h1" align="center" color="white">
          {title}
        </Heading>
      )}
      {description && description.length > 0 && (
        <Text align="center" size="xl" color="white" className="px-4">
          {description}
        </Text>
      )}

      <section>{children}</section>
    </article>
  );
};

export { ValuePropSectionTemplate };
