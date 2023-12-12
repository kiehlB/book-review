'use client';

import { useEffect } from 'react';

interface UseFetchScrollProps<T> {
  cursor: T;
  onLoadMore: (cursor: T) => void;
  isFinished: boolean;
}

const useFetchScroll = <T>({
  cursor,
  onLoadMore,
  isFinished,
}: UseFetchScrollProps<T>) => {
  useEffect(() => {
    if (!cursor || isFinished) return;

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      onLoadMore(cursor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cursor, onLoadMore, isFinished]);
};

export default useFetchScroll;
