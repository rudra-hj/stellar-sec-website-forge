
import React, { useEffect, useState } from "react";
import { Link2, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type LinkstackData = {
  title: string;
  description: string;
  url: string;
  links: Array<{ href: string; text: string }>;
};

export const LinkstackSection = () => {
  const [data, setData] = useState<LinkstackData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://links.rudra.it/@rudra")
    )
      .then((res) => res.json())
      .then((result) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(result.contents, "text/html");

        // Extraction du titre & description
        const title =
          htmlDoc.querySelector("title")?.textContent || "Liens Rudra";
        const description =
          htmlDoc.querySelector('meta[name="description"]')?.getAttribute("content") ||
          "Ma page de liens personnels et professionnels.";

        // Extraction des liens de la page Linkstack
        // On prend tous les liens qui sont dans la body et qui semblent être des vrais liens utilisateurs
        // Ici on filtre ceux qui sont dans un container ayant un id ou une classe qui ressemble à une liste de liens (approximation)
        // Sinon fallback : tous les <a> visibles dans le body hors header/footer
        let links: Array<{ href: string; text: string }> = [];

        const linkCandidates = Array.from(htmlDoc.querySelectorAll("a"))
          .filter(
            (el) =>
              el.hasAttribute("href") &&
              el.getAttribute("href") &&
              (el.getAttribute("href") as string).startsWith("http") &&
              el.textContent &&
              el.textContent.trim().length > 0
          ) as HTMLAnchorElement[];

        // Extraire seulement les liens "principaux" (pour éviter les partages sociaux ou crédits)
        // Heuristic: liens hors des balises <footer>, ayant un texte indiqué et url différente de la page elle-même
        links = linkCandidates.filter((a) => {
          // Exclure les liens pointant vers la même page que linkstack
          if (a.href === "https://links.rudra.it/@rudra") return false;
          // Exclure liens vides ou type 'partage social'
          if ((a.textContent || "").toLowerCase().includes("facebook")) return false;
          if ((a.textContent || "").toLowerCase().includes("twitter")) return false;
          if ((a.textContent || "").toLowerCase().includes("privacy")) return false;
          if ((a.textContent || "").toLowerCase().includes("policy")) return false;
          // Exclure liens qui sont dans le footer
          let ok = true;
          let p: HTMLElement | null = a.parentElement;
          while (p) {
            if (p.tagName.toLowerCase() === "footer") {
              ok = false;
              break;
            }
            p = p.parentElement;
          }
          return ok;
        }).map((a) => ({
          href: a.href,
          text: a.textContent?.trim() || a.href,
        }));

        setData({
          title,
          description,
          url: "https://links.rudra.it/@rudra",
          links,
        });
        setLoading(false);
      })
      .catch(() => {
        setError(
          "Impossible de charger le contenu de Linkstack. Essayez plus tard."
        );
        setLoading(false);
      });
  }, []);

  return (
    <section
      className="w-full bg-cybersec-light/20 py-12 my-6"
      id="liens"
      aria-labelledby="linkstack-heading"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <Link2 className="text-primary w-7 h-7" />
          <h2
            id="linkstack-heading"
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Tous mes liens importants
          </h2>
        </div>
        {loading && (
          <span className="text-cybersec-muted text-lg">Chargement...</span>
        )}
        {error && (
          <span className="text-destructive text-lg">{error}</span>
        )}
        {data && (
          <div className="max-w-xl w-full text-center">
            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
            <p className="text-cybersec-muted mb-6">{data.description}</p>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-6"
              title="Voir mon Linkstack"
            >
              <Button variant="default" className="flex gap-1 items-center">
                <Link2 className="w-4 h-4 mr-1" /> Accéder à mon Linkstack
              </Button>
            </a>
            {data.links.length > 0 && (
              <div className="bg-cybersec-dark/60 p-4 rounded-lg shadow mt-2">
                <h4 className="font-bold text-lg mb-3 text-white text-left">
                  Extraits :
                </h4>
                <ul className="flex flex-col gap-2 text-left">
                  {data.links.map((l, i) => (
                    <li key={l.href + i} className="flex items-center gap-2">
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary underline break-all flex items-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        {l.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
