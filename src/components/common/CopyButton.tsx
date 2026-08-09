import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { cn } from "@/utils/cn";

interface CopyButtonProps {
  text: string;
  className?: string;
}

export function CopyButton({ text, className }: CopyButtonProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <button
      type="button"
      onClick={() => copy(text)}
      className={cn(
        "flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 font-mono text-[11px] text-ink-faint transition-all hover:border-teal-dim hover:text-teal",
        className
      )}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? "nusxalandi" : "nusxalash"}
    </button>
  );
}
