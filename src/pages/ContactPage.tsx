import type { FC } from "react";
import {} from "@/config";
import {
  IntroSectionTemplate,
  Button,
  Text,
  FeatureList,
  ContactSection,
} from "@/components";
import { CONTACT_PAGE } from "@/config";
import { useTranslation } from "react-i18next";
import useNotifications from "@/hooks/useNotifications";

// Página del contenedor: delega el contenido al organismo ContactSection

const ContactPage: FC = () => {
  const { t } = useTranslation();
  const { showSuccess, showError } = useNotifications();

  // Estado local opcional (si en el futuro se quiere reflejar un spinner global)
  const handleOnSubmit = (data: {
    name: string;
    email: string;
    message: string;
    consent: boolean;
  }) => {
    if (!data.consent) {
      showError(
        <Text size="sm" color="white">
          {t("pages:contact.notifications.consentRequired")}
        </Text>,
      );
      return;
    }
    if (data.name.length < 3) {
      showError(
        <Text size="sm" color="white">
          {t("pages:contact.notifications.nameTooShort")}
        </Text>,
      );
      return;
    }

    showSuccess(
      <Text size="sm" color="white">
        {t("pages:contact.notifications.submissionSuccess")}
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
        title={t("pages:contact.hero.title")}
        description={t("pages:contact.hero.subtitle")}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button
              variant="success"
              onClick={() => {
                const el = document.getElementById("contact-form");
                if (el)
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              {t("pages:contact.heroCtas.0.label")}
            </Button>
          </section>
        }
      >
        <article className="italic bg-[#10B981]/10 max-w-80 sm:max-w-[512px] mx-auto py-12 px-6 rounded-lg flex flex-col gap-4">
          {CONTACT_PAGE.contact.description && (
            <Text size="2xl" align="center">
              {t("pages:contact.subtitle")}
            </Text>
          )}
          <section className="px-6 text-center">
            <FeatureList
              variant="image"
              markerSrc="soccer-x16.svg"
              items={
                CONTACT_PAGE.contact.highlights?.map((_text, i) => ({
                  text: (
                    <span className="text-sm sm:text-base md:text-lg text-white">
                      {t(`pages:contact.highlights.${i}`)}
                    </span>
                  ),
                })) ?? []
              }
            />
          </section>
        </article>
      </IntroSectionTemplate>
      <ContactSection id="contact-form" onSubmit={handleOnSubmit} />
    </>
  );
};

export default ContactPage;
