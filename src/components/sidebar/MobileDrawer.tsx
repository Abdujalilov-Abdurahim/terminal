import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { sidebarNav } from "@/data/navigation";
import { useSidebar } from "@/context/SidebarContext";
import { SidebarItem } from "./SidebarItem";

export function MobileDrawer() {
  const { mobileOpen, closeMobile } = useSidebar();

  return (
    <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobile}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-0 top-0 z-50 h-full w-72 overflow-y-auto border-r border-border-soft bg-bg-alt p-4 md:hidden"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-mono text-sm text-ink">terminal.uz</span>
              <button onClick={closeMobile} type="button">
                <X size={18} className="text-ink-faint" />
              </button>
            </div>
            {sidebarNav.map((item) => (
              <SidebarItem key={item.path} item={item} collapsed={false} />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
