import { getScrollBottom } from '@/lib/utils';
import React, { useEffect, useCallback, useRef } from 'react';

export interface PaginateWithScrollProps {
  cursor: string | null;
  onLoadMore: (cursor: string) => any;
}

const PaginateWithScroll: React.FC<PaginateWithScrollProps> = ({
  cursor,
  onLoadMore,
}) => {
  const lastCursor = useRef<string | null>(null);

  const loadMore = useCallback(() => {
    if (!cursor) return;
    if (cursor === lastCursor.current) return;
    onLoadMore(cursor);
    lastCursor.current = cursor;
  }, [cursor, onLoadMore]);

  const onScroll = useCallback(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom < 768) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
  return null;
};

export default PaginateWithScroll;
