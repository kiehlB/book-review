export function getNextSeo({
  title = 'Book Review',
  canonical = 'https://www.bookreview.pro/',
  description = '책 리뷰를 작성하는 곳 입니다  여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요. 책을 선택할 때 도움이 되는 다양한 리뷰와 평점 정보를 확인하실 수 있습니다.',
  openGraph = {
    url: 'https://www.bookreview.pro/',
    title: '책 리뷰',
    description:
      '책 리뷰를 작성하는 곳 입니다  여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요. 책을 선택할 때 도움이 되는 다양한 리뷰와 평점 정보를 확인하실 수 있습니다.',
    images: [
      {
        url: '/logo10.png',
        width: 1000,
        height: 1293,
        alt: 'main logo',
        type: 'image/jpeg',
      },
    ],
    site_name: 'Book reivew',
  },

  origin = 'https://www.bookreview.pro',
  image = '/logo10.png',
  url = 'https://www.bookreview.pro',
  keywords = '북리뷰, 책리뷰, 서평, 독후감, 도서추천, 독서일기',
}: {
  origin?: string;
  image?: string;
  url?: string;
  title?: string;
  canonical?: string;
  description?: string;
  keywords?: string;
  openGraph?: {
    url?: string;
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
      type?: string;
    }>;
    site_name?: string;
  };
}) {
  return {
    title,
    canonical,
    description,
    openGraph,
    origin,
    image,
    url,
    keywords,
  };
}
