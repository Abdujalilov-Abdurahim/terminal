import type { LinuxSection } from "@/types/command";

export const linuxSections: LinuxSection[] = [
  {
    slug: "fundamentals",
    title: "Fundamentals",
    description: "Terminalning eng asosiy tushunchalari va birinchi buyruqlar.",
    commandSlugs: ["ls", "cd", "pwd", "cat"]
  },
  {
    slug: "file-system",
    title: "File System",
    description: "Fayl va papkalarni yaratish, ko'chirish, o'chirish.",
    commandSlugs: ["mkdir", "cp", "mv", "rm"]
  },
  {
    slug: "permissions",
    title: "Permissions",
    description: "Fayl va papkalarga ruxsatlarni boshqarish.",
    commandSlugs: ["chmod", "chown", "umask"]
  },
  {
    slug: "processes",
    title: "Processes",
    description: "Tizimda ishlayotgan jarayonlarni kuzatish va boshqarish.",
    commandSlugs: ["ps", "top", "htop", "kill"]
  },
  {
    slug: "networking",
    title: "Networking",
    description: "Tarmoq bilan bog'liq diagnostika va so'rov buyruqlari.",
    commandSlugs: ["ping", "ip", "curl", "wget", "ss", "netstat"]
  },
  {
    slug: "package-manager",
    title: "Package Manager",
    description: "Dasturiy ta'minotni o'rnatish va yangilash.",
    commandSlugs: ["apt", "yum", "pacman"]
  },
  {
    slug: "shell-script",
    title: "Shell Script",
    description: "Buyruqlarni avtomatlashtirish uchun skriptlar yozish.",
    commandSlugs: ["grep", "sed", "awk"]
  },
  {
    slug: "bash",
    title: "Bash",
    description: "Bash muhiti, o'zgaruvchilar va konfiguratsiya fayllari.",
    commandSlugs: ["export", "alias", "source"]
  },
  {
    slug: "system-administration",
    title: "System Administration",
    description: "Server va xizmatlarni boshqarish.",
    commandSlugs: ["systemctl", "journalctl", "crontab"]
  },
  {
    slug: "security",
    title: "Security",
    description: "Xavfsizlik bilan bog'liq Linux buyruqlari.",
    commandSlugs: ["ssh", "gpg", "fail2ban"]
  },
  {
    slug: "cheat-sheets",
    title: "Cheat Sheets",
    description: "Tez ma'lumot uchun qisqa jadvallar.",
    commandSlugs: []
  }
];
