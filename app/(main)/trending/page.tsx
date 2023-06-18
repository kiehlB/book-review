'use client';

import PostCard from '@/components/post-grid/post-card';
import React, { useEffect, useState } from 'react';
import useGetTrendingPosts from '@/components/post-grid/hooks/useGetTrending';
import { PostGrid } from '@/components/layout/grid-layout';
import HomeTitle from '@/components/home/home-title';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data, loading } = useGetTrendingPosts();

  return (
    <>
      <HomeTitle
        title="트렌딩"
        primaryItems={[
          {
            svg: <IoMdTime />,
            name: '최신',
            href: '/',
          },
          {
            svg: <MdOutlineLocalFireDepartment />,
            name: '트렌딩',
            href: '/trending',
          },
        ]}
      />
      <PostGrid className="mt-[1rem]">
        <PostCard posts={data?.trendingPosts || []} loading={!data || loading} />
      </PostGrid>
    </>
  );
}
