'use client';

import { PostGrid } from '@/components/layout/grid-layout';
import { GET_recentPosts } from '@/lib/graphql/posts';
import { Post } from '@/types/apolloComponent';
import PostCard from '@/components/post-grid/post-card';
import React from 'react';

import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';

export const dynamic = 'force-dynamic';

export default function Main() {
  const { data } = useGetPosts();

  // const { data } = useSuspenseQuery<{ recentPosts: Post[] }>(GET_recentPosts, {
  //   variables: { limit: 24 },
  // });

  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={data?.recentPosts || []} loading={!data} />
    </PostGrid>
  );
}
