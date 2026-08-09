import { Link } from "react-router-dom";
import { getCommand } from "@/data/commands";
import { SectionLabel } from "@/components/common/SectionLabel";

export function CommandRelated({ slugs }: { slugs: string[] }) {
  const related = slugs.map((s) => getCommand(s)).filter((c): c is NonNullable<typeof c> => !!c);

  if (related.length === 0) return null;

  return (
    <div className="mb-10">
      <SectionLabel>Bog'liq buyruqlar</SectionLabel>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {related.map((cmd) => (
          <Link
            key={cmd.slug}
            to={`/linux/command/${cmd.slug}`}
            className="rounded-lg border border-border-soft p-4 transition-colors hover:border-teal-dim"
          >
            <span className="font-mono font-semibold text-teal">{cmd.name}</span>
            <p className="mt-1 text-[13px] text-ink-dim">{cmd.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
