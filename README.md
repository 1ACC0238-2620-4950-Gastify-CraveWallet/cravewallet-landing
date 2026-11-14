# CraveWallet — Landing Page

Landing page oficial de **CraveWallet** (by **Gastify**), gestor de suscripciones, membresías y gastos de delivery desarrollado como proyecto de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC).

## Stack tecnológico

- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript
- **Estilos:** Tailwind CSS v4 + Design System Material Design 3 (modo claro y oscuro)
- **Internacionalización (i18n):** Inglés por defecto (`/en`, `en-US`) y Español Latinoamérica (`/es`, `es-419`) mediante `lib/i18n.ts`, `proxy.ts` y `dictionaries/*.json`

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador (redirige automáticamente a `/en` por defecto o a `/es` si el navegador prefiere español).

Para verificar calidad de código y compilación de producción:

```bash
npm run lint
npm run build
```

---

## Cómo configurar los videos (About the Product & About the Team)

La sección de videos (`components/Videos.tsx`, ancla `#videos`) está lista para incrustar los videos **About the Product** y **About the Team** de YouTube exigidos por la rúbrica del curso. Mientras las URLs estén vacías (`""`), la sección no se renderiza en la página.

Para activarla, pega los enlaces de YouTube (acepta formatos `https://www.youtube.com/watch?v=...`, `https://youtu.be/...` o `https://www.youtube.com/embed/...`) en **`lib/videos.ts`**:

```ts
// lib/videos.ts
export const VIDEO_URLS = {
  aboutProduct: process.env.NEXT_PUBLIC_VIDEO_ABOUT_PRODUCT_URL ?? "https://www.youtube.com/watch?v=TU_ID_PRODUCTO",
  aboutTeam: process.env.NEXT_PUBLIC_VIDEO_ABOUT_TEAM_URL ?? "https://www.youtube.com/watch?v=TU_ID_EQUIPO",
} as const;
```

También puedes definir las variables de entorno `NEXT_PUBLIC_VIDEO_ABOUT_PRODUCT_URL` y `NEXT_PUBLIC_VIDEO_ABOUT_TEAM_URL` en Vercel o en `.env.local` sin modificar el código.

---

## Términos y Condiciones (`/[lang]/terms`)

La página de Términos y Condiciones está disponible en ambos idiomas (`/en/terms` y `/es/terms`) y enlazada desde el pie de página (`components/Footer.tsx`). Su contenido se encuentra en `dictionaries/en.json` y `dictionaries/es.json` bajo la clave `"terms"`.

Antes de la entrega final, reemplaza los marcadores `[COMPLETAR: ...]` en ambos diccionarios (`dictionaries/es.json` y `dictionaries/en.json`):

1. `[COMPLETAR: correo de contacto]` — correo oficial de soporte del equipo Gastify.
2. `[COMPLETAR: enlace o correo para solicitud de eliminación de cuenta]` — canal para ejercer la baja de cuenta y borrado de datos.
3. `[COMPLETAR: plazo de atención en días hábiles, p. ej. 5 días hábiles]` — plazo máximo de atención para solicitudes de eliminación de datos.
4. `[COMPLETAR: razón social / RUC o identificación legal del responsable]` — datos legales del titular (o mantener como proyecto académico UPC).
5. `[COMPLETAR: dirección o canal oficial de soporte]` — dirección o canal de atención al usuario.
