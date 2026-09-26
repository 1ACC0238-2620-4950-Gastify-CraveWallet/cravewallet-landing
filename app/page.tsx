import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import SocialProof from "@/components/SocialProof";
import Premium from "@/components/Premium";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />        {/* #hero    — dark  */}
        <Problem />     {/* #problem — dark  */}
        <Features />    {/* #solution — white */}
        <AppPreview />  {/* #preview — light */}
        <SocialProof /> {/*          — light */}
        <Premium />     {/* #premium — surface-variant */}
        <DownloadCTA /> {/* #descarga — dark  */}
      </main>
      <Footer />
    </>
  );
}
