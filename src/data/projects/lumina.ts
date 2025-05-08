
import { EntrepreneurialProject } from "@/types/project";

const lumina: EntrepreneurialProject = {
  title: "Lumina – Photos d'identité parfaites à chaque prise.",
  description: "Lumina est née d'une idée simple : permettre à chacun de réaliser facilement ses photos d'identité. Depuis, la vision s'est enrichie pour donner naissance à une solution complète, pensée pour répondre aux besoins modernes des photographe et de créateur de contenue.",
  image: "/images/projets/lumina.png",
  tags: ["SaaS", "En cours"],
  link: "https://luminapp.fr",
  content: {
    about: "Lumina, est une plateforme conçue pour photographes comme une alternative aux nombreux SAAS qu'ils utilisent à ce jour. Notre solution centralise les outils nécessaires à leur workflow quotidien.",
    challenges: "Le principal défi a été de concevoir une interface intuitive qui réponde aux besoins variés des photographes professionnels tout en restant accessible aux débutants.",
    impact: "L'application est actuellement en phase de test avec un groupe restreint de photographes professionnels qui rapportent un gain de temps significatif dans leur workflow.",
    keyDates: [
      {
        date: "10/2023",
        title: "Conception initiale",
        description: "Première ébauche du concept et études des besoins des utilisateurs"
      },
      {
        date: "01/2024",
        title: "Développement du prototype",
        description: "Création de la première version fonctionnelle de l'application"
      },
      {
        date: "04/2024",
        title: "Test bêta",
        description: "Lancement de la phase de test avec un groupe de photographes sélectionnés"
      }
    ]
  }
};

export default lumina;
