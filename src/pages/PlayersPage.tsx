import {
  Button,
  Heading,
  HeadlineSectionTemplate,
  Image,
  IntroSectionTemplate,
  LeadSectionTemplate,
  List,
  ListItem,
  ValuePropSectionTemplate,
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
        size="4xl"
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
          <aside className="order-1 flex-4 flex flex-col items-center justify-center py-6  ml-14">
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
      <ValuePropSectionTemplate>
        <article className="bg-white text-neutral-800">
          <Heading as="h2" level="h1" align="center" className="mb-6">
            {t("pages.players.sections.subscriptionPlans.title", {
              defaultValue: "Planes de subscripción.",
            })}
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
            reiciendis ad dolorum doloribus doloremque obcaecati deleniti
            corporis totam perspiciatis ab at quam dolorem odit, veritatis
            cumque laboriosam ea quae tempore numquam eius in? Maiores dolorem
            minima quisquam voluptatibus reprehenderit culpa ex veniam error qui
            laborum optio asperiores possimus odit, saepe nisi distinctio alias
            sequi ducimus cupiditate iure quis eligendi vel libero cum. Dolorum
            facilis, numquam quisquam vero eaque reprehenderit amet sint cum
            accusantium quam architecto nisi, adipisci accusamus, odit sunt
            cupiditate voluptates? Repellendus aut accusamus hic fuga sit
            dolorum eum, saepe nihil vitae alias iste ipsa perferendis pariatur
            aliquid nulla.
          </p>
        </article>
      </ValuePropSectionTemplate>
    </Fragment>
  );
};

export default PlayersPage;
