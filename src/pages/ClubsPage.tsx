import type { FC } from "react";
import { Button, IntroSectionTemplate, Text } from "@/components";
import { useTranslation } from "react-i18next";

const ClubsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages:clubs.hero.title")}
        description={t("pages:clubs.hero.subtitle")}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages:clubs.hero.buttons.0.label")}
            </Button>
            <Button variant="view">
              {t("pages:clubs.hero.buttons.1.label")}
            </Button>
          </section>
        }
      >
        <Text className="bg-[#10B981]/10 max-w-90 sm:max-w-[512px] mx-auto p-6 text-white rounded-2xl">
          {t("pages:clubs.hero.description")}
        </Text>
        <footer className="h-full order-2 flex items-end justify-between">
          <small className="text-sm font-bold italic">
            {t("pages:clubs.hero.items.0")}
          </small>
          <small className="text-sm italic">
            {t("pages:clubs.hero.items.1")}
          </small>
        </footer>
      </IntroSectionTemplate>
    </>
  );
};

export default ClubsPage;
