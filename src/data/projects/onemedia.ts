import { EntrepreneurialProject } from "@/types/project";

const onemedia: EntrepreneurialProject = {
  title: "One Media",
  description: "Production de contenus audiovisuels.",
  image: "/images/projets/onemedia.png",
  tags: ["En cours"],
  link: "https://www.instagram.com/onemedia_grp/",
  content: {
    about: "Passionné par la photographie et l'audiovisuel depuis toujours, j'ai même tenté d'en vivre dans une autre vie.",
    challenges: "Le plus difficile a été d'apprendre toute la technique de manière autodidacte.",
    impact: "À chaque étape, c'est un plaisir : j'ai documenté des centaines de mariages et d'événements, réalisé trois courts-métrages, produit plusieurs clips et voyagé dans toute l'Europe pour différents tournages.",
    keyDates: [
      {
        date: "2012",
        title: "Découverte de l’audiovisuel",
        description: "Grâce à ma maîtrise du tamoul, j'ai rejoint la chaîne locale TTN (Tamil Television Network) d'abord comme présentateur, puis je me suis découvert une passion pour les aspects techniques."
      },
      {
        date: "Juin 2019",
        title: "Création de mon auto-entreprise",
        description: "J'ai franchi le pas en officialisant mon activité et en lançant Haristocrate."
      },
      {
        date: "Septembre 2024",
        title: "Renouveau de marque",
        description: "Initialement baptisée Haristocrate, l'entreprise devient One Media pour une identité plus polyvalente et facile à prononcer. J'ai profité de ce changement pour repenser le logo, inspiré de l'hippocampe, symbole de discrétion et de polyvalence."
      }
    ]
  }
};

export default onemedia;
