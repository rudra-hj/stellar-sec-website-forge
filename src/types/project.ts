
/**
 * Type définissant la structure d'un projet entrepreneurial
 * Cette interface est utilisée dans toute l'application pour standardiser
 * la représentation des projets
 */
export type EntrepreneurialProject = {
  title: string;                 // Titre du projet
  description: string;           // Description courte du projet
  image: string;                 // URL de l'image principale du projet
  tags: string[];                // Tags/catégories du projet (technologies, domaines...)
  link?: string;                 // Lien externe vers le site du projet (optionnel)
  articleLink?: string;          // Lien externe vers un article détaillé (optionnel)
  content?: {
    about: string;               // Description détaillée du projet
    challenges?: string;         // Défis rencontrés lors du développement (optionnel)
    impact?: string;             // Impact et résultats du projet (optionnel)
    // Possibilité d'ajouter d'autres sections au besoin
  };
};
