import { Heading, PlanComparisonTable } from "@/components";
import { Container } from "@/components/atoms/Container";
import { Column } from "@/components/molecules/Column";
import { Row } from "@/components/molecules/Row";
import { ColumnContent } from "@/components/organisms/ColumnContent";
import { RowsContent } from "@/components/organisms/RowsContent";
import { PLAYERS_PAGE } from "@/config";
import { useTranslation } from "react-i18next";

const ExploreSubscriptionPlans: React.FC = () => {
  const { t } = useTranslation();
  return (
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
                    features={PLAYERS_PAGE.sections.subscriptionPlans.features}
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

export default ExploreSubscriptionPlans;
