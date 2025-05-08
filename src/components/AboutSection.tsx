
import { Wrench, Bike, Camera, Code, Terminal, Settings } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">À propos de Rudra</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Passionné par l'innovation technique et l'aventure, je combine des compétences diverses pour créer des solutions uniques et élégantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Ma vision</h3>
            <p className="mb-6 text-gray-300">
              Je suis convaincu qu'une expertise technique seule ne suffit pas. C'est pourquoi j'apporte à chaque projet un mélange unique de compétences acquises dans divers domaines de ma vie. Que ce soit la précision que j'ai développée en tant que motard ou le sens esthétique issu de ma passion pour la photographie, je cherche toujours à enrichir mon travail technique d'une dimension supplémentaire.
            </p>

            <h3 className="text-2xl font-bold mb-4">Ce qui me définit</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Open Source</h4>
                  <p className="text-sm text-gray-400">Passionné par les technologies libres</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Linux</h4>
                  <p className="text-sm text-gray-400">Expert en administration système</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Photographie</h4>
                  <p className="text-sm text-gray-400">L'art de capturer l'instant</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Perfectionnisme</h4>
                  <p className="text-sm text-gray-400">Attention aux moindres détails</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Bike className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Deux-roues</h4>
                  <p className="text-sm text-gray-400">Voyages et esprit d'aventure</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Wrench className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Polyvalence</h4>
                  <p className="text-sm text-gray-400">Adaptabilité et résolution de problèmes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20 w-3/4 mx-auto">
              <img 
                src="/rudra.png"
                alt="Rudra - Portrait personnel" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-10 -right-5 w-1/2 h-1/2 rounded-lg border border-purple-500/30 -z-10"></div>
            <div className="absolute -bottom-5 -left-5 w-1/2 h-1/2 rounded-lg border border-blue-500/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
