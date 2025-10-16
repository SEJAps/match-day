import type { FC } from "react";

const PlayersPage: FC = () => {
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
            ¿Quieres que te vean?
          </h1>
          <p className="text-white text-[19.88px] w-full max-w-2xl text-center mt-8 px-4">
            Haz que cada partido cuente.
          </p>
          <section className="max-h-72  w-9/12 mt-10 sm:max-h-auto sm:max-w-96 bg-red-500">
            <p>Haz que cada partido cuente.</p>
            <article className="grid grid-cols-2">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
            </article>
          </section>
          <footer className="flex items-center gap-4 mt-12">
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
