import type { CyberTopic } from "@/types/resource";

export const cyberTopics: CyberTopic[] = [
  {
    slug: "networking",
    title: "Networking",
    description: "TCP/IP, portlar, protokollar — xavfsizlikning tarmoq asoslari.",
    tags: ["TCP/IP", "DNS", "Firewall"]
  },
  {
    slug: "web-security",
    title: "Web Security",
    description: "OWASP Top 10, XSS, SQL Injection va veb-ilovalar xavfsizligi.",
    tags: ["OWASP", "XSS", "SQLi"]
  },
  {
    slug: "cryptography",
    title: "Cryptography",
    description: "Shifrlash algoritmlari, hash funksiyalar va kalitlarni boshqarish.",
    tags: ["AES", "RSA", "Hashing"]
  },
  {
    slug: "osint",
    title: "OSINT",
    description: "Ochiq manbalardan razvedka ma'lumotlarini yig'ish usullari.",
    tags: ["Recon", "Footprinting"]
  },
  {
    slug: "blue-team",
    title: "Blue Team",
    description: "Himoya strategiyalari, monitoring va hodisalarga javob berish.",
    tags: ["SIEM", "Monitoring"]
  },
  {
    slug: "red-team",
    title: "Red Team",
    description: "Hujum simulyatsiyasi va penetration testing metodologiyasi.",
    tags: ["Pentest", "Exploitation"]
  },
  {
    slug: "digital-forensics",
    title: "Digital Forensics",
    description: "Raqamli dalillarni yig'ish va hodisalarni tahlil qilish.",
    tags: ["Forensics", "Incident Response"]
  },
  {
    slug: "soc",
    title: "SOC",
    description: "Security Operations Center — kundalik monitoring va javob jarayoni.",
    tags: ["SOC", "Alerts"]
  },
  {
    slug: "tools",
    title: "Tools",
    description: "nmap, wireshark, metasploit va boshqa asosiy xavfsizlik toollari.",
    tags: ["nmap", "wireshark", "metasploit"]
  }
];
