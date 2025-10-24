import type { FC } from "react";
import {
  FeatureList,
  IntroSectionTemplate,
  Button,
  Text,
  LeadSectionTemplate,
} from "@/components";
import { TEAMS_PAGE } from "@/config";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { useTranslation } from "react-i18next";

const TeamsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <IntroSectionTemplate
        size="4xl"
        gap="12"
        title={t("pages.teams.hero.title", {
          defaultValue: TEAMS_PAGE.hero.title,
        })}
        description={t("pages.teams.hero.subtitle", {
          defaultValue: TEAMS_PAGE.hero.subtitle,
        })}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages.teams.heroCtas.0.label", {
                defaultValue: "Regístrate",
              })}
            </Button>
            <Button variant="view">
              {t("pages.teams.heroCtas.1.label", {
                defaultValue: "Ver planes",
              })}
            </Button>
          </section>
        }
      >
        <Text className="bg-secondary/50 max-w-90 sm:max-w-[512px] mx-auto p-6 text-white rounded-2xl">
          {t("pages.teams.hero.description", {
            defaultValue: TEAMS_PAGE.hero.description,
          })}
        </Text>
      </IntroSectionTemplate>
      <LeadSectionTemplate
        title={t("pages.teams.title", { defaultValue: "Equipos" })}
        description={t("pages.teams.description", {
          defaultValue:
            "Página de Equipos: Aquí puedes encontrar información sobre los diferentes equipos, sus jugadores, estadísticas y próximos partidos. Mantente al día con las últimas novedades de tus equipos favoritos.",
        })}
      >
        <FeatureList
          align="center"
          iconSize={20}
          items={[
            {
              text: t("pages.teams.features.0", {
                defaultValue: "Planificación de entrenamientos",
              }),
              iconSrc: listItemImage,
              iconAlt: "Planificación",
            },
            {
              text: t("pages.teams.features.1", {
                defaultValue: "Análisis de rendimiento",
              }),
              iconSrc: listItemImage,
              iconAlt: "Rendimiento",
            },
            {
              text: t("pages.teams.features.2", {
                defaultValue: "Convocatorias y calendario",
              }),
              iconSrc: listItemImage,
              iconAlt: "Convocatorias",
            },
          ]}
        />
      </LeadSectionTemplate>
    </>
  );
};

export default TeamsPage;
