
import { Telescope, Bike, Camera, Code, Terminal, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">À propos de Rudra</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Ingénieur système spécialisé dans les technologies open source et Linux, passionné par la sécurisation des infrastructures et la contribution aux projets libres.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold mb-4">Expertise Technique</h3>
            <p className="mb-6 text-gray-300">
              Avec une maîtrise en cybersécurité, je conçois, mets en place et maintiens des systèmes robustes utilisant les meilleures pratiques open source
              pour assurer confidentialité, performance et évolutivité dans les environnements professionnels.
            </p>

            <h3 className="text-2xl font-bold mb-4">Passions</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Open Source</h4>
                  <p className="text-sm text-gray-400">Contributeur et passionné des technologies libres</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Linux</h4>
                  <p className="text-sm text-gray-400">Expertises systèmes et administration</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Photographie</h4>
                  <p className="text-sm text-gray-400">Capturer la beauté du monde</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Telescope className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Astronomie</h4>
                  <p className="text-sm text-gray-400">Exploration du cosmos</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Bike className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Cyclisme</h4>
                  <p className="text-sm text-gray-400">Passionné par les aventures en plein air</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 mr-4 p-2 rounded-lg bg-primary/20">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Sécurité Informatique</h4>
                  <p className="text-sm text-gray-400">Protection des infrastructures digitales</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative z-10 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/20">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1469&ixlib=rb-4.0.3" 
                alt="Ingénieur système Rudra travaillant" 
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

