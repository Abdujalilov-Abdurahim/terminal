import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { SearchResult } from "@/hooks/useSearch";

interface SearchResultsProps {
  results: SearchResult[];
  onSelect?: () => void;
}

export function SearchResults({ results, onSelect }: SearchResultsProps) {
  if (results.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.12 }}
        className="absolute left-0 right-0 top-full z-40 mt-2 max-h-80 overflow-y-auto rounded-lg border border-border bg-surface shadow-xl"
      >
        {results.map((result) => (
          <Link
            key={result.path}
            to={result.path}
            onClick={onSelect}
            className="block border-b border-border-soft px-4 py-3 last:border-b-0 hover:bg-bg-alt"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm text-teal">{result.title}</span>
              <span className="font-mono text-[10px] uppercase text-ink-faint">
                {result.type === "command" ? "buyruq" : "mavzu"}
              </span>
            </div>
            <p className="mt-0.5 text-[12.5px] text-ink-dim">{result.description}</p>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
