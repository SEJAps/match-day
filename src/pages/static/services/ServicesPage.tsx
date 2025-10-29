import { IntroSectionTemplate } from "@/components";
import type { FC } from "react";
import { useTranslation } from "react-i18next";
import WhatDoWeOffer from "../WhatDoWeOffer";
import ServicesForEveryNeeds from "../ServicesForEveryNeed";
import ExploreSubscriptionPlans from "../ExploreSubscriptionPlans";

const ServicesPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <IntroSectionTemplate
        title={t("pages:services.intro.title")}
        description={t("pages:services.intro.description")}
      />
      <WhatDoWeOffer />
      <ServicesForEveryNeeds />
      <ExploreSubscriptionPlans />
    </>
  );
};
export default ServicesPage;
