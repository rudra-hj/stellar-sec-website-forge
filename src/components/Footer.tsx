import { Shield, Linkedin, Gitlab, Mail } from "lucide-react";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-cybersec-dark border-t border-cybersec-light/10 py-[20px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Shield className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl">Rudra</span>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#Projets" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-sm text-gray-400">
            © {currentYear} Rudra. copyright? ca se mange ?
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/rudra-raw/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://gitlab.com/rrudra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="GitLab"
            >
              <Gitlab className="h-5 w-5" />
            </a>
            <a 
              href="mailto:contact@rudra.dev" 
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};