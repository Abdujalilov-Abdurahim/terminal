import { motion } from "framer-motion";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { sidebarNav } from "@/data/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
  const { collapsed, toggleCollapsed } = useSidebar();

  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ duration: 0.18 }}
      className="sticky top-[68px] hidden h-[calc(100vh-68px)] shrink-0 flex-col border-r border-border-soft bg-bg-alt/40 py-4 md:flex"
    >
      <nav className="flex-1 overflow-y-auto px-3">
        {sidebarNav.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </nav>

      <button
        type="button"
        onClick={toggleCollapsed}
        className="mx-3 mt-2 flex items-center gap-2 rounded-md border border-border-soft px-3 py-2 font-mono text-[11px] text-ink-faint hover:text-ink"
      >
        {collapsed ? <PanelLeftOpen size={14} /> : <PanelLeftClose size={14} />}
        {!collapsed && "Yig'ish"}
      </button>
    </motion.aside>
  );
}
