import type { FC } from "react";
import { TERMS_OF_SERVICE_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";

const TermsOfServicePage: FC = () => {
  const { updatedAt, sections } = TERMS_OF_SERVICE_STATIC_PAGE;
  return (
    <LegalPageLayout
      title="Términos del servicio"
      updatedAt={updatedAt}
      sections={sections}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Legal" },
        { label: "Términos" },
      ]}
    />
  );
};
export default TermsOfServicePage;
