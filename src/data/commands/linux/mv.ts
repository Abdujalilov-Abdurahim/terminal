import type { Command } from "@/types/command";

export const mv: Command = {
  slug: "mv",
  name: "mv",
  section: "file-system",
  shortDescription: "Fayl yoki papkalarni ko'chirish yoki nomini o'zgartirish uchun ishlatiladi.",
  syntax: "mv [flag'lar] manba maqsad",
  options: [
    { flag: "-i", description: "Maqsad mavjud bo'lsa, tasdiqlash so'raydi." },
    { flag: "-v", description: "Har bir ko'chirish haqida xabar chiqaradi." }
  ],
  examples: [
    {
      command: "mv report.txt reports/",
      comment: "faylni boshqa papkaga ko'chirish",
      explanation: "reports/ ichiga file ko'chib o'tadi."
    },
    {
      command: "mv old_name.txt new_name.txt",
      comment: "fayl nomini o'zgartirish",
      explanation: "Faylni boshqa nom bilan qayta yaratib, eski nomdan olib tashlaydi."
    }
  ],
  commonMistakes: [
    {
      title: "Yo'lni noto'g'ri ko'rsatish",
      description: "Agar maqsad papkasi mavjud bo'lmasa yoki yozish huquqi bo'lmasa, buyruq bajarilmaydi."
    }
  ],
  realLifeUsage:
    "Loyihani strukturani tozalash yoki faylni qayta nomlashda mv ko'p ishlatiladi. Bu buyruq bir vaqtning o'zida ko'chirish va qayta nomlash vazifasini bajaradi.",
  relatedCommands: ["cp", "rm", "mkdir"]
};
