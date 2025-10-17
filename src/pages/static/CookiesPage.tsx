import type { FC } from "react";
import { COOKIES_POLICY_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";
import { useTranslation } from "react-i18next";

const CookiesPage: FC = () => {
  const { t } = useTranslation();
  const { updatedAt, sections } = COOKIES_POLICY_STATIC_PAGE;
  return (
    <LegalPageLayout
      title={t("legal.cookies.title", { defaultValue: "Política de Cookies" })}
      updatedAt={updatedAt}
      sections={sections}
      breadcrumbs={[
        { label: t("nav.home", { defaultValue: "Inicio" }), href: "/" },
        { label: t("footer.legal", { defaultValue: "Legal" }) },
        { label: t("footer.cookies", { defaultValue: "Cookies" }) },
      ]}
    />
  );
};
export default CookiesPage;
