# terminal.uz

O'zbek tilidagi Linux va Cybersecurity Knowledge Base.

## Texnologiyalar

React 19 · Vite · TypeScript · Tailwind CSS · React Router DOM ·
Framer Motion · Lucide React · React Helmet Async

## Ishga tushirish

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint / Format

```bash
npm run lint
npm run format
```

## Loyiha strukturasi

```
src/
├── main.tsx / App.tsx
├── routes/AppRoutes.tsx        # Barcha route'lar (lazy-loaded)
├── layouts/MainLayout.tsx      # Navbar + Sidebar + Footer
├── components/
│   ├── ui/                     # Button, Card, Badge, Input
│   ├── navbar/  sidebar/  footer/
│   ├── search/                 # Realtime global qidiruv
│   ├── terminal/                # Hero terminal animatsiyasi
│   ├── cards/                  # CategoryCard, CommandCard, ResourceCard...
│   ├── markdown/                # Kelajakdagi .md kontent uchun
│   └── common/                 # CodeBlock, Breadcrumb, CommandNav...
├── pages/
│   ├── Home/
│   ├── Linux/                  # Overview, Section, Command (+ ichki komponentlar)
│   ├── Cybersecurity/
│   ├── Resources/
│   └── NotFound/
├── data/                       # Barcha kontent shu yerda (hardcoded emas)
│   └── commands/                # Har bir buyruq — alohida fayl
├── hooks/  context/  services/  types/  constants/  utils/  styles/
```

## Yangi buyruq qo'shish

1. `src/data/commands/` papkasida yangi fayl yarating (masalan `nmap.ts`)
2. `Command` interfeysiga mos obyekt eksport qiling
3. `src/data/commands/index.ts` dagi `commands` massiviga qo'shing
4. Tegishli bo'limga (`src/data/linuxSections.ts`) slug'ni kiriting

Component yoki route kodiga tegish shart emas — sahifa avtomatik generatsiya bo'ladi.

## Keyingi qadamlar (production uchun)

- Kontentni CMS/Markdown fayllarga ko'chirish (minglab maqola uchun)
- `services/` orqali API integratsiyasi
- Sitemap avtomatik generatsiyasi (build vaqtida)
- E2E testlar (Playwright)
