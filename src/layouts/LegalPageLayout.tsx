import type { FC } from "react";
import { Link } from "react-router";

type LegalSection = { heading: string; content: string[] };

export type LegalPageLayoutProps = {
  title: string;
  updatedAt?: string; // ISO date
  sections: LegalSection[];
  breadcrumbs?: { label: string; href?: string }[];
  asideTitle?: string;
};

const slugify = (text: string, fallback: string) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "") || fallback;

const LegalPageLayout: FC<LegalPageLayoutProps> = ({
  title,
  updatedAt,
  sections,
  breadcrumbs,
  asideTitle = "Contenido",
}) => {
  const crumb = breadcrumbs ?? [
    { label: "Inicio", href: "/" },
    { label: "Legal" },
    { label: title },
  ];

  const itemsWithId = sections.map((s, i) => ({
    ...s,
    id: slugify(s.heading, `sec-${i + 1}`),
  }));

  return (
    <section className="container mx-auto px-6 py-12 max-w-7xl">
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumbs" className="mb-6 text-sm text-neutral-400">
        {crumb.map((c, i) => (
          <span key={i}>
            {c.href ? (
              <Link to={c.href} className="hover:text-emerald-400">
                {c.label}
              </Link>
            ) : (
              <span>{c.label}</span>
            )}
            {i < crumb.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </nav>

      {/* Title */}
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight">{title}</h1>
        {updatedAt && (
          <p className="text-neutral-400 mt-2">
            Última actualización: {new Date(updatedAt).toLocaleDateString()}
          </p>
        )}
      </header>

      {/* Grid with TOC + Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <h2 className="text-sm font-semibold text-neutral-300 mb-3">
              {asideTitle}
            </h2>
            <ul className="space-y-1 text-sm">
              {itemsWithId.map((s) => (
                <li key={s.id}>
                  <a
                    className="text-neutral-400 hover:text-emerald-400"
                    href={`#${s.id}`}
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content */}
        <div className="space-y-6">
          {itemsWithId.map((s) => (
            <article
              id={s.id}
              key={s.id}
              className="bg-neutral-900/50 border border-white/10 rounded-lg p-6 scroll-mt-24"
            >
              <h2 className="text-2xl font-semibold mb-3">{s.heading}</h2>
              <div className="prose prose-invert max-w-none">
                {s.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalPageLayout;
