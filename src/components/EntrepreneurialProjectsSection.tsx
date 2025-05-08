
/**
 * Section d'affichage des projets entrepreneuriaux
 * 
 * Ce composant:
 * - Affiche un carrousel de cartes pour chaque projet entrepreneurial
 * - Permet la navigation vers la page détaillée de chaque projet
 * - Permet l'ouverture des liens externes vers les sites des projets
 * - Affiche les tags et descriptions courtes de chaque projet
 */

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const EntrepreneurialProjectsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="entrepreneurship" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4">
        {/* En-tête de la section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mes Projets & Idées Entrepreneuriales</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Découvrez mon parcours d'entrepreneur, des projets lancés aux idées en gestation.
          </p>
        </div>

        {/* Carrousel de projets */}
        <div className="px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm card-hover">
                    {/* Image du projet avec lien vers détails */}
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
                    
                    {/* En-tête de la carte avec titre et tags */}
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
                    
                    {/* Contenu de la carte avec description */}
                    <CardContent>
                      <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
                    </CardContent>
                    
                    {/* Actions de la carte */}
                    <CardFooter className="flex justify-between mt-auto">
                      {/* "Voir le projet" = Ouvre le site externe du projet ou les détails si pas de lien */}
                      <Button 
                        variant="ghost" 
                        className="text-primary hover:text-white hover:bg-primary"
                        onClick={() => {
                          if (project.link) {
                            window.open(project.link, '_blank');
                          } else {
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
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 lg:left-4 bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80">
              <ChevronLeft className="h-4 w-4" />
            </CarouselPrevious>
            <CarouselNext className="right-2 lg:right-4 bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80">
              <ChevronRight className="h-4 w-4" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
