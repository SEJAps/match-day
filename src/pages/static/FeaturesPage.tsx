import type { FC } from "react";
import { FEATURES_STATIC_PAGE } from "@/config";

const FeaturesPage: FC = () => {
  const { intro, groups } = FEATURES_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3">{intro.title}</h1>
      {intro.description && (
        <p className="text-neutral-300 max-w-3xl mb-8">{intro.description}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {groups.map((g) => (
          <div
            key={g.title}
            className="bg-neutral-800/40 border border-neutral-700/60 rounded p-6"
          >
            <h2 className="text-xl font-semibold mb-3">{g.title}</h2>
            <ul className="list-disc list-inside text-neutral-300 space-y-1">
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturesPage;
