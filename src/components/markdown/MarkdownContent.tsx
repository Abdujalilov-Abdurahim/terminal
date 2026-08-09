/**
 * Hozircha barcha buyruq/maqola matni TypeScript obyektlari sifatida
 * src/data/ ichida saqlanadi. Kontent hajmi oshib, .md fayllardan
 * o'qish kerak bo'lganda (masalan, minglab maqola), shu komponent
 * markdown-to-JSX kutubxonasi (masalan, react-markdown) bilan
 * to'ldiriladi.
 */
interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose-terminal text-[15px] leading-relaxed text-ink-dim">
      {content.split("\n\n").map((paragraph, i) => (
        <p key={i} className="mb-4">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
