import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, hasLocale, locales, type Locale } from "@/lib/i18n";

// Idioma elegido antes con el selector; si no hay, el del navegador (por defecto "en").
function getLocale(request: NextRequest): Locale {
  const saved = request.cookies.get("NEXT_LOCALE")?.value;
  if (saved && hasLocale(saved)) return saved;

  const header = request.headers.get("accept-language") ?? "";
  if (!header.trim()) return defaultLocale;

  const preferred = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      const weight = q ? Number(q) : 1;
      return {
        lang: tag.toLowerCase().split(/[-_]/)[0],
        q: Number.isFinite(weight) ? weight : 0,
      };
    })
    .sort((a, b) => b.q - a.q);
  const match = preferred.find((p) => hasLocale(p.lang));
  return match ? (match.lang as Locale) : defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasPrefix) return;

  request.nextUrl.pathname = `/${getLocale(request)}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Todo menos los recursos internos y los archivos estáticos.
  matcher: ["/((?!_next|.*\\..*).*)"],
};
