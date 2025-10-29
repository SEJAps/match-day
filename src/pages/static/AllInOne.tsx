import { FeatureList, Heading, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { MATCHDAY_PAGE } from "@/config/pages/matchday";
import platform from "@/assets/images/png/platform.png";
import { useTranslation } from "react-i18next";

const AllInOne: React.FC = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default AllInOne;
