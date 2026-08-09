import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Command } from "@/types/command";

export function CommandCard({ command }: { command: Command }) {
  return (
    <Link
      to={`/linux/command/${command.slug}`}
      className="group flex flex-col gap-2 rounded-lg border border-border-soft bg-surface p-5 transition-all hover:border-teal-dim hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono font-semibold text-teal">{command.name}</span>
        <ArrowRight
          size={14}
          className="text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-teal"
        />
      </div>
      <p className="text-[13px] text-ink-dim">{command.shortDescription}</p>
    </Link>
  );
}
