import type { Command } from "@/types/command";

export const cat: Command = {
  slug: "cat",
  name: "cat",
  section: "fundamentals",
  shortDescription: "Faylni konsolga oqim sifatida chiqaradi.",
  syntax: "cat [flag'lar] [fayl]",
  options: [
    { flag: "-n", description: "Qator raqamlarini ko'rsatadi." },
    { flag: "-b", description: "Bo'sh qatorlarni hisobga olmasdan raqamlaydi." },
    { flag: "-E", description: "Qator oxiridagi $ belgilarini ko'rsatadi." }
  ],
  examples: [
    {
      command: "cat README.md",
      comment: "faylni ekraniga chiqarish",
      explanation: "Bu buyruq fayl ichidagi matnni to'g'ridan-to'g'ri terminalga chiqaradi."
    },
    {
      command: "cat -n .bashrc",
      comment: "konfiguratsiya faylini qator raqamlari bilan ko'rish",
      output: "1  export PATH=...",
      explanation: "-n flag qatorlarni tartib bilan ko'rsatadi va debuggingda qulay."
    },
    {
      command: "cat file1.txt file2.txt",
      comment: "bir nechta fayllarni ketma-ket chiqarish",
      explanation: "Fayllar ketma-ket birlashtirilgan holda ekranga chiqadi."
    }
  ],
  commonMistakes: [
    {
      title: "Katta fayllarni to'liq chiqarish",
      description: "cat bilan katta log fayllarini ko'rish qiyin bo'lishi mumkin. Bunday hollarda less yoki tail ishlatish qulayroq."
    },
    {
      title: "Qatorlarni o'zgartirish uchun ishlatilmaslik",
      description: "cat faylni o'qiymaydi, faqat ko'rsatadi. Faylni tahrirlash uchun vim, nano yoki sed ishlatish kerak."
    }
  ],
  realLifeUsage:
    "Konfiguratsiya fayllarini tezkor tekshirishda cat juda foydali bo'ladi. Masalan, .env yoki nginx konfiguratsiyasini ko'zdan kechirishda eng birinchi qadam shundan iborat.",
  relatedCommands: ["less", "tail", "sed"]
};
