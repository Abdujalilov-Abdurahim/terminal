import { cyberTopics } from "@/data/cybersecurity";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { SectionHeading } from "@/components/common/SectionHeading";
import { SEO } from "@/components/common/SEO";
import { CyberTopicCard } from "@/components/cards/CyberTopicCard";

export default function CybersecurityPage() {
  return (
    <div className="px-5 pb-20 pt-10 md:px-8">
      <SEO
        title="Cybersecurity — terminal.uz"
        description="Networking, web security, red team, blue team va boshqa cybersecurity mavzulari o'zbek tilida."
      />

      <Breadcrumb items={[{ label: "cybersecurity" }]} />

      <SectionHeading
        tag="cybersecurity"
        title="Xavfsizlik mavzulari"
        description="Network xavfsizligidan tortib digital forensics'gacha — asosiy yo'nalishlar."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cyberTopics.map((topic) => (
          <CyberTopicCard key={topic.slug} topic={topic} />
        ))}
      </div>
    </div>
  );
}
