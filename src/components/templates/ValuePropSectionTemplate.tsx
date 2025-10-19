import type { FC, ReactNode } from "react";
import { Heading, Text } from "../atoms";

interface ValuePropSectionTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
}

const ValuePropSectionTemplate: FC<ValuePropSectionTemplateProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <article className="flex flex-col items-center justify-center gap-y-6 py-20">
      <section className="max-w-4xl flex flex-col gap-12 mx-auto">
        <Heading as="h1" level="h1" align="center" color="white">
          {title}
        </Heading>
        <Text align="center" size="xl" color="white" className="px-4">
          {description}
        </Text>
        {children}
      </section>
    </article>
  );
};

export { ValuePropSectionTemplate };
