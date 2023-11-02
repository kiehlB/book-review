'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from './store';

export function ReduxProvider({ children }: any) {
  const store = useStore();
  const [persistor, setPersistor] = useState(null) as any;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPersistor(persistStore(store));
    }
  }, [store]);

  return (
    <Provider store={store}>
      {persistor ? (
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      ) : (
        children
      )}
    </Provider>
  );
}
