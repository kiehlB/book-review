import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from './store';
import { PURGE } from 'redux-persist';

export interface coreState {
  isDark: string;
  error: string;
}

export const initialState = {
  isDark: 'light',
  isLoading: false,
  error: '',
};

const CoreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    getcoreInfoSuccess(state) {
      const isDarkSet = state.isDark == 'dark' ? 'light' : 'dark';
      state.isDark = isDarkSet;
    },
    getcoreIsLoading(state) {
      state.isLoading = !state.isLoading;
    },

    getcoreFailure(state, { payload }: PayloadAction<coreState>) {
      state.error = payload.error;
    },
  },
});

export const { getcoreFailure, getcoreInfoSuccess, getcoreIsLoading } = CoreSlice.actions;

export default CoreSlice.reducer;
