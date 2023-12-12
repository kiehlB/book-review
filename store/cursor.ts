import { create } from 'zustand';

interface CursorState {
  cursor: string | null;
  setCursor: (cursor: string | null) => void;
}

export const useCursorStore = create<CursorState>(set => ({
  cursor: null,
  setCursor: cursor => set({ cursor }),
}));

export default useCursorStore;
