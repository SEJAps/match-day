import type { FC } from "react";
import { Button, IntroSectionTemplate, Text } from "@/components";
import { CLUBS_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

const ClubsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <IntroSectionTemplate
        title={t("pages.clubs.hero.title", {
          defaultValue: CLUBS_PAGE.hero.title,
        })}
        description={t("pages.clubs.hero.subtitle", {
          defaultValue: CLUBS_PAGE.hero.subtitle,
        })}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages.clubs.heroCtas.0.label", {
                defaultValue: "Registrarse",
              })}
            </Button>
            <Button variant="view">
              {t("pages.clubs.heroCtas.1.label", {
                defaultValue: "Ver planes",
              })}
            </Button>
          </section>
        }
      >
        <Text className="bg-[#10B981]/10 max-w-90 sm:max-w-[512px] mx-auto p-6 text-white rounded-2xl">
          {t("pages.clubs.hero.description", {
            defaultValue: CLUBS_PAGE.hero.description,
          })}
        </Text>
      </IntroSectionTemplate>
    </>
  );
};

export default ClubsPage;
