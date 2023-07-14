'use client';

import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';
import useGetTrendingPosts from '@/components/post-grid/hooks/useGetTrending';
import { PostGrid } from '@/components/layout/grid-layout';
import useGetPostsBy from '@/components/post-grid/hooks/useGetPostsBy';
import HomeTitle from '@/components/home/home-title';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data, loading } = useGetPostsBy({ isTemp: false });

  return (
    <>
      <HomeTitle title="내가 쓴 글" />
      <PostGrid className="mt-[1rem]">
        <PostCard posts={data?.posts || []} loading={!data || loading} />
      </PostGrid>
    </>
  );
}
