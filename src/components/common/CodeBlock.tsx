import { CopyButton } from "./CopyButton";

interface CodeBlockProps {
  command: string;
  comment?: string;
}

export function CodeBlock({ command, comment }: CodeBlockProps) {
  return (
    <div className="relative rounded-lg border border-border bg-surface p-4 pr-24 font-mono text-[13.5px]">
      <div className="flex gap-2">
        <span className="text-teal">$</span>
        <span className="text-ink">{command}</span>
      </div>
      {comment && <div className="mt-1.5 text-ink-faint">{comment}</div>}
      <CopyButton text={command} className="absolute right-3 top-3" />
    </div>
  );
}
