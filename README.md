# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Rutas actuales (App)

```text
/
├── (index)              -> MatchDay
├── players              -> PlayersPage
├── teams                -> TeamsPage
├── clubs                -> ClubsPage
├── services             -> ServicesPage
├── blog                 -> BlogPage
├── help-center          -> HelpCenterPage
├── caracteristiques     -> FeaturesPage (alias legacy)
├── features             -> FeaturesPage (canonical)
├── prices               -> PricesPage
├── contact              -> ContactPage
├── privacy-policy       -> PrivacyPolicyPage
├── terms-of-service     -> TermsOfServicePage
├── logo-showcase        -> LogoBrandShowcasePage (alias rápido)
└── atomic-design/
  ├── (index)          -> AtomicDesignPage
  ├── toast            -> ToastShowcasePage
  ├── buttons          -> ButtonShowcasePage
  └── logo-showcase    -> LogoBrandShowcasePage

* Catch-all 404 dentro del layout -> NotFoundPage
```

Notas:

1. Se mantienen ambas rutas `/caracteristiques` y `/features` hasta eliminar la primera.
2. `logo-showcase` existe en raíz y bajo `atomic-design` por discoverability.
3. Las páginas estáticas son placeholders listos para contenido real.

## i18n rápido (para editores)

Dónde editar traducciones (JSON):

- ES: `src/config/i18n/locales/es/common.json`
- EN: `src/config/i18n/locales/en/common.json`
- CA: `src/config/i18n/locales/ca/common.json`

Claves nuevas relevantes:

- `pages.matchday.*` (hero, intro, features, contact)
- `pages.players.*` (hero, heroCtas, sections)
- `pages.teams.*` (hero, heroCtas, title/description/features)
- `pages.clubs.*` (hero, heroCtas, title/description/features)
- `pages.contact.*` (hero, heroCtas, contact, toast)
- `common.servicesForEveryNeed.*` (bloque común reutilizable)

Servicios (sección reusable):

- `ServicesSection` ya usa `pages.services.intro.*` y `pages.services.cards.*`

Cómo probar:

- Usa el selector de idioma (Header/Footer) o añade `?lng=es|en|ca` a la URL.

Guía completa para no técnicos: `src/config/i18n/translation-editing.md`
