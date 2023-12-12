'use client';

import { GET_Post } from '../../../lib/graphql/posts';
import { useParams } from 'next/navigation';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { Post } from '@/types/apolloComponent';

export default function useGetPost(desiredSegment: string) {
  const { error: singlePostError, data: singlePostData } = useSuspenseQuery<{
    post: Post;
  }>(GET_Post, {
    variables: { id: desiredSegment },
    skip: !desiredSegment,
  });

  return {
    singlePostError,
    singlePostData,
  };
}
