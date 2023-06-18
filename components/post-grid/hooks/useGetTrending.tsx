import { useQuery } from '@apollo/client';
import { addDays, subDays } from 'date-fns';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { GET_Posts, GET_trendingPosts } from '../../../lib/graphql/posts';
import { RootState } from '../../../store/rootReducer';
import { TrendingPostsQuery } from '../../../types/apolloComponent';

export default function useGetTrendingPosts() {
  const timeframe = useSelector((state: RootState) => state.core.timestamp);

  const { data, loading, fetchMore } = useQuery<TrendingPostsQuery>(GET_trendingPosts, {
    variables: {
      limit: 24,
      timeframe: 'month',
      from: timeframe?.from ? timeframe?.from : '',
      to: timeframe?.to ? timeframe?.to : '',
    },

    notifyOnNetworkStatusChange: true,
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    offset => {
      fetchMore({
        variables: {
          offset,
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

  useScrollPagination({
    offset: data?.trendingPosts.length,
    onLoadMore,
  });

  return { data, loading, isFinished };
}
