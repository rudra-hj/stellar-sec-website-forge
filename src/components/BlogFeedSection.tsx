
import React from "react";
import { useQuery } from "@tanstack/react-query";
import Parser from "rss-parser";

type BlogPost = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
};

type BlogFeedSectionProps = {
  feedUrl?: string;
  maxItems?: number;
};

export const BlogFeedSection = ({
  feedUrl = "https://luminapp.fr/blog/index.xml",
  maxItems = 4,
}: BlogFeedSectionProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blog-feed", feedUrl],
    queryFn: async () => {
      const CORS_PROXY = "https://api.allorigins.win/get?url=";
      const finalUrl = CORS_PROXY + encodeURIComponent(feedUrl);
      const response = await fetch(finalUrl);
      const json = await response.json();
      const parser = new Parser();
      const feed = await parser.parseString(json.contents);
      return feed.items as BlogPost[];
    },
    staleTime: 1000 * 60 * 10,
  });

  if (isLoading) {
    return (
      <section id="blog" className="section-padding container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Derniers articles</h2>
        <p className="text-gray-400">Chargement…</p>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section id="blog" className="section-padding container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Derniers articles</h2>
        <p className="text-red-500">Impossible de charger les articles du blog.</p>
      </section>
    );
  }

  return (
    <section id="blog" className="section-padding container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Derniers articles</h2>
      <div className="h-1 w-20 bg-primary mb-8"></div>
      <div className="grid gap-8 md:grid-cols-2">
        {data.slice(0, maxItems).map((item) => (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-cybersec-dark border border-cybersec-light/20 rounded-lg p-6 shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all"
          >
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm mb-2">
              {item.pubDate ? new Date(item.pubDate).toLocaleDateString("fr-FR") : ""}
            </p>
            <p className="text-gray-300">
              {item.contentSnippet && item.contentSnippet.length > 180
                ? item.contentSnippet.slice(0, 180) + "…"
                : item.contentSnippet}
            </p>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a
          href={feedUrl.replace("/index.xml", "")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline hover:text-white text-base"
        >
          Voir tous les articles
        </a>
      </div>
    </section>
  );
};
