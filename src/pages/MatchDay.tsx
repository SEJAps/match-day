import { Button, Image, Text } from "@/components/atoms";
import { MATCHDAY_PAGE } from "@/config/pages/matchday";
import { useTranslation } from "react-i18next";
import useNotifications from "@/hooks/useNotifications";
import ServicesForEveryNeeds from "./static/ServicesForEveryNeed";
import WhatDoWeOffer from "./static/WhatDoWeOffer";
import { ContactSection, IntroSectionTemplate } from "@/components";
import AllInOne from "./static/AllInOne";
import BtnAccess from "@/components/molecules/Access";

const MatchDay: React.FC = () => {
  const { t } = useTranslation();
  const { showSuccess, showError } = useNotifications();
  const handleOnSubmit = (data: {
    name: string;
    email: string;
    message: string;
    consent: boolean;
  }) => {
    if (!data.consent) {
      showError(
        <Text size="sm" color="white">
          {t("pages.contact.notifications.consentRequired", {
            defaultValue: "Debes aceptar el consentimiento para continuar.",
          })}
        </Text>,
      );
      return;
    }
    if (data.name.length < 3) {
      showError(
        <Text size="sm" color="white">
          {t("pages.contact.notifications.nameTooShort", {
            defaultValue: "El nombre debe tener al menos 3 caracteres.",
          })}
        </Text>,
      );
      return;
    }

    showSuccess(
      <Text size="sm" color="white">
        {t("pages.contact.notifications.submissionSuccess", {
          defaultValue: `¡Gracias por contactarnos, ${data.name}
          ! Hemos recibido tu mensaje y te responderemos pronto.`,
        })}
      </Text>,
      {
        duration: 4000,
      },
    );
  };

  return (
    <>
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages:matchday.hero.title")}
        description={t("pages:matchday.hero.description")}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <BtnAccess label={t("pages:matchday.hero.heroCtas.0.label")} />
            <Button variant="view">
              {t("pages:matchday.hero.heroCtas.1.label")}
            </Button>
          </section>
        }
      >
        {/* IntroSection */}
        <Image
          src={MATCHDAY_PAGE.hero.image?.src}
          alt={t("pages:matchday.hero.imageAlt")}
          className={`aspect-video object-cover sm:w-96 rounded-xl mx-auto`}
        />
      </IntroSectionTemplate>
      <AllInOne />
      <ServicesForEveryNeeds />
      <WhatDoWeOffer />
      <ContactSection onSubmit={handleOnSubmit} />
    </>
  );
};

export default MatchDay;
