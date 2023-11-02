'use client';

import { startTransition, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { GET_Posts, GET_trendingPosts } from '../../../lib/graphql/posts';
import { RootState } from '../../../store/rootReducer';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useFetchScroll from '@/hooks/useFetchScroll';

export default function useGetTrendingPosts() {
  const timeframe = useSelector((state: RootState) => state.core.timestamp) as any;

  const { data, fetchMore } = useSuspenseQuery(GET_trendingPosts, {
    variables: {
      limit: 24,
      timeframe: 'month',
      from: timeframe?.from ? timeframe?.from : '',
      to: timeframe?.to ? timeframe?.to : '',
    },
  }) as any;
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (offset: any) => {
      if (isFinished) return;
      if (data?.trendingPost.length < 23) return;

      startTransition(() => {
        fetchMore({
          variables: {
            offset,
            limit: 24,
          },
          updateQuery: (prev: any, { fetchMoreResult }: any) => {
            if (!fetchMoreResult) return prev;
            if (fetchMoreResult.trendingPosts.length === 0) {
              setIsFinished(true);
            }
            return {
              trendingPosts: [...prev?.trendingPosts, ...fetchMoreResult?.trendingPosts],
            };
          },
        });
      });
    },
    [fetchMore],
  );
  const offset = data?.trendingPosts[data?.trendingPosts.length - 1]?.id;
  useFetchScroll(offset, onLoadMore, isFinished);
  // useScrollPagination({
  //   offset: data?.trendingPosts.length,
  //   onLoadMore,
  // });

  return { data, isFinished };
}
