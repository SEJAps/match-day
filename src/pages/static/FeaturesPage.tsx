import type { FC } from "react";
import { FEATURES_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";
import { IntroSectionTemplate, LeadSectionTemplate } from "@/components";

const FeaturesPage: FC = () => {
  const { t } = useTranslation();
  const { intro, groups } = FEATURES_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages.features.intro.title", { defaultValue: intro.title })}
        description={t("pages.features.intro.description", {
          defaultValue: intro.description,
        })}
      ></IntroSectionTemplate>
      <LeadSectionTemplate
        title={t("pages.features.intro.title", { defaultValue: intro.title })}
        description={t("pages.features.intro.description", {
          defaultValue: intro.description,
        })}
        color="text-[#00BC7D]"
      >
        <section className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groups.map((g, idx) => (
              <div
                key={g.title}
                className="bg-neutral-800 border-2 border-green-500/60 rounded p-6"
              >
                <h2 className="text-xl font-semibold mb-3">
                  {t(`pages.features.groups.${idx}.title`, {
                    defaultValue: g.title,
                  })}
                </h2>
                <ul className="list-disc list-inside text-neutral-300 space-y-1">
                  {g.items.map((item, i) => (
                    <li key={item}>
                      {t(`pages.features.groups.${idx}.items.${i}`, {
                        defaultValue: item,
                      })}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </LeadSectionTemplate>
    </>
  );
};
export default FeaturesPage;
