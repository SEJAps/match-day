import type { FC } from "react";
import { HELP_CENTER_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

const HelpCenterPage: FC = () => {
  const { t } = useTranslation();
  const { intro, categories, faqs } = HELP_CENTER_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3">
        {t("pages.helpCenter.intro.title", {
          defaultValue: intro?.title ?? "Help Center",
        })}
      </h1>
      {intro?.description && (
        <p className="text-neutral-300 max-w-3xl mb-6">
          {t("pages.helpCenter.intro.description", {
            defaultValue: intro.description,
          })}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {categories.map((cat, idx) => (
          <div
            key={cat.title}
            className="bg-neutral-800/40 border border-neutral-700/60 rounded p-6"
          >
            <h2 className="text-xl font-semibold mb-3">
              {t(`pages.helpCenter.categories.${idx}.title`, {
                defaultValue: cat.title,
              })}
            </h2>
            <ul className="space-y-2 text-neutral-300">
              {cat.articles.map((a, i) => (
                <li key={a.href}>
                  <a href={a.href} className="text-teal-400 hover:underline">
                    {t(
                      `pages.helpCenter.categories.${idx}.articles.${i}.title`,
                      {
                        defaultValue: a.title,
                      },
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {faqs?.length ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {t("pages.helpCenter.faqs.title", { defaultValue: "FAQs" })}
          </h2>
          <div className="space-y-4">
            {faqs.map((f, idx) => (
              <details
                key={idx}
                className="bg-neutral-800/40 border border-neutral-700/60 rounded p-4"
              >
                <summary className="cursor-pointer font-medium">
                  {t(`pages.helpCenter.faqs.items.${idx}.question`, {
                    defaultValue: f.question,
                  })}
                </summary>
                <p className="text-neutral-300 mt-2">
                  {t(`pages.helpCenter.faqs.items.${idx}.answer`, {
                    defaultValue: f.answer,
                  })}
                </p>
              </details>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
};
export default HelpCenterPage;
