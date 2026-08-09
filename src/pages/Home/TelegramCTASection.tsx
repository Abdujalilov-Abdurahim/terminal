import { Button } from "@/components/ui/Button";
import { SITE } from "@/constants/site";

export function TelegramCTASection() {
  return (
    <section className="px-5 py-16 md:px-8">
      <div className="flex flex-col items-center justify-between gap-6 rounded-xl border border-border-soft bg-surface p-9 text-center sm:flex-row sm:text-left">
        <div>
          <h3 className="mb-1.5 font-mono text-xl text-ink">Telegram jamoamizga qo'shiling</h3>
          <p className="text-sm text-ink-dim">
            Yangi maqolalar, cheat sheet'lar va savol-javoblar — bir joyda.
          </p>
        </div>
        <a href={SITE.telegram} target="_blank" rel="noopener noreferrer">
          <Button variant="primary">Qo'shilish &#8594;</Button>
        </a>
      </div>
    </section>
  );
}
