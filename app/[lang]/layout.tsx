import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Poppins, Inter } from "next/font/google";
import { hasLocale, locales } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import "../globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE = "https://cravewallet.gastify.pe";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = await getDictionary(lang);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "Gastify — Ingeniería de Software UPC" }],
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${SITE}/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${SITE}/${l}`])),
    },
    openGraph: {
      type: "website",
      url: `${SITE}/${lang}`,
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [
        {
          url: `${SITE}/assets/og-image-1200x630.png`,
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt,
        },
      ],
      locale: meta.ogLocale,
      siteName: "CraveWallet by Gastify",
    },
    twitter: {
      card: "summary_large_image",
      site: "@gastifyapp",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      images: [`${SITE}/assets/twitter-card-1200x600.png`],
    },
  };
}

// Aplica el tema antes del primer pintado para evitar el parpadeo: la
// elección guardada manda; si no hay, se sigue la del sistema.
const themeScript = `(function(){try{var m=window.matchMedia("(prefers-color-scheme: dark)");var apply=function(){var s=localStorage.getItem("theme");document.documentElement.dataset.theme=s||(m.matches?"dark":"light");};apply();m.addEventListener("change",apply);}catch(e){}})();`;

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { meta } = await getDictionary(lang);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CraveWallet",
    operatingSystem: "Android",
    applicationCategory: "FinanceApplication",
    inLanguage: lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "PEN" },
    description: meta.appDescription,
    author: { "@type": "Organization", name: "Gastify" },
  };

  return (
    <html
      lang={lang}
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
