import type { FC } from "react";
import LogoBrandShowcase from "../../components/organisms/LogoBrandShowcase";

const LogoBrandShowcasePage: FC = () => {
  return (
    <section className="px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Logo Showcase</h1>
      <div className="bg-white rounded-lg shadow p-4">
        <LogoBrandShowcase />
      </div>
    </section>
  );
};

export default LogoBrandShowcasePage;
