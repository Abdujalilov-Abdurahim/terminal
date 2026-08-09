import { cheatSheets } from "@/data/cheatSheets";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Card } from "@/components/ui/Card";

export function CheatSheetsSection() {
  return (
    <div className="mb-14">
      <SectionLabel>Cheat Sheets</SectionLabel>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cheatSheets.map((sheet) => (
          <Card key={sheet.slug} hoverable={false}>
            <h4 className="mb-1.5 font-mono font-semibold text-teal">{sheet.title}</h4>
            <p className="mb-3 text-[12.5px] text-ink-dim">{sheet.description}</p>
            <span className="font-mono text-[11px] text-ink-faint">{sheet.itemCount} ta band</span>
          </Card>
        ))}
      </div>
      <p className="mt-3 font-mono text-[11.5px] text-ink-faint">
        PDF yuklab olish imkoniyati keyinchalik qo'shiladi.
      </p>
    </div>
  );
}
