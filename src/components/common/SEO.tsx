/**
 * React 19'da <title> va <meta> teglarini component ichida render qilish
 * mumkin — React ularni avtomatik <head>ga ko'chiradi. Shu sabab
 * react-helmet-async kabi qo'shimcha kutubxona kerak emas.
 */
interface SEOProps {
  title: string;
  description: string;
}

export function SEO({ title, description }: SEOProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </>
  );
}
