import type { FC } from "react";
import { PRIVACY_POLICY_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";
import { useTranslation } from "react-i18next";
import { IntroSectionTemplate, LeadSectionTemplate } from "@/components";

const PrivacyPolicyPage: FC = () => {
  const { t } = useTranslation();
  const { updatedAt, sections } = PRIVACY_POLICY_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        title={t("legal.privacy.title", {
          defaultValue: "Política de Privacidad",
        })}
        description={t("legal.privacy.intro", {
          defaultValue:
            "Consulta nuestra política de privacidad para entender cómo recopilamos, usamos y protegemos tu información personal en nuestra plataforma.",
        })}
      ></IntroSectionTemplate>
      <LeadSectionTemplate>
        <LegalPageLayout
          updatedAt={updatedAt}
          sections={sections}
          breadcrumbs={[
            { label: t("nav.home", { defaultValue: "Inicio" }), href: "/" },
            { label: t("footer.legal", { defaultValue: "Legal" }) },
            { label: t("footer.privacy", { defaultValue: "Privacidad" }) },
          ]}
        />
      </LeadSectionTemplate>
    </>
  );
};
export default PrivacyPolicyPage;
