import type { FC } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { NOT_FOUND_STATIC_PAGE } from "@/config";
import { IntroSectionTemplate } from "@/components";

const NotFoundPage: FC = () => {
  const { t } = useTranslation();
  const { code, message, ctaHref, ctaLabel } = NOT_FOUND_STATIC_PAGE;
  return (
    <>
      <IntroSectionTemplate
        title={t("components.notFound.title", { defaultValue: String(code) })}
        description={t("components.notFound.description", {
          defaultValue: message,
        })}
      >
        <section className="container mx-auto px-6 text-center">
          <Link
            to={ctaHref}
            className="inline-block bg-success/50 hover:bg-success/90 transition-colors px-6 py-3 rounded font-medium"
          >
            {t("components.notFound.cta", { defaultValue: ctaLabel })}
          </Link>
        </section>
      </IntroSectionTemplate>
    </>
  );
};
export default NotFoundPage;
