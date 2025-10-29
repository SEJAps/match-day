import { FeatureList, Heading, Image } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { useTranslation } from "react-i18next";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { PLAYERS_PAGE } from "@/config";

const StandOutWithProfessionalProfile: React.FC = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default StandOutWithProfessionalProfile;
