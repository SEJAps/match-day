import { Heading, ServiceCard } from "@/components";
import { SERVICES_PAGE_CARDS, SERVICES_STATIC_PAGE } from "@/config";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const ServicesPage: FC = () => {
  const { t } = useTranslation();
  const { intro, note } = SERVICES_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12 bg-[#0F6E5D]">
      <article className="mb-10">
        <Heading as="h2" level="h1" className="text-5xl mb-4 sm:mb-6">
          {t("pages.services.intro.title", { defaultValue: intro.title })}
        </Heading>
        {intro.description && (
          <p className="text-neutral-200 max-w-3xl">
            {t("pages.services.intro.description", {
              defaultValue: intro.description,
            })}
          </p>
        )}
        {note && (
          <p className="text-neutral-300 mt-2 text-sm">
            {t("pages.services.intro.note", { defaultValue: note })}
          </p>
        )}
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
            ctaLabel={
              c.ctaLabel
                ? t(`pages.services.cards.${idx}.ctaLabel`, {
                    defaultValue: c.ctaLabel,
                  })
                : undefined
            }
            ctaHref={c.ctaHref}
            variant={c.variant}
          />
        ))}
      </div>
    </section>
  );
};
export default ServicesPage;
