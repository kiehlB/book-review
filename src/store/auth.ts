import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from './store';
import { PURGE } from 'redux-persist';
import { User } from '../types/apolloComponent';

export interface auth {
  id: string;
  username: string;
  __typename: string;
}

export interface authState {
  addCase(PURGE: string, arg1: (state: any) => void): unknown;
  auth: auth | null;
  error: string;
  profileThumbnail: string;
  displayName: string;
}

export const initialState = {
  auth: null,
  error: '',
  profileThumbnail: '',
  displayName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthInfoSuccess(state: authState, action: PayloadAction<auth | null>) {
      state.auth = action.payload;
    },
    getAuthImgSuccess(state: authState, action: PayloadAction<string | null>) {
      state.profileThumbnail = action.payload;
    },

    getAuthNameSuccess(state: authState, action: PayloadAction<string | null>) {
      state.displayName = action.payload;
    },

    getauthFailure(state: authState, { payload }: PayloadAction<authState>) {
      state.error = payload.error;
    },
    extraReducers: (builder: authState) => {
      builder.addCase(PURGE, state => {
        localStorage.remove('auth');
      });
    },
  },
});

export const {
  getauthFailure,
  getAuthInfoSuccess,
  getAuthImgSuccess,
  getAuthNameSuccess,
} = authSlice.actions;

export const initAuth =
  (payload): any =>
  async (dispatch: AppDispatch) => {
    dispatch(getAuthInfoSuccess(payload));
  };

export default authSlice.reducer;
