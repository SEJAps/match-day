import {
  Button,
  FeatureList,
  Heading,
  Image,
  IntroSectionTemplate,
  List,
  ListItem,
  PlanComparisonTable,
} from "@/components";
import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { PLAYERS_PAGE } from "@/config";
import { cn } from "@/utils/cn";
import { Fragment, type FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import conectTeams from "@/assets/images/png/conecta-equipos.png";

import listItemImage from "@/assets/images/svg/list-item-image.svg";
const PlayersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {/* Hero Section */}
      <IntroSectionTemplate
        size="7xl"
        title={t("pages:players.hero.title")}
        description={t("pages:players.hero.description")}
        footer={
          <section className="w-full flex justify-center gap-12">
            <Button variant="success">
              {t("pages:players.heroCtas.0.label")}
            </Button>
            <Button variant="view" className="p-0">
              <NavLink
                to="/prices"
                className="inline-flex items-center justify-center w-full h-full p-4"
              >
                {t("pages:players.heroCtas.1.label")}
              </NavLink>
            </Button>
          </section>
        }
      >
        <List
          ordered={true}
          className={`rounded-lg bg-secondary/50 grid gap-4 max-w-80 mx-auto md:grid-cols-2 p-6 md:p-6 md:min-w-[648px] min-h-34 `}
        >
          {PLAYERS_PAGE.hero
            .list!.items.sort((a, b) => a.text.localeCompare(b.text))
            .map((item, idx) => (
              <ListItem key={idx}>
                <div className="flex gap-3 w-full items-center">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.text ?? ""}
                      className={cn("shrink-0")}
                      fit="contain"
                    />
                  )}
                  <span className="text-sm sm:text-base md:text-lg text-white">
                    {t(`pages:players.hero.list.items.${idx}.text`)}
                  </span>
                </div>
              </ListItem>
            )) ?? []}
        </List>
      </IntroSectionTemplate>
      <Container fullWidth bgColor="bg-white">
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20 gap-6">
              <Column bgColor="flex-9">
                <div className="flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6 lg:px-0">
                  <Heading as="h2" level="h3" color="success">
                    {t("pages:players.sections.personalStatistics.title")}
                  </Heading>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t(
                            "pages:players.sections.personalStatistics.items.0",
                          ),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                        {
                          text: t(
                            "pages:players.sections.personalStatistics.items.1",
                          ),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                        {
                          text: t(
                            "pages:players.sections.personalStatistics.items.2",
                          ),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                      ]}
                    />
                  </article>
                </div>
              </Column>
              <Column className="flex-3 items-center">
                <img
                  width={133}
                  height={117}
                  src={PLAYERS_PAGE.sections.marketplace?.photo}
                  alt="marketplace image"
                  className="aspect-auto object-cover w-72 h-72 lg:w-full lg:h-full"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth>
        <RowsContent>
          <Row>
            <ColumnContent className="gap-6 py-10 lg:py-20">
              <Column
                className="flex-3 md:order-0 px-6 lg:px-0 items-center"
                order="1"
              >
                <Image
                  width={133}
                  height={117}
                  src={PLAYERS_PAGE.sections.professionalProfile?.photo}
                  alt="professional profile image"
                  className="aspect-auto lg:object-cover w-64 h-60 lg:w-full lg:h-full"
                />
              </Column>
              <Column className="flex-9">
                <div className="lg:pl-20 flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6">
                  <Heading as="h2" level="h3" color="white">
                    {t("pages:players.sections.professionalProfile.title")}
                  </Heading>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      itemColor="white"
                      items={[
                        {
                          text: t(
                            "pages:players.sections.professionalProfile.items.0",
                          ),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                        {
                          text: t(
                            "pages.players.sections.professionalProfile.items.1",
                          ),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                        {
                          text: t(
                            "pages.players.sections.professionalProfile.items.2",
                          ),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                      ]}
                    />
                  </article>
                </div>
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth bgColor="bg-white">
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20">
              <Column className="flex-6">
                <div className="flex-grow flex flex-col space-y-5 lg:space-y-10 justify-center px-6 lg:px-0">
                  <Heading as="h2" level="h3" color="success">
                    {t("pages:players.sections.marketplace.title")}
                  </Heading>
                  <article>
                    <FeatureList
                      align="center"
                      iconSize={20}
                      items={[
                        {
                          text: t("pages:players.sections.marketplace.items.0"),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                        {
                          text: t("pages:players.sections.marketplace.items.1"),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                        {
                          text: t("pages:players.sections.marketplace.items.2"),
                          iconSrc: listItemImage,
                          iconAlt: "Añadir alt",
                        },
                      ]}
                    />
                  </article>
                </div>
              </Column>
              <Column className="flex-5">
                <img
                  src={conectTeams}
                  alt=""
                  className="aspect-auto object-cover w-80 h-60 relative top-10 left-3 lg:top-auto lg:left-auto lg:w-full lg:h-full"
                />
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
      <Container fullWidth>
        <RowsContent>
          <Row>
            <ColumnContent className="py-10 lg:py-20">
              <Column bgColor="flex-1">
                <div className="flex flex-col">
                  <Heading as="h2" level="h3" color="white" align={"center"}>
                    {t("pages:players.sections.subscriptionPlans.title")}
                  </Heading>
                  <article className="py-10 lg:py-20">
                    {/* Explore subscription plans */}
                    <PlanComparisonTable
                      tiers={PLAYERS_PAGE.sections.subscriptionPlans.tiers}
                      features={
                        PLAYERS_PAGE.sections.subscriptionPlans.features
                      }
                    />
                  </article>
                </div>
              </Column>
            </ColumnContent>
          </Row>
        </RowsContent>
      </Container>
    </Fragment>
  );
};

export default PlayersPage;
