import { useEffect, useRef } from "react";
import { useSearch } from "@/hooks/useSearch";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";

export function GlobalSearch() {
  const { query, setQuery, results } = useSearch();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setQuery("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setQuery]);

  return (
    <div ref={containerRef} className="relative w-full max-w-sm">
      <SearchBar value={query} onChange={setQuery} />
      <SearchResults results={results} onSelect={() => setQuery("")} />
    </div>
  );
}
