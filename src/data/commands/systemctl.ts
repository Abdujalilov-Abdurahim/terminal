import type { Command } from "@/types/command";

export const systemctl: Command = {
  slug: "systemctl",
  name: "systemctl",
  section: "system-administration",
  shortDescription: "Tizim xizmatlarini (service) boshqarish va holatini tekshirish.",
  syntax: "systemctl [buyruq] [xizmat_nomi]",
  options: [
    { flag: "status", description: "Xizmatning hozirgi holatini ko'rsatish." },
    { flag: "start / stop", description: "Xizmatni ishga tushirish yoki to'xtatish." },
    { flag: "restart", description: "Xizmatni to'xtatib, qayta ishga tushirish." },
    { flag: "enable", description: "Xizmatni tizim yuklanganda avtomatik ishga tushiradigan qilish." },
    { flag: "--now", description: "enable/disable bilan birga darhol qo'llash." }
  ],
  examples: [
    {
      command: "systemctl status nginx",
      comment: "nginx xizmati ishlayotganini tekshirish",
      output: "● nginx.service - A high performance web server\n   Active: active (running)",
      explanation: "'active (running)' — xizmat hozir ishlayapti degani."
    },
    {
      command: "sudo systemctl restart docker",
      comment: "docker xizmatini qayta ishga tushirish",
      explanation: "Konfiguratsiya o'zgarganda, xizmatni qayta ishga tushirish o'zgarishlarni qo'llaydi."
    },
    {
      command: "sudo systemctl enable --now ssh",
      comment: "ssh xizmatini yoqish va tizim bilan avtomatik ishga tushirish",
      explanation: "--now flag bo'lmasa, xizmat faqat keyingi reboot'dan keyin avtomatik ishga tushadi."
    },
    {
      command: "systemctl list-units --type=service",
      comment: "barcha ishlayotgan xizmatlar ro'yxatini ko'rish"
    }
  ],
  commonMistakes: [
    {
      title: "sudo'siz ishga tushirish/to'xtatishga urinish",
      description:
        "start, stop, restart, enable kabi buyruqlar odatda root huquqi talab qiladi. sudo qo'shmasangiz, 'Permission denied' xatoligini olasiz."
    },
    {
      title: "restart o'rniga reload kerak bo'lganda",
      description:
        "Ba'zi xizmatlar (masalan, nginx) konfiguratsiya o'zgarishini restart qilmasdan ham qabul qiladi — 'systemctl reload nginx' qisqa vaqtga uzilishsiz yangilaydi."
    }
  ],
  realLifeUsage:
    "Server administratori sifatida, deploy jarayonidan so'ng odatda 'systemctl restart' orqali yangi kodni ishga tushirasiz, so'ng 'systemctl status' bilan xizmat muvaffaqiyatli ishga tushganini tasdiqlaysiz — bu ikkitasi CI/CD pipeline'larda eng ko'p ishlatiladigan kombinatsiya.",
  relatedCommands: ["journalctl", "crontab", "ssh"]
};
