import type { CyberTopic } from "@/types/resource";
import { Badge } from "@/components/ui/Badge";

export function CyberTopicCard({ topic }: { topic: CyberTopic }) {
  return (
    <div
      id={topic.slug}
      className="scroll-mt-24 rounded-lg border border-border-soft bg-surface p-5 transition-colors hover:border-teal-dim"
    >
      <h3 className="mb-2 font-semibold text-ink">{topic.title}</h3>
      <p className="mb-4 text-[13.5px] text-ink-dim">{topic.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {topic.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </div>
  );
}
