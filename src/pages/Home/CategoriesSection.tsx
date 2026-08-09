import { homeCategories } from "@/data/homeCategories";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CategoryCard } from "@/components/cards/CategoryCard";

export function CategoriesSection() {
  return (
    <section className="border-t border-border-soft px-5 py-16 md:px-8">
      <SectionHeading
        tag="01 / bo'limlar"
        title="Qayerdan boshlashni tanlang"
        description="Har bir bo'lim boshlang'ich darajadan murakkab mavzularga qadar tuzilgan."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {homeCategories.map((cat) => (
          <CategoryCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  );
}
