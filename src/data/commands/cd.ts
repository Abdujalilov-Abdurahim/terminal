import type { Command } from "@/types/command";

export const cd: Command = {
  slug: "cd",
  name: "cd",
  section: "fundamentals",
  shortDescription: "Joriy ish katalogini o'zgartiradi.",
  syntax: "cd [yo'l]",
  options: [
    { flag: "..", description: "Bir darajali yuqoriga ko'tarilish." },
    { flag: "~", description: "Uy (home) katalogga o'tish." },
    { flag: "-", description: "Oldingi ish katalogiga qaytish." }
  ],
  examples: [
    {
      command: "cd ~/projects",
      comment: "Projects katalogiga o'tish",
      explanation: "~ belgisi foydalanuvchi uy katalogini bildiradi."
    },
    {
      command: "cd ..",
      comment: "bir pog'onali yuqoriga chiqish",
      explanation: "Bitta papka yuqoridagi katalogga o'tadi."
    },
    {
      command: "cd /var/log",
      comment: "maxsus yo'lga o'tish",
      output: "$ pwd\n/var/log",
      explanation: "Absoulute yo'l bilan kerakli katalogga tez o'tish mumkin."
    }
  ],
  commonMistakes: [
    {
      title: "Noto'g'ri yo'lni yozish",
      description: "Katalog nomi xato bo'lsa, shell 'No such file or directory' xatoligini chiqaradi. Yo'lni tekshirish uchun pwd va ls ishlating."
    },
    {
      title: "Tabni ishlatmaslik",
      description: "Ko'pincha katalog nomlarini yozishda xatolikka yo'l qo'yiladi. Tab bilan to'ldirish ko'proq tezlik va xavfsizlik beradi."
    }
  ],
  realLifeUsage:
    "Loyihani o'rganish yoki loglarni tekshirishda, dastlab katalogni to'g'ri joyga o'tkazish kerak. Bir marta 'cd /var/log/nginx' qilib hammasi yanada oson bo'ladi.",
  relatedCommands: ["pwd", "ls", "mkdir"]
};
