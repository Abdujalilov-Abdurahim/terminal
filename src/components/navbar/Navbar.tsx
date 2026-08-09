import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import { SITE } from "@/constants/site";

export function Navbar() {
  const { openMobile } = useSidebar();

  return (
    <header className="sticky top-0 z-50 border-b border-border-soft bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center gap-4 px-5 md:px-8">
        <button type="button" onClick={openMobile} className="text-ink-dim md:hidden">
          <Menu size={20} />
        </button>

        <Link to="/" className="flex shrink-0 items-center font-mono text-base font-semibold text-ink">
          <span className="text-teal">~$</span>&nbsp;{SITE.name}
          <span className="ml-1.5 h-4 w-2 animate-blink bg-teal" />
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <GlobalSearch />
        </div>

        <a
          href={SITE.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto hidden shrink-0 rounded-md border border-teal-dim px-4 py-2 font-mono text-[13px] text-teal transition-colors hover:border-teal hover:bg-teal/10 md:inline-block"
        >
          Telegram &#8594;
        </a>
      </div>

      <div className="border-t border-border-soft px-5 py-2.5 md:hidden">
        <GlobalSearch />
      </div>
    </header>
  );
}
