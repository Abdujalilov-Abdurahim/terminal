import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Command } from "@/types/command";

interface CommandNavProps {
  previous?: Command;
  next?: Command;
}

export function CommandNav({ previous, next }: CommandNavProps) {
  if (!previous && !next) return null;

  return (
    <div className="mt-16 grid grid-cols-1 gap-4 border-t border-border-soft pt-8 sm:grid-cols-2">
      {previous ? (
        <Link
          to={`/linux/command/${previous.slug}`}
          className="group flex flex-col gap-1 rounded-lg border border-border-soft p-4 transition-colors hover:border-teal-dim"
        >
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint">
            <ArrowLeft size={12} /> Oldingi
          </span>
          <span className="font-mono text-teal group-hover:text-teal-light">
            {previous.name}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          to={`/linux/command/${next.slug}`}
          className="group flex flex-col items-end gap-1 rounded-lg border border-border-soft p-4 text-right transition-colors hover:border-teal-dim"
        >
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-ink-faint">
            Keyingi <ArrowRight size={12} />
          </span>
          <span className="font-mono text-teal group-hover:text-teal-light">
            {next.name}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
