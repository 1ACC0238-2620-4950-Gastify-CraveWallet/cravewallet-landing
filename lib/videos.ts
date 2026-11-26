// URLs de los videos requeridos por la rúbrica del curso (About the Product y About the Team).
// Pega aquí los enlaces de YouTube (formato watch?v=..., youtu.be/... o embed/...) cuando estén listos,
// o defínelos en variables de entorno NEXT_PUBLIC_VIDEO_ABOUT_PRODUCT_URL y NEXT_PUBLIC_VIDEO_ABOUT_TEAM_URL.
// Mientras ambos valores estén vacíos (""), la sección #videos permanece oculta en la landing page.
export const VIDEO_URLS = {
  aboutProduct: process.env.NEXT_PUBLIC_VIDEO_ABOUT_PRODUCT_URL ?? "",
  aboutTeam: process.env.NEXT_PUBLIC_VIDEO_ABOUT_TEAM_URL ?? "",
} as const;

export function toYouTubeEmbedUrl(rawUrl: string): string | null {
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, "").toLowerCase();

    if (host === "youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host === "youtube.com" || host === "youtube-nocookie.com" || host === "m.youtube.com") {
      if (url.pathname.startsWith("/embed/")) {
        const id = url.pathname.replace("/embed/", "").split("/")[0];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.replace("/shorts/", "").split("/")[0];
        return id ? `https://www.youtube.com/embed/${id}` : null;
      }
      const v = url.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }

    return trimmed;
  } catch {
    return null;
  }
}
