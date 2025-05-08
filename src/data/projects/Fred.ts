
import { EntrepreneurialProject } from "@/types/project";

const fred: EntrepreneurialProject = {
  title: "Fred – Fred, Robust Easy Drive",
  description: "Un NAS portable conçu pour les photographes pour automatiquement sauvegarder les projets.",
  image: "/images/projets/placeholder-fred.png",
  tags: ["SaaS", "Recherche", "Entrepreneuriat", "En cours"],
  link: "https://luminapp.fr",
  articleLink: "https://luminapp.fr/blog/naissance-luminapp",
  content: {
    about: "Fred (Robust Easy Drive) est un système de stockage NAS portable spécialement conçu pour les besoins des photographes en déplacement. Il permet de sauvegarder automatiquement les projets et offre une solution robuste pour la gestion des fichiers volumineux.",
    challenges: "La conception de Fred a nécessité de relever plusieurs défis techniques, notamment la création d'une interface matérielle fiable, la gestion efficace du stockage de données volumineuses, et l'optimisation de la consommation d'énergie pour une utilisation prolongée en déplacement.",
    impact: "Fred est actuellement en phase de développement avancé, avec des prototypes testés par plusieurs photographes professionnels qui rapportent une tranquillité d'esprit accrue lors de leurs séances photo extérieures.",
    keyDates: [
      {
        date: "06/2023",
        title: "Idéation",
        description: "Développement du concept initial et études de faisabilité"
      },
      {
        date: "11/2023",
        title: "Premier prototype",
        description: "Création du premier prototype fonctionnel"
      },
      {
        date: "03/2024",
        title: "Tests sur le terrain",
        description: "Premiers tests avec des photographes professionnels"
      }
    ]
  }
};

export default fred;
