import type { FC } from "react";
import { HELP_CENTER_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";
import {
  Button,
  IntroSectionTemplate,
  LeadSectionTemplate,
} from "@/components";

const HelpCenterPage: FC = () => {
  const { t } = useTranslation();
  const { intro, categories, faqs } = HELP_CENTER_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        title={t("pages.helpCenter.intro.title", {
          defaultValue: intro?.title ?? "Help Center",
        })}
        description={t("pages.helpCenter.intro.description", {
          defaultValue: intro?.description,
        })}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages.matchday.hero.cta", {
                defaultValue: "Lee más",
              })}
            </Button>
          </section>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 px-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-success/50 border border-background rounded p-4 sm:min-w-96"
            >
              <h2 className="text-xl font-semibold mb-3">
                {t(`pages.helpCenter.categories.${idx}.title`, {
                  defaultValue: cat.title,
                })}
              </h2>
              <ul className="space-y-2 text-background">
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
      </IntroSectionTemplate>
      <LeadSectionTemplate
        title={t("pages.helpCenter.intro.title", {
          defaultValue: intro?.title ?? "Help Center",
        })}
      >
        <section className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={cat.title}
                className="border border-success rounded p-4"
              >
                <h2 className="text-xl font-semibold mb-3 text-success">
                  {t(`pages.helpCenter.categories.${idx}.title`, {
                    defaultValue: cat.title,
                  })}
                </h2>
                <ul className="space-y-2 text-dark">
                  {cat.articles.map((a, i) => (
                    <li key={a.href}>
                      <a href={a.href} className="text-dark hover:underline">
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
            <div className="grid pb-6">
              <h2 className="text-2xl font-semibold mb-4">
                {t("pages.helpCenter.faqs.title", { defaultValue: "FAQs" })}
              </h2>
              <div className="space-y-4">
                {faqs.map((f, idx) => (
                  <details key={idx} className="border border-dark rounded p-4">
                    <summary className="cursor-pointer font-medium text-success">
                      {t(`pages.helpCenter.faqs.items.${idx}.question`, {
                        defaultValue: f.question,
                      })}
                    </summary>
                    <p className="text-dark mt-2">
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
      </LeadSectionTemplate>
    </>
  );
};
export default HelpCenterPage;
