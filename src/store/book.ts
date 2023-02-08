import {
  createSlice,
  PayloadAction,
  createSelector,
  createAction,
} from '@reduxjs/toolkit';
import { PostBookInfo } from '../types/apolloComponent';
import { RootState } from './rootReducer';
import { AppThunk, AppDispatch } from './store';

export interface BookState {
  book: PostBookInfo;
  error: string;
  title: string;
  body: string;
  tags: string[] | string;
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
    getBookInfoSuccess(state: BookState, { payload }) {
      state.book = payload;
    },
    getPostTitle(state: BookState, action: PayloadAction<string>) {
      state.title = action.payload;
    },
    getPostBody(state: BookState, action: PayloadAction<string>) {
      state.body = action.payload;
    },
    getPostTags(state: BookState, action: PayloadAction<string[] | string>) {
      state.tags = action.payload;
    },
    getPostId(state: BookState, action: PayloadAction<string>) {
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
