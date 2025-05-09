import { Button } from "@/components/ui/button";
import { Shield, Code, Globe, Users } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Arrière-plan animé */}
      <div className="absolute inset-0 bg-cybersec-dark">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full filter blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-2xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20 text-sm font-medium text-primary">
              Entrepreneur & Ingénieur Système 
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Salut, je suis <span className="tech-gradient">Rudra</span>,<br />
              passionné de Linux & Open Source
            </h1>

            <p className="text-lg text-gray-300 max-w-lg">
              Je conçois des solutions libres, sécurisées et évolutives pour transformer vos défis techniques en réussites durables.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-6" onClick={() => scrollToSection('contact')}>
                Contactez-moi
              </Button>
              <Button size="lg" variant="outline" className="px-6" onClick={() => scrollToSection('Projets')}>
                Voir mes projets
              </Button>
            </div>

            <div className="pt-8 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Sécurité & Robustesse</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Passion Open Source</p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20 mb-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm">Esprit Entrepreneurial</p>
              </div>
            </div>
          </div>

          {/* Zone de script inspirant */}
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/30 rounded-full filter blur-3xl" />
            <div className="relative backdrop-blur-sm bg-cybersec-light/10 border border-white/10 rounded-2xl p-8 shadow-lg">
              <pre className="text-xs md:text-sm font-mono text-gray-200 leading-snug">
                <code>
                  <span className="text-blue-400">#!/usr/bin/env bash</span>
                  <br />
                  <span className="text-green-400"># Script: building_better_world.sh</span>
                  <br /><br />
                  <span className="text-yellow-300">function</span> <span className="text-red-400">deploy_hope</span>() {'{'}
                  <br />  <span className="text-purple-400">echo</span> "Deployment of hope..."
                  <br />  <span className="text-gray-400">kubectl apply -f hope_manifest.yaml</span>
                  <br />{'}'}
                  <br />
                  <span className="text-yellow-300">function</span> <span className="text-red-400">scale_impact</span>() {'{'}
                  <br />  <span className="text-purple-400">echo</span> "Scaling positive impact..."
                  <br />  <span className="text-gray-400">helm upgrade impact ./chart --set replicas=infinite</span>
                  <br />{'}'}
                  <br />
                  <span className="text-yellow-300">function</span> <span className="text-red-400">monitor_progress</span>() {'{'}
                  <br />  <span className="text-purple-400">echo</span> "Monitoring progress..."
                  <br />  <span className="text-gray-400">prometheus-cli --query="world_progress"</span>
                  <br />{'}'}
                  <br /><br />
                  <span className="text-green-400"># Exécution</span>
                  <br />deploy_hope
                  <br />scale_impact
                  <br />monitor_progress
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
