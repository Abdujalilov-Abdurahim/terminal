import type { CommandOption } from "@/types/command";
import { SectionLabel } from "@/components/common/SectionLabel";

export function CommandOptionsTable({ options }: { options: CommandOption[] }) {
  if (options.length === 0) return null;

  return (
    <div className="mb-10">
      <SectionLabel>Options</SectionLabel>
      <table className="w-full border-collapse text-sm">
        <tbody>
          {options.map((opt) => (
            <tr key={opt.flag} className="border-b border-border-soft last:border-b-0">
              <td className="w-40 py-3 pr-4 align-top font-mono font-semibold text-teal">
                {opt.flag}
              </td>
              <td className="py-3 text-ink-dim">{opt.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
