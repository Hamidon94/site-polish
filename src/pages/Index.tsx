import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ServicesHighlight from "@/components/ServicesHighlight";
import InterventionProcess from "@/components/InterventionProcess";
import QuoteFunnelSimple from "@/components/QuoteFunnelSimple";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { MissionBlock, SolutionsBlock, ExpertiseBlock, CoverageBlock, ClientTypesBlock } from "@/components/HomeSEOBlocks";
import { useSEO } from "@/hooks/useSEO";

const Index = () => {
  // SEO optimisé pour la page d'accueil
  useSEO({
    title: "HD Connect | Sécurité Vidéosurveillance Alarme France",
    description: "Expert installation vidéosurveillance, alarmes et contrôle d'accès en France. Devis gratuit, intervention 24h/24. Particuliers et professionnels.",
    keywords: "sécurité, vidéosurveillance, alarme, contrôle accès, installation, France, HD Connect",
    canonicalUrl: "https://hdconnect.fr/",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <MissionBlock />
        <Services />
        <SolutionsBlock />
        <ClientTypesBlock />
        <Testimonials />
        <ExpertiseBlock />
        <ServicesHighlight />
        <InterventionProcess />
        <CoverageBlock />
        <QuoteFunnelSimple />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
