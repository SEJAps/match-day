import { Heading } from "@/components";
import { YOU_WANT_TO_SEE } from "@/config/hero-sections";
import type { FC } from "react";

const PlayersPage: FC = () => {
  return (
    <section className="grid grid-rows bg-white text-black">
      {/* Top Section */}

      <picture className="absolute top-0 z-99 w-full h-screen">
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
      <aside className="z-100  w-full max-h-[85dvh] py-8">
        <article className="flex flex-col items-center justify-center">
          <Heading as="h1" level="h1" className="text-white px-8">
            {YOU_WANT_TO_SEE.title}
          </Heading>

          <p className="text-white text-[19.88px] w-full max-w-2xl text-center mt-4 px-4">
            {YOU_WANT_TO_SEE.description}
          </p>
          <section className=" w-9/12 mt-4 sm:max-h-auto sm:max-w-96 text-white bg-[#1C4020] rounded-2xl">
            <Heading as="h2" level="h3" className="px-4 py-4 font-light">
              {YOU_WANT_TO_SEE.list?.title}
            </Heading>

            <article className="flex flex-col px-6">
              <ul>
                {YOU_WANT_TO_SEE.list?.items.map((item) => (
                  <li key={item.text} className="flex items-center gap-4 my-4">
                    <img src={item.icon} alt={item.text} />
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            </article>
          </section>
          <footer className="flex items-center gap-4 mt-8">
            <button className="text-white bg-[#10B981] font-bold px-6 py-3 rounded-sm border-2 border-[#10B981]  hover:bg-[#10B981]/80 transition">
              Reagistrate
            </button>
            <button className=" text-white  font-bold px-6 py-3 rounded-sm border-2 border-white  hover:border-[#10B981]/80 transition">
              Ver planes
            </button>
          </footer>
        </article>
      </aside>
      <section className="flex flex-col sm:mt-28">
        <article className="flex flex-col w-full max-w-7xl mx-auto mt-20">
          <header>
            <h2 className="px-4">
              Accede a tus estadísticas personales de cada partido.
            </h2>
          </header>
          <section></section>
        </article>
        <article className="flex flex-col w-full max-w-7xl mx-auto my-20">
          <header>
            <h2 className="px-4">
              Destaca con tu perfil profesional incluyendo datos y vídeos.
            </h2>
          </header>
          <section></section>
        </article>
        <article className="flex flex-col w-full max-w-7xl mx-auto my-20">
          <header>
            <h2 className="px-4">
              Conéctate con equipos a través del marketplace de fichajes.
            </h2>
          </header>
          <section></section>
        </article>
      </section>
    </section>
  );
};

export default PlayersPage;
