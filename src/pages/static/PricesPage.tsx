import type { FC } from "react";
import { PRICES_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

const PricesPage: FC = () => {
  const { t } = useTranslation();
  const { intro, tiers, notes } = PRICES_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3">
        {t("pages.prices.intro.title", { defaultValue: intro.title })}
      </h1>
      {intro.description && (
        <p className="text-neutral-300 max-w-3xl mb-8">
          {t("pages.prices.intro.description", {
            defaultValue: intro.description,
          })}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {tiers.map((tier, idx) => (
          <article
            key={tier.name}
            className={`rounded border ${tier.mostPopular ? "border-teal-500" : "border-neutral-700/60"} bg-neutral-800/40 p-6`}
          >
            <h2 className="text-xl font-semibold mb-1">
              {t(`pages.prices.tiers.${idx}.name`, { defaultValue: tier.name })}
            </h2>
            <p className="text-neutral-400 text-sm mb-4">
              {t(`pages.prices.tiers.${idx}.description`, {
                defaultValue: tier.description,
              })}
            </p>
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-wide bg-neutral-700/60 text-neutral-200 px-2 py-1 rounded border border-neutral-600">
                {t("common.comingSoon", { defaultValue: "Próximamente" })}
                {tier.mostPopular && (
                  <span className="bg-teal-600 text-white px-2 py-0.5 rounded text-[10px]">
                    {t("pages.prices.tiers.mostPopular", {
                      defaultValue: "Más popular",
                    })}
                  </span>
                )}
              </span>
            </div>
            <ul className="text-sm text-neutral-300 space-y-1 mb-4">
              {tier.features.map((f, i) => (
                <li key={f}>
                  •{" "}
                  {t(`pages.prices.tiers.${idx}.features.${i}`, {
                    defaultValue: f,
                  })}
                </li>
              ))}
            </ul>
            {tier.ctaLabel && (
              <button
                className={`w-full px-4 py-2 rounded ${tier.mostPopular ? "bg-teal-600 hover:bg-teal-500" : "bg-neutral-700 hover:bg-neutral-600"}`}
              >
                {t(`pages.prices.tiers.${idx}.ctaLabel`, {
                  defaultValue: tier.ctaLabel,
                })}
              </button>
            )}
          </article>
        ))}
      </div>

      {notes?.length ? (
        <ul className="text-xs text-neutral-500 list-disc list-inside">
          {notes.map((n, i) => (
            <li key={i}>{t(`pages.prices.notes.${i}`, { defaultValue: n })}</li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};
export default PricesPage;
