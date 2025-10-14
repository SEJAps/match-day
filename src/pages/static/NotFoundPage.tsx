import type { FC } from "react";
import { Link } from "react-router";

const NotFoundPage: FC = () => (
  <section className="container mx-auto px-6 py-24 text-center">
    <h1 className="text-5xl font-extrabold mb-6">404</h1>
    <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
      La página que buscas no existe o fue movida.
    </p>
    <Link
      to="/"
      className="inline-block bg-teal-600 hover:bg-teal-500 transition-colors px-6 py-3 rounded font-medium"
    >
      Volver al inicio
    </Link>
  </section>
);
export default NotFoundPage;
