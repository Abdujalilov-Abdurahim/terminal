import type { Command } from "@/types/command";

export const ls: Command = {
  slug: "ls",
  name: "ls",
  section: "fundamentals",
  shortDescription: "Katalogdagi fayl va papkalarni ro'yxatlab beradi.",
  syntax: "ls [flag'lar] [yo'l]",
  options: [
    { flag: "-l", description: "Batafsil ko'rinishda fayllar va papkalarni ko'rsatish." },
    { flag: "-a", description: "Yashirin (.bashrc, .git) fayllarni ham ko'rsatish." },
    { flag: "-h", description: "Hajmni o'qilishi qulay formatda (K, M, G) ko'rsatish." },
    { flag: "-t", description: "Fayllarni oxirgi o'zgartirilish vaqtiga ko'ra saralash." },
    { flag: "-R", description: "Papka ichidagi barcha fayl va papkalarni rekursiv ko'rsatish." },
    { flag: "-S", description: "Fayllarni hajm bo'yicha kattadan kichigacha saralash." }
  ],
  examples: [
    {
      command: "ls",
      comment: "hozirgi katalogdagi asosiy fayl va papkalarni ko'rish",
      output: "Desktop Documents Downloads Projects README.md",
      explanation: "Bu buyruq oddiy ro'yxatni chiqaradi; faqat birinchi darajali narsalar ko'rinadi."
    },
    {
      command: "ls -la",
      comment: "yashirin fayllar bilan birga batafsil ro'yxatni ko'rish",
      output: "drwxr-xr-x 5 user user 4096 Dec 12 09:20 .\ndrwxr-xr-x 5 user user 4096 Dec 12 09:20 ..\n-rw-r--r-- 1 user user 1200 README.md",
      explanation: "-l batafsil ma'lumotni, -a yashirin fayllarni qaytaradi; shuning uchun loyiha konfiguratsiyasi va maxfiy fayllarni ham ko'rish mumkin."
    },
    {
      command: "ls -lh /var/log",
      comment: "log papkasidagi fayllar hajmini o'qilishi qulay ko'rinishda ko'rish",
      output: "total 12K\n-rw-r--r-- 1 root root 1.2K Dec 12 08:30 auth.log\n-rw-r--r-- 1 root root 2.3K Dec 12 08:31 nginx/access.log",
      explanation: "-h flag hajmni KB/MB tarzda odatdagidan qulayroq ko'rsatadi."
    },
    {
      command: "ls -R ./src",
      comment: "src ichidagi barcha papka va fayllarni rekursiv ko'rish",
      explanation: "Katta loyihalarda qaysi fayl qayerda ekanini tezda topishga yordam beradi."
    }
  ],
  commonMistakes: [
    {
      title: "ls -l ni ishlatmasdan oldin xatolikni ko'rib qolish",
      description:
        "Agar faylning ruxsatlari, egasi yoki o'zgartirish vaqti kerak bo'lsa, faqat oddiy ls ko'rsatmaydi. U holda -l yoki -a ishlating."
    },
    {
      title: "Yashirin fayllarni unutish",
      description:
        "Ko'pgina konfiguratsiya fayllari .prefix bilan boshlanadi. Ularni ko'rish uchun ls -a yoki ls -la ishlatish kerak."
    }
  ],
  realLifeUsage:
    "Kataloglarni tezda tekshirishda ls asosiy vosita hisoblanadi. Masalan, 'ls -lh /var/log/nginx' bilan log fayllarini ko'rsangiz, qaysi log katta bo'lgani va nimaga e'tibor berish kerakligini osongina aniqlaysiz.",
  relatedCommands: ["cd", "pwd", "find", "tree"]
};

