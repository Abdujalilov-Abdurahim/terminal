export const SITE = {
  name: "terminal.uz",
  tagline: "Linux va Cybersecurity o'zbek tilida",
  description:
    "O'zbek tilidagi birinchi professional Linux va Cybersecurity Knowledge Base.",
  url: "https://terminal.uz",
  telegram: "https://t.me/terminal_uz",
  github: "https://github.com/terminal-uz"
} as const;

export const ROUTES = {
  home: "/",
  linux: "/linux",
  linuxSection: (section: string) => `/linux/${section}`,
  command: (slug: string) => `/linux/command/${slug}`,
  cybersecurity: "/cybersecurity",
  resources: "/resources",
  cheatSheets: "/resources/cheat-sheets"
} as const;
