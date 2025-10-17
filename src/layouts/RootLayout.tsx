import { Outlet, ScrollRestoration } from "react-router";
import { Suspense } from "react";
import { PageSkeleton } from "../components/feedback/Skeleton";
import MainFooter from "./MainFooter";
import type { FC, ReactNode } from "react";
import MainHeader from "./MainHeader";
import BackToTop from "@/components/BackToTop";

interface RootLayoutProps {
  withTopSection?: boolean;
  children?: ReactNode; // opcional si se quiere inyectar algo adicional encima del outlet
}

const RootLayout: FC<RootLayoutProps> = ({
  withTopSection = true,
  children,
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-900 text-white">
      {withTopSection && <MainHeader />}
      {children}

      <div className="flex-1">
        <Suspense fallback={<PageSkeleton lines={6} />}>
          <Outlet />
        </Suspense>
      </div>
      <MainFooter />
      <BackToTop />
      <ScrollRestoration />
    </div>
  );
};

export default RootLayout;
