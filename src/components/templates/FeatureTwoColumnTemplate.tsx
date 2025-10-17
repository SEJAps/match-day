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
    <section className={"w-full " + (className ?? "")}>
      <aside className="flex flex-col sm:flex-row">
        <section className="flex-1 flex flex-col justify-center gap-6">
          <Heading
            as="h2"
            level="h3"
            weight="semibold"
            className="text-2xl my-4 px-6 sm:pl-20 sm:px-8"
          >
            {heading}
          </Heading>
          {description && (
            <p className="px-8 sm:pl-20 text-xl">{description}</p>
          )}
          <FeatureList
            items={features}
            spacing={featureListProps?.spacing ?? "base"}
            padding={featureListProps?.padding ?? "base"}
            align={featureListProps?.align ?? "center"}
            listClassName={
              featureListProps?.listClassName ?? "px-8 sm:pl-20 text-lg"
            }
            iconSize={featureListProps?.iconSize ?? 24}
            iconClassName={featureListProps?.iconClassName}
          />
        </section>
        <section className="flex-1 flex justify-center items-center mt-10">
          <picture>
            <Image
              src={media.src}
              alt={media.alt}
              className={media.className ?? "aspect-auto h-full w-full"}
              fit="contain"
            />
          </picture>
        </section>
      </aside>
    </section>
  );
};

export default FeatureTwoColumnTemplate;
