import { lazy } from "react";

const MatchDay = lazy(() => import("../pages/MatchDay"));
const PlayersPage = lazy(() => import("../pages/PlayersPage"));
const TeamsPage = lazy(() => import("../pages/TeamsPage"));
const ClubsPage = lazy(() => import("../pages/ClubsPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

export { MatchDay, PlayersPage, TeamsPage, ClubsPage, ContactPage };
