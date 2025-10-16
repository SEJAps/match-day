import type { FC } from "react";
import { Link } from "react-router";
import logoSm from "../assets/images/svg/logo-sm.svg";
import iconFacebook from "../assets/images/svg/social/facebook.svg";
import iconInstagram from "../assets/images/svg/social/instagram.svg";
import iconLinkedIn from "../assets/images/svg/social/linkedin.svg";
import iconTwitter from "../assets/images/svg/social/twitter-o-x.svg";

const MainFooter: FC = () => {
  return (
    <footer className="w-full bg-[#0E1423] text-white mt-auto">
      <div className="container mx-auto px-4 py-10">
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
              La plataforma definitiva para el fútbol moderno. Estadísticas,
              gestión y mercado de fichajes en un solo lugar.
            </p>
          </div>

          {/* Columna 2: Enlaces */}
          <section>
            <h4 className="text-sm font-semibold">Enlaces Rápidos</h4>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>
                <Link
                  to="/"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Características
                </Link>
              </li>
              <li>
                <Link
                  to="/prices"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Precios
                </Link>
              </li>
            </ul>
          </section>

          {/* Columna 3: Soporte */}
          <section>
            <h4 className="text-sm font-semibold">Soporte</h4>
            <ul className="mt-3 space-y-2 text-neutral-300">
              <li>
                <Link
                  to="/help-center"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Centro de Ayuda
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center#faq"
                  className="hover:text-emerald-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </section>

          {/* Columna 4: Redes sociales */}
          <section>
            <h4 className="text-sm font-semibold">Síguenos</h4>
            <div className="mt-3 grid grid-cols-4 gap-3 max-w-[200px]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <img src={iconFacebook} alt="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <img src={iconTwitter} alt="Twitter/X" className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <img src={iconInstagram} alt="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
              >
                <img src={iconLinkedIn} alt="LinkedIn" className="h-5 w-5" />
              </a>
            </div>
          </section>
        </div>

        {/* Separador y legal */}
        <div className="mt-10 border-t border-white/10 pt-4">
          <p className="text-center text-sm text-neutral-400">
            © 2024 Match Day. Todos los derechos reservados.
          </p>
          <div className="mt-3 flex items-center justify-center gap-6 text-sm text-neutral-400">
            <Link
              to="/privacy-policy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacidad
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-emerald-400 transition-colors"
            >
              Términos
            </Link>
            <Link
              to="/privacy-policy#cookies"
              className="hover:text-emerald-400 transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
