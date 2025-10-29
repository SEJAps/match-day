import { useEffect, type FC } from "react";
import { NavLink } from "react-router";
import { Button } from "@/components/atoms";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logoSm from "@/assets/images/svg/logo-sm.svg";
import { LogoBrand, Modal } from "@/components/molecules";
import { useModal } from "../hooks/useModal";
import { useTranslation } from "react-i18next";

const MainHeader: FC<{
  viewHeroLayer?: boolean;
  bg?: string;
}> = ({ viewHeroLayer = true, bg }) => {
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
      className={`${!viewHeroLayer && "bg-dark md:h-[15svh] "} ${bg && `${bg} h-[12svh] sm:h-[13svh] lg:h-[18svh]`}`}
    >
      <section className="container flex items-start justify-between mx-auto z-100 w-full">
        <section className="hidden sm:hidden md:hidden lg:hidden xl:flex xl:items-center xl:my-6 xl:ml-8 ">
          <LogoBrand />
        </section>
        <section className="flex items-start my-8 pl-4 xl:hidden">
          <NavLink title="Match Day" to="/" aria-label="Match Day Logo">
            <div className="flex items-center gap-3">
              <img
                src={logoSm}
                alt="Match Day"
                width={170}
                height={41}
                className="h-10 w-auto"
              />
              <span className="sr-only">MATCH DAY</span>
            </div>
          </NavLink>
        </section>
        {/* Menú de escritorio (solo pantallas grandes) */}
        <nav className="hidden flex-1 lg:flex items-center justify-center gap-4 mt-8">
          <ul className="flex gap-8 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
                  : "text-xl font-semibold hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.home", { defaultValue: "Home" })}
            </NavLink>
            <NavLink
              to="/players"
              className={({ isActive }) =>
                isActive
                  ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
                  : "text-xl font-semibold hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.players", { defaultValue: "Jugadores" })}
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                isActive
                  ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
                  : "text-xl font-semibold hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.teams", { defaultValue: "Equipos" })}
            </NavLink>
            <NavLink
              to="/clubs"
              className={({ isActive }) =>
                isActive
                  ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
                  : "text-xl font-semibold hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.clubs", { defaultValue: "Clubs" })}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "is-active text-xl font-semibold hover:opacity-80 transition-opacity"
                  : "text-xl font-semibold hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.contact", { defaultValue: "Contacto" })}
            </NavLink>
          </ul>
        </nav>
        {/* Botón hamburguesa para móvil y tablet */}
        <div className="flex lg:hidden items-center mt-8">
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
        <aside className="hidden lg:flex lg:items-center py-6 md:pr-6 lg:gap-3">
          <LanguageSwitcher />
          <Button variant="success" size="default">
            {t("common.signIn", { defaultValue: "Acceder" })}
          </Button>
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
          <nav className="flex flex-col gap-5 text-2xl text-dark">
            <NavLink
              to="/"
              onClick={close}
              className={({ isActive }) =>
                isActive
                  ? "is-active hover:opacity-80 transition-opacity"
                  : "hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/players"
              onClick={close}
              className={({ isActive }) =>
                isActive
                  ? "is-active hover:opacity-80 transition-opacity"
                  : "hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.players")}
            </NavLink>
            <NavLink
              to="/teams"
              onClick={close}
              className={({ isActive }) =>
                isActive
                  ? "is-active hover:opacity-80 transition-opacity"
                  : "hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.teams")}
            </NavLink>
            <NavLink
              to="/clubs"
              onClick={close}
              className={({ isActive }) =>
                isActive
                  ? "is-active hover:opacity-80 transition-opacity"
                  : "hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.clubs")}
            </NavLink>
            <NavLink
              to="/contact"
              onClick={close}
              className={({ isActive }) =>
                isActive
                  ? "is-active hover:opacity-80 transition-opacity"
                  : "hover:opacity-80 transition-opacity"
              }
            >
              {t("nav.contact")}
            </NavLink>
          </nav>
          <Button
            variant="primary"
            size="xl"
            className="w-full bg-success text-xl"
            onClick={close}
          >
            {t("common.signIn", { defaultValue: "Acceder" })}
          </Button>
          <div className=" flex items-center justify-center gap-3 absolute  right-18 p-1 rounded-md">
            <LanguageSwitcher />
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default MainHeader;
