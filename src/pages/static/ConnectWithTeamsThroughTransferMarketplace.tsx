import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { useTranslation } from "react-i18next";
import { FeatureList, Heading } from "@/components";
import conectTeams from "@/assets/images/png/conecta-equipos.png";
import listItemImage from "@/assets/images/svg/list-item-image.svg";

const ConnectWithTeamsThroughTransferMarketplace: React.FC = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default ConnectWithTeamsThroughTransferMarketplace;
