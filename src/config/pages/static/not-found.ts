import type { NotFoundConfig } from "@/config/types";

export const NOT_FOUND_STATIC_PAGE: NotFoundConfig = {
  code: "404",
  message: "La página que buscas no existe o fue movida.",
  ctaLabel: "Volver al inicio",
  ctaHref: "/",
};
