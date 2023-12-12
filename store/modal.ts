import { create } from 'zustand';

interface ModalState {
  isClose: boolean;
  isSearch: boolean;
  setClose: (value: boolean) => void;
  bookIsClose: boolean;
  setBookClose: (value: boolean) => void;
  publishClose: boolean;
  setPublishClose: (value: boolean) => void;
  mode: string;
  setMode: (value: string) => void;
  setisSearch: () => void;
}

const useModalStore = create<ModalState>(set => ({
  isSearch: false,
  isClose: false,
  setClose: isClose => set({ isClose }),
  bookIsClose: false,
  setBookClose: bookIsClose => set({ bookIsClose }),
  publishClose: false,
  setPublishClose: publishClose => set({ publishClose }),
  mode: '',
  setMode: mode => set({ mode }),
  setisSearch: () => set(state => ({ isSearch: !state.isSearch })),
}));

export default useModalStore;
