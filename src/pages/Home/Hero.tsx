import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";

export function Hero() {
  return (
    <section className="px-5 pb-20 pt-16 md:px-8 md:pt-20">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-5 flex items-center gap-2 font-mono text-[12.5px] tracking-wide text-amber">
            <span className="opacity-70">#</span>sirli masalliqning o'zi yo'q
          </div>

          <h1 className="mb-5 font-mono text-[40px] font-semibold leading-tight tracking-tight md:text-[44px]">
            Linux va cybersecurity <span className="text-teal">o'zbek tilida</span> — ma'lumotlar.
          </h1>

          <p className="mb-8 max-w-[480px] text-[16.5px] text-ink-dim">
            Terminal buyruqlaridan tortib penetration testing'gacha — har bir mavzu sodda tilda,
            real misollar bilan tushuntirilgan.
          </p>

          <div className="mb-11 flex flex-wrap gap-3.5">
            <Link to="/linux">
              <Button variant="primary">O'rganishni boshlash &#8594;</Button>
            </Link>
            <Link to="/cybersecurity">
              <Button variant="ghost">Cybersecurity'ni ko'rish</Button>
            </Link>
          </div>

          <div className="flex gap-9">
            <Stat value="340+" label="buyruq tushuntirilgan" />
            <Stat value="60+" label="xavfsizlik toollari" />
            <Stat value="bepul" label="hamisha shunday qoladi" />
          </div>
        </motion.div>

        <TerminalWindow />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <b className="block font-mono text-[22px] font-semibold text-ink">{value}</b>
      <span className="text-[12.5px] text-ink-faint">{label}</span>
    </div>
  );
}
