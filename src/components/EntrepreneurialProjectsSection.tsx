
import React from "react";

type ProjectBlogPost = {
  title: string;
  date: string;
  content: React.ReactNode;
};

const projects: ProjectBlogPost[] = [
  {
    title: "LuminApp – Une aventure SaaS au service de la recherche",
    date: "2021 - Aujourd’hui",
    content: (
      <>
        <p className="mb-4">
          LuminApp est mon projet phare&nbsp;: une application SaaS pensée pour simplifier la gestion et la valorisation des projets de recherche scientifique. Partie d’une idée simple (réduire la charge administrative des chercheurs), la plateforme a su séduire plusieurs laboratoires universitaires. J’ai tout appris sur le terrain : écoute utilisateur, itérations, prospection, et déploiement… Ce projet m’a confirmé ma passion pour l’entrepreneuriat digital et l’impact dans la recherche.
        </p>
        <a
          href="https://luminapp.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline font-medium"
        >
          Voir le site LuminApp
        </a>
      </>
    ),
  },
  {
    title: "Expérimenter sans relâche : mes premiers side-projects",
    date: "2018 - 2021",
    content: (
      <p>
        Depuis mes études, j’ai toujours lancé des “petits” projets par curiosité et envie d’apprendre. Cela va d’une plateforme de mise en relation entre professeurs particuliers et élèves, à un outil d’automatisation de veille technologique pour ne jamais rater les tendances du secteur. Même si tous n'ont pas eu une vie commerciale, chaque expérience m’a offert de précieux enseignements sur l’idéation, le développement et le lancement d'un produit.
      </p>
    ),
  },
  {
    title: "Quelles prochaines idées entreprendre ?",
    date: "2024 et après",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <span className="font-medium">Automatisation de la cybersécurité pour PME&nbsp;:</span> développer un outil simple (SaaS) pour monitorer et sécuriser les SI sans expertise technique approfondie.
        </li>
        <li>
          <span className="font-medium">Solutions pour créateurs de contenu&nbsp;:</span> créer des outils qui facilitent la gestion, la visibilité et la valorisation des contenus numériques.
        </li>
        <li>
          <span className="font-medium">Éducation numérique&nbsp;:</span> imaginer de nouveaux formats ou plateformes d’apprentissage adaptés aux enjeux actuels.
        </li>
        <li>
          Et plein d’autres… (Si une idée t’intéresse ou que tu veux collaborer, contacte-moi&nbsp;!)
        </li>
      </ul>
    ),
  },
];

export const EntrepreneurialProjectsSection = () => {
  return (
    <section id="entrepreneurship" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Mes Projets & Idées Entrepreneuriales</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-10"></div>
        <div className="space-y-12">
          {projects.map((post, idx) => (
            <article
              key={post.title}
              className="bg-cybersec-dark/80 border border-cybersec-light/20 rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <time className="block text-sm text-gray-400 mb-4">{post.date}</time>
              <div className="text-gray-300 text-base leading-relaxed">
                {post.content}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

