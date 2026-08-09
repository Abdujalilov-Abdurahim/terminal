import { Link } from "react-router-dom";
import { resources } from "@/data/resources";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { Button } from "@/components/ui/Button";

export function ResourcesPreviewSection() {
  const featured = resources.slice(0, 3);

  return (
    <section className="border-t border-border-soft px-5 py-16 md:px-8">
      <SectionHeading
        tag="04 / resurslar"
        title="O'rganish uchun tavsiyalar"
        description="Kitoblar, platformalar va vositalar to'plami."
      />
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((r) => (
          <ResourceCard key={r.title} resource={r} />
        ))}
      </div>
      <Link to="/resources">
        <Button variant="outline">Barcha resurslarni ko'rish &#8594;</Button>
      </Link>
    </section>
  );
}
