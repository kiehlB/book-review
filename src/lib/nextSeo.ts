export function getNextSeo({
  title = 'Helping people make the world a better place through quality software',
  url = '',
  canonical = 'https://www.woong.lol',
  description = 'Make the world better with software',
  origin = '',
  keywords = '',
}: {
  origin?: string;
  image?: string;
  url?: string;
  title?: string;
  canonical?: string;
  description?: string;
  keywords?: string;
}) {
  return {
    title,
    canonical,
    description,
    keywords,
  };
}
