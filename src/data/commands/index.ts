import type { Command } from "@/types/command";
import { cat } from "./cat";
import { cd } from "./cd";
import { chmod } from "./chmod";
import { cp } from "./cp";
import { find } from "./find";
import { grep } from "./grep";
import { ls } from "./ls";
import { mkdir } from "./mkdir";
import { mv } from "./mv";
import { ps } from "./ps";
import { pwd } from "./pwd";
import { rm } from "./rm";
import { systemctl } from "./systemctl";
import { top } from "./top";

/**
 * Yangi buyruq qo'shish uchun:
 * 1. Shu papkada yangi fayl yarating (masalan, nmap.ts)
 * 2. Command interfeysiga mos obyekt eksport qiling
 * 3. Quyidagi ro'yxatga qo'shing
 */
export const commands: Command[] = [ls, cd, pwd, cat, mkdir, cp, mv, rm, find, chmod, grep, ps, top, systemctl];

export const commandsBySlug: Record<string, Command> = Object.fromEntries(
  commands.map((c) => [c.slug, c])
);

export function getCommand(slug: string): Command | undefined {
  return commandsBySlug[slug];
}

export function getCommandsBySection(section: string): Command[] {
  return commands.filter((c) => c.section === section);
}
