import {
  Button,
  Heading,
  HeadlineSectionTemplate,
  Image,
  IntroSectionTemplate,
  LeadSectionTemplate,
  List,
  ListItem,
  PlanComparisonTable,
  ValuePropSectionTemplate,
} from "@/components";
import { PLAYERS_PAGE } from "@/config";
import { cn } from "@/utils/cn";
import { Fragment, type FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import conectTeams from "@/assets/images/png/conecta-equipos.png";
import BtnAccess from "@/components/molecules/BtnAccess";

const PlayersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {/* Hero Section */}
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
            <BtnAccess label={t("pages.players.heroCtas.0.label")} />
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
          className={`rounded-lg bg-secondary/50 grid gap-4 max-w-80 mx-auto md:grid-cols-2 p-6 md:p-6 md:min-w-[648px] min-h-34 `}
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
      {/* Marketplace */}
      <LeadSectionTemplate>
        <section className="flex flex-col gap-6">
          <article className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-6 ">
            <section className="md:col-start-1 md:col-end-5 flex flex-col gap-4">
              <header>
                <Heading
                  as="h2"
                  level="h1"
                  className="text-success text-center md:text-left"
                >
                  {t("pages.players.sections.marketplace.title", {
                    defaultValue:
                      "Conéctate con equipos a través del marketplace de fichajes.",
                  })}
                </Heading>
              </header>
              <article className="order-1 md:flex-4 flex flex-col items-center justify-center">
                <ul className="list-disc list-inside space-y-4 p-8 md:p-4 w-full text-dark">
                  {PLAYERS_PAGE.sections.marketplace?.items.map((item, idx) => (
                    <li key={idx}>
                      {t(`pages.players.sections.marketplace.items.${idx}`, {
                        defaultValue: item,
                      })}
                    </li>
                  ))}
                </ul>
              </article>
            </section>
            <section className="flex md:col-start-5 md:col-end-7 relative">
              <img
                src={PLAYERS_PAGE.sections.marketplace?.photo}
                alt="marketplace image"
                className="aspect-auto max-w-72 md:w-full md:h-full object-cover"
              />
            </section>
          </article>
        </section>
      </LeadSectionTemplate>
      {/* Professional profile */}
      <HeadlineSectionTemplate bg="bg-success" textColor="white" color="white">
        <section className="flex flex-col gap-6">
          <article className="flex-1 grid md:grid-cols-6 gap-40 ">
            <section className="flex md:col-start-1 md:col-end-3">
              <img
                src={PLAYERS_PAGE.sections.professionalProfile?.photo}
                alt="professional profile image"
                className="aspect-auto max-w-72 md:w-full md:h-full object-cover"
              />
            </section>
            <section className="md:col-start-3 md:col-end-7 flex flex-col gap-4">
              <header>
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
              </header>
              <article className="order-1 flex-4 flex flex-col items-center justify-center">
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
              </article>
            </section>
          </article>
        </section>
      </HeadlineSectionTemplate>
      <HeadlineSectionTemplate bg="bg-white" textColor="white" color="white">
        <section className="flex flex-col gap-6">
          <article className="flex-1 grid md:grid-cols-6 gap-y-6 ">
            <section className="md:col-start-1 md:col-end-5 flex flex-col gap-4">
              <header>
                <Heading as="h2" level="h1">
                  Conéctate con equipos a través del marketplace de fichajes.
                </Heading>
              </header>
              <article>
                <List className="list-disc list-inside space-y-2">
                  <ListItem className="text-xl">
                    Descubre qué equipos están buscando jugadores como tú.
                  </ListItem>
                  <ListItem className="text-xl">
                    Postúlate a oportunidades reales o deja que los equipos te
                    encuentren.
                  </ListItem>
                  <ListItem className="text-xl">
                    Tú decides cuándo dar el salto y a dónde.
                  </ListItem>
                </List>
              </article>
            </section>
            <section className="flex md:col-start-5 md:col-end-7 relative">
              <img
                src={conectTeams}
                width={512}
                height={512}
                alt=""
                className=" aspect-auto max-w-72 md:w-full md:h-full scale-150 object-cover"
              />
            </section>
            <aside className="max-w-xl mx-auto md:col-start-1 md:col-end-7 flex items-center justify-center">
              <Heading as="h3" level="h2" align="center">
                <strong className="text-success">
                  ¿Estás listo para tu Match Day?
                </strong>
              </Heading>
            </aside>
          </article>
        </section>
      </HeadlineSectionTemplate>
      <ValuePropSectionTemplate
        title={t("pages.players.sections.subscriptionPlans.title", {
          defaultValue: "Planes de subscripción.",
        })}
      >
        {/* Explore subscription plans */}
        <PlanComparisonTable
          tiers={PLAYERS_PAGE.sections.subscriptionPlans.tiers}
          features={PLAYERS_PAGE.sections.subscriptionPlans.features}
        />
      </ValuePropSectionTemplate>
    </Fragment>
  );
};

export default PlayersPage;
