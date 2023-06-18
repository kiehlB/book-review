'use client';

import { PostGrid } from '@/components/layout/grid-layout';
import PostCard from '@/components/post-grid/post-card';
import React from 'react';
import useGetPosts from '@/components/post-grid/hooks/useGetPosts';
import HomeTitle from '@/components/home/home-title';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

export const dynamic = 'force-dynamic';

export default function MainPage() {
  const { data, loading } = useGetPosts();

  return (
    <>
      <HomeTitle
        title="포스트"
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
        <PostCard posts={data?.recentPosts || []} loading={!data || loading} />
      </PostGrid>
    </>
  );
}
