import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";

// Code splitting: har bir sahifa alohida chunk sifatida yuklanadi
const HomePage = lazy(() => import("@/pages/Home/HomePage"));
const LinuxOverviewPage = lazy(() => import("@/pages/Linux/LinuxOverviewPage"));
const LinuxSectionPage = lazy(() => import("@/pages/Linux/LinuxSectionPage"));
const CommandPage = lazy(() => import("@/pages/Linux/CommandPage"));
const CybersecurityPage = lazy(() => import("@/pages/Cybersecurity/CybersecurityPage"));
const ResourcesPage = lazy(() => import("@/pages/Resources/ResourcesPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFound/NotFoundPage"));

function PageFallback() {
  return (
    <div className="flex h-[50vh] items-center justify-center font-mono text-sm text-ink-faint">
      yuklanmoqda...
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/linux" element={<LinuxOverviewPage />} />
          <Route path="/linux/command/:slug" element={<CommandPage />} />
          <Route path="/linux/:section" element={<LinuxSectionPage />} />
          <Route path="/cybersecurity" element={<CybersecurityPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
