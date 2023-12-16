'use client';

import { GET_Post } from '../../../lib/graphql/posts';
import { useParams } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Post } from '@/types/apolloComponent';
import { startTransition } from 'react';

export default function useGetPost(desiredSegment: string) {
  const {
    error: singlePostError,
    data: singlePostData,
    refetch,
  } = useSuspenseQuery<{
    post: Post;
  }>(GET_Post, {
    variables: { id: desiredSegment },
    fetchPolicy: 'cache-first',

    skip: !desiredSegment,
  });

  function handleRefetch() {
    startTransition(() => {
      refetch();
    });
  }

  return {
    singlePostError,
    singlePostData,
    handleRefetch,
  };
}
