import React, { useEffect, useState, useCallback } from "react";
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
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Pause, Play, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

export const ProjectsSection = () => {
  const navigate = useNavigate();
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

  const autoScroll = useCallback(() => {
    if (!emblaApi || !autoplay) return;
    emblaApi.scrollNext();
  }, [emblaApi, autoplay]);

  const updateCurrentSlide = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', updateCurrentSlide);
    updateCurrentSlide();

    return () => {
      emblaApi.off('select', updateCurrentSlide);
    };
  }, [emblaApi, updateCurrentSlide]);

  useEffect(() => {
    const interval = setInterval(autoScroll, 10000);
    return () => clearInterval(interval);
  }, [autoScroll]);

  const scrollTo = useCallback((index: number) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section id="Projets" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mes Projets & Idées Entrepreneuriales</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            Découvrez mon parcours d'entrepreneur, des idées en gestation aux projets lancés.
          </p>
        </div>

        <div className="relative px-4 md:px-12">
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80 shadow-lg hover:shadow-primary/30 transition-all"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {projects.map((project, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] px-2 md:px-4">
                  <Card className="h-full flex flex-col overflow-hidden border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm card-hover">
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
                    
                    <CardContent className="flex-1">
                      <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
                    </CardContent>
                    
                    <CardFooter className="mt-auto flex justify-between border-t border-cybersec-light/10 pt-4">
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
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => navigate(`/project/${index}`)}
                      >
                        En savoir plus
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button 
            variant="outline" 
            size="icon" 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80 shadow-lg hover:shadow-primary/30 transition-all"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          
          <div className="flex items-center justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      currentSlide === index 
                      ? "bg-primary w-4" 
                      : "bg-gray-500/50 hover:bg-gray-400/60"
                    }`}
                    aria-label={`Aller au projet ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80"
                onClick={() => setAutoplay(!autoplay)}
                title={autoplay ? "Mettre en pause" : "Lecture automatique"}
              >
                {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};