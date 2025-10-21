import type { FC, ReactNode } from "react";
import { Heading, headingVariants, Text, textVariants } from "../atoms";
import type { VariantProps } from "class-variance-authority";

interface HeadlineSectionTemplateProps
  extends VariantProps<typeof headingVariants> {
  title?: string;
  description?: string;
  children: ReactNode;
  bg?: string;
  textColor?: VariantProps<typeof textVariants>["color"];
}
const HeadlineSectionTemplate: FC<HeadlineSectionTemplateProps> = ({
  title,
  description,
  children,
  bg = "bg-white",
  color,
  textColor = "default",
}) => {
  return (
    <article className={`${bg} w-full p-6`}>
      <section className="max-w-6xl mx-auto">
        {title && (
          <aside className="flex flex-col gap-8 px-4 ">
            {title && (
              <Heading as="h2" level="h1" align="center" color={color}>
                {title}
              </Heading>
            )}

            {description && (
              <Text align="center" size="lg" color={textColor}>
                {description}
              </Text>
            )}
          </aside>
        )}
        <article className={`py-6 sm:py-6 flex flex-col md:flex-row gap-6`}>
          {children}
        </article>
      </section>
    </article>
  );
};

export { HeadlineSectionTemplate };
