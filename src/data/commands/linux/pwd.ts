import type { Command } from "@/types/command";

export const pwd: Command = {
  slug: "pwd",
  name: "pwd",
  section: "fundamentals",
  shortDescription: "Joriy ishlayotgan katalogni ko'rsatadi.",
  syntax: "pwd",
  options: [
    { flag: "-P", description: "Siyosiy (physical) yo'lni ko'rsatadi, simbolik bog'lanishlarni hisoblamaydi." },
    { flag: "-L", description: "Logik yo'lni ko'rsatadi (standart holat)." }
  ],
  examples: [
    {
      command: "pwd",
      comment: "hozirgi katalogni aniqlash",
      output: "/home/user/projects/terminal-uz",
      explanation: "Bu buyruq siz qaysi katalogda ekanligingizni aniq ko'rsatadi."
    },
    {
      command: "cd ~/ && pwd",
      comment: "uy katalogga o'tib, uni tasdiqlash",
      output: "/home/user"
    }
  ],
  commonMistakes: [
    {
      title: "Boshqa foydalanuvchining katalogini o'ylash",
      description: "Har bir foydalanuvchi uchun home katalog turlicha bo'ladi. pwd yordamida o'zingizdagi joy aniq aniqlanadi."
    }
  ],
  realLifeUsage:
    "Dastur yoki skriptning hozirgi joyini tekshirishda pwd yordam beradigan eng asosiy buyruqlardan biridir. Bu, ayniqsa deploy yoki backup jarayonlarida muhimdir.",
  relatedCommands: ["cd", "ls", "echo"]
};
