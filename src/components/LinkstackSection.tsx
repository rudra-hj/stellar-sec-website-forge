
import React, { useEffect, useState } from "react";
import { Link2, Instagram, Linkedin, RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
  const [randomLink, setRandomLink] = useState<{ href: string; text: string } | null>(null);
  const [isRotating, setIsRotating] = useState(false);
  const [allOtherLinks, setAllOtherLinks] = useState<Array<{ href: string; text: string }>>([]);

  // Function to get a new random link
  const getNewRandomLink = () => {
    if (allOtherLinks.length === 0) return null;
    return allOtherLinks[Math.floor(Math.random() * allOtherLinks.length)];
  };

  useEffect(() => {
    fetch(
      "https://api.allorigins.win/get?url=" +
        encodeURIComponent("https://links.rudra.it/@rudra")
    )
      .then((res) => res.json())
      .then((result) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(result.contents, "text/html");

        const title =
          htmlDoc.querySelector("title")?.textContent || "Liens Rudra";
        const description =
          htmlDoc.querySelector('meta[name="description"]')?.getAttribute("content") ||
          "Ma page de liens personnels et professionnels.";

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

        links = linkCandidates.filter((a) => {
          if (a.href === "https://links.rudra.it/@rudra") return false;
          if ((a.textContent || "").toLowerCase().includes("privacy")) return false;
          if ((a.textContent || "").toLowerCase().includes("policy")) return false;
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

        // Filtrer pour trouver Instagram et LinkedIn
        const instagram = links.find(l => l.text.toLowerCase().includes("instagram"));
        const linkedin = links.find(l => 
          l.text.toLowerCase().includes("linkedin") || 
          l.href.toLowerCase().includes("linkedin.com")
        );
        
        // Stocker tous les autres liens qui ne sont ni Instagram ni LinkedIn
        const otherLinks = links.filter(l => 
          !l.text.toLowerCase().includes("instagram") && 
          !l.text.toLowerCase().includes("linkedin") &&
          !l.href.toLowerCase().includes("linkedin.com")
        );
        
        // Stocker tous les autres liens disponibles pour la rotation
        setAllOtherLinks(otherLinks);
        
        // Sélectionner un lien aléatoire initial
        const initialRandomLink = otherLinks.length > 0 
          ? otherLinks[Math.floor(Math.random() * otherLinks.length)]
          : null;
        setRandomLink(initialRandomLink);

        const displayLinks = [
          instagram,
          linkedin,
          initialRandomLink
        ].filter(Boolean) as Array<{ href: string; text: string }>;

        console.log("Links found:", displayLinks);
        console.log("LinkedIn found:", linkedin);

        setData({
          title,
          description,
          url: "https://links.rudra.it/@rudra",
          links: displayLinks
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(
          "Impossible de charger le contenu de Linkstack. Essayez plus tard."
        );
        setLoading(false);
      });
  }, []);

  // Effect for rotating random links every 3 seconds
  useEffect(() => {
    if (allOtherLinks.length === 0) return;

    const rotateLink = () => {
      setIsRotating(true);
      
      // Select a new random link that's different from the current one
      let newLink = getNewRandomLink();
      // Try to ensure we get a different link if possible
      if (newLink && randomLink && allOtherLinks.length > 1) {
        let attempts = 0;
        while (newLink.href === randomLink.href && attempts < 5) {
          newLink = getNewRandomLink();
          attempts++;
        }
      }
      
      setRandomLink(newLink);
      
      // Reset rotation animation after 500ms
      setTimeout(() => setIsRotating(false), 500);
    };

    // Initial rotation is not needed as we already set an initial random link
    
    // Set up interval for changing links every 3 seconds
    const interval = setInterval(rotateLink, 3000);

    return () => clearInterval(interval);
  }, [allOtherLinks, randomLink]);

  return (
    <section
      className="w-full bg-cybersec-light/20 py-12 my-6"
      id="liens"
      aria-labelledby="linkstack-heading"
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <Link2 className="text-primary w-7 h-7" />
          <h2
            id="linkstack-heading"
            className="text-2xl sm:text-3xl font-bold text-white"
          >
            Me retrouver en ligne
          </h2>
        </div>

        {loading && (
          <span className="text-cybersec-muted text-lg">Chargement...</span>
        )}
        {error && <span className="text-destructive text-lg">{error}</span>}

        {data && (
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Instagram Link */}
              {data.links.find(l => l.text.toLowerCase().includes("instagram")) && (
                <a
                  href={data.links.find(l => l.text.toLowerCase().includes("instagram"))?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-cybersec-dark/50 border-cybersec-light/40 hover:border-primary/60">
                    <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                      <Instagram className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        Instagram
                      </span>
                    </CardContent>
                  </Card>
                </a>
              )}

              {/* LinkedIn Link */}
              {data.links.find(l => l.href.toLowerCase().includes("linkedin.com")) && (
                <a
                  href={data.links.find(l => l.href.toLowerCase().includes("linkedin.com"))?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-cybersec-dark/50 border-cybersec-light/40 hover:border-primary/60">
                    <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                      <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        LinkedIn
                      </span>
                    </CardContent>
                  </Card>
                </a>
              )}

              {/* Random Link */}
              {randomLink && (
                <a
                  href={randomLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-cybersec-dark/50 border-cybersec-light/40 hover:border-primary/60">
                    <CardContent className="p-6 flex flex-col items-center justify-center gap-4">
                      <div className="flex items-center gap-2">
                        <RotateCw 
                          className={`w-8 h-8 text-primary group-hover:scale-110 transition-transform ${
                            isRotating ? 'animate-spin' : ''
                          }`} 
                        />
                        <span className="text-xs font-medium text-cybersec-accent">
                          Lien surprise
                        </span>
                      </div>
                      <span className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                        {randomLink.text}
                      </span>
                    </CardContent>
                  </Card>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
