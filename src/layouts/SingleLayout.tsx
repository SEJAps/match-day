import { Outlet, ScrollRestoration } from "react-router";
import { Suspense } from "react";
import { PageSkeleton } from "../components/feedback/Skeleton";
import MainFooter from "./MainFooter";
import type { FC, ReactNode } from "react";
import MainHeader from "./MainHeader";
import BackToTop from "@/components/BackToTop";

interface RootLayoutProps {
  withTopSection?: boolean;
  viewHeroLayer?: boolean;
  bgHeader?: string;
  children?: ReactNode; // opcional si se quiere inyectar algo adicional encima del outlet
}

const SingleLayout: FC<RootLayoutProps> = ({
  withTopSection = true,
  bgHeader,
  children,
}) => {
  return (
    <>
      {withTopSection && (
        <MainHeader
          logoWidth={64}
          logoHeight={64}
          bg={bgHeader}
          viewHeroLayer={false}
        />
      )}
      {children}
      <Suspense fallback={<PageSkeleton lines={6} />}>
        <Outlet />
      </Suspense>
      <MainFooter />
      <BackToTop />
      <ScrollRestoration />
    </>
  );
};

export default SingleLayout;
