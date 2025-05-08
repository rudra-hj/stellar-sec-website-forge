
import { EntrepreneurialProject } from "@/types/project";

const techWatchTool: EntrepreneurialProject = {
  title: "Outil d'automatisation de veille technologique",
  description: "Solution permettant aux professionnels de rester informés des dernières tendances technologiques dans leur secteur grâce à l'agrégation intelligente de contenus et l'analyse automatisée.",
  image: "/images/projets/placeholder-techwatch.png",
  tags: ["Automatisation", "IA", "Exploration"],
  content: {
    about: "Notre outil de veille technologique utilise l'intelligence artificielle pour analyser et agréger des contenus provenant de milliers de sources spécialisées. Il permet aux professionnels de personnaliser leurs flux d'information en fonction de leurs centres d'intérêt spécifiques et de recevoir des alertes pertinentes en temps réel.",
    challenges: "La création de cet outil a nécessité de relever plusieurs défis techniques, notamment la mise en place d'algorithmes de traitement du langage naturel capables d'analyser et de catégoriser efficacement des contenus provenant de sources hétérogènes et dans plusieurs langues.",
    impact: "L'outil est actuellement utilisé par des professionnels de divers secteurs technologiques qui rapportent un gain de temps considérable dans leur processus de veille et une meilleure capacité à identifier les tendances émergentes dans leur domaine.",
    keyDates: [
      {
        date: "03/2021",
        title: "Concept initial",
        description: "Élaboration du concept et de l'architecture technique"
      },
      {
        date: "07/2021",
        title: "Prototype fonctionnel",
        description: "Développement du premier prototype capable d'agréger des contenus"
      },
      {
        date: "11/2021",
        title: "Intégration de l'IA",
        description: "Implémentation des premiers algorithmes d'analyse et de recommandation"
      },
      {
        date: "02/2022",
        title: "Lancement de la version alpha",
        description: "Tests avec un groupe restreint d'utilisateurs"
      }
    ]
  }
};

export default techWatchTool;
