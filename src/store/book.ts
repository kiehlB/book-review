import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from './store';

export interface BookState {
  book: any;
  error: string;
}

export const initialState = {
  book: null,
  error: '',
};

const BookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    getBookInfoSuccess(state, { payload }) {
      state.book = payload;
    },

    getBookFailure(state, { payload }: PayloadAction<BookState>) {
      state.error = payload.error;
    },
  },
});

export const { getBookFailure, getBookInfoSuccess } = BookSlice.actions;

export const initBook =
  (payload): any =>
  async (dispatch: AppDispatch) => {
    dispatch(getBookInfoSuccess(payload));
  };

export default BookSlice.reducer;
