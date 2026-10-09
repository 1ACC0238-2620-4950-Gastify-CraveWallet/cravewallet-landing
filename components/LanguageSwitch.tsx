"use client";

import type { Locale } from "@/lib/i18n";

// Cambia al otro idioma y lo recuerda en la cookie que lee el proxy. Es un
// enlace normal (carga completa) para que el script del layout vuelva a
// aplicar el tema sobre el nuevo <html lang>.
export default function LanguageSwitch({ lang, label }: { lang: Locale; label: string }) {
  const other: Locale = lang === "es" ? "en" : "es";

  return (
    <a
      href={`/${other}`}
      hrefLang={other}
      aria-label={label}
      title={label}
      onClick={() => {
        document.cookie = `NEXT_LOCALE=${other}; path=/; max-age=31536000; samesite=lax`;
      }}
      className="btn h-9 px-[var(--space-2)] flex items-center gap-[var(--space-1)] text-sm font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-variant"
      style={{ borderRadius: "var(--radius-md)" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {other.toUpperCase()}
    </a>
  );
}
