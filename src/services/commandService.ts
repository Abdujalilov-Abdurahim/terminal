/**
 * Hozircha barcha kontent src/data/ papkasida statik saqlanadi.
 * Loyiha kattalashganda (minglab buyruq/maqola), bu servis CMS yoki
 * backend API'dan ma'lumot olish uchun almashtiriladi — component va
 * page kodiga tegmasdan.
 *
 * Masalan: fetchCommand(slug) -> GET /api/commands/:slug
 */

import { getCommand as getStaticCommand } from "@/data/commands";
import type { Command } from "@/types/command";

export async function fetchCommand(slug: string): Promise<Command | undefined> {
  // Hozircha statik data'dan o'qiydi. Kelajakda fetch() chaqiruviga almashtiriladi.
  return Promise.resolve(getStaticCommand(slug));
}
