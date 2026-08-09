import type { NavItem } from "@/types/navigation";
import { Terminal, Shield, BookOpen } from "lucide-react";

export const sidebarNav: NavItem[] = [
  {
    label: "Linux",
    path: "/linux",
    icon: Terminal,
    children: [
      { label: "Fundamentals", path: "/linux/fundamentals" },
      { label: "File System", path: "/linux/file-system" },
      { label: "Permissions", path: "/linux/permissions" },
      { label: "Processes", path: "/linux/processes" },
      { label: "Networking", path: "/linux/networking" },
      { label: "Package Manager", path: "/linux/package-manager" },
      { label: "Shell Script", path: "/linux/shell-script" },
      { label: "Bash", path: "/linux/bash" },
      { label: "System Administration", path: "/linux/system-administration" },
      { label: "Security", path: "/linux/security" },
      { label: "Cheat Sheets", path: "/linux/cheat-sheets" }
    ]
  },
  {
    label: "Cybersecurity",
    path: "/cybersecurity",
    icon: Shield
  },
  {
    label: "Resources",
    path: "/resources",
    icon: BookOpen
  }
];
