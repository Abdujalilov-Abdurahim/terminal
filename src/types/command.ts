export interface CommandOption {
  flag: string;
  description: string;
}

export interface CommandExample {
  command: string;
  comment: string;
  output?: string;
  explanation?: string;
}

export interface CommandMistake {
  title: string;
  description: string;
}

export interface Command {
  slug: string;
  name: string;
  section: LinuxSectionSlug;
  shortDescription: string;
  syntax: string;
  options: CommandOption[];
  examples: CommandExample[];
  commonMistakes: CommandMistake[];
  realLifeUsage: string;
  relatedCommands: string[];
}

export type LinuxSectionSlug =
  | "fundamentals"
  | "file-system"
  | "permissions"
  | "processes"
  | "networking"
  | "package-manager"
  | "shell-script"
  | "bash"
  | "system-administration"
  | "security"
  | "cheat-sheets";

export interface LinuxSection {
  slug: LinuxSectionSlug;
  title: string;
  description: string;
  commandSlugs: string[];
}
