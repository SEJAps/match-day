import type { FC } from "react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import logoSm from "../assets/images/svg/logo-sm.svg";
import iconFacebook from "../assets/images/svg/social/facebook.svg";
import iconInstagram from "../assets/images/svg/social/instagram.svg";
import iconLinkedIn from "../assets/images/svg/social/linkedin.svg";
import iconTwitter from "../assets/images/svg/social/twitter-o-x.svg";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const MainFooter: FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-[#0E1423] text-white mt-auto">
      <div className="container mx-auto px-8 py-10">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Columna 1: Marca y descripción */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoSm}
                alt="Match Day"
                width={170}
                height={41}
                className="h-10 w-auto"
              />
              <span className="sr-only">MATCH DAY</span>
            </div>
            <p className="mt-3 text-sm text-neutral-300 max-w-md">
              {t("footer.tagline", {
                defaultValue:
                  "La plataforma definitiva para el fútbol moderno. Estadísticas, gestión y mercado de fichajes en un solo lugar.",
              })}
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <section>
            <h4 className="text-sm font-semibold">
              {t("footer.quickLinks", { defaultValue: "Enlaces Rápidos" })}
            </h4>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.home", { defaultValue: "Inicio" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.services", { defaultValue: "Servicios" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.features", { defaultValue: "Características" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/prices"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.pricing", { defaultValue: "Precios" })}
                </Link>
              </li>
            </ul>
          </section>

          {/* Columna 3: Soporte */}
          <section>
            <h4 className="text-sm font-semibold">
              {t("footer.support", { defaultValue: "Soporte" })}
            </h4>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>
                <Link
                  to="/help-center"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.helpCenter", { defaultValue: "Centro de Ayuda" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.contact", { defaultValue: "Contacto" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center#faq"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("footer.faq", { defaultValue: "FAQ" })}
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t("nav.blog", { defaultValue: "Blog" })}
                </Link>
              </li>
            </ul>
          </section>

          {/* Columna 4: Redes sociales */}
          <section>
            <h4 className="text-sm font-semibold">
              {t("footer.followUs", { defaultValue: "Síguenos" })}
            </h4>
            <div className="mt-3 grid grid-cols-[repeat(4,minmax(0,.15fr)))] gap-4">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img
                  src={iconFacebook}
                  alt="Facebook"
                  className="h-full w-full"
                />
              </Link>

              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
              >
                <img
                  src={iconTwitter}
                  alt="Twitter/X"
                  className="h-full w-full"
                />
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img
                  src={iconInstagram}
                  alt="Instagram"
                  className="h-full w-full"
                />
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <img
                  src={iconLinkedIn}
                  alt="LinkedIn"
                  className="h-full w-full"
                />
              </Link>
            </div>
          </section>
        </div>

        {/* Separador y legal */}
        <div className="mt-10 border-t border-white/10 pt-4 md:flex md:items-center md:justify-between gap-4">
          <p className="text-center md:text-left text-sm text-neutral-400">
            {t("footer.copyright", {
              defaultValue: "© 2024 Match Day. Todos los derechos reservados.",
            })}
          </p>
          <div className="mt-3 md:mt-0 flex items-center justify-center md:justify-end gap-4 text-sm text-neutral-400">
            <Link
              to="/privacy-policy"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("footer.privacy", { defaultValue: "Privacidad" })}
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("footer.terms", { defaultValue: "Términos" })}
            </Link>
            <Link
              to="/cookies"
              className="hover:text-emerald-400 transition-colors"
            >
              {t("footer.cookies", { defaultValue: "Cookies" })}
            </Link>
          </div>
          <section className="mt-4 flex items-center justify-center">
            <LanguageSwitcher />
          </section>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
