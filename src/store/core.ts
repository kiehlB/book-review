import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from './store';
import { PURGE } from 'redux-persist';

export interface coreState {
  isdark: string;
  error: string;
  isLoading: boolean;
  search: string;
  timestamp: string;
}

export const initialState = {
  isdark: 'light',
  isLoading: false,
  error: '',
  search: '',
  timestamp: 'month',
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
    getSearchInput(state: coreState, actions: PayloadAction<string>) {
      state.search = actions.payload;
    },

    getTimestamp(state: coreState, actions) {
      state.timestamp = actions.payload;
    },

    getcoreFailure(state: coreState, { payload }: PayloadAction<coreState>) {
      state.error = payload.error;
    },
  },
});

export const {
  getcoreFailure,
  getcoreInfoSuccess,
  getcoreIsLoading,
  getSearchInput,
  getTimestamp,
} = CoreSlice.actions;

export default CoreSlice.reducer;
