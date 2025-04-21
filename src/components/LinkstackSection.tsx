
import React, { useEffect, useState } from "react";
import { Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type LinkstackData = {
  title: string;
  description: string;
  url: string;
};

export const LinkstackSection = () => {
  const [data, setData] = useState<LinkstackData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Utilisation de allorigins comme proxy contre CORS
    fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://links.rudra.it/@rudra")
    )
      .then((res) => res.json())
      .then((result) => {
        // Extraction naïve du titre et meta description depuis le HTML
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(result.contents, "text/html");
        const title =
          htmlDoc.querySelector("title")?.textContent || "Liens Rudra";
        const description =
          htmlDoc.querySelector('meta[name="description"]')?.getAttribute("content") ||
          "Ma page de liens personnels et professionnels.";
        setData({
          title,
          description,
          url: "https://links.rudra.it/@rudra",
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
          <div className="max-w-xl text-center">
            <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
            <p className="text-cybersec-muted mb-6">{data.description}</p>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              title="Voir mon Linkstack"
            >
              <Button variant="default" className="flex gap-1 items-center">
                <Link2 className="w-4 h-4 mr-1" /> Accéder à mon Linkstack
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};
