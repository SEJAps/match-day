import type { FC } from "react";
import { Heading, ServiceCard } from "@/components";
import { SERVICES_PAGE_CARDS } from "@/config";
import { cn } from "@/utils/cn";
import { useTranslation } from "react-i18next";

export interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  bg?: string;
}

const ServicesSection: FC<ServicesSectionProps> = ({
  title,
  subtitle,
  sectionClassName,
  bg = "bg-accent",
}) => {
  const { t } = useTranslation();
  const titleText =
    title ??
    t("pages.services.intro.title", {
      defaultValue: "¿Qué ofrecemos?",
    });
  const subtitleText =
    subtitle ??
    t("pages.services.intro.description", {
      defaultValue:
        "Características diseñadas para el mundo del fútbol moderno",
    });
  return (
    <section className={cn(" px-6 py-12", sectionClassName, bg)}>
      <article className="container mx-auto">
        <article className="mb-10 text-center">
          <Heading
            as="h2"
            level="h1"
            className="text-white text-5xl mb-4 sm:mb-6 text-center"
          >
            {titleText}
          </Heading>
          <p className="text-neutral-200 max-w-3xl mx-auto text-center">
            {subtitleText}
          </p>
        </article>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_PAGE_CARDS.map((c, idx) => (
            <ServiceCard
              key={c.title}
              title={t(`pages.services.cards.${idx}.title`, {
                defaultValue: c.title,
              })}
              text={t(`pages.services.cards.${idx}.text`, {
                defaultValue: c.text,
              })}
              icon={c.icon}
              ctaLabel={t(`pages.services.cards.${idx}.ctaLabel`, {
                defaultValue: c.ctaLabel ?? "",
              })}
              ctaHref={c.ctaHref}
              variant={c.variant}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default ServicesSection;
