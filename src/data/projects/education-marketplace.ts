
import { EntrepreneurialProject } from "@/types/project";

const educationMarketplace: EntrepreneurialProject = {
  title: "Plateforme de mise en relation professeurs-élèves",
  description: "Marketplace éducative permettant aux professeurs particuliers de proposer leurs services et aux élèves de trouver rapidement un soutien adapté à leurs besoins spécifiques.",
  image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
  tags: ["Éducation", "Marketplace", "Side-project"],
  articleLink: "https://devblog.fr/article/plateforme-prof-eleve",
  content: {
    about: "Cette marketplace éducative a été conçue pour résoudre le problème de mise en relation entre professeurs particuliers et élèves. Notre plateforme utilise un algorithme de matching avancé qui prend en compte non seulement les matières enseignées, mais aussi les méthodes pédagogiques et la compatibilité entre profils.",
    challenges: "Le principal défi rencontré lors du développement de cette plateforme était de créer un système d'évaluation équitable et transparent qui maintienne une haute qualité d'enseignement tout en évitant les abus. Nous avons également dû concevoir une interface conviviale qui fonctionne aussi bien pour les élèves de tous âges que pour les enseignants.",
    impact: "Notre plateforme a permis à plus de 500 enseignants de proposer leurs services et a facilité plus de 2000 mises en relation. Les retours des utilisateurs indiquent une satisfaction élevée tant du côté des professeurs que des élèves."
  }
};

export default educationMarketplace;
