# Guía rápida para editar contenido (sin tocar código)

Esta guía está pensada para personas no técnicas. Aquí verás qué archivos puedes editar para cambiar textos, listas, imágenes y datos visibles en la web, sin necesidad de programar.

## ¿Dónde está el contenido?

El contenido está centralizado en archivos de configuración dentro de `src/config/`. Hay dos categorías principales:

- `src/config/pages/` → Contenido por página (MatchDay, Players, Teams, Clubs, Contact, etc.)
- `src/config/pages/static/` → Contenido de páginas estáticas (Blog, Features, Help Center, Pricing, Privacy Policy, Terms of Service, Cookies, etc.)

Además:
- `src/config/services-page.ts` → Tarjetas de la página de Servicios.

## ¿Qué puedo editar con seguridad?

- Textos de títulos y descripciones: campos `title`, `description`.
- Listas de elementos: arreglos como `items`, `highlights`, `categories`, `features`.
- Enlaces (CTAs o navegación): campos `label`, `href`.
- Imágenes: valores `src` que ya están importados (normalmente rutas que empiezan con `@/assets/...`). Si cambias una imagen, asegúrate de que el archivo existe en `src/assets/`.
- Fechas: valores `updatedAt` (formato `YYYY-MM-DD`).

No edites:
- Nombres de tipos o estructuras (por ejemplo, no elimines campos obligatorios como `title` en objetos que lo requieran).
- Rutas de importación (líneas que empiezan por `import ... from "..."`).

## Páginas estáticas (sin hero)

En `src/config/pages/static/` encontrarás:

- `blog.ts` → Intro del blog y lista de artículos destacados (título, resumen, enlace, etiqueta, fecha).
- `features.ts` → Grupos de funcionalidades (título del grupo + lista de puntos).
- `help-center.ts` → Categorías con artículos (título + enlace), y FAQs.
- `prices.ts` → Planes (nombre, descripción, beneficios). Ahora los precios están ocultos en la web; puedes editar los textos y beneficios libremente.
- `privacy-policy.ts` → Secciones de la política de privacidad (título y párrafos). Puedes ampliar o ajustar el texto.
- `terms-of-service.ts` → Secciones de términos del servicio.
- `cookies.ts` → Secciones de política de cookies.
- `services.ts` → Texto introductorio de la página de servicios.

Cada archivo exporta una constante con el contenido, por ejemplo `PRICES_STATIC_PAGE`. Cambia los textos dentro de estos objetos.

## Páginas principales (con hero)

En `src/config/pages/` hay archivos como:
- `matchday.ts`, `players.ts`, `teams.ts`, `clubs.ts`, `contact.ts`.

Dentro puedes editar:
- `hero.title` y `hero.description` (texto del encabezado de la página).
- `heroCtas` (botones principales: etiqueta y estilo). Nota: las acciones al pulsar (onClick) se controlan en el código de la página, no aquí.
- `heroBgImages` (imágenes de fondo del hero): normalmente no necesitas tocarlas a menos que quieras cambiar el arte del fondo.
- Secciones específicas como `featuresSection`, `intro` o `contactSection` (con campos de texto, listas y datos de contacto).

## Consejos para editar

- Mantén el estilo: usa mayúsculas/minúsculas y tildes de forma consistente.
- Evita eliminar campos obligatorios. Si tienes dudas, deja el campo con un texto genérico.
- Para listas, respeta el formato (cada elemento entre comillas y separado por comas).
- Si añades artículos o categorías, asegúrate de que cada objeto tiene los mismos campos que el resto.

## ¿Cómo veo los cambios?

1. Guarda el archivo.
2. Si estás en modo desarrollo (servidor `vite`), la página se recargará sola. Si no, vuelve a ejecutar la previsualización.
3. Abre la página correspondiente en el navegador y revisa los textos.

## Problemas comunes

- Error de compilación tras editar: revisa que no falten comas ni cierres de llaves `{}` o corchetes `[]`.
- Imagen rota: verifica que el path apuntado existe realmente en `src/assets`.
- Cambios que no se ven: asegúrate de estar editando el archivo correcto (p.ej. `privacy-policy.ts` cambia la página `/privacy-policy`).

## Dónde pedir ayuda

Si no estás seguro de qué tocar, comenta brevemente qué quieres cambiar (página y sección) y alguien del equipo técnico te orientará o lo ajustará por ti.
