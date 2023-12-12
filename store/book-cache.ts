import { create } from 'zustand';
import { BookData } from './book';

interface BookStoreState {
  cache: Record<string, BookData[]>;
  addBook: (bookName: string, bookItems: BookData[]) => void;
}

const useBookcacheStore = create<BookStoreState>(set => ({
  cache: {},
  addBook: (bookName, bookItems) =>
    set(state => ({ cache: { ...state.cache, [bookName]: bookItems } })),
}));

export default useBookcacheStore;
