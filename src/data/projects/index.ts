
import { EntrepreneurialProject } from "@/types/project";

// Import individual project data files
import luminapp from "./luminapp";
import educationMarketplace from "./education-marketplace";
import techWatchTool from "./tech-watch-tool";
import pmeSecurity from "./pme-security";

// Export individual projects for direct access
export { 
  luminapp,
  educationMarketplace,
  techWatchTool,
  pmeSecurity
};

// Export combined array of all projects
export const projects: EntrepreneurialProject[] = [
  luminapp,
  educationMarketplace,
  techWatchTool,
  pmeSecurity
];
