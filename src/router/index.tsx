import { createBrowserRouter } from "react-router";
import { Suspense, lazy } from "react";
import { LogoShowcaseSkeleton } from "../components/feedback/Skeleton";
import {
  ClubsPage,
  ContactPage,
  MatchDay,
  PlayersPage,
  TeamsPage,
} from "./lazyLoading";
import { atomicDesignRoute } from "./atomic-design-route";
import RootLayout from "../layouts/RootLayout";

// Static pages (non-lazy for now; adjust later if heavy)
import ServicesPage from "../pages/static/ServicesPage";
import BlogPage from "../pages/static/BlogPage";
import HelpCenterPage from "../pages/static/HelpCenterPage";
import FeaturesPage from "../pages/static/FeaturesPage";
import PricesPage from "../pages/static/PricesPage";
import PrivacyPolicyPage from "../pages/static/PrivacyPolicyPage";
import TermsOfServicePage from "../pages/static/TermsOfServicePage";
import CookiesPage from "../pages/static/CookiesPage";
import NotFoundPage from "../pages/static/NotFoundPage";

// Re-export of logo showcase at root (alias) - lazy import from atomic design folder
const LogoBrandShowcasePage = lazy(
  () => import("../pages/atomic-design/LogoBrandShowcasePage")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Root layout with header/footer
    children: [
      { index: true, element: <MatchDay /> },
      { path: "players", element: <PlayersPage /> },
      { path: "teams", element: <TeamsPage /> },
      { path: "clubs", element: <ClubsPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "help-center", element: <HelpCenterPage /> },
      // We keep original '/caracteristiques' path but also add '/features' canonical route
      { path: "caracteristiques", element: <FeaturesPage /> },
      { path: "features", element: <FeaturesPage /> },
      { path: "prices", element: <PricesPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "privacy-policy", element: <PrivacyPolicyPage /> },
      { path: "terms-of-service", element: <TermsOfServicePage /> },
      { path: "cookies", element: <CookiesPage /> },
      // Alias route for logo showcase at root level for quick access
      {
        path: "logo-showcase",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <LogoBrandShowcasePage />
          </Suspense>
        ),
      },
      // Atomic design nested subtree
      atomicDesignRoute,
      // 404 catch within layout
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
