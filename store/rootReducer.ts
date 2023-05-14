import { combineReducers } from '@reduxjs/toolkit';
import Auth_Reducer from './auth';
import Book_Reducer from './book';
import Core_Reducer from './core';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: Auth_Reducer,
  book: Book_Reducer,
  core: Core_Reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
