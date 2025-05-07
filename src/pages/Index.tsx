
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/components/AboutSection";
import { BlogFeedSection } from "@/components/BlogFeedSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EntrepreneurialProjectsSection } from "@/components/EntrepreneurialProjectsSection";
import { LinkstackSection } from "@/components/LinkstackSection";
import { GooeyHero } from "@/components/GooeyHero";

const Index = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-cybersec-dark text-white">
      <Navbar />
      <GooeyHero 
        title="Hello, je suis Rudra, Expert en technologies open source et Linux"
        subtitle="Ingénieur système passionné par l'open source et les solutions robustes, je crée des infrastructures sécurisées et optimisées avec les technologies libres."
        ctaText="Contactez-moi"
        ctaAction={scrollToContact}
        secondaryCtaText="Voir mes projets"
        secondaryCtaAction={scrollToProjects}
      />
      {/* Section liens Linkstack */}
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
