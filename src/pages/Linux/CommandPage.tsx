import { useParams } from "react-router-dom";
import { commands, getCommand } from "@/data/commands";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { CommandNav } from "@/components/common/CommandNav";
import { SEO } from "@/components/common/SEO";
import { CommandHeader } from "./components/CommandHeader";
import { CommandOptionsTable } from "./components/CommandOptionsTable";
import { CommandExamples } from "./components/CommandExamples";
import { CommandMistakes, RealLifeUsage } from "./components/CommandMistakes";
import { CommandRelated } from "./components/CommandRelated";
import { CommandPractice } from "./components/CommandPractice";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";

export default function CommandPage() {
  const { slug } = useParams<{ slug: string }>();
  const command = slug ? getCommand(slug) : undefined;

  if (!command) return <NotFoundPage />;

  const currentIndex = commands.findIndex((c) => c.slug === command.slug);
  const previous = currentIndex > 0 ? commands[currentIndex - 1] : undefined;
  const next = currentIndex < commands.length - 1 ? commands[currentIndex + 1] : undefined;

  return (
    <div className="px-5 pb-20 pt-10 md:px-8">
      <SEO
        title={`${command.name} — Linux buyrug'i — terminal.uz`}
        description={command.shortDescription}
      />

      <Breadcrumb
        items={[
          { label: "linux", path: "/linux" },
          { label: command.section, path: `/linux/${command.section}` },
          { label: command.slug }
        ]}
      />

      <div className="max-w-2xl">
        <CommandHeader command={command} />
        <CommandOptionsTable options={command.options} />
        <CommandExamples examples={command.examples} />
        <CommandMistakes mistakes={command.commonMistakes} />
        <RealLifeUsage text={command.realLifeUsage} />
        <CommandRelated slugs={command.relatedCommands} />
        <CommandPractice command={command} />

        <CommandNav previous={previous} next={next} />
      </div>
    </div>
  );
}
