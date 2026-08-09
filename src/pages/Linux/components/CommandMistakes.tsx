import { AlertTriangle, Briefcase } from "lucide-react";
import type { CommandMistake } from "@/types/command";
import { SectionLabel } from "@/components/common/SectionLabel";

export function CommandMistakes({ mistakes }: { mistakes: CommandMistake[] }) {
  if (mistakes.length === 0) return null;

  return (
    <div className="mb-10">
      <SectionLabel>Common Mistakes</SectionLabel>
      <div className="flex flex-col gap-3">
        {mistakes.map((m) => (
          <div key={m.title} className="flex gap-3 rounded-lg border border-border-soft p-4">
            <AlertTriangle size={16} className="mt-0.5 shrink-0 text-amber" />
            <div>
              <h4 className="mb-1 text-sm font-semibold text-ink">{m.title}</h4>
              <p className="text-[13px] text-ink-dim">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RealLifeUsage({ text }: { text: string }) {
  return (
    <div className="mb-10">
      <SectionLabel>Real Life Usage</SectionLabel>
      <div className="flex gap-3 rounded-lg border border-teal-dim/40 bg-teal/5 p-4">
        <Briefcase size={16} className="mt-0.5 shrink-0 text-teal" />
        <p className="text-[13.5px] text-ink-dim">{text}</p>
      </div>
    </div>
  );
}
