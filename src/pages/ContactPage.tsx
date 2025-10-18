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
        title={t("pages.contact.hero.title", {
          defaultValue: CONTACT_PAGE.hero.title,
        })}
        description={t("pages.contact.hero.subtitle", {
          defaultValue: CONTACT_PAGE.hero.subtitle,
        })}
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
              {t("pages.contact.heroCtas.0.label", {
                defaultValue: "Escribir ahora",
              })}
            </Button>
          </section>
        }
      >
        <article className="bg-[#10B981]/10 max-w-80 sm:max-w-[512px] mx-auto py-12 px-6 rounded-lg flex flex-col gap-4">
          {CONTACT_PAGE.contact.description && (
            <Text className="text-white" size={"xl"} align="center">
              {t("pages.contact.contact.description", {
                defaultValue: CONTACT_PAGE.contact.description,
              })}
            </Text>
          )}
          <section className="mt-2 px-6">
            <FeatureList
              listClassName="bg-transparent"
              iconSize={24}
              align="start"
              itemColor="white"
              items={
                CONTACT_PAGE.contact.highlights?.map((text, i) => ({
                  text: (
                    <span className="text-sm sm:text-base md:text-lg text-white">
                      {t(`pages.contact.contact.highlights.${i}`, {
                        defaultValue: text,
                      })}
                    </span>
                  ),
                })) ?? []
              }
            />
          </section>
        </article>
      </IntroSectionTemplate>
      <ContactSection
        id="contact-form"
        title={t("pages.contact.contact.title", {
          defaultValue: CONTACT_PAGE.contact.title,
        })}
        subtitle={t("pages.contact.contact.subtitle", {
          defaultValue: CONTACT_PAGE.contact.subtitle,
        })}
        description={t("pages.contact.contact.description", {
          defaultValue: CONTACT_PAGE.contact.description,
        })}
        highlights={CONTACT_PAGE.contact.highlights?.map((h, i) =>
          t(`pages.contact.contact.highlights.${i}`, { defaultValue: h }),
        )}
        info={{
          address: t("pages.contact.contact.info.address", {
            defaultValue: CONTACT_PAGE.contact.info.address,
          }),
          phone: t("pages.contact.contact.info.phone", {
            defaultValue: CONTACT_PAGE.contact.info.phone,
          }),
          email: t("pages.contact.contact.info.email", {
            defaultValue: CONTACT_PAGE.contact.info.email,
          }),
        }}
        mapImageUrl={CONTACT_PAGE.contact.mapImageUrl}
        onSubmit={handleOnSubmit}
      />
    </>
  );
};

export default ContactPage;
