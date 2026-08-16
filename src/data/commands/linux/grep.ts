import type { Command } from "@/types/command";

export const grep: Command = {
  slug: "grep",
  name: "grep",
  section: "shell-script",
  shortDescription: "Berilgan matnni fayllar ichidan qidirib topadi.",
  syntax: 'grep [flag\'lar] "qidiriladigan_matn" [fayl]',
  options: [
    { flag: "-r", description: "Papka ichidagi barcha fayllardan rekursiv qidirish." },
    { flag: "-i", description: "Katta-kichik harflarga e'tibor bermasdan qidirish." },
    { flag: "-n", description: "Topilgan qatorning raqamini ham ko'rsatish." },
    { flag: "-v", description: "Berilgan naqsh mos KELMAGAN qatorlarni ko'rsatish." },
    { flag: "-c", description: "Faqat mos qatorlar sonini ko'rsatish." },
    { flag: "-E", description: "Kengaytirilgan regex (extended regex) ishlatish." }
  ],
  examples: [
    {
      command: 'grep -rn "TODO" ./src',
      comment: "loyihadagi barcha TODO izohlarini topish",
      output: "src/App.tsx:12:  // TODO: error boundary qo'shish",
      explanation: "-n flag qaysi qatorda topilganini ko'rsatadi, bu tez navigatsiya qilishga yordam beradi."
    },
    {
      command: 'grep -i "error" server.log',
      comment: "log faylidan xatoliklarni katta-kichik harfsiz qidirish",
      explanation: "'Error', 'ERROR', 'error' — barchasi topiladi."
    },
    {
      command: 'grep -c "404" access.log',
      comment: "nechta 404 xatolik yuz berganini sanash",
      output: "37"
    },
    {
      command: 'ps aux | grep nginx',
      comment: "nginx jarayonini boshqa buyruq natijasidan qidirish",
      explanation: "grep pipe (|) orqali boshqa buyruqlar natijasini filtrlash uchun ham juda tez-tez ishlatiladi."
    }
  ],
  commonMistakes: [
    {
      title: "Katta fayllarda -r ni butun / papkasida ishlatish",
      description:
        "grep -r / kabi buyruq butun tizimni skanerlab, juda uzoq vaqt oladi. Qidiruv doirasini toraytiring."
    },
    {
      title: "Maxsus belgilarni qochirmaslik",
      description:
        "Agar qidirilayotgan matnda $ yoki * kabi belgilar bo'lsa, ularni tirnoq ichiga olish yoki escape qilish kerak, aks holda shell ularni boshqacha talqin qiladi."
    }
  ],
  realLifeUsage:
    "Production'da xatolik yuz berganda, birinchi qadam odatda log fayllarni tekshirish bo'ladi. 'grep -in \"error\" /var/log/app.log' orqali soniyalar ichida muammoli qatorlarni topish mumkin — bu log fayllarni qo'lda o'qishdan ancha tezroq.",
  relatedCommands: ["sed", "awk", "cat"]
};
