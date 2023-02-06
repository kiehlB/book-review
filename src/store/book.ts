import {
  createSlice,
  PayloadAction,
  createSelector,
  createAction,
} from '@reduxjs/toolkit';
import { RootState } from './rootReducer';
import { AppThunk, AppDispatch } from './store';

export interface BookState {
  book: any;
  error: string;
  title: string;
  body: string;
  tags: string[];
  publish: boolean;
  isPrivate: boolean;
  thumbnail: string | null;
  postId: null | string;
  isTemp: boolean;
}

export const initialState = {
  book: null,
  error: '',
  markdown: '',
  title: '',
  body: '',
  tags: [],
  publish: false,
  isPrivate: false,
  thumbnail: null,
  postId: null,
  isTemp: false,
};

const BookSlice = createSlice({
  name: 'Book',
  initialState,
  reducers: {
    getBookInfoSuccess(state, { payload }) {
      state.book = payload;
    },
    getPostTitle(state, action) {
      state.title = action.payload;
    },
    getPostBody(state, action) {
      state.body = action.payload;
    },
    getPostTags(state, action) {
      state.tags = action.payload;
    },
    getPostId(state, action) {
      state.postId = action.payload;
    },

    getBookFailure(state, { payload }: PayloadAction<BookState>) {
      state.error = payload.error;
    },
  },
});

export const {
  getBookFailure,
  getBookInfoSuccess,
  getPostTitle,
  getPostBody,
  getPostTags,
  getPostId,
} = BookSlice.actions;

export const initBook =
  (payload): any =>
  async (dispatch: AppDispatch) => {
    dispatch(getBookInfoSuccess(payload));
  };

export default BookSlice.reducer;
