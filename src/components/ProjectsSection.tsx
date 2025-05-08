
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const ProjectsSection = () => {
  const [api, setApi] = useState<any>();
  
  const projects = [
    {
      title: "Network Security Monitoring System",
      description: "Open-source intrusion detection system built with Python and ELK stack for real-time threat detection.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["Cybersecurity", "Python", "Linux", "Open Source"],
      link: "https://github.com/rudra/network-security-monitoring",
    },
    {
      title: "Astrophotography Collection",
      description: "High-resolution photographs of celestial objects captured using custom-built telescope and DSLR setup.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3",
      tags: ["Astronomy", "Photography", "Hobby"],
      link: "https://astro.rudra.it",
    },
    {
      title: "Linux Security Hardening Guide",
      description: "Comprehensive documentation on securing Linux systems for enterprise environments with practical examples.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3",
      tags: ["Linux", "Documentation", "Security"],
      link: "https://github.com/rudra/linux-hardening-guide",
    },
    {
      title: "Drone Imagery Analysis Tool",
      description: "Machine learning application for analyzing aerial photography from custom-modified drones.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
      tags: ["Photography", "ML", "Python"],
      link: "https://github.com/rudra/drone-imagery-analysis",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 10000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="projects" className="section-padding bg-cybersec-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            A selection of my professional work and personal projects that showcase my 
            technical expertise and diverse interests.
          </p>
        </div>

        {/* Carousel with side arrows directly next to the cards */}
        <div className="relative max-w-5xl mx-auto px-2">
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            {/* Left arrow positioned closer to the cards */}
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80"
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>
            
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="h-full px-2">
                    <Card className="h-full flex flex-col border border-cybersec-light/20 bg-cybersec-dark/60 backdrop-blur-sm card-hover">
                      {/* Fixed height image container */}
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                      <CardHeader className="flex-none">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-gray-300 text-base">{project.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between mt-auto border-t border-cybersec-light/10 pt-4">
                        <Button 
                          variant="ghost" 
                          className="text-primary hover:text-white hover:bg-primary"
                          onClick={() => {
                            if (project.link) {
                              window.open(project.link, '_blank');
                            }
                          }}
                        >
                          View Details
                        </Button>
                        
                        {project.link ? (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => window.open(project.link, '_blank')}
                          >
                            Visit Project
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            Coming Soon
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Right arrow positioned closer to the cards */}
            <Button 
              variant="outline" 
              size="icon" 
              className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full bg-cybersec-dark/80 border-cybersec-light/30 hover:bg-primary/80"
              onClick={() => api?.scrollNext()}
            >
              <ArrowRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </Carousel>
          
          {/* Navigation dots at the bottom - removed pause button */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <Button
                key={index}
                variant="outline"
                size="icon"
                className={`h-2 w-2 rounded-full p-0 ${
                  api?.selectedScrollSnap() === index ? "bg-primary" : "bg-gray-500/50"
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => {
              const section = document.getElementById('entrepreneurship');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
