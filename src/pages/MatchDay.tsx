import { useState, type FC } from "react";
import platform from "../assets/images/png/platform.png";
import { Card } from "../components/molecules";
import { CARD_DESCRIPTIONS, type TCard } from "../config";
import jugadoresCamiseta from "@/assets/images/svg/jugadores-camiseta.svg";
import ARTWORK from "../assets/images/png/ARTWORK.png";

const MatchDay: FC = () => {
  const [cardDescriptions] = useState<TCard[]>([...CARD_DESCRIPTIONS]);
  return (
    <section className="flex flex-col bg-white text-black">
      {/* Top Section */}

      <picture className="absolute top-0 z-99 w-full h-full">
        <img
          src="/home_1.png"
          width={"1400px"}
          height={"680px"}
          alt="Fondo de pantalla principal"
          className="absolute aspect-video  w-full h-full"
        />
        <img
          src="/home.png"
          width={"1400px"}
          height={"680px"}
          alt="Fondo de pantalla principal 2"
          className="absolute aspect-video  w-full h-full"
        />
      </picture>
      <aside className="z-100 bg-transparent w-full h-full">
        <article className="flex flex-col items-center justify-center sm:py-20">
          <h1 className="text-white text-4xl px-6 sm:text-6xl w-full max-w-6xl text-center">
            Donde se gana el día de partido
          </h1>
          <p className="text-white text-[19.88px] w-full max-w-2xl text-center mt-8 px-4">
            La plataforma completa para estadísticas, gestión de equipos y
            mercado de fichajes en el fútbol
          </p>
          <footer className="flex items-center gap-4 mt-12">
            <button className="text-white bg-[#10B981] font-bold px-6 py-3 rounded-sm border-2 border-[#10B981]  hover:bg-[#10B981]/80 transition">
              Empezar Ahora
            </button>
            <button className=" text-white  font-bold px-6 py-3 rounded-sm border-2 border-white  hover:border-[#10B981]/80 transition">
              Ver Demo
            </button>
          </footer>
          <picture className="max-h-72  w-9/12 mt-10 sm:max-h-auto sm:max-w-96">
            <img
              className="w-full h-full sm:max-w-96 sm:h-auto aspect-auto rounded-lg shadow-sm shadow-white/20"
              width={256}
              height={256}
              src={ARTWORK}
              alt="Fondo porteros"
            />
          </picture>
        </article>
      </aside>

      <section className="matchday-page flex flex-col sm:mt-28">
        <article className="flex flex-col w-full max-w-7xl mx-auto mt-20">
          <aside className="flex flex-col gap-8">
            <h2 className="text-3xl sm:text-5xl font-semibold text-center my-4 px-8">
              Plataforma todo en uno para jugadores, equipos y clubes
            </h2>
            <p className="text-center text-xl sm:text-2xl px-8 sm:px-18">
              Desde las estadísticas del partido hasta el próximo fichaje, Match
              Day es tu control total para analizar, entrenar y gestionar tu
              equipo o tu carrera.
            </p>
          </aside>
          <aside className="flex flex-col sm:flex-row  ">
            <section className="flex-1 flex flex-col justify-center gap-6">
              <h2 className="text-2xl font-semibold my-4 px-6 sm:pl-20 sm:px-8">
                Todo lo que necesitas, antes, durante y después del día de
                partido
              </h2>
              <p className="px-8 sm:pl-20 text-xl">
                Fácil, rápido y todo desde una misma plataforma.
              </p>
              <ul className="px-8 sm:pl-20 text-lg">
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
            <section className="flex-1 flex justify-center items-center mt-10">
              <picture>
                <img
                  src={platform}
                  className="aspect-auto h-full w-full"
                  alt=""
                />
              </picture>
            </section>
          </aside>
        </article>
        <article className="flex flex-col w-full max-w-7xl mx-auto my-20">
          <section className="text-center mb-12 py-10">
            <h3 className="text-3xl font-bold mb-4">
              Servicios para cada necesidad
            </h3>
            <p className="text-xl">
              Herramientas especializadas para jugadores, equipos y clubes
            </p>
          </section>
          <section className="grid sm:grid-cols-3 gap-8 px-8">
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
                    <img
                      src={desc.srcIcon}
                      alt={desc.title}
                      className="w-16 h-16"
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
    </section>
  );
};

export default MatchDay;
