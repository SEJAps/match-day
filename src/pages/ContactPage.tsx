import type { FC } from "react";
import useNotifications from "@/hooks/useNotifications";
import ContactSection from "@/components/organisms/ContactSection";
import {} from "@/config";
import { LandingPageTemplate, FeatureList } from "@/components";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { CONTACT_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

// Página del contenedor: delega el contenido al organismo ContactSection

const ContactPage: FC = () => {
  const { showSuccess, showError } = useNotifications();
  const { t } = useTranslation();
  // Estado local opcional (si en el futuro se quiere reflejar un spinner global)

  return (
    <LandingPageTemplate
      className="flex flex-col bg-white text-black"
      hero={{
        images: CONTACT_PAGE.heroBgImages,
        title: t("pages.contact.hero.title", {
          defaultValue: CONTACT_PAGE.hero.title,
        }),
        description: t("pages.contact.hero.description", {
          defaultValue: CONTACT_PAGE.hero.description,
        }),
        ctas: [
          {
            label: t("pages.contact.heroCtas.0.label", {
              defaultValue:
                CONTACT_PAGE.heroCtas?.[0]?.label ?? "Escribir ahora",
            }),
            variant: CONTACT_PAGE.heroCtas?.[0]?.variant ?? "success",
            onClick: () => {
              const el = document.getElementById("contact-form");
              if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            },
          },
        ],
        heroContent: (
          <section className="w-9/12 mt-4 py-6 sm:max-h-auto sm:max-w-[512px] text-white bg-[#1C4020] rounded-2xl">
            <article className="flex flex-col py-2">
              {CONTACT_PAGE.contactSection.description && (
                <p className="text-sm sm:text-base md:text-lg px-6 text-white text-center">
                  {t("pages.contact.contact.description", {
                    defaultValue: CONTACT_PAGE.contactSection.description,
                  })}
                </p>
              )}
              <div className="mt-2">
                <FeatureList
                  items={
                    CONTACT_PAGE.contactSection.highlights?.map((text, i) => ({
                      text: (
                        <span className="text-sm sm:text-base md:text-lg text-white">
                          {t(`pages.contact.contact.highlights.${i}`, {
                            defaultValue: text,
                          })}
                        </span>
                      ),
                      iconSrc: listItemImage,
                      iconAlt: t(`pages.contact.contact.highlights.${i}`, {
                        defaultValue: String(text),
                      }),
                    })) ?? []
                  }
                  listClassName="px-6"
                  spacing="base"
                  padding="base"
                  align="center"
                  iconSize={24}
                  iconClassName="w-6 h-6 sm:w-10 sm:h-10"
                  itemColor="white"
                />
              </div>
            </article>
          </section>
        ),
      }}
    >
      <ContactSection
        id="contact-form"
        title={t("pages.contact.contact.title", {
          defaultValue: CONTACT_PAGE.contactSection.title,
        })}
        subtitle={t("pages.contact.contact.subtitle", {
          defaultValue: CONTACT_PAGE.contactSection.subtitle,
        })}
        description={t("pages.contact.contact.description", {
          defaultValue: CONTACT_PAGE.contactSection.description,
        })}
        highlights={CONTACT_PAGE.contactSection.highlights?.map((h, i) =>
          t(`pages.contact.contact.highlights.${i}`, { defaultValue: h }),
        )}
        info={{
          address: t("pages.contact.contact.info.address", {
            defaultValue: CONTACT_PAGE.contactSection.info.address,
          }),
          phone: t("pages.contact.contact.info.phone", {
            defaultValue: CONTACT_PAGE.contactSection.info.phone,
          }),
          email: t("pages.contact.contact.info.email", {
            defaultValue: CONTACT_PAGE.contactSection.info.email,
          }),
        }}
        mapImageUrl={CONTACT_PAGE.contactSection.mapImageUrl}
        onSubmit={async () => {
          try {
            await new Promise((res) => setTimeout(res, 1000));
            showSuccess(
              t("pages.contact.toast.success", {
                defaultValue: "Mensaje enviado. Te responderemos pronto ✉️",
              }),
            );
          } catch {
            showError(
              t("pages.contact.toast.error", {
                defaultValue:
                  "No se pudo enviar el mensaje. Inténtalo más tarde",
              }),
            );
          } finally {
            // noop
          }
        }}
      />
    </LandingPageTemplate>
  );
};

export default ContactPage;
