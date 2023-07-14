'use client';

import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import { PostGrid } from '@/components/layout/grid-layout';
import useGetPostsBy from '@/components/post-grid/hooks/useGetPostsBy';
import HomeTitle from '@/components/home/home-title';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data, loading } = useGetPostsBy({ isTemp: true });

  return (
    <>
      <HomeTitle title="임시 글" />
      <PostGrid className="mt-[1rem]">
        <PostCard posts={data?.posts || []} loading={loading} />
      </PostGrid>
    </>
  );
}
