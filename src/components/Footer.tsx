
import { Shield, Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cybersec-dark border-t border-cybersec-light/10 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl">Rudra</span>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-cybersec-light/10 pt-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="text-center md:text-left text-cybersec-muted text-sm">
            &copy; {currentYear} Rudra Solutions. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a 
              href="https://github.com/rudra" 
              className="text-cybersec-muted hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/rudra-profile" 
              className="text-cybersec-muted hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@rudra.it" 
              className="text-cybersec-muted hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
