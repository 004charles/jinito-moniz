/** Arquitetura de Âmbar: página única editorial, com secções modulares e dados externos à composição. */
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
import About from "../sections/About";
import CTA from "../sections/CTA";
import Contact from "../sections/Contact";
import Differentials from "../sections/Differentials";
import FilipaCampaign from "../sections/FilipaCampaign";
import Footer from "../sections/Footer";
import Gallery from "../sections/Gallery";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-[#0b0a08] font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Gallery />
        <FilipaCampaign />
        <Differentials />
        <Stats />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
