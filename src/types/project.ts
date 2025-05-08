
export type EntrepreneurialProject = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string; // lien vers le site du projet (externe)
  articleLink?: string; // lien vers l'article plus détaillé (externe, si spécifié)
  content?: {
    about: string;
    challenges?: string;
    impact?: string;
    // Autres sections potentielles
  };
};
