import {
  IntroSectionTemplate,
  LeadSectionTemplate,
  ServiceCard,
} from "@/components";
import { SERVICES_PAGE_CARDS, SERVICES_STATIC_PAGE } from "@/config";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const ServicesPage: FC = () => {
  const { t } = useTranslation();
  const { intro } = SERVICES_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        title={t("pages.services.intro.title", { defaultValue: intro.title })}
        description={t("pages.services.intro.description", {
          defaultValue: intro.description,
        })}
      />
      <LeadSectionTemplate
        title={t("pages.services.lead.title", { defaultValue: intro.title })}
        description={t("pages.services.lead.description", {
          defaultValue: intro.description,
        })}
        color="white"
        textColor="white"
        bg="bg-transparent"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-6">
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
      </LeadSectionTemplate>
    </>
  );
};
export default ServicesPage;
