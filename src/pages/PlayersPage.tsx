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
                      }
                    )}
                  </li>
                )
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Tabla: visible en tablet/desktop */}
          <div className="overflow-x-auto hidden md:block">
            <table className="w-full min-w-[720px] border-collapse text-white">
              <thead>
                <tr className="bg-transparent">
                  <th className="text-left p-4 border-b border-gray-300/60 align-bottom">
                    Perfil
                  </th>
                  <th className="p-4 border-b border-gray-300/60">
                    <div className="flex flex-col items-start gap-2 max-w-xs">
                      <strong>Básico</strong>
                      <small>0€/año</small>
                      <small className="text-left opacity-80 md:[display:-webkit-box] md:[-webkit-line-clamp:2] md:[-webkit-box-orient:vertical] md:overflow-hidden">
                        Para jugadores que quieren iniciarse en la plataforma.
                      </small>
                      <Button variant="view">
                        <small>Empezar</small>
                      </Button>
                    </div>
                  </th>
                  <th className="p-4 border-b border-gray-300/60">
                    <div className="flex flex-col items-start gap-2 max-w-xs">
                      <strong>Pro</strong>
                      <small>40€/año</small>
                      <small className="text-left opacity-80 md:[display:-webkit-box] md:[-webkit-line-clamp:2] md:[-webkit-box-orient:vertical] md:overflow-hidden">
                        Para jugadores que quieren iniciarse en la plataforma.
                      </small>
                      <Button variant="success">
                        <small>Empezar</small>
                      </Button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300/40">
                  <td className="p-4">
                    Creación de perfil (foto, posición, trayectoria...)
                  </td>
                  <td className="p-4 text-center">x</td>
                  <td className="p-4 text-center">v</td>
                </tr>
                <tr className="border-b border-gray-300/40">
                  <td className="p-4">
                    Registro de estadísticas personales básicas (goles, minutos,
                    partidos)
                  </td>
                  <td className="p-4 text-center">10</td>
                  <td className="p-4 text-center">25</td>
                </tr>
                <tr className="border-b border-gray-300/40">
                  <td className="p-4">
                    Estadísticas avanzadas (pases, duelos, recuperaciones, etc.)
                  </td>
                  <td className="p-4 text-center">Light</td>
                  <td className="p-4 text-center">v</td>
                </tr>
                <tr>
                  <td className="p-4">
                    Carga de fotos y vídeos de mejores jugadas en el perfil
                  </td>
                  <td className="p-4 text-center">10</td>
                  <td className="p-4 text-center">25</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* Vista móvil: tarjetas apiladas */}
          <div className="md:hidden grid gap-6">
            {/* Básico */}
            <article className="rounded-lg border border-gray-300/40 bg-transparent p-4 text-white">
              <header className="flex flex-col items-start gap-1 mb-3">
                <h3 className="text-lg font-semibold">Básico</h3>
                <p className="text-sm opacity-80">0€/año</p>
                <p className="text-sm opacity-80">
                  Para jugadores que quieren iniciarse en la plataforma.
                </p>
              </header>
              <ul className="divide-y divide-gray-300/30">
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Creación de perfil (foto, posición, trayectoria...)
                  </span>
                  <span className="text-sm font-semibold">x</span>
                </li>
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Registro de estadísticas personales básicas (goles, minutos,
                    partidos)
                  </span>
                  <span className="text-sm font-semibold">10</span>
                </li>
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Estadísticas avanzadas (pases, duelos, recuperaciones, etc.)
                  </span>
                  <span className="text-sm font-semibold">Light</span>
                </li>
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Carga de fotos y vídeos de mejores jugadas en el perfil
                  </span>
                  <span className="text-sm font-semibold">10</span>
                </li>
              </ul>
              <footer className="mt-4">
                <Button variant="view" className="w-full">
                  <small>Empezar</small>
                </Button>
              </footer>
            </article>
            {/* Pro */}
            <article className="rounded-lg border border-gray-300/40 bg-transparent p-4 text-white">
              <header className="flex flex-col items-start gap-1 mb-3">
                <h3 className="text-lg font-semibold">Pro</h3>
                <p className="text-sm opacity-80">40€/año</p>
                <p className="text-sm opacity-80">
                  Para jugadores que quieren iniciarse en la plataforma.
                </p>
              </header>
              <ul className="divide-y divide-gray-300/30">
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Creación de perfil (foto, posición, trayectoria...)
                  </span>
                  <span className="text-sm font-semibold">v</span>
                </li>
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Registro de estadísticas personales básicas (goles, minutos,
                    partidos)
                  </span>
                  <span className="text-sm font-semibold">25</span>
                </li>
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Estadísticas avanzadas (pases, duelos, recuperaciones, etc.)
                  </span>
                  <span className="text-sm font-semibold">v</span>
                </li>
                <li className="py-3 flex items-start justify-between gap-4">
                  <span className="text-sm">
                    Carga de fotos y vídeos de mejores jugadas en el perfil
                  </span>
                  <span className="text-sm font-semibold">25</span>
                </li>
              </ul>
              <footer className="mt-4">
                <Button variant="success" className="w-full">
                  <small>Empezar</small>
                </Button>
              </footer>
            </article>
          </div>
        </div>
      </article>
    </Fragment>
  );
};

export default PlayersPage;
