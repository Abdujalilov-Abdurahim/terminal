import type { Command } from "@/types/command";

export const cp: Command = {
  slug: "cp",
  name: "cp",
  section: "file-system",
  shortDescription: "Fayl yoki papkalarni nusxalash uchun ishlatiladi.",
  syntax: "cp [flag'lar] manba_nishon",
  options: [
    { flag: "-r", description: "Papkalarni rekursiv nusxalash." },
    { flag: "-v", description: "Har bir nusxa olish jarayoni haqida xabar chiqargan." },
    { flag: "-p", description: "Ruxsatlar va egasi hamda vaqtni saqlab qolish." }
  ],
  examples: [
    {
      command: "cp config.example.yml config.yml",
      comment: "sozlash faylini nusxalash",
      explanation: "Asl fayl saqlanib qoladi, uning nusxasi yaratiladi."
    },
    {
      command: "cp -r src dist",
      comment: "butun papka nusxasini yaratish",
      explanation: "-r flag papka ichidagi barcha fayllarni ham ko'chirishga yordam beradi."
    }
  ],
  commonMistakes: [
    {
      title: "Papkalarni nusxalashda -r ni unutish",
      description: "Agar manba papka bo'lsa, -r bo'lmasa buyruq ishlamaydi."
    }
  ],
  realLifeUsage:
    "Konfiguratsiya fayllarini zaxiralash yoki yangi loyihada template bo'lib ishlatishda cp juda foydali bo'ladi.",
  relatedCommands: ["mv", "rm", "cp -a"]
};
