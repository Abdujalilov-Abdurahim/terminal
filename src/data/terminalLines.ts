export interface TerminalLine {
  prompt: string;
  command: string;
  comment: string;
}

export const terminalLines: TerminalLine[] = [
  { prompt: "user@terminal:~$", command: "man chmod", comment: "# ruxsatlarni boshqarish haqida qo'llanma" },
  { prompt: "user@terminal:~$", command: "nmap -sV 192.168.1.1", comment: "# tarmoqdagi ochiq portlarni topish" },
  { prompt: "user@terminal:~$", command: 'grep -r "parol" ./logs', comment: "# log fayllar ichidan qidirish" },
  { prompt: "user@terminal:~$", command: "sudo systemctl restart nginx", comment: "# serverni qayta ishga tushirish" },
  { prompt: "user@terminal:~$", command: "ssh admin@server.uz", comment: "# masofadagi serverga ulanish" }
];
