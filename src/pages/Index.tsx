
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { BlogFeedSection } from "@/components/BlogFeedSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cybersec-dark text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BlogFeedSection feedUrl="https://your-blog-domain/index.xml" maxItems={4} />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
