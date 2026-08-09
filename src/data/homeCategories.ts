import type { LucideIcon } from "lucide-react";
import { Terminal, Shield, BookMarked } from "lucide-react";

export interface HomeCategory {
  path: string;
  title: string;
  description: string;
  icon: LucideIcon;
  linkTo: string;
}

export const homeCategories: HomeCategory[] = [
  {
    path: "~/linux/asoslar",
    title: "Linux buyruqlari",
    description:
      "Fayl boshqaruvi, ruxsatlar, jarayonlar, tarmoq va paket menejerlari.",
    icon: Terminal,
    linkTo: "/linux"
  },
  {
    path: "~/cyber/toollar",
    title: "Cybersecurity",
    description: "Network, web security, red team va blue team asoslari.",
    icon: Shield,
    linkTo: "/cybersecurity"
  },
  {
    path: "~/resurslar/qollanma",
    title: "Resources",
    description: "Kitoblar, platformalar, toollar va cheat sheet'lar.",
    icon: BookMarked,
    linkTo: "/resources"
  }
];
