import { Heading, ServiceCard } from "@/components";
import { SERVICES_PAGE_CARDS, SERVICES_STATIC_PAGE } from "@/config";
import type { FC } from "react";

const ServicesPage: FC = () => {
  const { intro, note } = SERVICES_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12 bg-[#0F6E5D]">
      <article className="mb-10">
        <Heading as="h2" level="h1" className="text-5xl mb-4 sm:mb-6">
          {intro.title}
        </Heading>
        {intro.description && (
          <p className="text-neutral-200 max-w-3xl">{intro.description}</p>
        )}
        {note && <p className="text-neutral-300 mt-2 text-sm">{note}</p>}
      </article>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {SERVICES_PAGE_CARDS.map((c) => (
          <ServiceCard
            key={c.title}
            title={c.title}
            text={c.text}
            icon={c.icon}
            ctaLabel={c.ctaLabel}
            ctaHref={c.ctaHref}
            variant={c.variant}
          />
        ))}
      </div>
    </section>
  );
};
export default ServicesPage;
