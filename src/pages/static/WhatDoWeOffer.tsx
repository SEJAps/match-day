import { Heading, ServiceCard, Text } from "@/components";
import { Row } from "@/components/molecules/Row";
import { RowsContent } from "@/components/organisms/RowsContent";
import { useTranslation } from "react-i18next";
import { SERVICES_PAGE_CARDS } from "@/config";
import { Container } from "@/components/atoms/Container";

const WhatDoWeOffer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Container fullWidth>
      <RowsContent className="gap-6 py-10 lg:py-20">
        <Row className="px-6">
          <article>
            <Heading as="h2" level="h1" color="white" align={"center"}>
              {t("pages:services.intro.title")}
            </Heading>
            <Text className="text-center max-w-3xl mx-auto">
              {t("pages:services.intro.description")}
            </Text>
          </article>
        </Row>
        <Row className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-6">
            {SERVICES_PAGE_CARDS.map((c, idx) => (
              <ServiceCard
                key={c.title}
                title={t(`pages:services.cards.${idx}.title`)}
                text={t(`pages:services.cards.${idx}.text`)}
                icon={c.icon}
                ctaLabel={t(`pages:services.cards.${idx}.ctaLabel`)}
                ctaHref={c.ctaHref}
                variant={c.variant}
              />
            ))}
          </div>
        </Row>
      </RowsContent>
    </Container>
  );
};

export default WhatDoWeOffer;
