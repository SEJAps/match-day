import type { FC, ReactNode } from "react";
import LandingHeroTemplate, {
  type LandingHeroTemplateProps,
} from "./LandingHeroTemplate";

export interface LandingPageTemplateProps {
  hero: LandingHeroTemplateProps;
  children?: ReactNode; // secciones intermedias
  className?: string;
}

const LandingPageTemplate: FC<LandingPageTemplateProps> = ({
  hero,
  children,
  className,
}) => {
  return (
    <section className={className}>
      <LandingHeroTemplate {...hero} />
      {children}
    </section>
  );
};

export default LandingPageTemplate;
