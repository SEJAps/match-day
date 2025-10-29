import { FeatureList, Heading, Text } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { MATCHDAY_PAGE } from "@/config/pages/matchday";
import useAppPng from "@/assets/images/png/bg-use-app.png";
import { useTranslation } from "react-i18next";

const AllInOne: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container fullWidth bgColor="bg-white">
      <RowsContent className="gap-6 py-10 lg:py-20">
        <Row className="px-6 pt-10 lg:pt-20">
          <article>
            <Heading as="h2" level="h2" color="success" align={"center"}>
              {t("pages:matchday.intro.heading")}
            </Heading>
            <div className="max-w-6xl mx-auto p-6">
              <Text color="dark" size="2xl" align="center">
                {t("pages:matchday.intro.paragraph")}
              </Text>
            </div>
          </article>
        </Row>
        <Row className="px-6">
          <ColumnContent className="gap-6 pt-5 sm:pt-10">
            <Column className="flex-9">
              <article className="flex flex-col gap-6 ">
                <header>
                  <Heading
                    as="h3"
                    level="h3"
                    weight="semibold"
                    className="text-success"
                  >
                    {t("pages:matchday.features.heading")}
                  </Heading>
                  <Text size="2xl" className="text-neutral-700">
                    {t("pages:matchday.features.description")}
                  </Text>
                </header>

                <article>
                  <FeatureList
                    itemClassName="text-xl"
                    align="center"
                    items={MATCHDAY_PAGE.featuresSection.features}
                  />
                </article>
              </article>
            </Column>
            <Column className="flex-3 flex justify-center items-center">
              <img
                width={492}
                height={276}
                src={useAppPng}
                alt={useAppPng}
                className="aspect-auto w-full h-64 lg:h-96 object-cover rounded-2xl shadow-xl shadow-dark/30"
              />
            </Column>
          </ColumnContent>
        </Row>
      </RowsContent>
    </Container>
  );
};

export default AllInOne;
