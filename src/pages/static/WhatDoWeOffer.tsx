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
      <RowsContent className="gap-6 lg:gap-20 pt-10 lg:pt-20">
        <Row className="px-6">
          <article className="flex flex-col space-y-6">
            <Heading as="h2" level="h2" color="white" align={"center"}>
              {t("pages:services.intro.title")}
            </Heading>
            <Text
              size="2xl"
              color="white"
              align="center"
              className="max-w-4xl mx-auto"
            >
              {t("pages:services.intro.description")}
            </Text>
          </article>
        </Row>
        <Row className="pb-10 lg:pb-20">
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
