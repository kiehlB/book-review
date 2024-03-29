'use client';

import React from 'react';
import { PostGrid } from '@/components/layout/grid-layout';
import HomeTitle from '@/views/home/home-title';
import PostCard from '@/views/post/post-card';

export default function MainPage() {
  return (
    <>
      <HomeTitle title="내가 읽은 목록" />
      {/* <PostGrid className="mt-[1rem]">
        <PostGrid className="mt-[1rem]">
          <PostCard posts={data?.recentPosts || []} loading={!data || loading} />
        </PostGrid>
      </PostGrid> */}
    </>
  );
}
