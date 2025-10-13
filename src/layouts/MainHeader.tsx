import { NavLink } from "react-router";
import AccessButton from "../components/AccesButton";
import LogoMD from "../components/LogoMD";

const MainHeader = () => {
  return (
    <header className="flex">
      <section className="container flex items-start justify-end mx-auto z-100">
        <section className="flex items-center my-8">
          <LogoMD />
        </section>
        <nav className="flex-1 flex items-center justify-center gap-4 mt-8">
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
          <AccessButton />
        </aside>
      </section>
    </header>
  );
};

export default MainHeader;
