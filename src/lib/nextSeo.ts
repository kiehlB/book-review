export function getNextSeo({
  title = '책 리뷰작성',
  url = '',
  canonical = 'https://www.bookreview.pro',
  description = '책을 읽고 리뷰를 쓰는 곳입니다',
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
