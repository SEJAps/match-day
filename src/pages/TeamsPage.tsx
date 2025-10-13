import type { FC } from "react";
import MainFooter from "../layouts/MainFooter";
import TopSection from "../layouts/TopSection";

const TeamsPage: FC = () => {
  return (
    <>
      {/* Top Section */}
      <TopSection />
      <section className="teams-page my-20">
        <article>
          <header>
            <h1 className="px-4">Equipos</h1>
          </header>
          <section className="py-4">
            <p className="px-4">
              Página de Equipos: Aquí puedes encontrar información sobre los
              diferentes equipos, sus jugadores, estadísticas y próximos
              partidos. Mantente al día con las últimas novedades de tus equipos
              favoritos.
            </p>
          </section>
        </article>
      </section>
      <MainFooter />
    </>
  );
};

export default TeamsPage;
