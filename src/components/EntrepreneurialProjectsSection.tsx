
import React from "react";

export const EntrepreneurialProjectsSection = () => {
  return (
    <section id="entrepreneurship" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Mon Parcours Entrepreneurial</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        <p className="text-lg text-gray-300 mb-8 text-center">
          L'esprit d'entreprendre a toujours été au cœur de mon parcours : j'adore imaginer, créer, tester et concrétiser des idées !
        </p>

        <div className="space-y-8">
          <div className="bg-cybersec-dark/80 border border-cybersec-light/20 rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2">LuminApp (2021 - Aujourd'hui)</h3>
            <p className="text-gray-300">
              Création de <a href="https://luminapp.fr" target="_blank" className="text-primary underline">LuminApp</a>, une application SaaS pour simplifier la gestion de projets de recherche et valoriser la production scientifique, adoptée par plusieurs laboratoires universitaires.
            </p>
          </div>
          <div className="bg-cybersec-dark/80 border border-cybersec-light/20 rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2">Premières expériences & side-projects</h3>
            <p className="text-gray-300">
              Dès mes études, j'ai lancé divers side-projects, comme une plateforme de mise en relation pour professeurs particuliers ou un outil de veille technologique automatisée, avec l'envie d'expérimenter et d'apprendre par la pratique.
            </p>
          </div>
          <div className="bg-cybersec-dark/80 border border-cybersec-light/20 rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-xl mb-2">Idées et ambitions futures</h3>
            <p className="text-gray-300">
              J'ai une liste bien fournie d'idées à explorer : automatisation de la cybersécurité pour PME, outils pour créateurs de contenus, solutions pour l'éducation numérique… Je reste toujours ouvert(e) aux collaborations et aux nouveaux défis entrepreneuriaux&nbsp;!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
