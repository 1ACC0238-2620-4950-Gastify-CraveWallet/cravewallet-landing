import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, hasLocale } from "@/lib/i18n";
import { getDictionary } from "../dictionaries";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://cravewallet.gastify.pe";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { terms } = await getDictionary(lang);

  return {
    title: terms.metaTitle,
    description: terms.metaDescription,
    alternates: {
      canonical: `${SITE}/${lang}/terms`,
      languages: {
        "en-US": `${SITE}/en/terms`,
        "es-419": `${SITE}/es/terms`,
        en: `${SITE}/en/terms`,
        es: `${SITE}/es/terms`,
        "x-default": `${SITE}/${defaultLocale}/terms`,
      },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const { terms } = dict;

  return (
    <>
      <Navbar lang={lang} dict={dict.nav} />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 py-[var(--space-8)] md:py-[var(--space-10)] bg-background focus:outline-none"
      >
        <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-4)] md:px-[var(--space-5)]">
          <div className="max-w-3xl">
            <a
              href={`/${lang}`}
              className="inline-flex items-center gap-[var(--space-2)] text-sm font-medium text-primary hover:underline mb-[var(--space-5)]"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {dict.nav.backToHome}
            </a>

            <p className="text-primary text-xs font-semibold uppercase tracking-[0.12em] mb-[var(--space-3)]">
              {terms.eyebrow}
            </p>
            <h1
              className="font-display font-bold text-on-surface leading-[1.08] mb-[var(--space-3)]"
              style={{ fontSize: "clamp(28px, 4.5vw, 44px)" }}
            >
              {terms.title}
            </h1>
            <p className="text-on-surface-variant text-xs font-medium mb-[var(--space-5)]">
              {terms.lastUpdated}
            </p>
            <p className="text-on-surface-variant text-base leading-relaxed mb-[var(--space-8)]">
              {terms.intro}
            </p>

            <div className="flex flex-col gap-[var(--space-5)]">
              {terms.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  aria-labelledby={`heading-${section.id}`}
                  className="bg-surface border border-surface-variant p-[var(--space-5)]"
                  style={{
                    borderRadius: "var(--radius-lg)",
                    boxShadow: "var(--shadow-1)",
                  }}
                >
                  <h2
                    id={`heading-${section.id}`}
                    className="font-display font-semibold text-[20px] text-on-surface mb-[var(--space-4)]"
                  >
                    {section.title}
                  </h2>

                  <div className="flex flex-col gap-[var(--space-3)]">
                    {section.paragraphs.map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-on-surface-variant text-[15px] leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets.length > 0 && (
                    <ul className="mt-[var(--space-4)] flex flex-col gap-[var(--space-3)]">
                      {section.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-[var(--space-3)] text-on-surface text-sm leading-relaxed"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} />
    </>
  );
}
