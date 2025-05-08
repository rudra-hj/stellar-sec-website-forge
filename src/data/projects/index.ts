
/**
 * Fichier d'index centralisant tous les projets entrepreneuriaux
 * Il permet d'importer les projets individuellement ou comme collection complète
 */

import { EntrepreneurialProject } from "@/types/project";

// Import des fichiers de données de chaque projet
import luminapp from "./luminapp";
import educationMarketplace from "./education-marketplace";
import techWatchTool from "./tech-watch-tool";
import pmeSecurity from "./pme-security";

// Export des projets individuels pour y accéder directement
export { 
  luminapp,
  educationMarketplace,
  techWatchTool,
  pmeSecurity
};

// Export du tableau complet de tous les projets
export const projects: EntrepreneurialProject[] = [
  luminapp,
  educationMarketplace,
  techWatchTool,
  pmeSecurity
];
