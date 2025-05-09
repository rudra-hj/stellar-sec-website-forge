import { useState, useEffect } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(`/?section=${sectionId}`);
    }
  };

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
              <img src="/logo.svg" alt="Logo" className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl">Rudra</span>
            </div>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
          <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('Projets')} className="hover:text-primary transition-colors">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          
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
          </div>
          
          <Button 
            variant="default" 
            onClick={() => scrollToSection('contact')}
          >
            Say Hello
          </Button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-cybersec-dark/95 backdrop-blur-lg border-b border-cybersec-light/20">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="py-2 hover:text-primary transition-colors text-left">Home</button>
            <button onClick={() => scrollToSection('about')} className="py-2 hover:text-primary transition-colors text-left">About</button>
            <button onClick={() => scrollToSection('Projets')} className="py-2 hover:text-primary transition-colors text-left">Projects</button>
            <button onClick={() => scrollToSection('contact')} className="py-2 hover:text-primary transition-colors text-left">Contact</button>
            
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