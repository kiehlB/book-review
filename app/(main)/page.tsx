import { PostGrid } from '@/components/layout/grid-layout';
import React, { Suspense } from 'react';
import HomeTitle from '@/components/home/home-title';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import GetPosts from '@/components/post/post-grid';
import PostLoading from '@/components/loading/post-loading';

export const revalidate = 0;

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
