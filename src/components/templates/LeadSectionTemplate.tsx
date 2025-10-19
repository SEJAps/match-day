import type { FC, ReactNode } from "react";
import { Heading, headingVariants, Text, textVariants } from "../atoms";
import type { VariantProps } from "class-variance-authority";
interface LeadSectionTemplateProps
  extends VariantProps<typeof headingVariants> {
  title?: string;
  description?: string;
  children: ReactNode;
  bg?: string;
  textColor?: VariantProps<typeof textVariants>["color"];
}

const LeadSectionTemplate: FC<LeadSectionTemplateProps> = ({
  title,
  description,
  children,
  bg = "bg-white",
  color,
  textColor = "default",
}) => {
  return (
    <article className={`${bg} w-full py-12 sm:py-24`}>
      <section className="max-w-6xl mx-auto">
        <aside className="flex flex-col gap-8 px-4 py-6">
          <Heading as="h2" level="h1" align="center" color={color}>
            {title}
          </Heading>
          <Text align="center" size="lg" color={textColor}>
            {description}
          </Text>
        </aside>
        <article className="py-6 sm:py-12">{children}</article>
      </section>
    </article>
  );
};
export { LeadSectionTemplate };
