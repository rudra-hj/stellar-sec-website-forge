
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ProjectsSection = () => {
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

  return (
    <section id="projects" className="section-padding bg-cybersec-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            A selection of my professional work and personal projects that showcase my 
            technical expertise and diverse interests.
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
                <Button 
                  variant="ghost" 
                  className="text-primary hover:text-white hover:bg-primary"
                  onClick={() => {
                    // Ici, on pourrait rediriger vers une page de détail du projet
                    // Mais puisqu'il n'y a pas de pages de détails définies pour ces projets standards
                    // on ouvre simplement le lien externe si disponible
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
          ))}
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
