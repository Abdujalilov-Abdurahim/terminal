export interface PathStep {
  number: number;
  title: string;
  description: string;
  linkTo: string;
}

export const learningPath: PathStep[] = [
  {
    number: 1,
    title: "Terminal asoslari",
    description: "Fayl tizimi, navigatsiya, asosiy buyruqlar.",
    linkTo: "/linux/fundamentals"
  },
  {
    number: 2,
    title: "Ruxsatlar va foydalanuvchilar",
    description: "chmod, chown, sudo — kim nimaga ruxsatga ega.",
    linkTo: "/linux/permissions"
  },
  {
    number: 3,
    title: "Tarmoq asoslari",
    description: "IP manzillar, portlar, ssh, curl.",
    linkTo: "/linux/networking"
  },
  {
    number: 4,
    title: "Xavfsizlik asboblari",
    description: "nmap, wireshark bilan tarmoqni o'rganish.",
    linkTo: "/cybersecurity"
  }
];
