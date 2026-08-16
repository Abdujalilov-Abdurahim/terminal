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

export const commands: Command[] = [ls, cd, pwd, cat, mkdir, cp, mv, rm, find, chmod, grep, ps, top, systemctl];

export const commandsBySlug: Record<string, Command> = Object.fromEntries(
  commands.map((c) => [c.slug, c])
);
