import type { FC } from "react";
import {
  Button,
  FeatureList,
  Heading,
  IntroSectionTemplate,
  Text,
} from "@/components";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/atoms/Container";
import { RowsContent } from "@/components/organisms/RowsContent";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { Column } from "@/components/molecules/Column";
import ExploreSubscriptionPlans from "./static/ExploreSubscriptionPlans";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import BtnAccess from "@/components/molecules/Access";

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
            <BtnAccess label={t("pages:clubs.hero.buttons.0.label")} />
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

      <Container fullWidth bgColor="bg-white">
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column className="flex-9 justify-center lg:py-0 py-6">
                <section className="flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6 lg:px-0">
                  <header>
                    <Heading as="h2" level="h3">
                      {t("pages:clubs.sections.0.title")}
                    </Heading>

                    <Text color="dark" size="xl">
                      {t("pages:clubs.sections.0.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:clubs.sections.0.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:clubs.sections.0.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                        {
                          text: t("pages:clubs.sections.0.items.2"),
                          iconSrc: listItemImage,
                          iconAlt: "Convocatorias",
                        },
                      ]}
                    />
                  </article>
                </section>
              </Column>
              <Column className="flex-3 items-center">
                <img
                  src="#"
                  width={256}
                  height={256}
                  alt="Imagen de prueba"
                  className="object-cover w-72 h-72 lg:w-full lg:h-full bg-yellow-700"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth>
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column order="1" className="flex-9 justify-center lg:py-0 py-6">
                <section className="lg:pl-20 flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6">
                  <header>
                    <Heading as="h2" level="h3" color="white">
                      {t("pages:clubs.sections.1.title")}
                    </Heading>

                    <Text color="white" size="xl">
                      {t("pages:clubs.sections.1.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      itemColor="white"
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:clubs.sections.1.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:clubs.sections.1.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                      ]}
                    />
                  </article>
                </section>
              </Column>
              <Column className="flex-3 items-center">
                <img
                  src="#"
                  width={256}
                  height={256}
                  alt="Imagen de prueba"
                  className="object-cover w-72 h-72 lg:w-full lg:h-full bg-yellow-700"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth bgColor="bg-white">
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column className="flex-9 justify-center lg:py-0 py-6">
                <section className="flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6 lg:px-0">
                  <header>
                    <Heading as="h2" level="h3">
                      {t("pages:clubs.sections.2.title")}
                    </Heading>

                    <Text color="dark" size="xl">
                      {t("pages:clubs.sections.2.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:clubs.sections.2.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:clubs.sections.2.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                        {
                          text: t("pages:clubs.sections.2.items.2"),
                          iconSrc: listItemImage,
                          iconAlt: "Convocatorias",
                        },
                      ]}
                    />
                  </article>
                </section>
              </Column>
              <Column className="flex-3 items-center">
                <img
                  src="#"
                  width={256}
                  height={256}
                  alt="Imagen de prueba"
                  className="object-cover w-72 h-72 lg:w-full lg:h-full bg-yellow-700"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth>
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column order="1" className="flex-9 justify-center lg:py-0 py-6">
                <section className="lg:pl-20 flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6">
                  <header>
                    <Heading as="h2" level="h3" color="white">
                      {t("pages:clubs.sections.3.title")}
                    </Heading>

                    <Text color="white" size="xl">
                      {t("pages:clubs.sections.3.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      itemColor="white"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:clubs.sections.3.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:clubs.sections.3.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },

                        {
                          text: t("pages:clubs.sections.3.items.2"),
                          iconSrc: listItemImage,
                          iconAlt: "Convocatorias",
                        },
                      ]}
                    />
                  </article>
                </section>
              </Column>
              <Column className="flex-3 items-center">
                <img
                  src="#"
                  width={256}
                  height={256}
                  alt="Imagen de prueba"
                  className="object-cover w-72 h-72 lg:w-full lg:h-full bg-yellow-700"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth bgColor="bg-white">
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column className="flex-9 justify-center lg:py-0 py-6">
                <section className="flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6 lg:px-0">
                  <header>
                    <Heading as="h2" level="h3">
                      {t("pages:clubs.sections.4.title")}
                    </Heading>

                    <Text color="dark" size="xl">
                      {t("pages:clubs.sections.4.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:clubs.sections.4.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:clubs.sections.4.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                      ]}
                    />
                  </article>
                </section>
              </Column>
              <Column className="flex-3 items-center">
                <img
                  src="#"
                  width={256}
                  height={256}
                  alt="Imagen de prueba"
                  className="object-cover w-72 h-72 lg:w-full lg:h-full bg-yellow-700"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <ExploreSubscriptionPlans />
    </>
  );
};

export default ClubsPage;
