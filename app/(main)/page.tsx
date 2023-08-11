import { PostGrid } from '@/components/layout/grid-layout';
import React from 'react';
import HomeTitle from '@/components/home/home-title';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import GetPosts from './get-posts';

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
        <GetPosts />
      </PostGrid>
    </>
  );
}
