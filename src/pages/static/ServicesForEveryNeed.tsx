import { Heading, Text } from "@/components";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import type { FC } from "react";
import CardService from "./services/CardService";

import teamsServices from "@/assets/images/svg/teams-services.svg";
import playersServices from "@/assets/images/svg/players-services.svg";
import clubsServices from "@/assets/images/svg/clubs-services.svg";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/atoms/Container";

const ServicesForEveryNeeds: FC = () => {
  const { t } = useTranslation();
  return (
    <Container fullWidth bgColor="bg-white">
      <RowsContent className="gap-6 py-10 lg:py-20">
        <Row className="px-6">
          <article className="flex items-center flex-col space-y-6">
            <Heading as="h2" level="h1" color="success" align="center">
              {t("pages:services.servicesForEveryNeed.title")}
            </Heading>
            <Text size="xl" className="text-neutral-700 mb-6" align="center">
              {t("pages:services.servicesForEveryNeed.description")}
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
                "pages:services.servicesForEveryNeed.cards.0.text",
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
                "pages:services.servicesForEveryNeed.cards.1.text",
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
                "pages:services.servicesForEveryNeed.cards.2.text",
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
  );
};

export default ServicesForEveryNeeds;
