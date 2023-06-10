'use client';

import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { GET_Posts, GET_recentPosts } from '../../../lib/graphql/posts';
import { Post, RecentPostsQuery } from '../../../types/apolloComponent';

export default function useGetPosts() {
  const { data, loading, fetchMore } = useQuery<{ recentPosts: Post[] }>(
    GET_recentPosts,
    {
      variables: {
        limit: 24,
      },
    },
  );
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: {
          cursor,
          limit: 24,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.recentPosts.length === 0) {
            setIsFinished(true);
          }
          return {
            recentPosts: [...prev.recentPosts, ...fetchMoreResult.recentPosts],
          };
        },
      });
    },
    [fetchMore],
  );

  const cursor = data?.recentPosts[data?.recentPosts.length - 1]?.id;

  useScrollPagination({
    cursor,
    onLoadMore,
  });

  return { data, isFinished, loading };
}
