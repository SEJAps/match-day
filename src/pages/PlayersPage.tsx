import {
  Button,
  FeatureList,
  HeadlineSectionTemplate,
  IntroSectionTemplate,
  LeadSectionTemplate,
  ValuePropSectionTemplate,
} from "@/components";
import { PLAYERS_PAGE } from "@/config";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

const PlayersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <IntroSectionTemplate
        title={t("pages.players.hero.title", {
          defaultValue: PLAYERS_PAGE.hero.title,
        })}
        description={t("pages.players.hero.description", {
          defaultValue: PLAYERS_PAGE.hero.description,
        })}
        footer={
          <section className="w-full flex items-center justify-center gap-12">
            <Button variant="success">
              {t("pages.players.heroCtas.0.label", {
                defaultValue: "Regístrate",
              })}
            </Button>
            <Button variant="view">
              {t("pages.players.heroCtas.1.label", {
                defaultValue: "Ver planes",
              })}
            </Button>
          </section>
        }
      >
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
          listClassName="rounded-lg bg-[#10B981]/20 flex flex-col justify-between p-6 sm:p-6 min-h-72"
          iconClassName="w-12 h-12 sm:w-16 sm:h-16"
          align="center"
          iconSize={32}
          itemColor="white"
        />
      </IntroSectionTemplate>
      <LeadSectionTemplate
        title={t("pages.players.sections.0.title", {
          defaultValue: "Accede a tus estadísticas personales de cada partido.",
        })}
        description=""
      >
        <article className="bg-white text-neutral-800">
          <section className="flex gap-4">
            <ul className="flex-1 bg-neutral-50">
              <li>
                Lleva un registro detallado de tu rendimiento: minutos jugados,
                goles, asistencias, recuperaciones, pases, y mucho más.{" "}
              </li>
              <li>
                Conoce tus puntos fuertes y detecta dónde puedes mejorar.{" "}
              </li>
              <li>Toda tu evolución, organizada y accesible en un clic.</li>
            </ul>
            <article className="flex-1 bg-neutral-50">
              <img src="#" alt="asdadads" />
            </article>
          </section>
        </article>
      </LeadSectionTemplate>
      <HeadlineSectionTemplate
        title={t("pages.players.sections.1.title", {
          defaultValue:
            "Destaca con tu perfil profesional incluyendo datos y vídeos.",
        })}
        description="asdasdasd"
      >
        <article className="bg-white text-neutral-800">asdadasd</article>
      </HeadlineSectionTemplate>
      <ValuePropSectionTemplate
        title={t("pages.players.sections.2.title", {
          defaultValue:
            "Conéctate con equipos a través del marketplace de fichajes.",
        })}
        description="asdasdasd"
      >
        <article className="bg-white text-neutral-800">asdasdasd</article>
      </ValuePropSectionTemplate>
    </>
  );
};

export default PlayersPage;
