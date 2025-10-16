import { Heading, ServiceCard } from "@/components";
import { SERVICES_PAGE_CARDS } from "@/config";
import type { FC } from "react";

const ServicesPage: FC = () => (
  <section className="container mx-auto px-6 py-12 bg-[#0F6E5D]">
    <article className="mb-10">
      <Heading as="h2" level="h1" className="text-5xl mb-4 sm:mb-6">
        ¿Qué ofrecemos?
      </Heading>
      <p className="text-neutral-200 max-w-3xl">
        Características diseñadas para el mundo del fútbol moderno
      </p>
    </article>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
      {SERVICES_PAGE_CARDS.map((c, i) => {
        // Bento en portátiles: 1: span 3 cols, 2: span 2 cols (horizontal), 3: span 2 cols
        const span =
          i === 0
            ? "lg:col-span-3"
            : i === 1
              ? "lg:col-span-2"
              : "lg:col-span-2";
        return (
          <div key={c.title} className={span}>
            <ServiceCard
              title={c.title}
              text={c.text}
              icon={c.icon}
              ctaLabel={c.ctaLabel}
              ctaHref={c.ctaHref}
              variant={c.variant}
            />
          </div>
        );
      })}
    </div>
  </section>
);
export default ServicesPage;
