import { Link } from "react-router-dom";
import { linuxSections } from "@/data/linuxSections";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SEO } from "@/components/common/SEO";
import { Card } from "@/components/ui/Card";

export default function LinuxOverviewPage() {
  return (
    <div className="px-5 pb-20 pt-10 md:px-8">
      <SEO
        title="Linux buyruqlari — terminal.uz"
        description="Linux buyruqlari bo'yicha to'liq qo'llanma: fayl tizimi, ruxsatlar, tarmoq, xavfsizlik va boshqalar."
      />

      <Breadcrumb items={[{ label: "linux" }]} />

      <SectionHeading
        tag="linux"
        title="Barcha bo'limlar"
        description="Har bir bo'limda tegishli buyruqlar va amaliy misollar joylashgan."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {linuxSections.map((section) => (
          <Link key={section.slug} to={`/linux/${section.slug}`}>
            <Card>
              <h3 className="mb-2 font-mono font-semibold text-teal">{section.title}</h3>
              <p className="mb-3 text-[13.5px] text-ink-dim">{section.description}</p>
              <span className="font-mono text-[11px] text-ink-faint">
                {section.commandSlugs.length} ta buyruq
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
