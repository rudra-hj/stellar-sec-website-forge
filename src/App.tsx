
/**
 * Composant racine de l'application
 * 
 * Ce fichier configure :
 * - Le client de requêtes React Query
 * - Les fournisseurs de contexte pour l'UI (tooltips, toasts)
 * - Le routeur de l'application avec React Router
 * 
 * Routes principales :
 * - "/" : Page d'accueil
 * - "/project/:projectId" : Page de détail d'un projet
 * - "*" : Page 404 pour les routes inexistantes
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectDetail from "./pages/ProjectDetail";

// Création d'une instance de QueryClient pour gérer les requêtes
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          {/* AJOUTER TOUTES LES ROUTES PERSONNALISÉES AU-DESSUS DE LA ROUTE CATCH-ALL "*" */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
