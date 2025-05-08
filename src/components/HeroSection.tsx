
import { Button } from "@/components/ui/button";
import { Shield, Code, Lock } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-cybersec-dark">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
              <span className="text-sm font-medium text-primary">Ingénieur Système spécialisé Linux & Open Source</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, je suis <span className="tech-gradient">Rudra</span><br />
              Expert en technologies open source et Linux
            </h1>
            <p className="text-lg text-gray-300 max-w-lg">
              Ingénieur système passionné par l'open source et les solutions robustes, je crée des infrastructures sécurisées et optimisées avec les technologies libres.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="px-6"
                onClick={() => scrollToSection('contact')}
              >
                Contactez-moi
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="px-6"
                onClick={() => scrollToSection('projects')}
              >
                Voir mes projets
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Sécurité & Stabilité</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Passion Open Source</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Confidentialité & Respect</p>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl"></div>
            <div className="relative backdrop-blur-sm bg-cybersec-light/10 border border-white/10 rounded-2xl p-8 transform rotate-3 shadow-xl">
              <pre className="text-xs md:text-sm text-gray-300 font-mono">
                <code>
                  <span className="text-blue-400">#!/bin/bash</span><br />
                  <br />
                  <span className="text-green-400"># Security Audit Script</span><br />
                  <span className="text-purple-400">echo</span> <span className="text-amber-300">"Starting security scan..."</span><br />
                  <br />
                  <span className="text-red-400">function</span> <span className="text-blue-300">check_vulnerabilities</span>() {'{'}<br />
                  {'  '}<span className="text-purple-400">echo</span> <span className="text-amber-300">"Scanning system for vulnerabilities"</span><br />
                  {'  '}nmap -sV --script vuln $1<br />
                  {'}'}<br />
                  <br />
                  <span className="text-red-400">function</span> <span className="text-blue-300">secure_system</span>() {'{'}<br />
                  {'  '}<span className="text-purple-400">echo</span> <span className="text-amber-300">"Applying security patches"</span><br />
                  {'  '}<span className="text-green-400"># Implementation details</span><br />
                  {'}'}<br />
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
