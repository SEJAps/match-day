import type { FC } from "react";
import { COOKIES_POLICY_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";

const CookiesPage: FC = () => {
  const { updatedAt, sections } = COOKIES_POLICY_STATIC_PAGE;
  return (
    <LegalPageLayout
      title="Política de Cookies"
      updatedAt={updatedAt}
      sections={sections}
      breadcrumbs={[
        { label: "Inicio", href: "/" },
        { label: "Legal" },
        { label: "Cookies" },
      ]}
    />
  );
};
export default CookiesPage;
