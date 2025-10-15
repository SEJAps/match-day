import { NavLink } from "react-router";
import { Button } from "../components/atoms";
import { LogoBrand } from "../components/molecules";

const MainHeader = () => {
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
        <nav className="hidden flex-1 sm:flex items-center justify-center gap-4 mt-8">
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
        <aside className="flex items-center px-4 mt-8">
          <Button variant="primary" size="default" className="mx-4">
            Acceder
          </Button>
        </aside>
      </section>
    </header>
  );
};

export default MainHeader;
