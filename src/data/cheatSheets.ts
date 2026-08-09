import type { CheatSheet } from "@/types/resource";

export const cheatSheets: CheatSheet[] = [
  { slug: "linux", title: "Linux", description: "Eng ko'p ishlatiladigan Linux buyruqlari.", itemCount: 60 },
  { slug: "git", title: "Git", description: "Git bilan versiyalarni boshqarish buyruqlari.", itemCount: 40 },
  { slug: "docker", title: "Docker", description: "Konteynerlarni boshqarish uchun asosiy buyruqlar.", itemCount: 35 },
  { slug: "ssh", title: "SSH", description: "Masofadagi serverlarga ulanish va konfiguratsiya.", itemCount: 20 },
  { slug: "nmap", title: "Nmap", description: "Tarmoq skanerlash uchun eng foydali flag'lar.", itemCount: 25 },
  { slug: "wireshark", title: "Wireshark", description: "Paketlarni tahlil qilish bo'yicha qisqa qo'llanma.", itemCount: 18 },
  { slug: "bash", title: "Bash", description: "Bash skript yozish uchun sintaksis va misollar.", itemCount: 30 },
  { slug: "systemctl", title: "Systemctl", description: "Xizmatlarni boshqarish buyruqlari.", itemCount: 15 }
];
