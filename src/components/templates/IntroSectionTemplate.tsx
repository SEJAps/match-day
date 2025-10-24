import type { FC, ReactNode } from "react";
import { IntroSection } from "../organisms/IntroSection";
import type { VariantProps } from "class-variance-authority";
import type { textVariants } from "../atoms";

interface IntroSectionTemplateProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  cols?: boolean;
  rows?: boolean;
  bg?: string;
  color?: VariantProps<typeof textVariants>["color"];
  alignItems?: "center" | "start" | "end" | "baseline" | "stretch";
  justifyContent?: "center" | "start" | "end" | "between" | "around" | "evenly";
  gap?: "4" | "6" | "8" | "12" | "16";
  size?: "auto" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "7xl" | "container";
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
  color = "white",
  bg = "bg-transparent",
  size,
}) => {
  return (
    <article
      className={`${bg} flex ${cols && "flex-col"} ${rows && "flex-row"} items-${alignItems} justify-${justifyContent} gap-${gap} max-w-${size} mx-auto w-full px-4 `}
    >
      <IntroSection
        title={title}
        description={description}
        footer={footer}
        gap={gap}
        color={color}
      >
        {children}
      </IntroSection>
    </article>
  );
};

export { IntroSectionTemplate };
