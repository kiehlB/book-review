import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from './store';
import { PURGE } from 'redux-persist';

export interface coreState {
  isdark: string;
  error: string;
  isLoading: boolean;
}

export const initialState = {
  isdark: 'light',
  isLoading: false,
  error: '',
};

const CoreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    getcoreInfoSuccess(state: coreState) {
      const isdarkSet = state.isdark == 'dark' ? 'light' : 'dark';
      state.isdark = isdarkSet;
    },
    getcoreIsLoading(state: coreState) {
      state.isLoading = !state.isLoading;
    },

    getcoreFailure(state: coreState, { payload }: PayloadAction<coreState>) {
      state.error = payload.error;
    },
  },
});

export const { getcoreFailure, getcoreInfoSuccess, getcoreIsLoading } = CoreSlice.actions;

export default CoreSlice.reducer;
