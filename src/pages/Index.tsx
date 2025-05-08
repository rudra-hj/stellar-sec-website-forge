
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
