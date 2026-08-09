import { Link } from "react-router-dom";
import { learningPath } from "@/data/learningPath";
import { SectionHeading } from "@/components/common/SectionHeading";

export function LearningPathSection() {
  return (
    <section className="border-t border-border-soft px-5 py-16 md:px-8">
      <SectionHeading
        tag="03 / tavsiya etilgan tartib"
        title="O'quv yo'li"
        description="Noldan boshlaganlar uchun bosqichma-bosqich tartib."
      />

      <div className="relative pl-9">
        <div className="absolute bottom-1.5 left-[11px] top-1.5 w-px bg-border" />
        {learningPath.map((step, i) => (
          <Link
            to={step.linkTo}
            key={step.number}
            className={`group relative block ${i === learningPath.length - 1 ? "" : "pb-8"}`}
          >
            <div className="absolute -left-9 top-0 flex h-6 w-6 items-center justify-center rounded-full border border-teal-dim bg-bg-alt font-mono text-[11.5px] text-teal">
              {step.number}
            </div>
            <h4 className="mb-1 text-[15.5px] font-semibold text-ink group-hover:text-teal">
              {step.title}
            </h4>
            <p className="text-[13.5px] text-ink-dim">{step.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
