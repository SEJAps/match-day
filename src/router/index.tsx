import { createBrowserRouter } from "react-router";
import MatchDay from "../pages/MatchDay";
import PlayersPage from "../pages/PlayersPage";
import TeamsPage from "../pages/TeamsPage";
import ClubsPage from "../pages/ClubsPage";
import ContactPage from "../pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MatchDay />,
  },
  {
    path: "/players",
    element: <PlayersPage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
  {
    path: "/clubs",
    element: <ClubsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);
