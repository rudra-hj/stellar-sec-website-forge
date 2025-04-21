
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export type EntrepreneurialProject = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string; // lien vers le site du projet (externe)
  articleLink?: string; // lien vers l'article plus détaillé (externe, si spécifié)
};

export const projects: EntrepreneurialProject[] = [
  {
    title: "LuminApp – Une aventure SaaS pour la recherche",
    description: "Plateforme SaaS conçue pour simplifier la gestion et la valorisation des projets de recherche scientifique. L'application a su séduire plusieurs laboratoires universitaires en réduisant leur charge administrative.",
    image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3",
    tags: ["SaaS", "Recherche", "Entrepreneuriat", "En cours"],
    link: "https://luminapp.fr",
    articleLink: "https://luminapp.fr/blog/naissance-luminapp"
  },
  {
    title: "Plateforme de mise en relation professeurs-élèves",
    description: "Marketplace éducative permettant aux professeurs particuliers de proposer leurs services et aux élèves de trouver rapidement un soutien adapté à leurs besoins spécifiques.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    tags: ["Éducation", "Marketplace", "Side-project"],
    // Exemple : pas encore de site, mais un article
    articleLink: "https://devblog.fr/article/plateforme-prof-eleve"
  },
  {
    title: "Outil d'automatisation de veille technologique",
    description: "Solution permettant aux professionnels de rester informés des dernières tendances technologiques dans leur secteur grâce à l'agrégation intelligente de contenus et l'analyse automatisée.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    tags: ["Automatisation", "IA", "Exploration"],
    // Ni site ni article
  },
  {
    title: "Prochaine aventure: Solutions pour PME",
    description: "Projet en réflexion pour démocratiser l'accès à la cybersécurité pour les PME, avec un outil simple permettant aux entreprises de monitorer et sécuriser leurs systèmes sans expertise technique approfondie.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    tags: ["Cybersécurité", "PME", "SaaS", "Idée"],
    // Aucun lien encore
  },
];

export const EntrepreneurialProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="entrepreneurship" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mes Projets & Idées Entrepreneuriales</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Découvrez mon parcours d'entrepreneur digital, des projets lancés aux idées en gestation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between">
                {/* "Voir le projet" = Afficher l'article détaillé sur le site actuel */}
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-white hover:bg-primary"
                  onClick={() => navigate(`/project/${index}`)}
                >
                  Voir le projet
                </Button>
                
                {/* "En savoir plus" = Accès au site si présent */}
                {project.link ? (
                  <Button variant="outline" size="sm"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    En savoir plus
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" disabled>
                    En savoir plus
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
