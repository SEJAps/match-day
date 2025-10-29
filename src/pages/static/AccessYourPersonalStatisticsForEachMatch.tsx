import { FeatureList, Heading } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { PLAYERS_PAGE } from "@/config";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { useTranslation } from "react-i18next";

const AccessYourPersonalStatisticsForEachMatch: React.FC = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default AccessYourPersonalStatisticsForEachMatch;
