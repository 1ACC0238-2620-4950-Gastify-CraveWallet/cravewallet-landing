import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CraveWallet — Controla tus suscripciones y gastos en soles | Gastify",
  description:
    "CraveWallet reúne todas tus suscripciones, membresías y gastos de delivery en un solo lugar. Recibe alertas 24 horas antes de cada cobro y conoce cuánto gastas realmente en soles. Gratis para Android.",
  keywords:
    "gestor de suscripciones, control de gastos, suscripciones Peru, Smart Fit, Netflix, Spotify, PedidosYa, gastos recurrentes, membresías, presupuesto universitarios, finanzas personales Peru, tipo de cambio dolar soles",
  authors: [{ name: "Gastify — Ingeniería de Software UPC" }],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://cravewallet.gastify.pe/" },
  openGraph: {
    type: "website",
    url: "https://cravewallet.gastify.pe/",
    title: "CraveWallet — Deja de pagar por lo que no usas",
    description:
      "Centraliza tus suscripciones, recibe alertas de cobro y convierte todo a soles automáticamente. Diseñado para universitarios y profesionales jóvenes en Lima.",
    images: [
      {
        url: "https://cravewallet.gastify.pe/assets/og-image-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CraveWallet — Gestor de suscripciones",
      },
    ],
    locale: "es_PE",
    siteName: "CraveWallet by Gastify",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gastifyapp",
    title: "CraveWallet — Controla tus suscripciones en soles",
    description:
      "¿Cuántas suscripciones pagas sin darte cuenta? CraveWallet te lo dice y te avisa antes de cada cobro.",
    images: ["https://cravewallet.gastify.pe/assets/twitter-card-1200x600.png"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CraveWallet",
  operatingSystem: "Android",
  applicationCategory: "FinanceApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "PEN" },
  description:
    "Gestor de suscripciones y gastos recurrentes para universitarios y profesionales jóvenes en Perú.",
  author: { "@type": "Organization", name: "Gastify" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
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
