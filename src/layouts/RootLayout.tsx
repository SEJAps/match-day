import { Outlet, ScrollRestoration } from "react-router";
import { Suspense } from "react";
import { PageSkeleton } from "../components/feedback/Skeleton";
import MainFooter from "./MainFooter";
import type { FC, ReactNode } from "react";
import MainHeader from "./MainHeader";
import BackToTop from "@/components/BackToTop";
import heroBgMain from "@/assets/images/png/hero-bg-main.png";
import heroBgLayer from "@/assets/images/png/hero-bg-layer.png";
interface RootLayoutProps {
  withTopSection?: boolean;
  children?: ReactNode; // opcional si se quiere inyectar algo adicional encima del outlet
}

const RootLayout: FC<RootLayoutProps> = ({
  withTopSection = true,
  children,
}) => {
  return (
    <>
      {withTopSection && <MainHeader />}
      {children}

      <Suspense fallback={<PageSkeleton lines={6} />}>
        <article className="absolute inset-0 -z-1 w-screen h-dvh overflow-clip">
          <img
            src={heroBgLayer}
            className="absolute w-full h-full object-cover"
            alt="Imagen de prueba"
          />
          <img
            src={heroBgMain}
            className="absolute w-full h-full object-cover"
            alt="Imagen de prueba"
          />
        </article>
        <Outlet />
      </Suspense>
      <MainFooter />
      <BackToTop />
      <ScrollRestoration />
    </>
  );
};

export default RootLayout;
