import { commands } from "@/data/commands";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CommandCard } from "@/components/cards/CommandCard";

export function PopularCommandsSection() {
  return (
    <section className="border-t border-border-soft px-5 py-16 md:px-8">
      <SectionHeading
        tag="02 / ko'p qidiriladigan"
        title="Mashhur buyruqlar"
        description="Foydalanuvchilar eng ko'p qidirgan buyruqlar."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {commands.map((cmd) => (
          <CommandCard key={cmd.slug} command={cmd} />
        ))}
      </div>
    </section>
  );
}
