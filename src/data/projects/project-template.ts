
import { EntrepreneurialProject } from "@/types/project";

/**
 * Modèle de projet - Copiez ce fichier pour créer un nouveau projet
 * 
 * Comment utiliser ce modèle:
 * 1. Copiez ce fichier et renommez-le (ex: mon-nouveau-projet.ts)
 * 2. Modifiez les valeurs ci-dessous avec les détails de votre projet
 * 3. Placez votre image dans le dossier public/images/projets/
 * 4. Importez votre projet dans index.ts et ajoutez-le à l'export et au tableau projects
 */

const projetExemple: EntrepreneurialProject = {
  title: "Titre du Projet",
  description: "Description courte du projet qui apparaîtra sur la carte du projet dans la liste.",
  // Pour utiliser une image locale: placez le fichier dans public/images/projets/ et indiquez juste le nom du fichier
  image: "/images/projets/nom-image.jpg", 
  // Ou pour une image externe, utilisez l'URL complète:
  // image: "https://example.com/path-to-image.jpg",
  tags: ["Tag1", "Tag2", "Tag3"],
  // Lien optionnel vers le site du projet
  link: "https://example.com",
  // Lien optionnel vers un article détaillé
  articleLink: "https://example.com/article",
  
  content: {
    // Description détaillée obligatoire si content est défini
    about: "Ce projet est une initiative qui vise à répondre à un besoin spécifique identifié dans le marché. Nous avons développé cette solution en utilisant les technologies les plus modernes et en suivant une approche centrée sur l'utilisateur.",
    
    // Sections optionnelles
    challenges: "Au cours du développement de ce projet, nous avons dû surmonter plusieurs défis techniques et logistiques. Chaque obstacle a été une opportunité d'apprentissage et d'innovation.",
    
    impact: "Depuis son lancement, ce projet a connu un succès considérable et a eu un impact significatif sur notre activité ainsi que sur celle de nos clients et partenaires.",
    
    // Dates clés du projet (optionnel)
    keyDates: [
      {
        date: "01/2023",
        title: "Début du projet",
        description: "Lancement de la phase d'idéation et d'étude de marché."
      },
      {
        date: "03/2023",
        title: "Développement du prototype",
        description: "Création d'un MVP (Minimum Viable Product) pour tester les fonctionnalités principales."
      },
      {
        date: "06/2023",
        title: "Lancement officiel",
        description: "Déploiement de la version 1.0 et acquisition des premiers utilisateurs."
      }
    ]
  }
};

export default projetExemple;
