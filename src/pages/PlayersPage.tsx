import {
  Button,
  Image,
  IntroSectionTemplate,
  List,
  ListItem,
} from "@/components";
import { PLAYERS_PAGE } from "@/config";
import { cn } from "@/utils/cn";
import { Fragment, type FC } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import AccessYourPersonalStatisticsForEachMatch from "./static/AccessYourPersonalStatisticsForEachMatch";
import StandOutWithProfessionalProfile from "./static/StandOutWithProfessionalProfile";
import ConnectWithTeamsThroughTransferMarketplace from "./static/ConnectWithTeamsThroughTransferMarketplace";
import ExploreSubscriptionPlans from "./static/ExploreSubscriptionPlans";
import BtnAccess from "@/components/molecules/Access";

const PlayersPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Fragment>
      {/* Hero Section */}
      <IntroSectionTemplate
        size="7xl"
        title={t("pages:players.hero.title")}
        description={t("pages:players.hero.description")}
        footer={
          <section className="w-full flex justify-center gap-12">
            <BtnAccess label={t("pages:players.heroCtas.0.label")} />
            <Button variant="view" className="p-0">
              <NavLink
                to="/prices"
                className="inline-flex items-center justify-center w-full h-full p-4"
              >
                {t("pages:players.heroCtas.1.label")}
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
                    {t(`pages:players.hero.list.items.${idx}.text`)}
                  </span>
                </div>
              </ListItem>
            )) ?? []}
        </List>
      </IntroSectionTemplate>
      <AccessYourPersonalStatisticsForEachMatch />
      <StandOutWithProfessionalProfile />
      <ConnectWithTeamsThroughTransferMarketplace />
      <ExploreSubscriptionPlans />
    </Fragment>
  );
};

export default PlayersPage;
