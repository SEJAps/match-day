import type { FC } from "react";
import { PRIVACY_POLICY_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";

const PrivacyPolicyPage: FC = () => {
  const { updatedAt, sections } = PRIVACY_POLICY_STATIC_PAGE;
  return (
    <LegalPageLayout
      title="Política de Privacidad"
      updatedAt={updatedAt}
      sections={sections}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Legal" },
        { label: "Privacidad" },
      ]}
    />
  );
};
export default PrivacyPolicyPage;
