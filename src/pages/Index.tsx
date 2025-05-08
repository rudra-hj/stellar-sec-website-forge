
/**
 * Page d'accueil du site
 * 
 * Cette page rassemble les différentes sections du site dans l'ordre d'affichage.
 * La structure comprend :
 * - Une barre de navigation (Navbar)
 * - Une section héro (HeroSection)
 * - Une section de liens rapides (LinkstackSection)
 * - Une section à propos (AboutSection)
 * - Une section de projets entrepreneuriaux (EntrepreneurialProjectsSection)
 * - Une section de flux de blog (BlogFeedSection)
 * - Une section de contact (ContactSection)
 * - Un pied de page (Footer)
 */

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BlogFeedSection } from "@/components/BlogFeedSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EntrepreneurialProjectsSection } from "@/components/EntrepreneurialProjectsSection";
import { LinkstackSection } from "@/components/LinkstackSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-cybersec-dark text-white">
      <Navbar />
      <HeroSection />
      {/* Section de liens rapides */}
      <LinkstackSection />
      <AboutSection />
      <EntrepreneurialProjectsSection />
      <BlogFeedSection feedUrl="https://luminapp.fr/blog/index.xml" maxItems={4} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
