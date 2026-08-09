import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { HomeCategory } from "@/data/homeCategories";

export function CategoryCard({ category }: { category: HomeCategory }) {
  const Icon = category.icon;

  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.15 }}>
      <Link
        to={category.linkTo}
        className="block h-full rounded-xl border border-border-soft bg-surface p-6 transition-colors hover:border-teal-dim"
      >
        <div className="mb-4 flex items-center gap-2 font-mono text-xs text-ink-faint">
          <Icon size={14} className="text-teal" />
          {category.path}
        </div>
        <h3 className="mb-2 text-[17px] font-semibold text-ink">{category.title}</h3>
        <p className="text-[13.5px] text-ink-dim">{category.description}</p>
      </Link>
    </motion.div>
  );
}
