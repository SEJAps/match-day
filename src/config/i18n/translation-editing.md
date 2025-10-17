# Guía rápida para editar traducciones (no técnica)

Esta guía te explica cómo cambiar los textos traducibles de la web sin tocar código. No necesitas conocimientos técnicos: solo editar ficheros `.json`.

## 1) ¿Dónde están las traducciones?

- Español (ES): `src/config/i18n/locales/es/common.json`
- Inglés (EN): `src/config/i18n/locales/en/common.json`
- Catalán (CA): `src/config/i18n/locales/ca/common.json`

Abre el archivo del idioma que quieras editar y cambia solo los textos entre comillas.

## 2) Estructura de claves (qué modifica cada cosa)

- `nav.*`: etiquetas de navegación reutilizadas (enlaces típicos como Inicio, Servicios, etc.).
  - Se usan en el Footer. El Header aún no está 100% migrado a claves (se hará progresivamente), así que es normal que no cambie todo desde aquí todavía.
- `footer.*`: textos del pie de página (Privacidad, Términos, Cookies, etc.).
  - También incluye posibles títulos como `quickLinks`, `support`, `followUs` o `faq`.
- `common.*`: etiquetas genéricas (por ejemplo `learnMore`, `comingSoon`, `loading`).
- `components.*`:
  - `components.backToTop.label`: etiqueta accesible del botón “Volver arriba”.
  - `components.notFound.title` y `components.notFound.cta`: título y botón de la página 404.

Sugerencia: si ves que en tu idioma falta una clave que existe en otro, puedes copiarla y traducirla (mantén el mismo nombre de clave).

## 3) ¿Cómo veo los cambios?

Tienes dos maneras:

- Desde la propia web con el selector de idioma (aparece en el Footer y en el Header).
- Forzando el idioma en la URL con `?lng=es`, `?lng=en` o `?lng=ca`. Ejemplos:
  - `https://tusitio.com/?lng=es`
  - `https://tusitio.com/features?lng=en`

Si no ves el cambio al instante:
- Cambia a otro idioma y vuelve al tuyo con el selector.
- O borra el idioma recordado en el navegador (Local Storage → clave `i18nextLng`) y recarga.

## 4) Normas para editar sin romper nada

- Respeta el formato JSON: 
  - Comillas dobles `"` para claves y textos.
  - Comas entre pares clave/valor.
  - No dejes una coma al final del último elemento.
- No cambies los nombres de las claves; solo su texto.
- Usa acentos y caracteres especiales con normalidad (archivo en UTF-8).
- Mantén el mismo conjunto de claves en todos los idiomas cuando sea posible (ayuda a la consistencia).

## 5) ¿Puedo añadir un idioma nuevo?

Sí, pero requiere un paso técnico mínimo. Tu parte sería:
1. Copiar uno de los `common.json` y traducirlo (por ejemplo a `src/config/i18n/locales/pt/common.json`).
2. Avisar a desarrollo para que añadan ese idioma a la configuración y al selector.

## 6) Cobertura actual (qué sí cambia hoy)

- Footer (títulos y enlaces) → claves `nav.*` y `footer.*`.
- Botón “Volver arriba” → `components.backToTop.label`.
- Página 404 (título y botón) → `components.notFound.*`.

El resto de textos se irá migrando poco a poco a este sistema.

## 7) Checklist rápida

- [ ] Edité solo los textos (no cambié nombres de clave).
- [ ] El JSON sigue válido (no hay comas de más, ni faltan comillas).
- [ ] Probé el idioma con el selector o con `?lng=...`.
- [ ] Si añadí claves nuevas, las repliqué en los otros idiomas.

## 8) Preguntas frecuentes

- "He cambiado un texto y no lo veo": cambia de idioma y vuelve, o añade `?lng=...` a la URL. También puedes borrar `i18nextLng` de Local Storage.
- "Veo el texto original en español": puede que esa parte aún no esté conectada a las claves de traducción; se migrará más adelante.

Si necesitas ayuda, deja una nota en la PR o comenta qué pantalla/clave estás editando para que podamos guiarte.
