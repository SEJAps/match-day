import { Outlet, ScrollRestoration } from "react-router";
import { Suspense } from "react";
import { PageSkeleton } from "../components/feedback/Skeleton";
import MainFooter from "./MainFooter";
import type { FC, ReactNode } from "react";
import MainHeader from "./MainHeader";
import BackToTop from "@/components/BackToTop";
import HeroLayer from "@/components/molecules/HeroLayer";
interface RootLayoutProps {
  withTopSection?: boolean;
  viewHeroLayer?: boolean;
  children?: ReactNode; // opcional si se quiere inyectar algo adicional encima del outlet
}

const RootLayout: FC<RootLayoutProps> = ({
  withTopSection = true,
  viewHeroLayer = true,
  children,
}) => {
  return (
    <>
      {withTopSection && <MainHeader viewHeroLayer={viewHeroLayer} />}
      {children}
      <Suspense fallback={<PageSkeleton lines={6} />}>
        {viewHeroLayer && <HeroLayer />}
        <Outlet />
      </Suspense>
      <MainFooter />
      <BackToTop />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
