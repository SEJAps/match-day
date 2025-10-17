import { useEffect, useState, type FC } from "react";
import platform from "../assets/images/png/platform.png";
import {
  SERVICES_FOR_EVERY_NEED,
  type ServiceCardForEveryNeed,
} from "@/config/services-for-every-need";
import {
  Card,
  Heading,
  ServicesSection,
  ContactSection,
  LandingPageTemplate,
  FeatureTwoColumnTemplate,
} from "@/components";
import { Image } from "@/components/atoms";
import {} from "@/config";
import { MATCHDAY_PAGE } from "@/config/pages/matchday";
const MatchDay: FC = () => {
  const [servicesForEveryNeed, setServicesForEveryNeed] = useState<
    ServiceCardForEveryNeed[]
  >([]);

  useEffect(() => {
    setServicesForEveryNeed(SERVICES_FOR_EVERY_NEED);
    return () => setServicesForEveryNeed([]);
  }, []);

  return (
    <>
      <LandingPageTemplate
        className="flex flex-col bg-white text-black"
        hero={{
          images: MATCHDAY_PAGE.heroBgImages,
          title: MATCHDAY_PAGE.hero.title,
          description: MATCHDAY_PAGE.hero.description,
          ctas: MATCHDAY_PAGE.heroCtas,
          heroContent: (
            <picture className="max-h-72  w-9/12 mt-10 sm:max-h-auto sm:max-w-96">
              <Image
                className="w-full h-full sm:max-w-96 sm:h-auto aspect-auto rounded-lg shadow-sm shadow-white/20"
                width={MATCHDAY_PAGE.hero.image?.width}
                height={MATCHDAY_PAGE.hero.image?.height}
                src={MATCHDAY_PAGE.hero.image?.src}
                alt={MATCHDAY_PAGE.hero.image?.alt}
                fit="contain"
              />
            </picture>
          ),
        }}
      >
        <section className="matchday-page flex flex-col sm:mt-28">
          <article className="flex flex-col w-full max-w-7xl mx-auto mt-20">
            <aside className="flex flex-col gap-8">
              <Heading
                as="h2"
                level="h2"
                weight="semibold"
                align="center"
                className="text-3xl sm:text-5xl my-4 px-8"
              >
                {MATCHDAY_PAGE.intro.heading}
              </Heading>
              <p className="text-center text-xl sm:text-2xl px-8 sm:px-18">
                {MATCHDAY_PAGE.intro.paragraph}
              </p>
            </aside>
            <FeatureTwoColumnTemplate
              heading={MATCHDAY_PAGE.featuresSection.heading}
              description={MATCHDAY_PAGE.featuresSection.description}
              features={MATCHDAY_PAGE.featuresSection.features}
              featureListProps={{
                spacing: "base",
                padding: "base",
                align: "center",
                listClassName: "px-8 sm:pl-20 text-lg",
                iconSize: 24,
              }}
              media={{
                src: platform,
                alt: "Plataforma",
                className: "aspect-auto h-full w-full",
              }}
            />
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
                      <Image
                        src={service.icon}
                        alt={service.title}
                        className="w-24 h-24 sm:w-16 sm:h-16"
                        width={96}
                        height={96}
                        fit="contain"
                      />
                    }
                    label={service.textBtn}
                  />
                ))}
            </section>
          </article>
          <ServicesSection sectionClassName="py-20" />
        </section>
      </LandingPageTemplate>
      <ContactSection
        className="py-20"
        title={MATCHDAY_PAGE.contactSection.title}
        subtitle={MATCHDAY_PAGE.contactSection.subtitle}
        description={MATCHDAY_PAGE.contactSection.description}
        highlights={MATCHDAY_PAGE.contactSection.highlights}
        info={MATCHDAY_PAGE.contactSection.info}
        mapImageUrl={MATCHDAY_PAGE.contactSection.mapImageUrl}
      />
    </>
  );
};

export default MatchDay;
