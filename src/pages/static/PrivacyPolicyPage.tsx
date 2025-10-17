import type { FC } from "react";
import { PRIVACY_POLICY_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";
import { useTranslation } from "react-i18next";

const PrivacyPolicyPage: FC = () => {
  const { t } = useTranslation();
  const { updatedAt, sections } = PRIVACY_POLICY_STATIC_PAGE;
  return (
    <LegalPageLayout
      title={t("legal.privacy.title", {
        defaultValue: "Política de Privacidad",
      })}
      updatedAt={updatedAt}
      sections={sections}
      breadcrumbs={[
        { label: t("nav.home", { defaultValue: "Inicio" }), href: "/" },
        { label: t("footer.legal", { defaultValue: "Legal" }) },
        { label: t("footer.privacy", { defaultValue: "Privacidad" }) },
      ]}
    />
  );
};
export default PrivacyPolicyPage;
