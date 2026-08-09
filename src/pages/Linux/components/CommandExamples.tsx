import type { CommandExample } from "@/types/command";
import { SectionLabel } from "@/components/common/SectionLabel";
import { CodeBlock } from "@/components/common/CodeBlock";

export function CommandExamples({ examples }: { examples: CommandExample[] }) {
  if (examples.length === 0) return null;

  return (
    <div className="mb-10">
      <SectionLabel>Misollar</SectionLabel>
      <div className="flex flex-col gap-6">
        {examples.map((ex, i) => (
          <div key={i}>
            <CodeBlock command={ex.command} comment={ex.comment} />
            {ex.output && (
              <pre className="mt-2 overflow-x-auto rounded-lg border border-border-soft bg-bg-alt p-3.5 font-mono text-[12.5px] text-ink-dim">
                {ex.output}
              </pre>
            )}
            {ex.explanation && (
              <p className="mt-2 text-[13.5px] text-ink-dim">{ex.explanation}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
