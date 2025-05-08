
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

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
              <div 
                className="h-48 overflow-hidden cursor-pointer" 
                onClick={() => navigate(`/project/${index}`)}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle 
                  className="text-xl cursor-pointer hover:text-primary transition-colors"
                  onClick={() => navigate(`/project/${index}`)}
                >
                  {project.title}
                </CardTitle>
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
                {/* "Voir le projet" = Ouvre le site externe du projet */}
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-white hover:bg-primary"
                  onClick={() => {
                    if (project.link) {
                      window.open(project.link, '_blank');
                    } else {
                      // Si pas de lien externe, on peut rediriger vers la page détaillée
                      navigate(`/project/${index}`);
                    }
                  }}
                >
                  Voir le projet
                </Button>
                
                {/* "En savoir plus" = Afficher la page détaillée */}
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate(`/project/${index}`)}
                >
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
