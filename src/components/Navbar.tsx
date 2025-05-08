
import { useState, useEffect } from "react";
import { Menu, X, Shield, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Si nous sommes sur la page d'accueil, on fait défiler jusqu'à la section
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Sinon, on navigue vers la page d'accueil avec un paramètre pour le scroll
      navigate(`/?section=${sectionId}`);
    }
  };

  // Effet pour gérer le scroll automatique après navigation vers la page d'accueil
  useEffect(() => {
    if (isHomePage && location.search) {
      const params = new URLSearchParams(location.search);
      const section = params.get('section');
      if (section) {
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location, isHomePage]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cybersec-dark/80 backdrop-blur-md border-b border-cybersec-light/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl">Rudra</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('entrepreneurship')} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          
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
            <button onClick={() => scrollToSection('home')} className="py-2 hover:text-primary transition-colors text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="py-2 hover:text-primary transition-colors text-left">About</button>
            <button onClick={() => scrollToSection('entrepreneurship')} className="py-2 hover:text-primary transition-colors text-left">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="py-2 hover:text-primary transition-colors text-left">Contact</button>
            
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
