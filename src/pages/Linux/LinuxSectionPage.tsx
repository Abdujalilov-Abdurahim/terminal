import { useParams } from "react-router-dom";
import { linuxSections } from "@/data/linuxSections";
import { getCommand } from "@/data/commands";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SEO } from "@/components/common/SEO";
import { CommandCard } from "@/components/cards/CommandCard";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

export default function LinuxSectionPage() {
  const { section: sectionSlug } = useParams<{ section: string }>();
  const section = linuxSections.find((s) => s.slug === sectionSlug);

  if (!section) return <NotFoundPage />;

  const availableCommands = section.commandSlugs
    .map((slug) => getCommand(slug))
    .filter((c): c is NonNullable<typeof c> => !!c);

  const pendingCount = section.commandSlugs.length - availableCommands.length;

  return (
    <div className="px-5 pb-20 pt-10 md:px-8">
      <SEO title={`${section.title} — Linux — terminal.uz`} description={section.description} />

      <Breadcrumb items={[{ label: "linux", path: "/linux" }, { label: section.slug }]} />
      <SectionHeading tag={`linux/${section.slug}`} title={section.title} description={section.description} />

      {availableCommands.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {availableCommands.map((cmd) => (
            <CommandCard key={cmd.slug} command={cmd} />
          ))}
        </div>
      ) : (
        <p className="font-mono text-sm text-ink-faint">
          Bu bo'limdagi buyruqlar tez orada qo'shiladi.
        </p>
      )}

      {pendingCount > 0 && (
        <p className="mt-6 font-mono text-[12.5px] text-ink-faint">
          + yana {pendingCount} ta buyruq tez orada qo'shiladi
        </p>
      )}
    </div>
  );
}
