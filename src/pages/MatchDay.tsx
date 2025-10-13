import { type FC } from "react";
import MainFooter from "../layouts/MainFooter";
import TopSection from "../layouts/TopSection";

const MatchDay: FC = () => {
  return (
    <>
      {/* Top Section */}
      <TopSection />
      <section className="matchday-page">
        <article>
          <h1 className="text-4xl font-bold text-center my-8">Match Day</h1>
          <p className="text-lg text-justify mx-4 mb-4">
            Match Day es una aplicación web diseñada para facilitar la gestión y
            organización de partidos deportivos. Con una interfaz intuitiva y
            fácil de usar, los usuarios pueden crear, programar y administrar
            partidos de manera eficiente. La aplicación permite a los usuarios
            registrar detalles importantes como la fecha, hora, ubicación y
            participantes del partido. Además, ofrece funcionalidades para
            enviar notificaciones a los jugadores, gestionar listas de equipos y
            realizar un seguimiento de los resultados. Match Day es ideal para
            entrenadores, organizadores de ligas y jugadores que desean mantener
            todo en orden y asegurarse de que todos estén informados sobre los
            próximos eventos deportivos.
          </p>
          <h2 className="text-2xl font-semibold text-center my-4">
            Tecnologías Utilizadas
          </h2>
          <ul className="list-disc list-inside mx-8 mb-4">
            <li>
              React: Biblioteca principal para construir la interfaz de usuario.
            </li>
            <li>
              TypeScript: Superset de JavaScript que añade tipado estático.
            </li>
          </ul>
        </article>
      </section>
      <MainFooter />
    </>
  );
};

export default MatchDay;
