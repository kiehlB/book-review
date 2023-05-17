import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { GET_Posts, GET_Search_Posts } from '../../../lib/graphql/posts';
import { SearchPostsQuery } from '../../../types/apolloComponent';

export default function useGetSearchPosts(id) {
  const { data, loading, fetchMore } = useQuery<SearchPostsQuery>(GET_Search_Posts, {
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
        updateQuery: (prev, { fetchMoreResult }) => {
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
