import { useEffect, useRef, useState } from "react";
import { terminalLines } from "@/data/terminalLines";

interface TypedLine {
  prompt: string;
  typed: string;
  comment: string;
  done: boolean;
}

const MAX_VISIBLE_LINES = 6;
const TYPE_SPEED_MS = 32;
const PAUSE_AFTER_LINE_MS = 1400;

export function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<TypedLine[]>([]);
  const lineIndexRef = useRef(0);

  useEffect(() => {
    let charIndex = 0;
    let typeTimer: ReturnType<typeof setInterval>;
    let pauseTimer: ReturnType<typeof setTimeout>;

    const startLine = () => {
      const current = terminalLines[lineIndexRef.current];
      charIndex = 0;

      setVisibleLines((prev) => {
        const next = [...prev, { prompt: current.prompt, typed: "", comment: "", done: false }];
        return next.length > MAX_VISIBLE_LINES ? next.slice(next.length - MAX_VISIBLE_LINES) : next;
      });

      typeTimer = setInterval(() => {
        charIndex++;
        setVisibleLines((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (!last) return prev;
          updated[updated.length - 1] = { ...last, typed: current.command.slice(0, charIndex) };
          return updated;
        });

        if (charIndex >= current.command.length) {
          clearInterval(typeTimer);
          setVisibleLines((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (!last) return prev;
            updated[updated.length - 1] = { ...last, comment: current.comment, done: true };
            return updated;
          });

          lineIndexRef.current = (lineIndexRef.current + 1) % terminalLines.length;
          pauseTimer = setTimeout(startLine, PAUSE_AFTER_LINE_MS);
        }
      }, TYPE_SPEED_MS);
    };

    startLine();

    return () => {
      clearInterval(typeTimer);
      clearTimeout(pauseTimer);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 border-b border-border-soft bg-bg-alt px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-danger" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal" />
        <span className="ml-2 font-mono text-xs text-ink-faint">user@terminal:~</span>
      </div>
      <div className="min-h-[270px] p-5 font-mono text-[13.5px] text-ink-dim">
        {visibleLines.map((line, i) => (
          <div className="mb-3 flex flex-wrap gap-2" key={i}>
            <span className="whitespace-nowrap text-teal">{line.prompt}</span>
            <span className="text-ink">{line.typed}</span>
            {!line.done && (
              <span className="inline-block h-3.5 w-1.5 animate-blink bg-teal align-[-2px]" />
            )}
            {line.done && <span className="text-ink-faint">{line.comment}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
