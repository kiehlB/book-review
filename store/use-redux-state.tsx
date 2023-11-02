import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './rootReducer';
import { useStore } from './store';
import { useSyncExternalStore } from 'react';

export function useReduxState(selector) {
  const store = useStore();

  const dispatch = useDispatch();

  const subscribe = onStoreChange => {
    const unsubscribe = store.subscribe(onStoreChange);
    return unsubscribe;
  };

  const getSnapshot = () => selector(store.getState());

  return useSyncExternalStore(subscribe, getSnapshot);
}
