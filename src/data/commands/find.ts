import type { Command } from "@/types/command";

export const find: Command = {
  slug: "find",
  name: "find",
  section: "file-system",
  shortDescription: "Fayllar va papkalarni shartlar bo'yicha qidiradi.",
  syntax: "find [yo'l] [shart]",
  options: [
    { flag: "-name", description: "Fayl yoki papka nomi bo'yicha qidirish." },
    { flag: "-type f", description: "Faqat fayllarni topish." },
    { flag: "-type d", description: "Faqat papkalarni topish." },
    { flag: "-mtime", description: "Oxirgi o'zgartirish vaqti bo'yicha filterlash." }
  ],
  examples: [
    {
      command: 'find . -name "*.log"',
      comment: "hozirgi katalog ichidan log fayllarni qidirish",
      explanation: "Barcha log fayllari ro'yxati chiqariladi."
    },
    {
      command: 'find /var/www -type f -name "*.php"',
      comment: "web papka ichidagi PHP fayllarni topish",
      explanation: "Faqat fayllarni ko'rsatadi, papkalarni chiqarib yuboradi."
    },
    {
      command: "find ~ -mtime -7",
      comment: "so'nggi 7 kun ichida o'zgartirilgan fayllarni topish",
      explanation: "Bu holatda eski fayllarni tezda kuzatib borish mumkin."
    }
  ],
  commonMistakes: [
    {
      title: "Qidiruvni juda keng qilish",
      description: "find / kabi buyruq butun tizimni qidira boshlaydi. Bu hamma joyda yaxshi emas. Tor doira tanlang."
    },
    {
      title: "G'ayrioddiy shell qoidalarini unutish",
      description: "Agar nomlarni qavslar ichida yozmasangiz, shell ularni noto'g'ri interpretsatsiya qilishi mumkin. Qavslar va tirnoqlarga e'tibor bering."
    }
  ],
  realLifeUsage:
    "Loyihada kerakli faylni tez topish, loglarni ajratish yoki eski fayllarni aniqlash uchun find juda qulay. Bu buyruq ko'pincha grep va ls bilan kombinatsiyada ishlatiladi.",
  relatedCommands: ["ls", "grep", "locate"]
};
