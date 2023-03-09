import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { RootState } from '../store/rootReducer';
import { getTimestamp } from '../store/core';

export function useTimeframe() {
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators(getTimestamp, dispatch), [dispatch]);
  const timeframe = useSelector((state: RootState) => state.core.timestamp);

  return [timeframe, actions] as const;
}
