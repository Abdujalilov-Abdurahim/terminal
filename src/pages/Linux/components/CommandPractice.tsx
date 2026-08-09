import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { Command } from "@/types/command";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function CommandPractice({ command }: { command: Command }) {
  const target = command.examples[0]?.command ?? command.syntax;
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const isCorrect = value.trim() === target.trim();

  return (
    <div className="mb-10">
      <SectionLabel>Practice</SectionLabel>
      <div className="rounded-lg border border-border-soft p-5">
        <p className="mb-4 text-[13.5px] text-ink-dim">
          Quyidagi buyruqni qo'lda tering va tekshiring:{" "}
          <span className="font-mono text-teal">{target}</span>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setChecked(false);
            }}
            placeholder="buyruqni shu yerga tering..."
          />
          <Button variant="outline" onClick={() => setChecked(true)}>
            Tekshirish
          </Button>
        </div>
        {checked && (
          <div
            className={`mt-3 flex items-center gap-2 font-mono text-[12.5px] ${
              isCorrect ? "text-teal" : "text-danger"
            }`}
          >
            {isCorrect && <CheckCircle2 size={14} />}
            {isCorrect ? "To'g'ri!" : "Hali to'g'ri emas, qayta urinib ko'ring."}
          </div>
        )}
      </div>
    </div>
  );
}
