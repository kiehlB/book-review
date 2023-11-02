'use client';

import { getTagsQuery } from '../../../lib/graphql/tags';
import { TagsQuery } from '../../../types/apolloComponent';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export type getTagsProps = {
  sort: 'trending' | 'byName';
};

export default function useGetTags({ sort }: getTagsProps) {
  const { data, fetchMore } = useSuspenseQuery<TagsQuery>(getTagsQuery, {
    variables: {
      sort,
    },
  });

  return { data };
}
