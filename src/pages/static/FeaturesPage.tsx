import type { FC } from "react";
import { FEATURES_STATIC_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

const FeaturesPage: FC = () => {
  const { t } = useTranslation();
  const { intro, groups } = FEATURES_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3">
        {t("pages.features.intro.title", { defaultValue: intro.title })}
      </h1>
      {intro.description && (
        <p className="text-neutral-300 max-w-3xl mb-8">
          {t("pages.features.intro.description", {
            defaultValue: intro.description,
          })}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((g, idx) => (
          <div
            key={g.title}
            className="bg-neutral-800/40 border border-neutral-700/60 rounded p-6"
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
  );
};
export default FeaturesPage;
