import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { GET_Posts, GET_trendingPosts } from '../../../lib/graphql/posts';

export default function useGetTrendingPosts() {
  const { data, loading, fetchMore } = useQuery(GET_trendingPosts, {
    variables: {
      limit: 24,
    },

    notifyOnNetworkStatusChange: true,
  });
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
          if (fetchMoreResult.trendingPosts.length === 0) {
            setIsFinished(true);
          }
          return {
            trendingPosts: [...prev.trendingPosts, ...fetchMoreResult.trendingPosts],
          };
        },
      });
    },
    [fetchMore],
  );

  const cursor = data?.trendingPosts[data?.trendingPosts.length - 1]?.id;

  useScrollPagination({
    cursor,
    onLoadMore,
  });

  return { data, loading, isFinished };
}
