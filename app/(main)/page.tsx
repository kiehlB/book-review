'use client';

import { PostGrid } from '@/components/layout/grid-layout';
import PostLoading from '@/components/loading/post-loading';

import HomeTitle from '@/views/home/home-title';
import GetPosts from '@/views/post/post-grid';
import React, { Suspense } from 'react';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';

export default function MainPage() {
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
        <Suspense fallback={<PostLoading />}>
          <GetPosts />
        </Suspense>
      </PostGrid>
    </>
  );
}
