import type { FC } from "react";
import { Heading, ServiceCard } from "@/components";
import { SERVICES_PAGE_CARDS } from "@/config";
import { cn } from "@/utils/cn";

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
}

const ServicesSection: FC<ServicesSectionProps> = ({
  title = "¿Qué ofrecemos?",
  subtitle = "Características diseñadas para el mundo del fútbol moderno",
  sectionClassName,
}) => {
  return (
    <section className={cn("container mx-auto px-6 py-12", sectionClassName)}>
      <article className="mb-10 text-center">
        <Heading
          as="h2"
          level="h1"
          className="text-white text-5xl mb-4 sm:mb-6 text-center"
        >
          {title}
        </Heading>
        <p className="text-neutral-200 max-w-3xl mx-auto text-center">
          {subtitle}
        </p>
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_PAGE_CARDS.map((c) => (
          <ServiceCard
            key={c.title}
            title={c.title}
            text={c.text}
            icon={c.icon}
            ctaLabel={c.ctaLabel}
            ctaHref={c.ctaHref}
            variant={c.variant}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
