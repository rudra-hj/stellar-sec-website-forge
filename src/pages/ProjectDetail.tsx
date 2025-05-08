
/**
 * Page de détail d'un projet entrepreneurial
 * 
 * Cette page:
 * - Récupère l'ID du projet depuis les paramètres d'URL
 * - Affiche les informations détaillées du projet correspondant
 * - Présente une mise en page complète avec:
 *   - Navigation
 *   - Image principale
 *   - Titre et tags du projet
 *   - Contenu détaillé (à propos, défis, impact, dates clés)
 *   - Boutons d'action (visiter le site, retour)
 *   - Pied de page
 */

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

  // Récupération des données du projet à partir de l'ID dans l'URL
  useEffect(() => {
    if (projectId) {
      const index = parseInt(projectId);
      if (!isNaN(index) && index >= 0 && index < projects.length) {
        setProject(projects[index]);
      }
    }
  }, [projectId]);

  // Affichage d'un message si le projet n'est pas trouvé
  if (!project) {
    return <div>Projet non trouvé</div>;
  }

  return (
    <div className="min-h-screen bg-cybersec-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        {/* Bouton de retour à la liste des projets */}
        <Link to="/?section=entrepreneurship">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Retour aux projets
          </Button>
        </Link>
        
        <div className="max-w-3xl mx-auto">
          {/* Image principale du projet */}
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          
          {/* Titre du projet */}
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          
          {/* Tags du projet */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          
          {/* Contenu détaillé */}
          <div className="prose prose-invert max-w-none">
            {/* Description générale */}
            <p className="text-lg mb-6">{project.description}</p>
            
            {/* Section "À propos" */}
            <h2 className="text-2xl font-semibold mt-8 mb-4">À propos de ce projet</h2>
            <p>{project.content?.about || 'Informations à venir.'}</p>
            
            {/* Section "Challenges" (si disponible) */}
            {project.content?.challenges && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Challenges rencontrés</h2>
                <p>{project.content.challenges}</p>
              </>
            )}
            
            {/* Section "Impact" (si disponible) */}
            {project.content?.impact && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Impact et résultats</h2>
                <p>{project.content.impact}</p>
              </>
            )}
            
            {/* Section "Dates clés" (si disponible) */}
            {project.content?.keyDates && project.content.keyDates.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-4">Dates clés</h2>
                <div className="space-y-4">
                  {project.content.keyDates.map((keyDate, idx) => (
                    <div key={idx} className="border-l-2 border-primary pl-4 py-2">
                      <h3 className="font-semibold text-lg">{keyDate.date} - {keyDate.title}</h3>
                      {keyDate.description && <p className="text-gray-300">{keyDate.description}</p>}
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* Bouton pour visiter le site du projet (si lien disponible) */}
            {project.link && (
              <div className="mt-12 mb-8">
                <Button onClick={() => window.open(project.link, "_blank")}>
                  Visiter le site du projet
                </Button>
              </div>
            )}

            {/* Bouton de retour à l'accueil */}
            <div className="mt-12 mb-8 text-center">
              <Button variant="outline" onClick={() => navigate("/?section=entrepreneurship")}>
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
