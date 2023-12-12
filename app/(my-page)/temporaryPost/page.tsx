'use client';

import React from 'react';
import { PostGrid } from '@/components/layout/grid-layout';
import useGetPostsBy from '@/views/post/hooks/use-get-posts-name';
import HomeTitle from '@/views/home/home-title';
import PostCard from '@/views/post/post-card';

export default function MainPage() {
  const { data, loading } = useGetPostsBy({ isTemp: true });

  return (
    <>
      <HomeTitle title="임시 글" />
      <PostGrid className="mt-[1rem]">
        <PostCard posts={data?.posts || []} />
      </PostGrid>
    </>
  );
}
