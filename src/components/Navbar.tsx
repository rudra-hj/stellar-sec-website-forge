
import { useState } from "react";
import { Menu, X, Shield, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cybersec-dark/80 backdrop-blur-md border-b border-cybersec-light/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-primary mr-2" />
          <span className="font-bold text-xl">Rudra</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</a>
          <a href="#projects" onClick={() => scrollToSection('entrepreneurship')} className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</a>
          
          {/* Social Links */}
          <div className="flex items-center space-x-2">
            <a
              href="https://linkedin.com/in/rudra-raw/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rudra"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
          
          <Button 
            variant="default" 
            onClick={() => scrollToSection('contact')}
          >
            Say Hello
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-cybersec-dark/95 backdrop-blur-lg border-b border-cybersec-light/20">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <a href="#home" onClick={() => scrollToSection('home')} className="py-2 hover:text-primary transition-colors">Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className="py-2 hover:text-primary transition-colors">About</a>
            <a href="#projects" onClick={() => scrollToSection('entrepreneurship')} className="py-2 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="py-2 hover:text-primary transition-colors">Contact</a>
            
            {/* Social Links Mobile */}
            <div className="flex items-center space-x-4 py-2">
              <a
                href="https://linkedin.com/in/rudra-raw/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
                onClick={() => setIsMenuOpen(false)}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/rudra"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
                onClick={() => setIsMenuOpen(false)}
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
            
            <Button 
              variant="default" 
              onClick={() => scrollToSection('contact')}
              className="w-full"
            >
              Say Hello
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
