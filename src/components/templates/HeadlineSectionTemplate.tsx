import type { FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Heading, Text } from "../atoms";

interface HeadlineSectionTemplateProps {
  title: string;
  description: string;
  children: ReactNode;
}

const HeadlineSectionTemplate: FC<HeadlineSectionTemplateProps> = ({
  title,
  description,
  children,
}) => {
  const { t } = useTranslation();
  return (
    <article className="bg-white py-20 text-neutral-800">
      <section className="max-w-6xl mx-auto sm:mb-12 py-8">
        <Heading as="h2" level="h1" align="center" className="px-4">
          {t("common.servicesForEveryNeed.title", {
            defaultValue: title,
          })}
        </Heading>
        <Text align="center" size="lg">
          {t("common.servicesForEveryNeed.description", {
            defaultValue: description,
          })}
        </Text>
      </section>
      <section className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 px-6">
        {children}
      </section>
    </article>
  );
};

export { HeadlineSectionTemplate };
