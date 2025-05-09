
/**
 * Fichier d'index centralisant tous les projets entrepreneuriaux
 * Il permet d'importer les projets individuellement ou comme collection complète
 */

import { EntrepreneurialProject } from "@/types/project";

// Import des fichiers de données de chaque projet
import lumina from "./lumina";
import fred from "./Fred";
import onemedia from "./onemedia";

// Export des projets individuels pour y accéder directement
export { 
  lumina,
  fred,
  onemedia
};

// Export du tableau complet de tous les projets
export const projects: EntrepreneurialProject[] = [
  lumina,
  fred,
  onemedia,
];

/**
 * Fonction utilitaire pour ajouter un nouveau projet à la liste
 * Cette fonction met à jour automatiquement le tableau des projets
 * @param project Le projet à ajouter
 */
export function addProject(project: EntrepreneurialProject): void {
  console.log("Nouveau projet ajouté:", project.title);
  projects.push(project);
}
