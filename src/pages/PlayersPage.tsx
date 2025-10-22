import {
  Button,
  Heading,
  HeadlineSectionTemplate,
  Image,
  IntroSectionTemplate,
  LeadSectionTemplate,
  List,
  ListItem,
} from "@/components";
import { PLAYERS_PAGE } from "@/config";
import { cn } from "@/utils/cn";
import { Fragment, type FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

const PlayersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <IntroSectionTemplate
        size="7xl"
        title={t("pages.players.hero.title", {
          defaultValue: PLAYERS_PAGE.hero.title,
        })}
        description={t("pages.players.hero.description", {
          defaultValue: PLAYERS_PAGE.hero.description,
        })}
        footer={
          <section className="w-full flex justify-center gap-12">
            <Button variant="success">
              {t("pages.players.heroCtas.0.label", {
                defaultValue: "Regístrate",
              })}
            </Button>
            <Button variant="view" className="p-0">
              <NavLink
                to="/prices"
                className="inline-flex items-center justify-center w-full h-full p-4"
              >
                {t("pages.players.heroCtas.1.label", {
                  defaultValue: "Ver planes",
                })}
              </NavLink>
            </Button>
          </section>
        }
      >
        <List
          ordered={true}
          className={`rounded-lg bg-[#10B981]/20 grid gap-4 max-w-80 mx-auto md:grid-cols-2 p-6 md:p-6 md:min-w-[648px] min-h-34 `}
        >
          {PLAYERS_PAGE.hero
            .list!.items.sort((a, b) => a.text.localeCompare(b.text))
            .map((item, idx) => (
              <ListItem key={idx}>
                <div className="flex gap-3 w-full items-center">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.text ?? ""}
                      className={cn("shrink-0")}
                      fit="contain"
                    />
                  )}
                  <span className="text-sm sm:text-base md:text-lg text-white">
                    {t(`pages.players.hero.list.items.${idx}.text`, {
                      defaultValue: item.text,
                    })}
                  </span>
                </div>
              </ListItem>
            )) ?? []}
        </List>
      </IntroSectionTemplate>
      <LeadSectionTemplate>
        <section className="w-full flex flex-col justify-between md:flex-row gap-4">
          <aside className="flex-4 flex flex-col items-center justify-center py-6">
            <Heading
              as="h2"
              level="h1"
              className="text-[#00BC7D] text-center md:text-left"
            >
              {t("pages.players.sections.marketplace.title", {
                defaultValue:
                  "Conéctate con equipos a través del marketplace de fichajes.",
              })}
            </Heading>
            <ul className="list-disc list-inside space-y-4 p-8 md:p-4 w-full text-black">
              {PLAYERS_PAGE.sections.marketplace?.items.map((item, idx) => (
                <li key={idx}>
                  {t(`pages.players.sections.marketplace.items.${idx}`, {
                    defaultValue: item,
                  })}
                </li>
              ))}
            </ul>
          </aside>
          <article className="flex-1 flex items-center justify-center p-4">
            <img
              src={PLAYERS_PAGE.sections.marketplace?.photo}
              alt="marketplace image"
              className="aspect-auto w-96 h-56 object-contain"
            />
          </article>
        </section>
      </LeadSectionTemplate>
      <HeadlineSectionTemplate
        bg="bg-[#00BC7D]"
        textColor="white"
        color="white"
      >
        <section className="w-full flex flex-col md:flex-row gap-4">
          <aside className="order-1 flex-4 flex flex-col items-center justify-center py-6">
            <Heading
              as="h2"
              level="h1"
              className="text-center md:text-left text-white"
            >
              {t("pages.players.sections.professionalProfile.title", {
                defaultValue:
                  "Destaca con tu perfil profesional incluyendo datos y vídeos.",
              })}
            </Heading>
            <ul className="list-disc list-inside space-y-4 p-8 md:p-4 w-full">
              {PLAYERS_PAGE.sections.professionalProfile?.items.map(
                (item, idx) => (
                  <li key={idx}>
                    {t(
                      `pages.players.sections.professionalProfile.items.${idx}`,
                      {
                        defaultValue: item,
                      },
                    )}
                  </li>
                ),
              )}
            </ul>
          </aside>
          <article className="order-0 flex-1 flex items-center justify-center p-4">
            <img
              src={PLAYERS_PAGE.sections.professionalProfile?.photo}
              alt="professional profile image"
              className="aspect-auto w-96 h-56 object-contain"
            />
          </article>
        </section>
      </HeadlineSectionTemplate>
      <article className="py-20">
        <Heading as="h2" level="h1" align="center" className="mb-12 text-white">
          {t("pages.players.sections.subscriptionPlans.title", {
            defaultValue: "Planes de subscripción.",
          })}
        </Heading>
        <section className="grid grid-cols-3 max-w-7xl mx-auto ">
          <article className="flex flex-col">
            <div className="flex flex-col justify-end pb-4 text-white border-b border-gray-400 h-36">
              <strong>Perfil</strong>
            </div>
            <div className="flex flex-col">
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center">
                Creación de perfil (foto, posición, trayectoria...)
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center">
                Registro de estadísticas personales básicas (goles, minutos,
                partidos)
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center">
                Estadísticas avanzadas (pases, duelos, recuperaciones, etc.)
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center">
                Carga de fotos y vídeos de mejores jugadas en el perfil
              </small>
            </div>
          </article>
          <article className="flex flex-col">
            <aside>
              <div className="flex flex-col items-center gap-2 pb-4 text-white  border-b border-gray-400 h-36">
                <strong>Básico</strong>
                <small>0€</small>
                <small>
                  Para jugadores que quieren iniciarse en la plataforma.
                </small>
                <Button variant="success">
                  <small>Empezar</small>
                </Button>
              </div>
            </aside>
            <div className="flex flex-col">
              <small className="border-b border-gray-400 pl-6  min-h-12 inline-flex items-center justify-center">
                x
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                10
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                Light
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                10
              </small>
            </div>
          </article>
          <article className="flex flex-col">
            <aside>
              <div className="flex flex-col gap-2 items-center  text-white  border-b border-gray-400 h-36">
                <strong>Pro</strong>
                <small>40€</small>
                <small>
                  Para jugadores que quieren iniciarse en la plataforma.
                </small>
                <Button variant="success">
                  <small>Empezar</small>
                </Button>
              </div>
            </aside>
            <div className="flex flex-col text-center">
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                v
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                25
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                v
              </small>
              <small className="border-b border-gray-400 pl-6 min-h-12 inline-flex items-center justify-center">
                25
              </small>
            </div>
          </article>
        </section>
      </article>
    </Fragment>
  );
};

export default PlayersPage;
