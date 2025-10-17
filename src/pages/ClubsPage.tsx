import type { FC } from "react";
import { Heading, FeatureList, LandingPageTemplate } from "@/components";
import { CLUBS_PAGE } from "@/config";
import listItemImage from "@/assets/images/svg/list-item-image.svg";

const ClubsPage: FC = () => {
  return (
    <LandingPageTemplate
      className="flex flex-col bg-white text-black"
      hero={{
        images: CLUBS_PAGE.heroBgImages,
        title: CLUBS_PAGE.hero.title,
        description: CLUBS_PAGE.hero.description,
        ctas: CLUBS_PAGE.heroCtas,
        heroContent: (
          <section className="w-9/12 mt-4 py-6 sm:max-h-auto sm:max-w-[512px] text-white bg-[#1C4020] rounded-2xl">
            <header>
              <p className="text-sm sm:text-base md:text-lg px-6 text-white text-center">
                Activa tu dirección deportiva
              </p>
            </header>
            <article className="flex flex-col py-2">
              <FeatureList
                items={[
                  {
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        Publicación de vacantes
                      </span>
                    ),
                    iconSrc: listItemImage,
                    iconAlt: "Vacantes",
                  },
                  {
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        Búsqueda avanzada de talento
                      </span>
                    ),
                    iconSrc: listItemImage,
                    iconAlt: "Talento",
                  },
                  {
                    text: (
                      <span className="text-sm sm:text-base md:text-lg text-white">
                        Gestión de cantera
                      </span>
                    ),
                    iconSrc: listItemImage,
                    iconAlt: "Cantera",
                  },
                ]}
                listClassName="px-6"
                spacing="base"
                padding="base"
                align="center"
                iconSize={32}
                iconClassName="w-6 h-6 sm:w-10 sm:h-10"
                itemColor="white"
              />
            </article>
          </section>
        ),
      }}
    >
      <section className="my-20">
        <article>
          <header>
            <Heading as="h2" level="h2" className="px-4">
              Clubs
            </Heading>
          </header>
          <section className="py-4">
            <p className="px-4">
              Página de Clubs: gestiona plantillas, explora mercado y potencia
              tu estructura deportiva.
            </p>
            <div className="px-4 mt-4 max-w-2xl">
              <FeatureList
                items={[
                  {
                    text: "Publicación de vacantes",
                    iconSrc: listItemImage,
                    iconAlt: "Vacantes",
                  },
                  {
                    text: "Búsqueda avanzada de talento",
                    iconSrc: listItemImage,
                    iconAlt: "Talento",
                  },
                  {
                    text: "Gestión de cantera",
                    iconSrc: listItemImage,
                    iconAlt: "Cantera",
                  },
                ]}
                spacing="base"
                padding="base"
                align="center"
                iconSize={20}
              />
            </div>
          </section>
        </article>
      </section>
    </LandingPageTemplate>
  );
};

export default ClubsPage;
