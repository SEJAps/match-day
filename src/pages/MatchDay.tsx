import { useState, type FC } from "react";
import platformFeatures from "../assets/images/jpg/platform-features.jpg";
import { Card } from "../components/molecules";
import { CARD_DESCRIPTIONS, type TCard } from "../config";
import { Logo } from "../components/atoms";

import portatilsvg from "../assets/images/svg/portatil.svg";
import ARTWORK from "../assets/images/png/ARTWORK.png";

const MatchDay: FC = () => {
  const [cardDescriptions] = useState<TCard[]>([...CARD_DESCRIPTIONS]);
  return (
    <section className="flex flex-col">
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
        <article className="flex flex-col items-center justify-center py-20">
          <h1 className="text-white text-6xl w-full max-w-6xl text-center">
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
          <picture className="relative top-22 w-[366.02px] h-[216.68px] scale-150">
            <img
              className="absolute z-2 w-full h-full bottom-2 scale-x-75 left-1 scale-y-74"
              src={ARTWORK}
              alt=""
            />
            <img
              className="absolute z-1 w-full h-full scale-x-175 left-24 scale-y-150"
              src={portatilsvg}
              alt=""
            />
          </picture>
        </article>
      </aside>

      <section className="matchday-page flex flex-col mt-28">
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
                        backgroundFill: "blue",
                        detailsFill: "blue",
                        shadowsFill: "#0D2128",
                        fieldFill: "red",
                        liveCircleFill: "red",
                        liveFill: "white",
                        liveStroke: "white",
                        textFill: "black",
                        textStroke: "white",
                      }}
                      size={{ x: 80, y: 75 }}
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
