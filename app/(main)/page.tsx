import { PostGrid } from '@/components/layout/grid-layout';
import { GET_recentPosts } from '@/lib/graphql/posts';
import { Post } from '@/types/apolloComponent';
import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import { getClient } from '@/lib/client';

export default async function Home() {
  const { data, loading } = await getClient().query<{ recentPosts: Post[] }>({
    query: GET_recentPosts,
    variables: { limit: 24 },
  });

  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={data?.recentPosts || []} loading={!data || loading} />
    </PostGrid>
  );
}
