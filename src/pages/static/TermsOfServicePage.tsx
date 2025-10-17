import type { FC } from "react";
import { TERMS_OF_SERVICE_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";
import { useTranslation } from "react-i18next";

const TermsOfServicePage: FC = () => {
  const { t } = useTranslation();
  const { updatedAt, sections } = TERMS_OF_SERVICE_STATIC_PAGE;
  return (
    <LegalPageLayout
      title={t("legal.terms.title", { defaultValue: "Términos del servicio" })}
      updatedAt={updatedAt}
      sections={sections}
      breadcrumbs={[
        { label: t("nav.home", { defaultValue: "Inicio" }), href: "/" },
        { label: t("footer.legal", { defaultValue: "Legal" }) },
        { label: t("footer.terms", { defaultValue: "Términos" }) },
      ]}
    />
  );
};
export default TermsOfServicePage;
