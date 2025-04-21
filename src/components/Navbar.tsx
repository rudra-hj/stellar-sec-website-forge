
import { useState } from "react";
import { Menu, X, Shield, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cybersec-dark/80 backdrop-blur-md border-b border-cybersec-light/20">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Shield className="h-8 w-8 text-primary mr-2" />
          <span className="font-bold text-xl">Rudra</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          {/* Lien Linkstack */}
          <a
            href="https://links.rudra.it/@rudra"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-colors"
            title="Linkstack"
          >
            <LinkIcon className="h-4 w-4" /> Liens
          </a>
          <Button variant="default">Get Started</Button>
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
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition-colors">About</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Services</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition-colors">Contact</a>
            {/* Lien Linkstack mobile */}
            <a
              href="https://links.rudra.it/@rudra"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 py-2 hover:text-primary transition-colors"
              title="Linkstack"
              onClick={() => setIsMenuOpen(false)}
            >
              <LinkIcon className="h-4 w-4" /> Liens
            </a>
            <Button variant="default" onClick={() => setIsMenuOpen(false)} className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};
