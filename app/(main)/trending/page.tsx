import React, { Suspense, useEffect, useState } from 'react';
import { PostGrid } from '@/components/layout/grid-layout';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import PostLoading from '@/components/loading/post-loading';
import GetTrendPosts from '@/views/post/trend-post';
import HomeTitle from '@/views/home/home-title';

export const revalidate = 0;

export default function TreandPage() {
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
        <Suspense fallback={<PostLoading />}>
          <GetTrendPosts />
        </Suspense>
      </PostGrid>
    </>
  );
}
