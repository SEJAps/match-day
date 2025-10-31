import React from "react";

import heroBgMain from "@/assets/images/png/hero-bg-main.png";
import heroBgLayer from "@/assets/images/png/hero-bg-layer.png";

const HeroLayer: React.FC = () => {
  return (
    <article className="fixed inset-0 -z-1 w-screen h-dvh overflow-clip">
      <img
        src={heroBgLayer}
        className="absolute w-full h-full object-cover"
        alt="Imagen de prueba"
      />
      <img
        src={heroBgMain}
        className="absolute w-full h-full object-cover"
        alt="Imagen de prueba"
      />
    </article>
  );
};

export default HeroLayer;
