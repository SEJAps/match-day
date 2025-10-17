# Config

Estructura organizada para todo el contenido estático.

- `types.ts`: Tipos compartidos (Hero, Contacto y Páginas estáticas como Blog, Pricing, etc.).
- `pages/`: Contenido estático por página (hero, fondo del hero, CTAs, introducción, etc.).
  - `matchday.ts`, `players.ts`, `teams.ts`, `clubs.ts`, `contact.ts`
  - `static/`: Contenido sin hero por ahora — `blog.ts`, `features.ts`, `help-center.ts`, `not-found.ts`, `prices.ts`, `privacy-policy.ts`, `services.ts`, `terms-of-service.ts`
- `services-page.ts`: Data de la página de servicios (cards).
- `index.ts`: Barrel central para importar desde `@/config`.

## Convenciones

- Preferimos importar configs desde el barrel `@/config` salvo casos de página específicos (p. ej. `@/config/pages/players`).
- Evita usar rutas a `public/` en configs; usa imports desde `src/assets` para paths robustos.
- Cuando se cree una nueva página con contenido estático, añade un archivo en `pages/` y exporta desde `config/index.ts`.
 - Las páginas bajo `pages/static/` no incluyen hero por ahora. Si más adelante se decide incluirlo, se añadirá a sus tipos específicos.

## Guía para editar contenido (no técnica)

Si no te dedicas a programar y solo quieres cambiar textos, listas o datos visibles, consulta la guía:

- `src/config/content-editing.md` – Explica qué archivos tocar, qué campos editar y cómo ver los cambios sin entrar en código.

## Internacionalización (plan)

Hemos preparado un plan de i18n sin modificar el runtime. Consulta:

- `src/config/i18n/README.md` – RFC con estructura de locales y pasos sugeridos.
- `src/config/i18n/locales/{es,en}/common.json` – Ejemplos de claves de UI.
