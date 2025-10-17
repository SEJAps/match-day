import type { FC } from "react";
import { Link } from "react-router";
import { NOT_FOUND_STATIC_PAGE } from "@/config";

const NotFoundPage: FC = () => {
  const { code, message, ctaHref, ctaLabel } = NOT_FOUND_STATIC_PAGE;
  return (
    <section className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl font-extrabold mb-6">{code}</h1>
      <p className="text-neutral-400 mb-8 max-w-xl mx-auto">{message}</p>
      <Link
        to={ctaHref}
        className="inline-block bg-teal-600 hover:bg-teal-500 transition-colors px-6 py-3 rounded font-medium"
      >
        {ctaLabel}
      </Link>
    </section>
  );
};
export default NotFoundPage;
