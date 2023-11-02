'use client';

import { startTransition, useCallback, useState } from 'react';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { GET_recentPosts } from '../../../lib/graphql/posts';
import { Post } from '../../../types/apolloComponent';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useFetchScroll from '@/hooks/useFetchScroll';

export default function useGetPosts() {
  const { data, fetchMore } = useSuspenseQuery<{ recentPosts: Post[] }>(GET_recentPosts, {
    variables: {
      limit: 24,
    },
    fetchPolicy: 'cache-first',
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      if (isFinished) return;
      if (data?.recentPosts.length < 23) return;
      startTransition(() => {
        fetchMore({
          variables: {
            cursor,
            limit: 24,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (fetchMoreResult.recentPosts.length < 23) {
              setIsFinished(true);
            }
            return {
              recentPosts: [...prev.recentPosts, ...fetchMoreResult.recentPosts],
            };
          },
        });
      });
    },
    [fetchMore, isFinished],
  );

  const cursor = data?.recentPosts[data?.recentPosts.length - 1]?.id;
  useFetchScroll(cursor, onLoadMore, isFinished);
  // useScrollPagination({
  //   cursor,
  //   onLoadMore,
  // });

  return { data, isFinished };
}
