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
import { Button, IntroSectionTemplate } from "@/components";

export const router = createBrowserRouter([
  {
    path: "/", // Root layout with header/footer
    children: [
      {
        index: true,
        element: (
          <RootLayout>
            <MatchDay />
          </RootLayout>
        ),
      },
      {
        path: "players",
        element: (
          <RootLayout>
            <PlayersPage /> <PlayersPage />
          </RootLayout>
        ),
      },
      {
        path: "teams",
        element: (
          <RootLayout>
            <TeamsPage />
          </RootLayout>
        ),
      },
      {
        path: "clubs",
        element: (
          <RootLayout>
            <ClubsPage />
          </RootLayout>
        ),
      },
      {
        path: "contact",
        element: (
          <RootLayout>
            <ContactPage />
          </RootLayout>
        ),
      },
      {
        path: "account",
        children: [
          {
            index: true,
            element: (
              <RootLayout>
                <IntroSectionTemplate
                  title="Login"
                  description="Login to your account"
                >
                  Login
                </IntroSectionTemplate>
              </RootLayout>
            ),
          },
          {
            path: "login",
            element: (
              <RootLayout>
                <IntroSectionTemplate
                  title="Login"
                  description="Login to your account"
                >
                  <section className="flex justify-center w-full py-12 px-6">
                    <form
                      className="flex flex-col gap-4 "
                      autoComplete="on"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <label htmlFor="email">
                        <small>Your email address</small>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Insert your email"
                          className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                        />
                      </label>
                      <label htmlFor="password">
                        <small>Your password</small>

                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Insert your password"
                          className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                        />
                      </label>

                      <label
                        htmlFor="accept"
                        className="flex items-center gap-2"
                      >
                        <input type="checkbox" name="accept" id="accept" />
                        <small>I accept the terms and conditions</small>
                      </label>

                      <footer className="flex justify-end">
                        <Button variant="success">Register</Button>
                      </footer>
                    </form>
                  </section>
                </IntroSectionTemplate>
              </RootLayout>
            ),
          },
          {
            path: "register",
            element: (
              <RootLayout>
                <IntroSectionTemplate
                  title="Create a new account"
                  description="Join us today and start your journey"
                >
                  <section className="flex justify-center w-full py-12 px-6">
                    <form
                      className="flex flex-col gap-4 "
                      autoComplete="on"
                      onSubmit={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <label htmlFor="username">
                        <small>Your username</small>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Insert your username"
                          className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                        />
                      </label>
                      <label htmlFor="email">
                        <small>Your email address</small>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Insert your email"
                          className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                        />
                      </label>
                      <label htmlFor="password">
                        <small>Your password</small>

                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Insert your password"
                          className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                        />
                      </label>
                      <label htmlFor="repassword">
                        <small>Re-enter your password</small>
                        <input
                          type="repassword"
                          name="repassword"
                          id="repassword"
                          placeholder="Re-enter your password"
                          className="w-full bg-amber-100 text-neutral-600 px-4 py-2 rounded"
                        />
                      </label>

                      <label
                        htmlFor="accept"
                        className="flex items-center gap-2"
                      >
                        <input type="checkbox" name="accept" id="accept" />
                        <small>I accept the terms and conditions</small>
                      </label>

                      <footer className="flex justify-end">
                        <Button variant="success">Register</Button>
                      </footer>
                    </form>
                  </section>
                </IntroSectionTemplate>
              </RootLayout>
            ),
          },
        ],
      },
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

      // Atomic design nested subtree
      atomicDesignRoute,
      // 404 catch within layout
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
