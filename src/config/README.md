# Config

Estructura organizada para todo el contenido estático.

- `types.ts`: Tipos compartidos (`HeroSection`, `HeroBg`).
- `pages/`: Contenido estático por página (hero, fondo del hero, CTAs, introducción, etc.).
- `services-page.ts`: Data de la página de servicios (cards).
- `contact-section.ts`: Data para la sección de contacto.
- `index.ts`: Barrel central para importar desde `@/config`.

## Convenciones

- Preferimos importar configs desde el barrel `@/config` salvo casos de página específicos (p. ej. `@/config/pages/players`).
- Evita usar rutas a `public/` en configs; usa imports desde `src/assets` para paths robustos.
- Cuando se cree una nueva página con contenido estático, añade un archivo en `pages/` y exporta desde `config/index.ts`.
