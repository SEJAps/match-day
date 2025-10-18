import type { FC } from "react";
import { Heading, FeatureList } from "@/components";
import { Image } from "@/components/atoms";
import type { FeatureItem } from "@/components/organisms/FeatureList";

export interface FeatureTwoColumnTemplateProps {
  heading: string;
  description?: string;
  features: FeatureItem[];
  featureListProps?: {
    spacing?: "none" | "sm" | "base" | "lg" | "xl";
    padding?: "none" | "sm" | "base" | "lg" | "xl";
    align?: "start" | "center";
    listClassName?: string;
    iconSize?: number;
    iconClassName?: string;
  };
  media: { src: string; alt: string; className?: string };
  className?: string;
}

const FeatureTwoColumnTemplate: FC<FeatureTwoColumnTemplateProps> = ({
  heading,
  description,
  features,
  featureListProps,
  media,
  className,
}) => {
  return (
    <aside className={`flex flex-col md:flex-row  ${className}`}>
      <section className="flex-1 flex flex-col gap-6 p-6 ">
        <Heading as="h2" level="h3" weight="semibold">
          {heading}
        </Heading>
        {description && <p className="text-xl">{description}</p>}
        <FeatureList
          items={features}
          spacing={featureListProps?.spacing ?? "base"}
          padding={featureListProps?.padding ?? "none"}
          align={featureListProps?.align ?? "center"}
          listClassName={
            featureListProps?.listClassName ?? "px-8 sm:pl-20 text-lg"
          }
          iconSize={featureListProps?.iconSize ?? 24}
          iconClassName={featureListProps?.iconClassName}
        />
      </section>
      <section className="flex-1 flex flex-col justify-center items-center p-6 ">
        <picture>
          <Image src={media.src} alt={media.alt} fit="contain" />
        </picture>
      </section>
    </aside>
  );
};

export default FeatureTwoColumnTemplate;
