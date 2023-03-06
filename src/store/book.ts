import {
  createSlice,
  PayloadAction,
  createSelector,
  createAction,
} from '@reduxjs/toolkit';
import { PostBookInfo } from '../types/apolloComponent';
import { RootState } from './rootReducer';
import { AppThunk, AppDispatch } from './store';

export interface BookInfo {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  thumbnail: string;
  title: string;
}

export interface BookState {
  book: BookInfo;
  error: string;
  title: string;
  body: string;
  tags: string[];
  publish: boolean;
  isPrivate: boolean;
  thumbnail: string | null;
  postId: null | string;
  isTemp: boolean;
  isopen: boolean;
  postSave: boolean;
  Istemporary: boolean;
  commentId: string;
}

export const initialState = {
  book: {
    authors: [],
    contents: '',
    datetime: '',
    isbn: '',
    thumbnail: '',
    title: '',
  },
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
  isopen: false,
  postSave: false,
  Istemporary: false,
  commentId: '',
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
    getPostTags(state: BookState, action: PayloadAction<any>) {
      state.tags = action.payload;
    },
    getPostId(state: BookState, action: PayloadAction<string>) {
      state.postId = action.payload;
    },

    getThumbnail(state: BookState, action: PayloadAction<string>) {
      state.thumbnail = action.payload;
    },

    getIsOpenSuccess(state: BookState) {
      state.isopen = !state.isopen;
    },

    getPostSaveSuccess(state: BookState) {
      state.postSave = !state.postSave;
    },
    getTemporaryClickSuccess(state: BookState) {
      state.Istemporary = true;
    },
    getCommentIdSuccess(state: BookState, action) {
      state.commentId = action.payload;
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
  getIsOpenSuccess,
  getPostSaveSuccess,
  getThumbnail,
  getCommentIdSuccess,
} = BookSlice.actions;

export const initBook =
  (payload): any =>
  async (dispatch: AppDispatch) => {
    dispatch(getBookInfoSuccess(payload));
  };

export default BookSlice.reducer;
