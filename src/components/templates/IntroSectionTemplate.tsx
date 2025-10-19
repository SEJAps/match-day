import type { FC, ReactNode } from "react";
import { IntroSection } from "../organisms/IntroSection";

interface IntroSectionTemplateProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  cols?: boolean;
  rows?: boolean;
  alignItems?: "center" | "start" | "end" | "baseline" | "stretch";
  justifyContent?: "center" | "start" | "end" | "between" | "around" | "evenly";
  gap?: "4" | "6" | "8" | "12" | "16";
  size?: "auto" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "container";
}

const IntroSectionTemplate: FC<IntroSectionTemplateProps> = ({
  title,
  description,
  children,
  footer,
  cols = true,
  rows = false,
  gap = "8",
  alignItems = "center",
  justifyContent = "center",
  size,
}) => {
  return (
    <article
      className={`flex ${cols && "flex-col"} ${rows && "flex-row"} items-${alignItems} justify-${justifyContent} gap-${gap}`}
    >
      <IntroSection
        title={title}
        description={description}
        footer={footer}
        size={size}
        gap={gap}
      >
        {children}
      </IntroSection>
    </article>
  );
};

export { IntroSectionTemplate };
