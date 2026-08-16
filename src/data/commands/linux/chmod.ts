import type { Command } from "@/types/command";

export const chmod: Command = {
  slug: "chmod",
  name: "chmod",
  section: "permissions",
  shortDescription:
    "Fayl yoki papkaning o'qish, yozish va ishga tushirish ruxsatlarini o'zgartiradi.",
  syntax: "chmod [ruxsat] [fayl_nomi]",
  options: [
    { flag: "-R", description: "Papka ichidagi barcha fayl va papkalarga rekursiv qo'llash." },
    { flag: "-v", description: "Har bir o'zgartirilgan fayl haqida xabar chiqarish." },
    { flag: "--reference=FILE", description: "Boshqa faylning ruxsatlarini nusxalash." }
  ],
  examples: [
    {
      command: "chmod 755 script.sh",
      comment: "egasi — hammasi, boshqalar — o'qish va ishga tushirish",
      output: "$ ls -l script.sh\n-rwxr-xr-x 1 user user 220 script.sh",
      explanation:
        "7 (rwx) — egasi hamma narsani qila oladi, 5 (r-x) — guruh va boshqalar faqat o'qishi va ishga tushirishi mumkin."
    },
    {
      command: "chmod +x deploy.sh",
      comment: "faylni ishga tushiriladigan qilish",
      explanation: "Mavjud ruxsatlarga qo'shimcha ravishda ishga tushirish huquqini qo'shadi."
    },
    {
      command: "chmod -R 644 ./public",
      comment: "papka ichidagi barcha fayllarni faqat o'qish/yozish qilish",
      explanation: "-R flag papka ichidagi barcha fayllarga rekursiv tarzda qo'llaydi."
    },
    {
      command: "chmod u+w,g-w file.txt",
      comment: "egasiga yozish huquqini berish, guruhdan olib tashlash",
      explanation: "Harfli format aniq bitta ruxsatni o'zgartirish uchun qulay."
    }
  ],
  commonMistakes: [
    {
      title: "chmod 777 ishlatish",
      description:
        "Barcha foydalanuvchilarga to'liq ruxsat berish — production serverlarda katta xavfsizlik xatari. Faqat kerakli minimal ruxsatni bering."
    },
    {
      title: "-R ni papka o'rniga faylga qo'llash",
      description:
        "-R faqat papkalar uchun ma'noga ega; oddiy faylga qo'llash hech narsani o'zgartirmaydi va chalkashlik keltirib chiqaradi."
    }
  ],
  realLifeUsage:
    "Serverga deploy skriptini yuklaganingizda, u avtomatik ishga tushmaydi — chunki yangi fayl odatda ishga tushirish huquqisiz keladi. 'chmod +x deploy.sh' shu muammoni hal qiladi va skript to'g'ridan-to'g'ri './deploy.sh' orqali ishga tushadi.",
  relatedCommands: ["chown", "umask", "ls"]
};
