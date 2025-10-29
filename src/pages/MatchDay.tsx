import { type FC } from "react";
import platform from "../assets/images/png/platform.png";

import {
  ContactSection,
  IntroSectionTemplate,
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
import CardService from "./services/CardService";
import teamsServices from "@/assets/images/svg/teams-services.svg";
import playersServices from "@/assets/images/svg/players-services.svg";
import clubsServices from "@/assets/images/svg/clubs-services.svg";
const MatchDay: FC = () => {
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
        </Text>
      );
      return;
    }
    if (data.name.length < 3) {
      showError(
        <Text size="sm" color="white">
          {t("pages.contact.notifications.nameTooShort", {
            defaultValue: "El nombre debe tener al menos 3 caracteres.",
          })}
        </Text>
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
      }
    );
  };

  return (
    <>
      {/* IntroSection */}
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages:matchday.hero.title")}
        description={t("pages:matchday.hero.description")}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages:matchday.hero.heroCtas.0.label")}
            </Button>
            <Button variant="view">
              {t("pages:matchday.hero.heroCtas.1.label")}
            </Button>
          </section>
        }
      >
        <Image
          src={MATCHDAY_PAGE.hero.image?.src}
          alt={t("pages:matchday.hero.imageAlt")}
          className={`aspect-video object-cover sm:w-96 rounded-xl mx-auto`}
        />
      </IntroSectionTemplate>
      <Container fullWidth bgColor="bg-white">
        <RowsContent className="gap-6 py-10 lg:py-20">
          <Row className="px-6">
            <article>
              <Heading as="h2" level="h1" color="success" align={"center"}>
                {t("pages:matchday.intro.heading")}
              </Heading>
              <Text className="text-center max-w-3xl mx-auto">
                {t("pages:matchday.intro.paragraph")}
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
                        {t("pages:matchday.features.heading")}
                      </Heading>
                      <Text size="lg" className="text-neutral-700">
                        {t("pages:matchday.features.description")}
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
              <CardService
                picture={{
                  src: teamsServices,
                  alt: "Card 1",
                  width: 152,
                  height: 152,
                }}
                bg="bg-primary-card"
                title={t("pages:services.servicesForEveryNeed.cards.0.title")}
                description={t(
                  "pages:services.servicesForEveryNeed.cards.0.text"
                )}
                list={
                  <ul className="list-disc list-inside space-y-2 pl-4 text-dark/70">
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.0.items.0")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.0.items.1")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.0.items.2")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.0.items.3")}
                    </li>
                  </ul>
                }
                footer={
                  <button
                    className={`bg-player text-white w-full px-6 py-3 rounded`}
                  >
                    {t("pages:services.servicesForEveryNeed.cards.0.textBtn")}
                  </button>
                }
              />
              <CardService
                picture={{
                  src: playersServices,
                  alt: "Card 1",
                  width: 152,
                  height: 152,
                }}
                bg="bg-secondary-card"
                title={t("pages:services.servicesForEveryNeed.cards.1.title")}
                description={t(
                  "pages:services.servicesForEveryNeed.cards.1.text"
                )}
                list={
                  <ul className="list-disc list-inside space-y-2 pl-4 text-dark/70">
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.1.items.0")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.1.items.1")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.1.items.2")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.1.items.3")}
                    </li>
                  </ul>
                }
                footer={
                  <button
                    className={`bg-team text-white w-full px-6 py-3 rounded`}
                  >
                    {t("pages:services.servicesForEveryNeed.cards.1.textBtn")}
                  </button>
                }
              />
              <CardService
                picture={{
                  src: clubsServices,
                  alt: "Card 1",
                  width: 152,
                  height: 152,
                }}
                bg="bg-tertiary-card"
                title={t("pages:services.servicesForEveryNeed.cards.2.title")}
                description={t(
                  "pages:services.servicesForEveryNeed.cards.2.text"
                )}
                list={
                  <ul className="list-disc list-inside space-y-2 pl-4 text-dark/70">
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.2.items.0")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.2.items.1")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.2.items.2")}
                    </li>
                    <li>
                      {t("pages:services.servicesForEveryNeed.cards.2.items.3")}
                    </li>
                  </ul>
                }
                footer={
                  <button
                    className={`bg-club text-white w-full px-6 py-3 rounded`}
                  >
                    {t("pages:services.servicesForEveryNeed.cards.2.textBtn")}
                  </button>
                }
              />
            </section>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth>
        <RowsContent className="gap-6 py-10 lg:py-20">
          <Row className="px-6">
            <article>
              <Heading as="h2" level="h1" color="white" align={"center"}>
                {t("pages:services.intro.title")}
              </Heading>
              <Text className="text-center max-w-3xl mx-auto">
                {t("pages:services.intro.description")}
              </Text>
            </article>
          </Row>
          <Row className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-6">
              {SERVICES_PAGE_CARDS.map((c, idx) => (
                <ServiceCard
                  key={c.title}
                  title={t(`pages:services.cards.${idx}.title`)}
                  text={t(`pages:services.cards.${idx}.text`)}
                  icon={c.icon}
                  ctaLabel={t(`pages:services.cards.${idx}.ctaLabel`)}
                  ctaHref={c.ctaHref}
                  variant={c.variant}
                />
              ))}
            </div>
          </Row>
        </RowsContent>
      </Container>
      {/* ContactSection */}
      <ContactSection
        onSubmit={handleOnSubmit}
        title={t("pages:matchday.contact.title")}
        subtitle={t("pages:matchday.contact.subtitle")}
        description={t("pages:matchday.contact.description")}
        highlights={MATCHDAY_PAGE.contactSection.highlights?.map((_h, i) =>
          t(`pages:matchday.contact.highlights.${i}`)
        )}
        info={{
          address: t("pages:matchday.contact.info.address"),
          phone: t("pages:matchday.contact.info.phone"),
          email: t("pages:matchday.contact.info.email"),
        }}
        mapImageUrl={MATCHDAY_PAGE.contactSection.mapImageUrl}
      />
    </>
  );
};

export default MatchDay;
