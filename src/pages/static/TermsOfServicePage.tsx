import type { FC } from "react";
import { TERMS_OF_SERVICE_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";
import { useTranslation } from "react-i18next";
import { IntroSectionTemplate, LeadSectionTemplate } from "@/components";

const TermsOfServicePage: FC = () => {
  const { t } = useTranslation();
  const { updatedAt, sections } = TERMS_OF_SERVICE_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        title={t("legal.terms.title", {
          defaultValue: "Términos del servicio",
        })}
        description={t("legal.terms.intro", {
          defaultValue:
            "Lee nuestros términos del servicio para entender las reglas y regulaciones que rigen el uso de nuestra plataforma.",
        })}
      ></IntroSectionTemplate>
      <LeadSectionTemplate>
        <LegalPageLayout
          updatedAt={updatedAt}
          sections={sections}
          breadcrumbs={[
            { label: t("nav.home", { defaultValue: "Inicio" }), href: "/" },
            { label: t("footer.legal", { defaultValue: "Legal" }) },
            { label: t("footer.terms", { defaultValue: "Términos" }) },
          ]}
        />
      </LeadSectionTemplate>
    </>
  );
};
export default TermsOfServicePage;
