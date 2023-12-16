import { useRef, useCallback, useEffect } from 'react';
import { getScrollBottom, getScrollTop } from '../lib/utils';

type Params = {
  offset?: number | null;
  cursor?: string | null;
  stop?: boolean;
  data: any;
  onLoadMore?: (cursor: string) => void;
  onLoadMoreByOffset?: (offset: number) => void;
};

export default function useScrollPagination({
  cursor,
  stop,
  offset,
  data,
  onLoadMore,
  onLoadMoreByOffset,
}: Params) {
  const last = useRef<string | number | null>(null);

  const preventBottomStick = useCallback(() => {
    if (getScrollBottom() === 0) {
      window.scrollTo(0, getScrollTop() - 1);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (data?.recentPosts.length <= 23) return;
    if (!cursor || !onLoadMore) return;
    if (cursor === last.current) return;
    last.current = cursor;

    await onLoadMore(cursor);
    preventBottomStick();
  }, [cursor, onLoadMore, preventBottomStick]);

  const loadMoreUsingOffset = useCallback(async () => {
    if (stop || !offset || !onLoadMoreByOffset) return;
    if (offset === last.current) return;
    last.current = offset;
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
