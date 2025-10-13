import { Fragment, useState, type FC } from "react";
import MainFooter from "../layouts/MainFooter";
import TopSection from "../layouts/TopSection";
import platformFeatures from "../assets/images/jpg/platform-features.jpg";
import Card from "../components/Card";
import { CARD_DESCRIPTIONS, THEME_LOGO, type TCard } from "../config";
import Logo from "../components/Logo";

const MatchDay: FC = () => {
  const [cardDescriptions] = useState<TCard[]>([...CARD_DESCRIPTIONS]);
  return (
    <Fragment>
      {/* Top Section */}
      <TopSection />
      <section className="matchday-page flex flex-col">
        <article className="flex flex-col w-full max-w-7xl mx-auto mt-20">
          <aside className="flex flex-col gap-8">
            <h2 className="text-5xl font-semibold text-center my-4">
              Plataforma todo en uno para jugadores, equipos y clubes
            </h2>
            <p className="text-center text-2xl px-18">
              Desde las estadísticas del partido hasta el próximo fichaje, Match
              Day es tu control total para analizar, entrenar y gestionar tu
              equipo o tu carrera.
            </p>
          </aside>
          <aside className="flex gap-20">
            <section className="flex-1 flex flex-col justify-center gap-6">
              <h2 className="text-2xl font-semibold my-4 pl-20">
                Todo lo que necesitas, antes, durante y después del día de
                partido
              </h2>
              <p className="pl-20 text-xl">
                Fácil, rápido y todo desde una misma plataforma.
              </p>
              <ul className="pl-20 text-lg">
                <li className="list-disc ml-6 my-2">
                  Estadísticas en tiempo real
                </li>
                <li className="list-disc ml-6 my-2">
                  Mercado de fichajes integrado
                </li>
                <li className="list-disc ml-6 my-2">
                  Gestión completa de equipos
                </li>
              </ul>
            </section>
            <section className="flex-1 pr-20 py-10">
              <article>
                <img
                  src={platformFeatures}
                  alt="Foondo"
                  width={512}
                  height={512}
                  className="w-full h-[296px] object-cover rounded-3xl shadow-xl shadow-black/20"
                />
              </article>
            </section>
          </aside>
        </article>
        <article className="flex flex-col w-full max-w-7xl mx-auto my-20">
          <section className="text-center mb-12 py-10">
            <h3 className="text-5xl font-bold mb-4">
              Servicios para cada necesidad
            </h3>
            <p className="text-3xl">
              Herramientas especializadas para jugadores, equipos y clubes
            </p>
          </section>
          <section className="grid grid-cols-3 gap-8">
            {cardDescriptions &&
              cardDescriptions.map((desc, index) => (
                <Card
                  key={index}
                  bg={desc.bg}
                  bgBtn={desc.bgBtn}
                  title={desc.title}
                  text={desc.text}
                  items={desc.items}
                  icon={
                    <Logo
                      colors={{
                        ...THEME_LOGO,
                        customColor: desc.customColor as string,
                      }}
                    />
                  }
                  label={desc.textBtn}
                />
              ))}
          </section>
        </article>
        <article className="bg-[#064C40] py-20">
          <header>
            <h2>¿Que ofremos?</h2>
            <p>Características diseñadas para el mundo del fútbol moderno</p>
          </header>
        </article>
      </section>
      <MainFooter />
    </Fragment>
  );
};

export default MatchDay;
