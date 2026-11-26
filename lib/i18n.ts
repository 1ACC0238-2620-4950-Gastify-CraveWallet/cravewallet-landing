export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

// Etiqueta BCP 47 para el atributo <html lang> (en / es-419).
export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es-419",
};

// Formato de números por idioma (contadores animados: en-US y es-419).
export const numberLocale: Record<Locale, string> = {
  es: "es-419",
  en: "en-US",
};

export type Dictionary = typeof import("@/dictionaries/es.json");
