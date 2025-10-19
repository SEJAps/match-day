import { useEffect } from "react";
import { NavLink } from "react-router";
import { Button } from "../components/atoms";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logosm from "../assets/images/svg/logo-sm.svg";
import { LogoBrand, Modal } from "../components/molecules";
import { useModal } from "../hooks/useModal";
import { useTranslation } from "react-i18next";

const MainHeader = () => {
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
    <header className="flex">
      <section className="container flex items-start justify-between mx-auto z-100 w-full">
        <section className="hidden lg:flex lg:items-center lg:my-8 lg:ml-8">
          <LogoBrand />
        </section>
        <section className="flex items-start my-8 pl-4 lg:hidden">
          <img
            src={logosm}
            alt="Logo"
            width={169}
            height={40}
            className="w-42 h-10 aspect-square"
          />
        </section>
        {/* Menú de escritorio (solo pantallas grandes) */}
        <nav className="hidden flex-1 lg:flex items-center justify-center gap-4 mt-8">
          <ul className="flex gap-8 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? "text-[#01B748] text-lg" : "text-[#01B748] text-lg"
              }
            >
              {t("nav.home", { defaultValue: "Home" })}
            </NavLink>
            <NavLink
              to="/players"
              className={({ isActive }) =>
                !isActive ? "text-lg" : "text-[#10B989] text-lg"
              }
            >
              {t("nav.players", { defaultValue: "Jugadores" })}
            </NavLink>
            <NavLink
              to="/teams"
              className={({ isActive }) =>
                !isActive ? "text-lg" : "text-[#10B989] text-lg"
              }
            >
              {t("nav.teams", { defaultValue: "Equipos" })}
            </NavLink>
            <NavLink
              to="/clubs"
              className={({ isActive }) =>
                !isActive ? "text-lg" : "text-[#10B989] text-lg"
              }
            >
              {t("nav.clubs", { defaultValue: "Clubs" })}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                !isActive ? "text-lg" : "text-[#10B989] text-lg"
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
                stroke="currentColor"
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
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold">
              {t("components.header.menuTitle", { defaultValue: "Menú" })}
            </span>
            <Button
              aria-label={t("components.header.closeMenu", {
                defaultValue: "Cerrar menú",
              })}
              variant="ghost"
              size="sm"
              className="text-black"
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
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
          <nav>
            <ul className="flex flex-col gap-4">
              <NavLink
                to="/"
                onClick={close}
                className="text-emerald-600 text-lg"
              >
                {t("nav.home", { defaultValue: "Home" })}
              </NavLink>
              <NavLink
                to="/players"
                onClick={close}
                className="text-neutral-700 text-lg"
              >
                {t("nav.players", { defaultValue: "Jugadores" })}
              </NavLink>
              <NavLink
                to="/teams"
                onClick={close}
                className="text-neutral-700 text-lg"
              >
                {t("nav.teams", { defaultValue: "Equipos" })}
              </NavLink>
              <NavLink
                to="/clubs"
                onClick={close}
                className="text-neutral-700 text-lg"
              >
                {t("nav.clubs", { defaultValue: "Clubs" })}
              </NavLink>
              <NavLink
                to="/contact"
                onClick={close}
                className="text-neutral-700 text-lg"
              >
                {t("nav.contact", { defaultValue: "Contacto" })}
              </NavLink>
            </ul>
          </nav>
          <div className="pt-2 flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              variant="primary"
              size="default"
              className="w-full bg-[#9BB5B0]"
              onClick={close}
            >
              {t("common.signIn", { defaultValue: "Acceder" })}
            </Button>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default MainHeader;
