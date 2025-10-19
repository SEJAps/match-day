import type { FC, ReactNode } from "react";
import { Heading, Text } from "../atoms";
interface LeadSectionTemplateProps {
  title?: string;
  description?: string;
  children: ReactNode;
  bg?: string;
  color?: string;
  textColor?: string;
}

const LeadSectionTemplate: FC<LeadSectionTemplateProps> = ({
  title,
  description,
  children,
  bg = "bg-white",
  color = "text-neutral-700",
  textColor = "text-neutral-700",
}) => {
  return (
    <article className={`${bg} ${color} w-full py-12 sm:py-24`}>
      <section className="max-w-6xl mx-auto">
        <aside className="flex flex-col gap-8 px-4 py-6">
          <Heading
            as="h2"
            level="h1"
            align="center"
            className="px-4 text-neutral-600"
          >
            {title}
          </Heading>
          <Text align="center" size="lg" className={textColor}>
            {description}
          </Text>
        </aside>
        <article className="py-6 sm:py-12">{children}</article>
      </section>
    </article>
  );
};
export { LeadSectionTemplate };
