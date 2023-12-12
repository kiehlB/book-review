'use client';

import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { GET_Posts, GET_Search_Posts } from '../../../lib/graphql/posts';
import { SearchPostsQuery } from '../../../types/apolloComponent';
import useScrollPagination from '@/hooks/use-scroll-pagination';

export default function useGetSearchPosts(id: string) {
  const { data, loading, fetchMore } = useQuery(GET_Search_Posts, {
    variables: {
      limit: 24,
      searchInput: id,
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
        updateQuery: (prev: any, { fetchMoreResult }: any) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.searchPosts.length === 0) {
            setIsFinished(true);
          }
          return {
            searchPosts: [...prev.searchPosts, ...fetchMoreResult.searchPosts],
          };
        },
      });
    },
    [fetchMore],
  );

  const cursor = data?.searchPosts[data?.searchPosts.length - 1]?.id;

  useScrollPagination({
    cursor,
    onLoadMore,
  });

  return { data, loading, isFinished };
}
