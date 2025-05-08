
import { EntrepreneurialProject } from "@/types/project";

const projectTemplate: EntrepreneurialProject = {
  title: "Titre du Projet",
  description: "Description courte du projet qui apparaîtra sur la carte du projet dans la liste.",
  image: "https://example.com/path-to-image.jpg",
  tags: ["Tag1", "Tag2", "Tag3"],
  // link: "https://example.com", // Optionnel: lien vers le site du projet
  // articleLink: "https://example.com/article", // Optionnel: lien vers un article détaillé
  content: {
    about: "Ce projet est une initiative qui vise à répondre à un besoin spécifique identifié dans le marché. Nous avons développé cette solution en utilisant les technologies les plus modernes et en suivant une approche centrée sur l'utilisateur.",
    challenges: "Au cours du développement de ce projet, nous avons dû surmonter plusieurs défis techniques et logistiques. Chaque obstacle a été une opportunité d'apprentissage et d'innovation.",
    impact: "Depuis son lancement, ce projet a connu un succès considérable et a eu un impact significatif sur notre activité ainsi que sur celle de nos clients et partenaires."
  }
};

export default projectTemplate;
