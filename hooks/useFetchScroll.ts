'use client';
import { useEffect } from 'react';

const useFetchScroll = (cursor: any, onLoadMore: any, isFinished: any) => {
  useEffect(() => {
    if (!cursor) return;

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
  }, [cursor, onLoadMore]);
};

export default useFetchScroll;
