import type { FC } from "react";
import { TERMS_OF_SERVICE_STATIC_PAGE } from "@/config";

const TermsOfServicePage: FC = () => {
  const { updatedAt, sections } = TERMS_OF_SERVICE_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12 max-w-5xl">
      <header className="mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Términos del servicio
        </h1>
        <p className="text-neutral-400 mt-2">
          Última actualización: {new Date(updatedAt).toLocaleDateString()}
        </p>
      </header>

      <div className="space-y-6">
        {sections.map((s) => (
          <article
            key={s.heading}
            className="bg-neutral-900/50 border border-white/10 rounded-lg p-6"
          >
            <h2 className="text-2xl font-semibold mb-3">{s.heading}</h2>
            <div className="prose prose-invert">
              {s.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default TermsOfServicePage;
