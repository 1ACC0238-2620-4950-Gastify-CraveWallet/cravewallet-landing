export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Formato de números por idioma (contadores animados).
export const numberLocale: Record<Locale, string> = {
  es: "es-PE",
  en: "en-US",
};

export type Dictionary = typeof import("@/dictionaries/es.json");
