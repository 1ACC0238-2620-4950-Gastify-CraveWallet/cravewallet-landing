import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import AppPreview from "@/components/AppPreview";
import Plans from "@/components/Plans";
import Faq from "@/components/Faq";
import Newsletter from "@/components/Newsletter";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <AppPreview />
        <Plans />
        <Faq />
        <Newsletter />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
