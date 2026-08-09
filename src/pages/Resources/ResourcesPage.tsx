import { resources } from "@/data/resources";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SEO } from "@/components/common/SEO";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { groupResourcesByCategory } from "./groupResources";
import { CheatSheetsSection } from "./CheatSheetsSection";

export default function ResourcesPage() {
  const grouped = groupResourcesByCategory(resources);

  return (
    <div className="px-5 pb-20 pt-10 md:px-8">
      <SEO
        title="Resources — terminal.uz"
        description="Linux va cybersecurity o'rganish uchun kitoblar, platformalar, toollar va cheat sheet'lar."
      />

      <Breadcrumb items={[{ label: "resources" }]} />

      <SectionHeading
        tag="resources"
        title="O'rganish resurslari"
        description="Sinovdan o'tgan platformalar, kitoblar va vositalar to'plami."
      />

      <CheatSheetsSection />

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-14">
          <SectionLabel>{category}</SectionLabel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((r) => (
              <ResourceCard key={r.title} resource={r} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
