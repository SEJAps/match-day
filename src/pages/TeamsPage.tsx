import { Fragment, type FC } from "react";
import {
  FeatureList,
  IntroSectionTemplate,
  Button,
  Text,
  Heading,
} from "@/components";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { useTranslation } from "react-i18next";
import { Container } from "@/components/atoms/Container";
import { RowsContent } from "@/components/organisms/RowsContent";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { Column } from "@/components/molecules/Column";
import ExploreSubscriptionPlans from "./static/ExploreSubscriptionPlans";

const TeamsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages:teams.hero.title")}
        description={t("pages:teams.hero.subtitle")}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages:teams.heroCtas.0.label")}
            </Button>
            <Button variant="view">{t("pages:teams.heroCtas.1.label")}</Button>
          </section>
        }
      >
        <Text className="bg-secondary/50 max-w-90 sm:max-w-[512px] mx-auto p-6 text-white rounded-2xl">
          {t("pages:teams.hero.description")}
        </Text>
      </IntroSectionTemplate>
      <Container fullWidth bgColor="bg-white">
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column className="flex-9 justify-center lg:py-0 py-6">
                <section className="flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6 lg:px-0">
                  <header>
                    <Heading as="h2" level="h3">
                      {t("pages:teams.sections.0.title")}
                    </Heading>

                    <Text color="dark" size="xl">
                      {t("pages:teams.sections.0.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:teams.sections.0.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:teams.sections.0.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                        {
                          text: t("pages:teams.sections.0.items.2"),
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
                      {t("pages:teams.sections.1.title")}
                    </Heading>

                    <Text color="white" size="xl">
                      {t("pages:teams.sections.1.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      itemColor="white"
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:teams.sections.1.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:teams.sections.1.items.1"),
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
                      {t("pages:teams.sections.2.title")}
                    </Heading>

                    <Text color="dark" size="xl">
                      {t("pages:teams.sections.2.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:teams.sections.2.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:teams.sections.2.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                        {
                          text: t("pages:teams.sections.2.items.2"),
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
                      {t("pages:teams.sections.3.title")}
                    </Heading>

                    <Text color="white" size="xl">
                      {t("pages:teams.sections.3.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      itemColor="white"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:teams.sections.3.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:teams.sections.3.items.1"),
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
                      {t("pages:teams.sections.4.title")}
                    </Heading>

                    <Text color="dark" size="xl">
                      {t("pages:teams.sections.4.description")}
                    </Text>
                  </header>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:teams.sections.4.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Planificación",
                        },
                        {
                          text: t("pages:teams.sections.4.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Rendimiento",
                        },
                        {
                          text: t("pages:teams.sections.4.items.2"),
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
      <ExploreSubscriptionPlans />
    </Fragment>
  );
};

export default TeamsPage;
