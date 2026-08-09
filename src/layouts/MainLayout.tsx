import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { SidebarProvider } from "@/context/SidebarContext";
import { Navbar } from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { MobileDrawer } from "@/components/sidebar/MobileDrawer";
import { Footer } from "@/components/footer/Footer";
import { GridBackground } from "@/components/layout/GridBackground";

export function MainLayout() {
  const location = useLocation();

  return (
    <SidebarProvider>
      <GridBackground />
      <Navbar />
      <MobileDrawer />

      <div className="mx-auto flex max-w-[1280px]">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.main
              key={location.pathname}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
            >
              <Outlet />
            </motion.main>
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </SidebarProvider>
  );
}
