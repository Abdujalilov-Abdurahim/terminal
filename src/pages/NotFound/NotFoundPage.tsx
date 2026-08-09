import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { SEO } from "@/components/common/SEO";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 text-center">
      <SEO title="Sahifa topilmadi — terminal.uz" description="Siz qidirayotgan sahifa topilmadi." />
      <div className="mb-4 font-mono text-6xl text-teal">404</div>
      <h1 className="mb-2 text-xl font-semibold text-ink">Sahifa topilmadi</h1>
      <p className="mb-8 max-w-sm text-sm text-ink-dim">
        Siz qidirayotgan sahifa mavjud emas yoki hali qo'shilmagan.
      </p>
      <Link to="/">
        <Button variant="primary">&#8592; Bosh sahifaga qaytish</Button>
      </Link>
    </div>
  );
}
