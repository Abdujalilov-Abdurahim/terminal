import type { Command } from "@/types/command";

export const rm: Command = {
  slug: "rm",
  name: "rm",
  section: "file-system",
  shortDescription: "Fayl yoki papkalarni o'chirish uchun ishlatiladi.",
  syntax: "rm [flag'lar] [fayl_yo'li]",
  options: [
    { flag: "-r", description: "Papkalarni rekursiv o'chirish." },
    { flag: "-f", description: "Tasdiqlashsiz o'chirish, ogohlantirishlarni qoldirmaslik." },
    { flag: "-i", description: "Har bir o'chirishdan oldin tasdiqlash so'raladi." }
  ],
  examples: [
    {
      command: "rm file.txt",
      comment: "yagona faylni o'chirish",
      explanation: "Bu buyruq faylni butunlay olib tashlaydi, shuning uchun ehtiyotkorlik kerak."
    },
    {
      command: "rm -r build",
      comment: "papka va uning ichidagi hamma narsani o'chirish",
      explanation: "-r flag papkaning ichidagi barcha fayllar ham o'chirilishini ta'minlaydi."
    },
    {
      command: "rm -rf /tmp/cache",
      comment: "ogohlantirishsiz va rekursiv tarzda tozalash",
      explanation: "Iltimos, -rf bilan xavfsiz bo'lmagan o'chirishlardan qoching, chunki qaytarib bo'lmaydi."
    }
  ],
  commonMistakes: [
    {
      title: "rm -rf * bo'lib ishlatish",
      description: "Bu ishlatish juda xavfli bo'lishi mumkin. Katta loyihada xatolik yuz bersa, kerakli fayllar ham o'chib ketishi mumkin."
    },
    {
      title: "Papkalarni taqdimotdan oldin tekshirmaslik",
      description: "Maqsadli papka yoki faylni nomini noto'g'ri yozib, biror muhim narsani o'chirib yuborishingiz mumkin. ls va pwd bilan tekshiring."
    }
  ],
  realLifeUsage:
    "Proyektda eski build fayllari, cache papkalari yoki vaqtincha foydalanilgan temp fayllarni tozalashda rm ko'p ishlatiladi. Ammo kuchli buyruq bo'lgani sababli ehtiyot bilan ishlash kerak.",
  relatedCommands: ["mv", "cp", "find"]
};
