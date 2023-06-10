'use client';

import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';
import useGetTrendingPosts from '@/components/post-grid/hooks/useGetTrending';
import { PostGrid } from '@/components/layout/grid-layout';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data, loading } = useGetTrendingPosts();

  return (
    <PostGrid className="mt-[1rem]">
      <PostCard posts={data?.trendingPosts || []} loading={!data || loading} />
    </PostGrid>
  );
}
