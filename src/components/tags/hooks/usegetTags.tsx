import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import useScrollPagination from '../../../hooks/useScrollPagination';
import { GET_Posts, GET_recentPosts } from '../../../lib/graphql/posts';
import { getTagsQuery } from '../../../lib/graphql/tags';
import { TagsQuery } from '../../../types/apolloComponent';

export type getTagsProps = {
  sort: 'trending' | 'byName';
};

export default function useGetTags({ sort }: getTagsProps) {
  const { data, loading, fetchMore } = useQuery<TagsQuery>(getTagsQuery, {
    variables: {
      sort,
    },

    notifyOnNetworkStatusChange: true,
  });

  return { data, loading };
}
