import { configureStore, Action, EnhancedStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import { persistedReducer, RootState } from './rootReducer';
import { useMemo } from 'react';

let store: any;

function makeStore() {
  return configureStore({
    reducer: persistedReducer,

    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const initializeStore = () => {
  let _store = store ?? makeStore();

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;

  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore() {
  const store = useMemo(() => initializeStore(), []);
  return store;
}
