
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { EntrepreneurialProject } from "@/types/project";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState<EntrepreneurialProject | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (projectId) {
      const index = parseInt(projectId);
      if (!isNaN(index) && index >= 0 && index < projects.length) {
        setProject(projects[index]);
      }
    }
  }, [projectId]);

  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-cybersec-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <Link to="/#entrepreneurship">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Retour aux projets
          </Button>
        </Link>
        
        <div className="max-w-3xl mx-auto">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg mb-6">{project.description}</p>
            
            {/* Contenu détaillé de l'article */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">À propos de ce projet</h2>
            <p>{project.content?.about || 'Informations à venir.'}</p>
            
            {project.content?.challenges && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Challenges rencontrés</h2>
                <p>{project.content.challenges}</p>
              </>
            )}
            
            {project.content?.impact && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Impact et résultats</h2>
                <p>{project.content.impact}</p>
              </>
            )}
            
            {project.link && (
              <div className="mt-12 mb-8">
                <Button onClick={() => window.open(project.link, "_blank")}>
                  Visiter le site du projet
                </Button>
              </div>
            )}

            <div className="mt-12 mb-8 text-center">
              <Button variant="outline" onClick={() => navigate("/")}>
                Retour à l'accueil
              </Button>
            </div>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
