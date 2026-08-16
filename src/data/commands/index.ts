import type { Command } from "@/types/command";
import { commands as linuxCommands, commandsBySlug as linuxCommandsBySlug } from "./linux";

/**
 * Yangi buyruq qo'shish uchun:
 * 1. Bo'limga mos papka oching (linux, cybersecurity)
 * 2. Command interfeysiga mos obyekt eksport qiling
 * 3. Quyidagi ro'yxatga qo'shing
 */
export const commands: Command[] = [...linuxCommands];

export const commandsBySlug: Record<string, Command> = {
  ...linuxCommandsBySlug
};

export function getCommand(slug: string): Command | undefined {
  return commandsBySlug[slug];
}

export function getCommandsBySection(section: string): Command[] {
  return commands.filter((c) => c.section === section);
}
