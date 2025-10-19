import type { VariantProps } from "class-variance-authority";
import { SectionHeader } from "../molecules/SectionHeader";
import { Slot } from "../molecules/Slot";
import type { textVariants } from "../atoms";

type IntroSectionProps = {
  title?: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  cols?: boolean;
  rows?: boolean;
  color?: VariantProps<typeof textVariants>["color"];
  gap?: "4" | "6" | "8" | "12" | "16";
  size?: "auto" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "container";
};

const IntroSection = ({
  title,
  description,
  children,
  footer,
  cols = true,
  rows = false,
  gap = "8",
  size = "auto",
  color,
}: IntroSectionProps) => {
  return (
    <section
      className={`flex ${cols && "flex-col"} ${rows && "flex-row"} gap-${gap} ${size === "container" ? "container" : `max-w-${size}`} mx-auto`}
    >
      <SectionHeader
        title={title}
        description={description}
        alignTitle="center"
        alignDescription="center"
        color={color}
      />
      {children && <Slot>{children}</Slot>}
      {footer && <footer className="flex gap-4 sm:gap-12">{footer}</footer>}
    </section>
  );
};
export { IntroSection };
