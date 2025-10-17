import type { FC } from "react";
import { Heading, FeatureList, LandingPageTemplate } from "@/components";
import { TEAMS_PAGE } from "@/config";
import listItemImage from "@/assets/images/svg/list-item-image.svg";
import { useTranslation } from "react-i18next";

const TeamsPage: FC = () => {
  const { t } = useTranslation();
  return (
    <LandingPageTemplate
      className="flex flex-col bg-white text-black"
      hero={{
        images: TEAMS_PAGE.heroBgImages,
        title: t("pages.teams.hero.title", {
          defaultValue: TEAMS_PAGE.hero.title,
        }),
        description: t("pages.teams.hero.description", {
          defaultValue: TEAMS_PAGE.hero.description,
        }),
        ctas: TEAMS_PAGE.heroCtas?.map((c, idx) => ({
          ...c,
          label: t(`pages.teams.heroCtas.${idx}.label`, {
            defaultValue: c.label,
          }),
        })),
        heroContent: (
          <section className="w-9/12 mt-4 py-6 sm:max-h-auto sm:max-w-[512px] text-white bg-[#1C4020] rounded-2xl">
            <header>
              <p className="text-sm sm:text-base md:text-lg px-6 text-white text-center">
                {t("pages.teams.hero.list.title", {
                  defaultValue: "Lo esencial para tu equipo",
                })}
              </p>
            </header>
            <article className="flex flex-col py-2">
              <FeatureList
                items={[
                  {
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        {t("pages.teams.hero.list.items.0", {
                          defaultValue: "Planificación de entrenamientos",
                        })}
                      </span>
                    ),
                    iconSrc: listItemImage,
                    iconAlt: "Planificación",
                  },
                  {
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        {t("pages.teams.hero.list.items.1", {
                          defaultValue: "Análisis de rendimiento",
                        })}
                      </span>
                    ),
                    iconSrc: listItemImage,
                    iconAlt: "Rendimiento",
                  },
                  {
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        {t("pages.teams.hero.list.items.2", {
                          defaultValue: "Convocatorias y calendario",
                        })}
                      </span>
                    ),
                    iconSrc: listItemImage,
                    iconAlt: "Convocatorias",
                  },
                ]}
                listClassName="px-6"
                spacing="base"
                padding="base"
                align="center"
                iconSize={32}
                iconClassName="w-8 h-8 sm:w-14 sm:h-14"
                itemColor="white"
              />
            </article>
          </section>
        ),
      }}
    >
      {/* Contenido de la página */}
      <section className="teams-page my-20">
        <article>
          <header>
            <Heading as="h2" level="h2" className="px-4">
              {t("pages.teams.title", { defaultValue: "Equipos" })}
            </Heading>
          </header>
          <section className="py-4">
            <p className="px-4">
              {t("pages.teams.description", {
                defaultValue:
                  "Página de Equipos: Aquí puedes encontrar información sobre los diferentes equipos, sus jugadores, estadísticas y próximos partidos. Mantente al día con las últimas novedades de tus equipos favoritos.",
              })}
            </p>
            <div className="px-4 mt-4 max-w-2xl">
              <FeatureList
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
                spacing="base"
                padding="base"
                align="center"
                iconSize={20}
              />
            </div>
          </section>
        </article>
      </section>
    </LandingPageTemplate>
  );
};

export default TeamsPage;
