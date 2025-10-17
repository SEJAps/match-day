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
const ServicesPage = lazy(() => import("../pages/static/ServicesPage"));
const BlogPage = lazy(() => import("../pages/static/BlogPage"));
const HelpCenterPage = lazy(() => import("../pages/static/HelpCenterPage"));
const FeaturesPage = lazy(() => import("../pages/static/FeaturesPage"));
const PricesPage = lazy(() => import("../pages/static/PricesPage"));
const PrivacyPolicyPage = lazy(
  () => import("../pages/static/PrivacyPolicyPage"),
);
const TermsOfServicePage = lazy(
  () => import("../pages/static/TermsOfServicePage"),
);
const CookiesPage = lazy(() => import("../pages/static/CookiesPage"));
import NotFoundPage from "../pages/static/NotFoundPage";

// Re-export of logo showcase at root (alias) - lazy import from atomic design folder
const LogoBrandShowcasePage = lazy(
  () => import("../pages/atomic-design/LogoBrandShowcasePage"),
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
      {
        path: "services",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <ServicesPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: "help-center",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <HelpCenterPage />
          </Suspense>
        ),
      },
      // We keep original '/caracteristiques' path but also add '/features' canonical route
      {
        path: "caracteristiques",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <FeaturesPage />
          </Suspense>
        ),
      },
      {
        path: "features",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <FeaturesPage />
          </Suspense>
        ),
      },
      {
        path: "prices",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <PricesPage />
          </Suspense>
        ),
      },
      { path: "contact", element: <ContactPage /> },
      {
        path: "privacy-policy",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <PrivacyPolicyPage />
          </Suspense>
        ),
      },
      {
        path: "terms-of-service",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <TermsOfServicePage />
          </Suspense>
        ),
      },
      {
        path: "cookies",
        element: (
          <Suspense fallback={<LogoShowcaseSkeleton />}>
            <CookiesPage />
          </Suspense>
        ),
      },
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
