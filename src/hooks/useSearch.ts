import { useMemo, useState } from "react";
import { commands } from "@/data/commands";
import { cyberTopics } from "@/data/cybersecurity";

export interface SearchResult {
  title: string;
  description: string;
  path: string;
  type: "command" | "topic";
}

export function useSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo<SearchResult[]>(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const commandResults: SearchResult[] = commands
      .filter(
        (c) => c.name.toLowerCase().includes(q) || c.shortDescription.toLowerCase().includes(q)
      )
      .map((c) => ({
        title: c.name,
        description: c.shortDescription,
        path: `/linux/command/${c.slug}`,
        type: "command"
      }));

    const topicResults: SearchResult[] = cyberTopics
      .filter(
        (t) => t.title.toLowerCase().includes(q) || t.description.toLowerCase().includes(q)
      )
      .map((t) => ({
        title: t.title,
        description: t.description,
        path: `/cybersecurity#${t.slug}`,
        type: "topic"
      }));

    return [...commandResults, ...topicResults];
  }, [query]);

  return { query, setQuery, results };
}
