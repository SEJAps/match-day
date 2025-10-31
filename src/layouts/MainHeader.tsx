import { useEffect, type FC } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/atoms";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logoSm from "@/assets/images/svg/logo-sm.svg";
import { Modal } from "@/components/molecules";
import { useModal } from "../hooks/useModal";
import { useTranslation } from "react-i18next";
import BtnAccess from "@/components/molecules/BtnAccess";
import CorporateLogo from "@/components/molecules/CorporateLogo";
import MenuDesktop from "@/components/molecules/MenuDesktop";
import MenuMobile from "@/components/molecules/MenuMobile";

const MainHeader: FC<{
  viewHeroLayer?: boolean;
  bg?: string;
  logoWidth?: number | string;
  logoHeight?: number | string;
}> = ({ viewHeroLayer = true, bg, logoWidth, logoHeight }) => {
  const { isOpen, open, close } = useModal(false);
  // Cerrar automáticamente el menú móvil cuando el viewport sea >= lg (1024px)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) close();
    };
    // Si ya estamos en lg o superior al montar, asegurar cerrado
    if (mql.matches) close();
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [close]);
  const { t } = useTranslation();
  return (
    <header
      className={`${!viewHeroLayer && "bg-[#7DB0A7] flex"} ${bg && `${bg}`}`}
    >
      <section className="grid grid-cols-3 mx-auto z-100 w-full">
        <CorporateLogo width={logoWidth} height={logoHeight} />
        <MenuDesktop handleWhenSelectedPage={close} />
        {/* Botón hamburguesa para móvil y tablet */}
        <div className="flex items-center col-span-2 justify-end lg:hidden">
          <Button
            aria-label={t("components.header.openMenu", {
              defaultValue: "Abrir menú",
            })}
            variant="ghost"
            size="default"
            className="text-white"
            onClick={open}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="var(--color-light)"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </div>

        {/* Acceso solo en escritorio, en móvil va dentro del modal */}
        <aside className="hidden lg:flex lg:items-center lg:justify-end py-6 md:pr-6 lg:gap-3 h-full">
          <LanguageSwitcher />
          <BtnAccess />
        </aside>
      </section>

      {/* Modal menú para móvil y tablet */}
      <Modal
        open={isOpen}
        onClose={close}
        ariaLabel={t("components.header.menuAriaLabel", {
          defaultValue: "Menú de navegación",
        })}
        className="bg-white text-black"
        placement="right"
        size="full"
      >
        <div className="flex flex-col gap-6 relative">
          <div className="flex items-center justify-between mb-2">
            <img
              src={logoSm}
              alt="Match Day"
              width={170}
              height={41}
              className="h-10 w-auto"
            />
            <Button
              aria-label={t("components.header.closeMenu")}
              variant="ghost"
              size="sm"
              onClick={close}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="var(--color-danger)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
          <MenuMobile whenSelectedPage={close} />
          <NavLink
            to="/account/login"
            onClick={close}
            className="w-full bg-success text-xl rounded inline-flex items-center justify-center px-4 py-2 text-slate-50 shadow-sm hover:bg-green-400/90 transition-colors"
          >
            {t("common.signIn")}
          </NavLink>
          <div className=" flex items-center justify-center gap-3 absolute  right-18 p-1 rounded-md">
            <LanguageSwitcher handleWhenSelectedPage={close} />
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default MainHeader;
