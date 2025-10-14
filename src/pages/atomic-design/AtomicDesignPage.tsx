import type { FC } from "react";
import { LogoBrand } from "../../components/molecules";
import { Logo } from "../../components/atoms";

const AnchorLink = ({ id, children }: { id: string; children: string }) => (
  <a
    href={`#${id}`}
    className="block text-sm text-teal-400 hover:text-teal-300 transition-colors"
  >
    {children}
  </a>
);

const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-2xl font-semibold text-white mt-12 mb-4 flex items-center gap-2">
      <span className="h-6 w-1 rounded bg-teal-500 inline-block" /> {title}
    </h2>
    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

const Code = ({ children }: { children: string }) => (
  <pre className="bg-neutral-800 border border-neutral-700 rounded-lg p-4 overflow-x-auto text-xs leading-relaxed text-teal-300 mb-6">
    <code>{children}</code>
  </pre>
);

const AtomicDesignPage: FC = () => {
  return (
    <main className="px-4 py-10 lg:px-12 xl:px-20 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-10">
        {/* Sidebar TOC */}
        <aside className="lg:col-span-3 lg:sticky lg:top-24 h-max bg-neutral-900/40 border border-neutral-800 rounded-xl p-5 hidden lg:block">
          <h2 className="text-sm font-semibold text-neutral-200 mb-3 tracking-wide">
            Tabla de contenidos
          </h2>
          <nav className="space-y-1">
            <AnchorLink id="intro">Introducción</AnchorLink>
            <AnchorLink id="principios">Principios</AnchorLink>
            <AnchorLink id="niveles">Niveles</AnchorLink>
            <div className="ml-3 space-y-1">
              <AnchorLink id="atomos">Átomos</AnchorLink>
              <AnchorLink id="moleculas">Moléculas</AnchorLink>
              <AnchorLink id="organismos">Organismos</AnchorLink>
              <AnchorLink id="plantillas">Plantillas (Templates)</AnchorLink>
              <AnchorLink id="paginas">Páginas</AnchorLink>
            </div>
            <AnchorLink id="naming">Convenciones & Naming</AnchorLink>
            <AnchorLink id="ejemplos">Ejemplos en este proyecto</AnchorLink>
            <AnchorLink id="buenas-practicas">Buenas prácticas</AnchorLink>
            <AnchorLink id="roadmap">Roadmap / Próximos pasos</AnchorLink>
            <AnchorLink id="recursos">Recursos externos</AnchorLink>
          </nav>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9">
          <header className="mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">
              Atomic Design en Match Day
            </h1>
            <p className="text-lg text-neutral-300 max-w-3xl">
              Atomic Design es una metodología para construir sistemas de diseño
              modulares y escalables. Divide la interfaz en cinco niveles
              jerárquicos (Átomos, Moléculas, Organismos, Plantillas y Páginas)
              que fomentan la reutilización, la consistencia visual y la
              evolución controlada del producto.
            </p>
          </header>

          <Section id="intro" title="Introducción">
            <p>
              La meta principal de Atomic Design es ofrecer una forma
              sistemática de crear componentes que puedan combinarse como
              bloques de construcción para dar lugar a experiencias complejas
              sin sacrificar coherencia ni velocidad de desarrollo. Cada capa
              añade contexto y complejidad sobre la anterior, pero debe
              preservar la simplicidad y responsabilidad única de sus piezas
              base.
            </p>
            <p>
              En este proyecto, usamos TypeScript + React + Vite. Adoptar la
              jerarquía nos permite: (1) separar responsabilidades, (2) escalar
              el diseño visual sin duplicar estilos y (3) facilitar pruebas y
              refactors localizados.
            </p>
          </Section>

          <Section id="principios" title="Principios Clave">
            <ul>
              <li>
                <strong>Composición progresiva:</strong> construir de lo simple
                a lo complejo.
              </li>
              <li>
                <strong>Reutilización antes que duplicación:</strong> evita
                recrear patrones.
              </li>
              <li>
                <strong>Single Source of Truth:</strong> colores, tipografías y
                tokens centralizados.
              </li>
              <li>
                <strong>Encapsulación:</strong> cada componente expone una API
                clara (props) y oculta detalles internos.
              </li>
              <li>
                <strong>Escalabilidad semántica:</strong> los nombres reflejan
                intención, no implementación.
              </li>
              <li>
                <strong>Accesibilidad integrada:</strong> roles ARIA, etiquetado
                y contrastes se consideran desde los átomos.
              </li>
            </ul>
          </Section>

          <Section id="niveles" title="Niveles de la Metodología">
            <p>
              Los cinco niveles crean una progresión: primero aseguramos la
              calidad y consistencia visual en unidades mínimas (átomos) y luego
              aumentamos contexto y responsabilidad hasta llegar a una página
              completa que mezcla datos reales y layout final.
            </p>
          </Section>

          <Section id="atomos" title="Átomos (Atoms)">
            <p>
              Son los componentes base: elementos HTML, iconos, tipografía,
              inputs, botones puros o, en nuestro caso, el logotipo en su forma
              más granular. Encapsulan estilos y comportamiento mínimo.
            </p>
            <p>
              Ejemplos actuales: <code className="text-teal-400">Logo</code>,
              botones simples, tipografías (definidas en{" "}
              <code>src/assets/styles</code>). Un átomo NO debe conocer flujos
              de negocio complejos ni dependencias de contexto global salvo
              tokens de diseño.
            </p>
            <Code>{`// Ejemplo de uso del átomo Logo
<Logo size={{ x: 120, y: 112 }} colorPreset="brandDark" />`}</Code>
          </Section>

          <Section id="moleculas" title="Moléculas (Molecules)">
            <p>
              Agrupan átomos que juntos forman una unidad funcional mínima (ej.
              un search box: input + botón). Mantienen baja complejidad y
              exponen una API cohesiva.
            </p>
            <p>
              Ejemplo: <code className="text-teal-400">LogoBrand</code> combina
              el <code>Logo</code> con comportamiento de navegación y esquemas
              de color predefinidos.
            </p>
            <Code>{`<LogoBrand colorScheme="brandDark" navigable logoProps={{ size: { x: 100, y: 94 } }} />`}</Code>
          </Section>

          <Section id="organismos" title="Organismos (Organisms)">
            <p>
              Conjuntos de moléculas y átomos que conforman secciones
              diferenciadas (headers, cards complejas, tablas interactivas).
              Aquí ya existe lógica de disposición y cierta interacción
              compuesta.
            </p>
            <p>
              Ejemplo: <code className="text-teal-400">LogoBrandShowcase</code>{" "}
              (organismo de documentación interna) reúne LogoBrand + controles
              de estado.
            </p>
          </Section>

          <Section id="plantillas" title="Plantillas (Templates)">
            <p>
              Definen estructura sin contenido final. Son layouts con zonas que
              luego las Páginas rellenan. Facilitan evaluar densidad, ritmo
              visual y responsividad antes de volcar datos reales.
            </p>
            <p>
              En este proyecto podríamos formalizar un <em>Layout</em> base
              (header, main, footer) como plantilla reutilizable para todas las
              secciones públicas.
            </p>
          </Section>

          <Section id="paginas" title="Páginas (Pages)">
            <p>
              Materializan contenido real (datos, copy final, imágenes). Validan
              el comportamiento global, flujos y SEO. No deberían contener
              duplicación de patrones; si se repite, se refactoriza a niveles
              inferiores.
            </p>
            <p>
              Ejemplos: <code>/players</code>, <code>/teams</code>,{" "}
              <code>/logo-showcase</code>.
            </p>
          </Section>

          <Section id="naming" title="Convenciones & Naming">
            <ul>
              <li>
                <strong>Directorio:</strong> <code>atoms/</code>,{" "}
                <code>molecules/</code>, <code>organisms/</code>, (opcional){" "}
                <code>templates/</code>, <code>pages/</code>.
              </li>
              <li>
                <strong>Componentes:</strong> PascalCase; export default +
                export tipo (ej. <code>Logo</code>, <code>LogoBrand</code>).
              </li>
              <li>
                <strong>Props:</strong> Claras y minimalistas; evitar booleans
                ambiguos (<code>isActive</code> mejor que <code>active</code> si
                define estado).
              </li>
              <li>
                <strong>Colores:</strong> Preferir tokens centralizados o
                presets (ver <code>colorScheme</code> y <code>colorPreset</code>
                ).
              </li>
              <li>
                <strong>Tests:</strong> Nomenclatura{" "}
                <code>ComponentName.spec.tsx</code>.
              </li>
            </ul>
          </Section>

          <Section id="ejemplos" title="Ejemplos en este Proyecto">
            <p className="mb-4">Demostración rápida del átomo y la molécula:</p>
            <div className="flex flex-wrap gap-8 items-end">
              <div className="flex flex-col items-center gap-2">
                <Logo size={{ x: 90, y: 84 }} colorPreset="brandDark" />
                <span className="text-xs text-neutral-400">Átomo: Logo</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <LogoBrand
                  navigable={false}
                  colorScheme="brandLight"
                  logoProps={{ size: { x: 90, y: 84 } }}
                />
                <span className="text-xs text-neutral-400">
                  Molécula: LogoBrand
                </span>
              </div>
            </div>
          </Section>

          <Section id="buenas-practicas" title="Buenas Prácticas">
            <ul>
              <li>
                <strong>Props controladas:</strong> Evitar side-effects ocultos;
                derivar estado fuera.
              </li>
              <li>
                <strong>Separación visual/lógica:</strong> Extraer hooks o
                lógica compleja fuera del render donde aplique.
              </li>
              <li>
                <strong>Accesibilidad:</strong> Etiquetas aria-label, roles y
                contraste de color verificados.
              </li>
              <li>
                <strong>Escalado de color:</strong> Añadir nuevos esquemas vía
                preset en lugar de hardcodear hex repetidos.
              </li>
              <li>
                <strong>Story/Showcase:</strong> Mantener un organismo de
                documentación viva (p.ej. <code>LogoBrandShowcase</code>).
              </li>
              <li>
                <strong>Refactor incremental:</strong> Si un organismo crece
                demasiado, promover partes a molécula.
              </li>
            </ul>
          </Section>

          <Section id="roadmap" title="Roadmap / Próximos pasos">
            <ol className="list-decimal pl-5">
              <li>
                Centralizar design tokens (colores, spacing, radius) en un
                módulo TS.
              </li>
              <li>
                Agregar carpeta <code>templates/</code> para layouts
                reutilizables.
              </li>
              <li>
                Integrar pruebas visuales o Chromatic para detectar regresiones.
              </li>
              <li>
                Incorporar un ThemeProvider para dark/light + high-contrast.
              </li>
              <li>
                Documentar guidelines de accesibilidad (foco, navegación
                teclado).
              </li>
            </ol>
          </Section>

          <Section id="recursos" title="Recursos Externos">
            <ul>
              <li>
                <a
                  href="https://bradfrost.com/blog/post/atomic-web-design/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300"
                >
                  Brad Frost - Atomic Web Design
                </a>
              </li>
              <li>
                <a
                  href="https://storybook.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300"
                >
                  Storybook
                </a>
              </li>
              <li>
                <a
                  href="https://www.smashingmagazine.com/2016/07/building-living-style-guides/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300"
                >
                  Living Style Guides
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </div>
    </main>
  );
};

export default AtomicDesignPage;
