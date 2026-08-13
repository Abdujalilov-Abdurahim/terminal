import type { Command } from "@/types/command";

export const ps: Command = {
  slug: "ps",
  name: "ps",
  section: "processes",
  shortDescription: "Hozirgi jarayonlar ro'yxatini ko'rsatadi.",
  syntax: "ps [flag'lar]",
  options: [
    { flag: "-aux", description: "Barcha jarayonlarni batafsil ko'rsatadi." },
    { flag: "-ef", description: "Butun jarayonlar jadvalini ko'rsatadi." },
    { flag: "-f --forest", description: "Jarayonlar daraxti ko'rinishida ko'rsatiladi." }
  ],
  examples: [
    {
      command: "ps aux",
      comment: "barcha ishlayotgan jarayonlarni ko'rish",
      output: "USER PID %CPU %MEM COMMAND\nroot 1 0.0 0.1 /sbin/init",
      explanation: "Bu buyruq jarayonlar haqida keng ma'lumot beradi: PID, foydalanuvchi, komanda va boshqalar."
    },
    {
      command: "ps -ef | grep nginx",
      comment: "nginx jarayonini topish",
      explanation: "ps natijasini grep bilan birlashtirib kerakli jarayonni topish mumkin."
    }
  ],
  commonMistakes: [
    {
      title: "Faqat ps ni ishlatib xulosa chiqarish",
      description: "Jarayonlar ko'p bo'ldi. Ko'pincha ps natijasini grep yoki top bilan birlashtirish kerak."
    }
  ],
  realLifeUsage:
    "Serverda nimani nima ishlayotganini bilish uchun ps eng birinchi tekshiruv buyruqlaridan biridir. U orqali port yoki xizmatga bog'liq jarayonlarni tez aniqlash mumkin.",
  relatedCommands: ["top", "kill", "grep"]
};
