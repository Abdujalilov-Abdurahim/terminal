import type { LucideIcon } from "lucide-react";

export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: LucideIcon;
  children?: NavChild[];
}
