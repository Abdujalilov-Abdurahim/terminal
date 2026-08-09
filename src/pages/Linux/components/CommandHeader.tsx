import type { Command } from "@/types/command";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/common/CodeBlock";

export function CommandHeader({ command }: { command: Command }) {
  return (
    <div className="mb-10 border-b border-border-soft pb-9">
      <Badge className="mb-4">{command.section}</Badge>
      <h1 className="mb-3 font-mono text-4xl font-bold text-teal">{command.name}</h1>
      <p className="mb-6 max-w-xl text-[16px] text-ink-dim">{command.shortDescription}</p>
      <CodeBlock command={command.syntax} />
    </div>
  );
}
