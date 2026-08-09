import { SEO } from "@/components/common/SEO";
import { SITE } from "@/constants/site";
import { Hero } from "./Hero";
import { CategoriesSection } from "./CategoriesSection";
import { LearningPathSection } from "./LearningPathSection";
import { PopularCommandsSection } from "./PopularCommandsSection";
import { ResourcesPreviewSection } from "./ResourcesPreviewSection";
import { TelegramCTASection } from "./TelegramCTASection";

export default function HomePage() {
  return (
    <>
      <SEO title={`${SITE.name} — ${SITE.tagline}`} description={SITE.description} />

      <Hero />
      <CategoriesSection />
      <PopularCommandsSection />
      <LearningPathSection />
      <ResourcesPreviewSection />
      <TelegramCTASection />
    </>
  );
}
