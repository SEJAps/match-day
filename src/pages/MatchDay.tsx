import { useEffect, useState, type FC } from "react";
import platform from "../assets/images/png/platform.png";
import {
  SERVICES_FOR_EVERY_NEED,
  type ServiceCardForEveryNeed,
} from "@/config/services-for-every-need";
import { Card, Heading, ServicesSection, ContactSection } from "@/components";
import { CONTACT_SECTION_CONFIG } from "@/config";
import { WHERE_YOU_WIN_ON_GAME_DAY } from "@/config/hero-sections";

const MatchDay: FC = () => {
  const [servicesForEveryNeed, setServicesForEveryNeed] = useState<
    ServiceCardForEveryNeed[]
  >([]);

  useEffect(() => {
    setServicesForEveryNeed(() => SERVICES_FOR_EVERY_NEED);

    return () => setServicesForEveryNeed([]);
  }, []);

  return (
    <section className="flex flex-col bg-white text-black">
      {/* Top Section */}

      <picture className="absolute top-0 z-99 w-full h-full">
        <img
          src="/home_1.png"
          width={"1400px"}
          height={"680px"}
          alt="Fondo de pantalla principal"
          className="absolute object-cover w-full h-full"
        />
        <img
          src="/home.png"
          width={"1400px"}
          height={"680px"}
          alt="Fondo de pantalla principal 2"
          className="absolute object-cover w-full h-full"
        />
      </picture>
      <aside className="z-100 bg-transparent w-full h-full">
        <article className="flex flex-col items-center justify-center py-10">
          <h1 className="text-white text-4xl px-6 sm:text-6xl w-full max-w-6xl text-center">
            {WHERE_YOU_WIN_ON_GAME_DAY.title}
          </h1>
          <p className="text-white text-[19.88px] w-full max-w-2xl text-center mt-8 px-4">
            {WHERE_YOU_WIN_ON_GAME_DAY.description}
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
              width={WHERE_YOU_WIN_ON_GAME_DAY.image?.width}
              height={WHERE_YOU_WIN_ON_GAME_DAY.image?.height}
              src={WHERE_YOU_WIN_ON_GAME_DAY.image?.src}
              alt={WHERE_YOU_WIN_ON_GAME_DAY.image?.alt}
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
          <section className="sm:mb-12 py-8">
            <Heading
              as="h2"
              level="h2"
              align={"center"}
              className="text-4xl mb-4 mx-8"
            >
              Servicios para cada necesidad
            </Heading>

            <p className="text-xl text-center">
              Herramientas especializadas para jugadores, equipos y clubes
            </p>
          </section>
          <section className="grid sm:grid-cols-3 gap-8 px-8">
            {servicesForEveryNeed &&
              servicesForEveryNeed.map((service, i) => (
                <Card
                  key={service.title}
                  bg={service.bg}
                  bgBtn={service.bgBtn}
                  title={service.title}
                  text={service.text}
                  items={service.items}
                  index={i}
                  mobileFullWidth={
                    servicesForEveryNeed.length % 2 === 1 &&
                    i === servicesForEveryNeed.length - 1
                  }
                  icon={
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-24 h-24 sm:w-16 sm:h-16"
                    />
                  }
                  label={service.textBtn}
                />
              ))}
          </section>
        </article>

        <ServicesSection sectionClassName="py-20" />

        <ContactSection
          className="py-20"
          title={CONTACT_SECTION_CONFIG.title}
          subtitle={CONTACT_SECTION_CONFIG.subtitle}
          info={CONTACT_SECTION_CONFIG.info}
          mapImageUrl={CONTACT_SECTION_CONFIG.mapImageUrl}
        />
      </section>
    </section>
  );
};

export default MatchDay;
