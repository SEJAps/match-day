import { NavLink } from "react-router";
import { Button } from "../components/atoms";
import { LogoBrand, Modal } from "../components/molecules";
import { useModal } from "../hooks/useModal";

const MainHeader = () => {
  const { isOpen, open, close } = useModal(false);
  return (
    <header className="flex bg-black/30">
      <section className="container flex items-start justify-between mx-auto z-100 w-full">
        <section className="hidden sm:flex items-center my-8">
          <LogoBrand />
        </section>
        <section className="flex sm:hidden items-start my-8 mx-8">
          <LogoBrand
            logoProps={{
              size: { x: 120, y: 96 },
            }}
          />
        </section>
        {/* Menú de escritorio (solo pantallas grandes) */}
        <nav className="hidden flex-1 lg:flex items-center justify-center gap-4 mt-8">
          <ul className="flex gap-8 px-4">
            <NavLink to="/" className="text-[#10B981] text-lg">
              Home
            </NavLink>
            <NavLink
              to="/players"
              className="text-[var(--second-color)] text-lg"
            >
              Jugadores
            </NavLink>
            <NavLink to="/teams" className="text-[var(--second-color)] text-lg">
              Equipos
            </NavLink>
            <NavLink to="/clubs" className="text-[var(--second-color)] text-lg">
              Clubs
            </NavLink>
            <NavLink
              to="/contact"
              className="text-[var(--second-color)] text-lg"
            >
              Contacto
            </NavLink>
          </ul>
        </nav>
        {/* Botón hamburguesa para móvil y tablet */}
        <div className="flex lg:hidden items-center px-4 mt-8">
          <Button
            aria-label="Abrir menú"
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
        <aside className="hidden lg:flex items-center px-4 mt-8">
          <Button variant="primary" size="default" className="mx-4">
            Acceder
          </Button>
        </aside>
      </section>

      {/* Modal menú para móvil y tablet */}
      <Modal open={isOpen} onClose={close} ariaLabel="Menú de navegación">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold">Menú</span>
            <Button
              aria-label="Cerrar menú"
              variant="ghost"
              size="sm"
              className="text-white"
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
                className="text-[#10B981] text-lg"
              >
                Home
              </NavLink>
              <NavLink
                to="/players"
                onClick={close}
                className="text-[var(--second-color)] text-lg"
              >
                Jugadores
              </NavLink>
              <NavLink
                to="/teams"
                onClick={close}
                className="text-[var(--second-color)] text-lg"
              >
                Equipos
              </NavLink>
              <NavLink
                to="/clubs"
                onClick={close}
                className="text-[var(--second-color)] text-lg"
              >
                Clubs
              </NavLink>
              <NavLink
                to="/contact"
                onClick={close}
                className="text-[var(--second-color)] text-lg"
              >
                Contacto
              </NavLink>
            </ul>
          </nav>
          <div className="pt-2">
            <Button
              variant="primary"
              size="default"
              className="w-full"
              onClick={close}
            >
              Acceder
            </Button>
          </div>
        </div>
      </Modal>
    </header>
  );
};

export default MainHeader;
