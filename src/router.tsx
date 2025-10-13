import { createBrowserRouter, NavLink } from "react-router";
import AccessButton from "./components/AccesButton";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <header>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/players">Players</NavLink> |{" "}
          <NavLink to="/teams">Teams</NavLink> |{" "}
          <NavLink to="/clubs">Clubs</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
          <AccessButton />
        </header>
        <section>
          <div
            style={{
              position: "relative",
              backgroundColor: "black",
              display: "flex",
            }}
          >
            <img
              style={{
                position: "absolute",

                objectPosition: "center",
              }}
              src="/home_1.png"
              width={"100%"}
              height={"810px"}
              alt=""
            />
            <img
              style={{
                position: "absolute",

                objectPosition: "center",
              }}
              src="/home.png"
              width={"100%"}
              height={"810px"}
              alt=""
            />
            <h1
              style={{ color: "white", fontSize: "50px", textAlign: "center" }}
            >
              Home
            </h1>
          </div>
        </section>
        <footer>© 2024 Match Day. Todos los derechos reservados.</footer>
      </div>
    ),
  },
  {
    path: "/players",
    element: (
      <div>
        <header>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/players">Players</NavLink> |{" "}
          <NavLink to="/teams">Teams</NavLink> |{" "}
          <NavLink to="/clubs">Clubs</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
          <AccessButton />
        </header>
        <section>Jugadores</section>
        <footer>© 2024 Match Day. Todos los derechos reservados.</footer>
      </div>
    ),
  },
  {
    path: "/teams",
    element: (
      <div>
        <header>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/players">Players</NavLink> |{" "}
          <NavLink to="/teams">Teams</NavLink> |{" "}
          <NavLink to="/clubs">Clubs</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
          <AccessButton />
        </header>
        <section>Equipos</section>
        <footer>© 2024 Match Day. Todos los derechos reservados.</footer>
      </div>
    ),
  },
  {
    path: "/clubs",
    element: (
      <div>
        <header>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/players">Players</NavLink> |{" "}
          <NavLink to="/teams">Teams</NavLink> |{" "}
          <NavLink to="/clubs">Clubs</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
          <AccessButton />
        </header>
        <section>Clubs</section>
        <footer>© 2024 Match Day. Todos los derechos reservados.</footer>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <header>
          <NavLink to="/">Home</NavLink> |{" "}
          <NavLink to="/players">Players</NavLink> |{" "}
          <NavLink to="/teams">Teams</NavLink> |{" "}
          <NavLink to="/clubs">Clubs</NavLink> |{" "}
          <NavLink to="/contact">Contact</NavLink>
          <AccessButton />
        </header>
        <section>Contacto</section>
        <footer>© 2024 Match Day. Todos los derechos reservados.</footer>
      </div>
    ),
  },
]);
