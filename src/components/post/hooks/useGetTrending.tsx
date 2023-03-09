import { useQuery } from '@apollo/client';
import { addDays, subDays } from 'date-fns';
import { useCallback, useState } from 'react';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { useTimeframe } from '../../../hooks/useTimeframe';
import { GET_Posts, GET_trendingPosts } from '../../../lib/graphql/posts';
import { TrendingPostsQuery } from '../../../types/apolloComponent';

export default function useGetTrendingPosts() {
  //  addDays(timeframe?.to, 1) ? addDays(timeframe?.to, 1) : new Date()

  const { data, loading, fetchMore } = useQuery<TrendingPostsQuery>(GET_trendingPosts, {
    variables: {
      limit: 24,
      timeframe: 'month',
      // startTime: new Date(),
      // endTime: new Date(),
    },
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
            trendingPosts: [...prev?.trendingPosts, ...fetchMoreResult?.trendingPosts],
          };
        },
      });
    },
    [fetchMore],
  );

  const cursor = data?.trendingPosts[data?.trendingPosts?.length - 1]?.id;

  useScrollPagination({
    cursor,
    onLoadMore,
  });

  return { data, loading, isFinished };
}
