import type { Command } from "@/types/command";
import { chmod } from "./chmod";
import { grep } from "./grep";
import { systemctl } from "./systemctl";

/**
 * Yangi buyruq qo'shish uchun:
 * 1. Shu papkada yangi fayl yarating (masalan, nmap.ts)
 * 2. Command interfeysiga mos obyekt eksport qiling
 * 3. Quyidagi ro'yxatga qo'shing
 */
export const commands: Command[] = [chmod, grep, systemctl];

export const commandsBySlug: Record<string, Command> = Object.fromEntries(
  commands.map((c) => [c.slug, c])
);

export function getCommand(slug: string): Command | undefined {
  return commandsBySlug[slug];
}

export function getCommandsBySection(section: string): Command[] {
  return commands.filter((c) => c.section === section);
}
