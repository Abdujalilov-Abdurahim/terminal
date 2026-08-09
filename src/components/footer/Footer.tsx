import { Link } from "react-router-dom";
import { SITE } from "@/constants/site";

export function Footer() {
  return (
    <footer className="border-t border-border-soft py-10">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-5 md:px-8">
        <span className="font-mono text-[13px] text-ink-faint">{SITE.name} — 2026</span>
        <div className="flex gap-6 font-mono text-[13px] text-ink-faint">
          <Link to="/resources" className="hover:text-ink-dim">
            Resources
          </Link>
          <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-ink-dim">
            Telegram
          </a>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink-dim">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
