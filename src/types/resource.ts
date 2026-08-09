export type ResourceCategory =
  | "Documentation"
  | "Learning Platforms"
  | "Practice Labs"
  | "Books"
  | "Useful Websites"
  | "Cheat Sheets"
  | "Tools"
  | "Official Documentation";

export interface Resource {
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
}

export interface CyberTopic {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

export interface CheatSheet {
  slug: string;
  title: string;
  description: string;
  itemCount: number;
}
