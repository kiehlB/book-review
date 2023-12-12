import { create } from 'zustand';

interface Time {
  from: Date;
  to: Date;
}

interface CoreState {
  isdark: string;
  error: string;
  isLoading: boolean;
  search: string;
  timestamp: Time | null;
  toggleDarkMode: (newDarkMode: string | undefined) => void;
  setLoading: (isLoading: boolean) => void;
  setSearchInput: (search: string) => void;
  setTimestamp: (timestamp: Time | null) => void;
  setError: (error: string) => void;
}

const useCoreStore = create<CoreState>(set => ({
  isdark: 'light',
  isLoading: false,
  error: '',
  search: '',
  timestamp: null,
  toggleDarkMode: (newDarkMode: string | undefined) =>
    set(() => ({ isdark: newDarkMode })),
  setLoading: isLoading => set(() => ({ isLoading })),
  setSearchInput: search => set(() => ({ search })),
  setTimestamp: timestamp => {
    set(() => ({ timestamp }));
  },
  setError: error => set(() => ({ error })),
}));

export default useCoreStore;
