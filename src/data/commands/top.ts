import type { Command } from "@/types/command";

export const top: Command = {
  slug: "top",
  name: "top",
  section: "processes",
  shortDescription: "Jarayonlar va resurslardan foydalanishni interaktiv ko'rsatadi.",
  syntax: "top",
  options: [
    { flag: "-d", description: "Yangilanish oralig'ini sekundlarda sozlash." },
    { flag: "-p", description: "Faqat ma'lum PID bilan ishlash." },
    { flag: "-H", description: "Threadlarni ko'rsatish." }
  ],
  examples: [
    {
      command: "top",
      comment: "resurslar va jarayonlar monitorini ko'rish",
      explanation: "Bu buyruq interaktiv rejimda jarayonlarni real time ko'rsatadi."
    },
    {
      command: "top -d 2",
      comment: "har 2 soniyada yangilanish",
      explanation: "Monitoringni qanchalik tez yangilanishini tanlash mumkin."
    }
  ],
  commonMistakes: [
    {
      title: "Juda ko'p jarayonni nazorat qilish",
      description: "top to'liq tizimni ko'rsatadi, shuning uchun uzaytirilgan monitorlar uchun htop yoki ps bilan birgalikda foydalanish qulayroq."
    }
  ],
  realLifeUsage:
    "Server yoki ishlab chiqarish muhitida CPU va RAM shikastlanganligini tez aniqlash uchun top juda foydali. Bu buyruq orqali qaysi jarayon ko'p resurs ishlatmoqda aniqlanadi.",
  relatedCommands: ["ps", "htop", "kill"]
};
