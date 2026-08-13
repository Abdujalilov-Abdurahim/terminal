import type { Command } from "@/types/command";

export const mkdir: Command = {
  slug: "mkdir",
  name: "mkdir",
  section: "file-system",
  shortDescription: "Yangi papka (directory) yaratadi.",
  syntax: "mkdir [flag'lar] [papka_nomi]",
  options: [
    { flag: "-p", description: "Agar papkalar mavjud bo'lmasa, ularni avtomatik yaratadi." },
    { flag: "-v", description: "Yaratilgan papka haqida xabar chiqaradi." }
  ],
  examples: [
    {
      command: "mkdir projects",
      comment: "yangi papka yaratish",
      explanation: "Project nomli papka hozirgi katalogda yaratiladi."
    },
    {
      command: "mkdir -p app/src/components",
      comment: "nested papkalarni bir vaqtda yaratish",
      explanation: "-p flag ketma-ket papkalar mavjud bo'lmasa ham yaratadi."
    }
  ],
  commonMistakes: [
    {
      title: "Papka mavjud bo'lganda qayta yaratishga urinish",
      description: "Agar papka allaqachon mavjud bo'lsa, mkdir xato beradi. -p bilan tekshirilgan qilish yaxshiroq."
    }
  ],
  realLifeUsage:
    "Yangi loyiha yoki deploy bo'limi yaratishda mkdir birinchi qadam bo'ladi. Ko'pincha -p bilan birgalikda ishlatiladi, chunki papka tuzilmasi bir necha darajali bo'ladi.",
  relatedCommands: ["cd", "ls", "rm"]
};
