
import { EntrepreneurialProject } from "@/types/project";

const fred: EntrepreneurialProject = {
  title: "Fred – Fred, Robust Easy Drive",
  description: "Un NAS portable conçu pour automatiquement sauvegarder les données.",
  image: "/images/projets/fred.jpg",
  tags: ["Hardwere", "Recherche", "En cours"],
  link: "https://gitlab.com/oslot/injestor",
  // articleLink: "https://luminapp.fr/blog/naissance-luminapp",
  content: {
    about: "Fred est un système de stockage NAS portable spécialement conçu pour les besoins des photographes en déplacement. Il permet de sauvegarder automatiquement les données et offre une solution robuste pour la gestion des fichiers volumineux.",
    challenges: "La conception de Fred a nécessité de relever plusieurs défis techniques, notamment la création d'une interface matérielle fiable, la gestion efficace du stockage de données volumineuses, et l'optimisation de la consommation d'énergie pour une utilisation prolongée en déplacement.",
    impact: "Fred est actuellement en phase de développement, avec des prototypes.",
    keyDates: [
      {
        date: "juin - 2023",
        title: "Idéation",
        description: "Développement du concept initial"
      },
      {
        date: "Octobre - 2023",
        title: "Premier prototype",
        description: "Création du premier prototype fonctionnel"
      }
    ]
  }
};

export default fred;
