import type { FC } from "react";
import { COOKIES_POLICY_STATIC_PAGE } from "@/config";
import LegalPageLayout from "@/layouts/LegalPageLayout";
import { useTranslation } from "react-i18next";
import { LeadSectionTemplate, IntroSectionTemplate } from "@/components";

const CookiesPage: FC = () => {
  const { t } = useTranslation();
  const { updatedAt, sections } = COOKIES_POLICY_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        title={t("legal.cookies.title", {
          defaultValue: "Política de Cookies",
        })}
        description={t("legal.cookies.intro", {
          defaultValue:
            "Lee nuestra política de cookies para entender cómo utilizamos las cookies y tecnologías similares en nuestra plataforma.",
        })}
      />

      <LeadSectionTemplate color="success">
        <LegalPageLayout
          updatedAt={updatedAt}
          sections={sections}
          breadcrumbs={[
            { label: t("nav.home", { defaultValue: "Inicio" }), href: "/" },
            { label: t("footer.legal", { defaultValue: "Legal" }) },
            { label: t("footer.cookies", { defaultValue: "Cookies" }) },
          ]}
        />
      </LeadSectionTemplate>
    </>
  );
};
export default CookiesPage;
