import { useEffect, useState, type FC } from "react";
import platform from "../assets/images/png/platform.png";
import {
  SERVICES_FOR_EVERY_NEED,
  type ServiceCardForEveryNeed,
} from "@/config/services-for-every-need";
import {
  ContactSection,
  IntroSectionTemplate,
  ValuePropSectionTemplate,
  ServiceCard,
  FeatureList,
} from "@/components";
import { Button, Heading, Image, Text } from "@/components/atoms";
import { SERVICES_PAGE_CARDS } from "@/config";
import { MATCHDAY_PAGE } from "@/config/pages/matchday";
import { useTranslation } from "react-i18next";
import useNotifications from "@/hooks/useNotifications";
import { Container } from "@/components/atoms/Container";
import { RowsContent } from "@/components/organisms/RowsContent";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { Column } from "@/components/molecules/Column";
const MatchDay: FC = () => {
  const { t } = useTranslation();
  const [servicesForEveryNeed, setServicesForEveryNeed] = useState<
    ServiceCardForEveryNeed[]
  >([]);
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
  useEffect(() => {
    setServicesForEveryNeed(SERVICES_FOR_EVERY_NEED);
    return () => setServicesForEveryNeed([]);
  }, []);

  return (
    <>
      {/* IntroSection */}
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages.matchday.hero.title", {
          defaultValue: MATCHDAY_PAGE.hero.title,
        })}
        description={t("pages.matchday.hero.description", {
          defaultValue: MATCHDAY_PAGE.hero.description,
        })}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages.matchday.hero.cta", {
                defaultValue: "¡Comienza ahora!",
              })}
            </Button>
            <Button variant="view">
              {t("pages.matchday.hero.ctaSecondary", {
                defaultValue: "Ver demo",
              })}
            </Button>
          </section>
        }
      >
        <Image
          src={MATCHDAY_PAGE.hero.image?.src}
          alt={t("pages.matchday.hero.imageAlt", {
            defaultValue: MATCHDAY_PAGE.hero.image?.alt,
          })}
          className={`aspect-video object-cover sm:w-96 rounded-xl mx-auto`}
        />
      </IntroSectionTemplate>
      <Container fullWidth bgColor="bg-white">
        <RowsContent className="gap-6 py-10 lg:py-20">
          <Row className="px-6">
            <article>
              <Heading as="h2" level="h1" color="success" align={"center"}>
                {t("pages.matchday.intro.heading")}
              </Heading>
              <Text className="text-center max-w-3xl mx-auto">
                {t("pages.matchday.intro.paragraph")}
              </Text>
            </article>
          </Row>
          <Row className="px-6">
            <ColumnContent className="gap-6 py-10 sm:py-20">
              <Column className="flex-9">
                <section>
                  <article>
                    <header>
                      <Heading
                        as="h2"
                        level="h3"
                        weight="semibold"
                        className="text-success"
                      >
                        {t("pages.matchday.features.heading")}
                      </Heading>
                      <Text size="lg" className="text-neutral-700">
                        {t("pages.matchday.features.description")}
                      </Text>
                    </header>

                    <article>
                      <FeatureList
                        items={MATCHDAY_PAGE.featuresSection.features}
                      />
                    </article>
                  </article>
                </section>
              </Column>
              <Column className="flex-3 flex justify-center items-center">
                <section>
                  <img width={492} height={276} src={platform} alt={platform} />
                </section>
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth bgColor="bg-white">
        <RowsContent className="gap-6 py-10 lg:py-20">
          <Row className="px-6">
            <article className="flex items-center flex-col space-y-6">
              <Heading as="h2" level="h1" color="success" align="center">
                {t("common.servicesForEveryNeed.title")}
              </Heading>
              <Text size="xl" className="text-neutral-700 mb-6" align="center">
                {t("common.servicesForEveryNeed.description", {
                  defaultValue:
                    "Herramientas especializadas para jugadores, equipos y clubes",
                })}
              </Text>
            </article>
          </Row>
          <Row className="px-6">
            <section className="grid lg:grid-cols-3 gap-6 lg:gap-10">
              {servicesForEveryNeed &&
                servicesForEveryNeed.map((service) => (
                  <section
                    key={service.title}
                    className={`${service.bg} flex flex-col justify-between gap-6 rounded-2xl shadow-sm`}
                  >
                    <header className="flex flex-col items-center p-6 gap-6">
                      <Image
                        src={service.icon}
                        alt="Logo Card"
                        width={152}
                        height={152}
                      />
                      <h2 className="text-dark text-4xl font-bold">
                        {service.title}
                      </h2>
                    </header>
                    <article className=" flex flex-col p-6 gap-6">
                      <p className="text-dark text-xl font-extralight ">
                        {service.text}
                      </p>
                      <ul className="list-disc list-inside space-y-2 pl-6">
                        {service.items.map((item) => (
                          <li key={item} className="text-dark text-lg">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                    <footer className="flex items-center p-6">
                      <button
                        className={`${service.customColor}  w-full ${service.bgBtn} px-6 py-3 rounded`}
                      >
                        {service.textBtn}
                      </button>
                    </footer>
                  </section>
                  // <Card
                  //   key={service.title}
                  //   bg={service.bg}
                  //   bgBtn={service.bgBtn}
                  //   title={t(`common.servicesForEveryNeed.cards.${i}.title`, {
                  //     defaultValue: service.title,
                  //   })}
                  //   text={t(`common.servicesForEveryNeed.cards.${i}.text`, {
                  //     defaultValue: service.text,
                  //   })}
                  //   items={service.items.map((item, idx) =>
                  //     t(`common.servicesForEveryNeed.cards.${i}.items.${idx}`, {
                  //       defaultValue: item,
                  //     })
                  //   )}
                  //   index={i}
                  //   mobileFullWidth={
                  //     servicesForEveryNeed.length % 2 === 1 &&
                  //     i === servicesForEveryNeed.length - 1
                  //   }
                  //   icon={
                  //     <Image
                  //       src={service.icon}
                  //       alt={t(`common.servicesForEveryNeed.cards.${i}.title`)}
                  //       className="w-24 h-24 sm:w-16 sm:h-16"
                  //       width={96}
                  //       height={96}
                  //       fit="contain"
                  //     />
                  //   }
                  //   label={t(`common.servicesForEveryNeed.cards.${i}.textBtn`, {
                  //     defaultValue: service.textBtn,
                  //   })}
                  // />
                ))}
            </section>
          </Row>
        </RowsContent>
      </Container>
      {/* ValuePropSection */}
      <ValuePropSectionTemplate
        title={t("common.ourServices.title", {
          defaultValue: "Nuestros Servicios",
        })}
        description={t("common.ourServices.description", {
          defaultValue:
            "Descubre la gama completa de servicios que ofrecemos para potenciar tu experiencia deportiva.",
        })}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-6">
          {SERVICES_PAGE_CARDS.map((c, idx) => (
            <ServiceCard
              key={c.title}
              title={t(`pages.services.cards.${idx}.title`, {
                defaultValue: c.title,
              })}
              text={t(`pages.services.cards.${idx}.text`, {
                defaultValue: c.text,
              })}
              icon={c.icon}
              ctaLabel={t(`pages.services.cards.${idx}.ctaLabel`, {
                defaultValue: c.ctaLabel ?? "",
              })}
              ctaHref={c.ctaHref}
              variant={c.variant}
            />
          ))}
        </div>
      </ValuePropSectionTemplate>
      {/* ContactSection */}
      <ContactSection
        onSubmit={handleOnSubmit}
        title={t("pages.matchday.contact.title", {
          defaultValue: MATCHDAY_PAGE.contactSection.title,
        })}
        subtitle={t("pages.matchday.contact.subtitle", {
          defaultValue: MATCHDAY_PAGE.contactSection.subtitle,
        })}
        description={t("pages.matchday.contact.description", {
          defaultValue: MATCHDAY_PAGE.contactSection.description,
        })}
        highlights={MATCHDAY_PAGE.contactSection.highlights?.map((h, i) =>
          t(`pages.matchday.contact.highlights.${i}`, { defaultValue: h }),
        )}
        info={{
          address: t("pages.matchday.contact.info.address", {
            defaultValue: MATCHDAY_PAGE.contactSection.info.address,
          }),
          phone: t("pages.matchday.contact.info.phone", {
            defaultValue: MATCHDAY_PAGE.contactSection.info.phone,
          }),
          email: t("pages.matchday.contact.info.email", {
            defaultValue: MATCHDAY_PAGE.contactSection.info.email,
          }),
        }}
        mapImageUrl={MATCHDAY_PAGE.contactSection.mapImageUrl}
      />
    </>
  );
};

export default MatchDay;
