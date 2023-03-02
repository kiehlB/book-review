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
  book: any;
  error: string;
  title: string;
  body: string;
  tags: any;
  publish: boolean;
  isPrivate: boolean;
  thumbnail: string | null;
  postId: null | string;
  isTemp: boolean;
  isopen: boolean;
  postSave: boolean;
  temporaryClick: boolean;
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
  isopen: false,
  postSave: false,
  temporaryClick: false,
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
      state.temporaryClick = true;
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
} = BookSlice.actions;

export const initBook =
  (payload): any =>
  async (dispatch: AppDispatch) => {
    dispatch(getBookInfoSuccess(payload));
  };

export default BookSlice.reducer;
