import { FeatureList, LandingPageTemplate } from "@/components";
import { PLAYERS_PAGE } from "@/config";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const PlayersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <LandingPageTemplate
      className="flex flex-col bg-white text-black"
      hero={{
        images: PLAYERS_PAGE.heroBgImages,
        title: t("pages.players.hero.title", {
          defaultValue: PLAYERS_PAGE.hero.title,
        }),
        description: t("pages.players.hero.description", {
          defaultValue: PLAYERS_PAGE.hero.description,
        }),
        ctas: PLAYERS_PAGE.heroCtas?.map((c, idx) => ({
          ...c,
          label: t(`pages.players.heroCtas.${idx}.label`, {
            defaultValue: c.label,
          }),
        })),
        heroContent: (
          <section className="w-9/12 mt-4 py-6 sm:max-h-auto sm:max-w-[512px] text-white bg-[#1C4020] rounded-2xl">
            <p className="text-sm sm:text-base md:text-lg px-6 text-white text-center">
              {t("pages.players.hero.list.title", {
                defaultValue: PLAYERS_PAGE.hero.list?.title ?? "",
              })}
            </p>
            <article className="flex flex-col py-2">
              <FeatureList
                items={
                  PLAYERS_PAGE.hero.list?.items.map((item, idx) => ({
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        {t(`pages.players.hero.list.items.${idx}.text`, {
                          defaultValue: item.text,
                        })}
                      </span>
                    ),
                    iconSrc: item.icon,
                    iconAlt: t(`pages.players.hero.list.items.${idx}.text`, {
                      defaultValue: item.text,
                    }),
                  })) ?? []
                }
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
      <section className="flex flex-col sm:mt-28">
        <article className="flex flex-col w-full max-w-7xl mx-auto mt-20">
          <header>
            <h2 className="px-4">
              {t("pages.players.sections.0.title", {
                defaultValue:
                  "Accede a tus estadísticas personales de cada partido.",
              })}
            </h2>
          </header>
          <section></section>
        </article>
        <article className="flex flex-col w-full max-w-7xl mx-auto my-20">
          <header>
            <h2 className="px-4">
              {t("pages.players.sections.1.title", {
                defaultValue:
                  "Destaca con tu perfil profesional incluyendo datos y vídeos.",
              })}
            </h2>
          </header>
          <section></section>
        </article>
        <article className="flex flex-col w-full max-w-7xl mx-auto my-20">
          <header>
            <h2 className="px-4">
              {t("pages.players.sections.2.title", {
                defaultValue:
                  "Conéctate con equipos a través del marketplace de fichajes.",
              })}
            </h2>
          </header>
          <section></section>
        </article>
      </section>
    </LandingPageTemplate>
  );
};

export default PlayersPage;
