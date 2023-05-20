import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { AppDispatch } from './store';

export interface auth {
  id: string;
  username: string;
  __typename: string;
}

export interface authState {
  auth: auth | null;
  error: string;
  profileThumbnail: string;
  displayName: string;
  bio: string;
}

export const initialState = {
  auth: null,
  error: '',
  profileThumbnail: '',
  displayName: '',
  bio: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getAuthInfoSuccess(state: authState, action: PayloadAction<auth | null>) {
      state.auth = action.payload;
    },
    getAuthImgSuccess(state: authState, action: PayloadAction<string>) {
      state.profileThumbnail = action.payload;
    },

    getAuthNameSuccess(state: authState, action: PayloadAction<string>) {
      state.displayName = action.payload;
    },
    getAuthBioSuccess(state: authState, action: PayloadAction<string>) {
      state.bio = action.payload;
    },

    getauthFailure(state: authState, { payload }: PayloadAction<authState>) {
      state.error = payload.error;
    },
  },
  extraReducers: (
    builder: ActionReducerMapBuilder<{
      auth: null;
      error: string;
      profileThumbnail: string;
      displayName: string;
      bio: string;
    }>,
  ) => {
    builder.addCase(PURGE, state => {
      localStorage.removeItem('auth');
    });
  },
});

export const {
  getauthFailure,
  getAuthInfoSuccess,
  getAuthImgSuccess,
  getAuthNameSuccess,
  getAuthBioSuccess,
} = authSlice.actions;

export const initAuth = (payload: any) => async (dispatch: AppDispatch) => {
  dispatch(getAuthInfoSuccess(payload));
};

export default authSlice.reducer;
