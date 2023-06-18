import { useRef, useCallback, useEffect, useContext } from 'react';
import { getScrollBottom, getScrollTop } from '../lib/utils';
import CursorContext from '@/context/cursor-context';

type Params = {
  offset?: number | null;
  cursor?: string | null;
  stop?: boolean;
  onLoadMore?: (cursor: string) => any;
  onLoadMoreByOffset?: (offset: number) => any;
};

export default function useScrollPagination({
  cursor,
  stop,
  offset,
  onLoadMore,
  onLoadMoreByOffset,
}: Params) {
  const { cursor: storedCursor, setCursor } = useContext(CursorContext);

  const last = useRef<string | number | null>(null);

  const preventBottomStick = useCallback(() => {
    if (getScrollBottom() === 0) {
      window.scrollTo(0, getScrollTop() - 1);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (!cursor || !onLoadMore) return;
    if (cursor === last.current) return;
    last.current = cursor;
    await onLoadMore(cursor);
    preventBottomStick();
  }, [cursor, onLoadMore, preventBottomStick]);

  const loadMoreUsingOffset = useCallback(async () => {
    if (stop || !offset || !onLoadMoreByOffset) return;
    if (offset === last.current) return;
    last.current = storedCursor || cursor;
    await onLoadMoreByOffset(offset);
    preventBottomStick();
  }, [offset, onLoadMoreByOffset, preventBottomStick, stop]);

  const onScroll = useCallback(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom < window.screen.height) {
      loadMore();
      loadMoreUsingOffset();
    }
  }, [loadMore, loadMoreUsingOffset]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}
