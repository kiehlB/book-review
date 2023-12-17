import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface BookData {
  title: string;
  link?: string;
  author: string;
  pubDate: string;
  description: string;
  isbn?: string;
  isbn13?: string;
  itemId?: number;
  priceSales?: number;
  priceStandard?: number;
  mallType?: string;
  stockStatus?: string;
  mileage?: number;
  cover?: string;
  categoryId?: number;
  categoryName?: string;
  publisher?: string;
  salesPoint?: number;
  adult?: boolean;
  fixedPrice?: boolean;
  customerReviewRank?: number;
  seriesInfo?: SeriesInfo;
  subInfo?: Record<string, unknown>;
}

interface SeriesInfo {
  seriesId: number;
  seriesLink: string;
  seriesName: string;
}

interface BookState {
  book: BookData | null;
  error: string;
  title: string;
  body: string;
  tags: string[];
  publish: boolean;
  isPrivate: boolean;
  thumbnail: string | null;
  postId: string | null;
  isTemp: boolean;
  isopen: boolean;
  postSave: boolean;
  Istemporary: boolean;
  commentId: string;
  searchBookName: string;
  setSearchBookName: (bookname: string) => void;
  setBook: (book: BookData | null) => void;
  setError: (error: string) => void;
  setTitle: (title: string) => void;
  setBody: (body: string) => void;
  setTags: (tags: string[]) => void;
  setPublish: (publish: boolean) => void;
  setIsPrivate: (isPrivate: boolean) => void;
  setThumbnail: (thumbnail: string | null) => void;
  setPostId: (postId: string | null) => void;
  setIsTemp: (isTemp: boolean) => void;
  setIsOpen: () => void;
  setPostSave: (postSave: boolean) => void;
  setIstemporary: (Istemporary: boolean) => void;
  setCommentId: (commentId: string) => void;
}

export const useBookStore = create(
  persist<BookState>(
    set => ({
      book: {
        title: '',
        link: '',
        author: '',
        pubDate: '',
        description: '',
        isbn: '',
        isbn13: '',
        itemId: 0,
        priceSales: 0,
        priceStandard: 0,
        mallType: '',
        stockStatus: '',
        mileage: 0,
        cover: '',
        categoryId: 0,
        categoryName: '',
        publisher: '',
        salesPoint: 0,
        adult: false,
        fixedPrice: false,
        customerReviewRank: 0,
      },
      error: '',
      title: '',
      body: '',
      tags: [],
      publish: false,
      isPrivate: false,
      thumbnail: null,
      postId: null,
      isTemp: false,
      isopen: false,
      postSave: false,
      Istemporary: false,
      commentId: '',
      searchBookName: '',
      setSearchBookName: (searchBookName: string) => set({ searchBookName }),
      setBook: book => set({ book }),
      setError: error => set({ error }),
      setTitle: title => set({ title }),
      setBody: body => set({ body }),
      setTags: tags => set({ tags }),
      setPublish: publish => set({ publish }),
      setIsPrivate: isPrivate => set({ isPrivate }),
      setThumbnail: thumbnail => set({ thumbnail }),
      setPostId: postId => set({ postId }),
      setIsTemp: isTemp => set({ isTemp }),
      setIsOpen: () => set(state => ({ isopen: !state.isopen })),
      setPostSave: postSave => set({ postSave }),
      setIstemporary: Istemporary => set({ Istemporary }),
      setCommentId: commentId => set({ commentId }),
    }),
    {
      name: 'BookState',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useBookStore;
