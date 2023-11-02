'use client';

import { GET_Post } from '../../../lib/graphql/posts';
import { useParams } from 'next/navigation';
import { Post } from '@/types/apolloComponent';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default function useGetPost(desiredSegment) {
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
