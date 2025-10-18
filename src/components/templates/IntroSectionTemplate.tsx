import { Heading, Text } from "../atoms";
import type { FC, ReactNode } from "react";

interface IntroSectionTemplateProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

const IntroSectionTemplate: FC<IntroSectionTemplateProps> = ({
  title,
  description,
  children,
  footer,
}) => {
  return (
    <article className="flex flex-col items-center justify-center gap-y-6">
      <section className="max-w-4xl flex flex-col gap-8 mx-auto">
        <Heading as="h1" level="h1" align="center" className="px-4">
          {title}
        </Heading>
        <Text align="center" size={"xl"} color="white" className="px-4">
          {description}
        </Text>
        {children}
        <footer className="flex gap-4 sm:gap-12">{footer}</footer>
      </section>
    </article>
  );
};

export { IntroSectionTemplate };
