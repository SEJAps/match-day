import MainHeader from "./MainHeader";
import portatilsvg from "../assets/images/svg/portatil.svg";
import ARTWORK from "../assets/images/png/ARTWORK.png";
const TopSection = () => {
  return (
    <section className="relative flex flex-col w-full h-[980px]">
      <MainHeader />
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
          <h1 className="text-white text-7xl w-full max-w-4xl text-center">
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
    </section>
  );
};

export default TopSection;
