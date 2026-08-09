export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="mb-3.5 font-mono text-xs uppercase tracking-wide text-ink-faint">
      {children}
    </div>
  );
}
