# RFC: Internacionalización (i18n) — Propuesta inicial

Objetivo: preparar la base conceptual y la estructura de archivos para traducir la UI sin modificar el runtime aún. Este documento sirve como plan y guía de implementación futura.

## Alcance de esta fase

- NO se instala ninguna dependencia todavía.
- NO se importan inicializadores en `main.tsx`.
- SÍ se define la estructura de locales y convenciones.
- SÍ se listan dependencias y pasos para cuando demos el siguiente paso.

## Bibliotecas propuestas

- i18next
- react-i18next
- i18next-browser-languagedetector (detección por navegador y persistencia en localStorage)

## Estructura propuesta

```
src/
  config/
    i18n/
      README.md           # este documento
      locales/
        es/
          common.json     # etiquetas de UI comunes
        en/
          common.json
```

- `common.json` guarda textos de interfaz (chrome): navegación, footer, botones, mensajes breves.
- El contenido largo y rico (páginas estáticas en `config/pages`) se mantendrá en español inicialmente. Más adelante se evaluarán dos opciones para contenido:
  - Plan A (mínimo viable): traducir solo la capa de UI con i18next; dejar contenido de páginas en español.
  - Plan B (intermedio): para campos concretos en configs, permitir estructura `{ es: string; en?: string }` y un helper para escoger por idioma actual.

## Convenciones de claves

- `nav.*` para navegación.
- `footer.*` para pie.
- `common.*` para etiquetas reutilizables (CTA, estados, accesibilidad).
- `pages.notFound.*`, `components.backToTop.*`, etc., cuando haga falta granularidad.

Ejemplo (extracto):

```json
{
  "nav": { "players": "Jugadores", "teams": "Equipos" },
  "footer": { "cookies": "Cookies" },
  "common": { "learnMore": "Saber más" }
}
```

## Pasos de implementación (cuando decidamos avanzar)

1. Instalar dependencias:
   - i18next, react-i18next, i18next-browser-languagedetector.
2. Crear `src/i18n/index.ts` con inicialización de i18next, detección y recursos (cargar `locales`).
3. Envolver la app con `I18nextProvider` o usar `useTranslation` directamente (react-i18next lo provee vía context).
4. Reemplazar literales de UI por `t('clave')` de forma incremental, empezando por:
   - BackToTop, NotFoundPage, MainFooter, MainHeader.
5. (Opcional) Añadir un `LanguageSwitcher` minimal no intrusivo en el footer.
6. (Futuro) Evaluar Plan B para contenido de `config/pages` si se requiere multilenguaje real.

## Criterios de aceptación mínimos

- La app compila sin cambios funcionales al integrar i18n.
- El idioma por defecto es `es` y se respeta si no hay preferencia del usuario.
- Los textos de UI migrados a `t()` se resuelven correctamente en `es` y `en`.

## Riesgos y mitigaciones

- Dispersión de claves: mantener prefijos por dominio (`nav.`, `footer.`, `pages.*`).
- Desfase de traducciones: empezar con cobertura parcial y fallback a `es`.
- Acoplamiento con contenido estático: evitar forzar todo a i18n; priorizar UI.

---

Este documento se puede ampliar con checklist y convenciones de QA cuando arranque la implementación.
