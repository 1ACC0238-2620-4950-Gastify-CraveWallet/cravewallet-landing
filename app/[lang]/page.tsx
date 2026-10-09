import { notFound } from "next/navigation";
import { hasLocale } from "@/lib/i18n";
import { getDictionary } from "./dictionaries";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import SocialProof from "@/components/SocialProof";
import Premium from "@/components/Premium";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar lang={lang} dict={dict.nav} />
      <main>
        <Hero dict={dict.hero} phone={dict.phone} />          {/* #hero     — dark  */}
        <Problem lang={lang} dict={dict.problem} />           {/* #problem  — dark  */}
        <Features dict={dict.features} />                     {/* #solution — white */}
        <AppPreview dict={dict.preview} tone={dict.tone} phone={dict.phone} /> {/* #preview — light */}
        <SocialProof dict={dict.social} tone={dict.tone} />   {/*           — light */}
        <Premium dict={dict.premium} />                       {/* #premium  — surface-variant */}
        <DownloadCTA dict={dict.download} />                  {/* #download — dark  */}
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
