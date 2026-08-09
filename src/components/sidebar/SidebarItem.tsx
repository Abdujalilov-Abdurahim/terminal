import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { NavItem } from "@/types/navigation";
import { cn } from "@/utils/cn";

export function SidebarItem({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const [open, setOpen] = useState(true);
  const Icon = item.icon;
  const hasChildren = !!item.children?.length;

  return (
    <div className="mb-1">
      <button
        type="button"
        onClick={() => (hasChildren ? setOpen((o) => !o) : undefined)}
        className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-mono text-[13px] text-ink-dim transition-colors hover:bg-bg-alt hover:text-ink"
      >
        {Icon && <Icon size={15} className="shrink-0 text-teal" />}
        {!collapsed && <span className="flex-1">{item.label}</span>}
        {!collapsed && hasChildren && (
          <ChevronDown
            size={13}
            className={cn("transition-transform", open ? "rotate-0" : "-rotate-90")}
          />
        )}
      </button>

      <AnimatePresence initial={false}>
        {!collapsed && hasChildren && open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden pl-6"
          >
            {item.children!.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                className={({ isActive }) =>
                  cn(
                    "block rounded-md px-3 py-1.5 text-[12.5px] text-ink-faint transition-colors hover:text-ink",
                    isActive && "text-teal"
                  )
                }
              >
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
