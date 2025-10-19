import type { FC } from "react";
import { PRICES_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";
import {
  Button,
  Heading,
  IntroSectionTemplate,
  LeadSectionTemplate,
  Text,
} from "@/components";

const PricesPage: FC = () => {
  const { t } = useTranslation();
  const { intro, tiers, notes } = PRICES_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages.prices.intro.title", { defaultValue: intro.title })}
        description={t("pages.prices.intro.description", {
          defaultValue: intro.description,
        })}
      ></IntroSectionTemplate>

      <LeadSectionTemplate
        bg="bg-[#0F6E5D]"
        title={t("pages.prices.intro.title", { defaultValue: intro.title })}
        description={t("pages.prices.intro.description", {
          defaultValue: intro.description,
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 px-4">
          {tiers.map((tier, idx) => (
            <article
              key={tier.name}
              className={`rounded border ${tier.mostPopular ? "border-[#07B748]" : "border-neutral-700/60"} bg-neutral-800/80 p-4`}
            >
              <Heading as="h3" level="h4" className="pl-0">
                {t(`pages.prices.tiers.${idx}.name`, {
                  defaultValue: tier.name,
                })}
              </Heading>

              <Text size="lg" className="mb-4" color="light">
                {t(`pages.prices.tiers.${idx}.description`, {
                  defaultValue: tier.description,
                })}
              </Text>

              <div className="mb-4">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide bg-neutral-700/60 text-neutral-200 px-2 py-1 rounded border border-neutral-600">
                  {t("common.comingSoon", { defaultValue: "Próximamente" })}
                  {tier.mostPopular && (
                    <span className="bg-[#07B748] hover:bg-[#07B748]/80 text-white px-2 py-0.5 rounded text-[10px]">
                      {t("pages.prices.tiers.mostPopular", {
                        defaultValue: "Más popular",
                      })}
                    </span>
                  )}
                </span>
              </div>
              <ul className="text-sm text-neutral-300 list-disc list-inside space-y-2 mb-4">
                {tier.features.map((f, i) => (
                  <li key={f}>
                    {t(`pages.prices.tiers.${idx}.features.${i}`, {
                      defaultValue: f,
                    })}
                  </li>
                ))}
              </ul>
              {tier.ctaLabel && (
                <>
                  <Button
                    variant={`${tier.mostPopular ? "success" : "outline"}`}
                    className="w-full px-4 py-2 rounded"
                  >
                    {t(`pages.prices.tiers.${idx}.ctaLabel`, {
                      defaultValue: tier.ctaLabel,
                    })}
                  </Button>
                </>
              )}
            </article>
          ))}
        </div>

        {notes?.length ? (
          <ul className="list-disc list-inside ">
            {notes.map((n, i) => (
              <li key={i} className="mb-2 px-4 text-xs">
                {t(`pages.prices.notes.${i}`, { defaultValue: n })}
              </li>
            ))}
          </ul>
        ) : null}
      </LeadSectionTemplate>
    </>
  );
};
export default PricesPage;
