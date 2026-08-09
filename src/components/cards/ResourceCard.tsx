import { ExternalLink } from "lucide-react";
import type { Resource } from "@/types/resource";
import { Badge } from "@/components/ui/Badge";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-lg border border-border-soft bg-surface p-5 transition-all hover:border-teal-dim hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-ink">{resource.title}</h3>
        <ExternalLink
          size={14}
          className="mt-1 shrink-0 text-ink-faint transition-colors group-hover:text-teal"
        />
      </div>
      <p className="text-[13.5px] text-ink-dim">{resource.description}</p>
      <Badge className="w-fit">{resource.category}</Badge>
    </a>
  );
}
