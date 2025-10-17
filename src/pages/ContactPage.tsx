import type { FC } from "react";
import useNotifications from "@/hooks/useNotifications";
import ContactSection from "@/components/organisms/ContactSection";
import {} from "@/config";
import { LandingPageTemplate, FeatureList } from "@/components";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { CONTACT_PAGE } from "@/config";

// Página del contenedor: delega el contenido al organismo ContactSection

const ContactPage: FC = () => {
  const { showSuccess, showError } = useNotifications();
  // Estado local opcional (si en el futuro se quiere reflejar un spinner global)

  return (
    <LandingPageTemplate
      className="flex flex-col bg-white text-black"
      hero={{
        images: CONTACT_PAGE.heroBgImages,
        title: CONTACT_PAGE.hero.title,
        description: CONTACT_PAGE.hero.description,
        ctas: [
          {
            label: CONTACT_PAGE.heroCtas?.[0]?.label ?? "Escribir ahora",
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
                  {CONTACT_PAGE.contactSection.description}
                </p>
              )}
              <div className="mt-2">
                <FeatureList
                  items={
                    CONTACT_PAGE.contactSection.highlights?.map((text) => ({
                      text: (
                        <span className="text-sm sm:text-base md:text-lg text-white">
                          {text}
                        </span>
                      ),
                      iconSrc: listItemImage,
                      iconAlt: String(text),
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
        title={CONTACT_PAGE.contactSection.title}
        subtitle={CONTACT_PAGE.contactSection.subtitle}
        description={CONTACT_PAGE.contactSection.description}
        highlights={CONTACT_PAGE.contactSection.highlights}
        info={CONTACT_PAGE.contactSection.info}
        mapImageUrl={CONTACT_PAGE.contactSection.mapImageUrl}
        onSubmit={async () => {
          try {
            await new Promise((res) => setTimeout(res, 1000));
            showSuccess("Mensaje enviado. Te responderemos pronto ✉️");
          } catch {
            showError("No se pudo enviar el mensaje. Inténtalo más tarde");
          } finally {
            // noop
          }
        }}
      />
    </LandingPageTemplate>
  );
};

export default ContactPage;
