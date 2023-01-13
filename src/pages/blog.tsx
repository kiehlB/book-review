import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/base/Header';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';

export default function Home() {
  return (
    <>
      <Header />
      <PageGrid as="main" className="pt-[24px]">
        <div className="col-span-2">
          <Navbar
            primaryItems={[
              {
                icon: <RiBookOpenLine />,
                text: 'Books',
                to: '/',
              },
              {
                icon: <RiDashboard3Line />,
                text: 'Post',
                to: '/post',
              },
            ]}
            secondaryItems={[
              {
                icon: <RiFileChartFill />,
                text: 'Trending tags',
                to: '/Trending tags',
              },
            ]}></Navbar>
        </div>
        <div className="col-span-8">
          <div className="flex justify-between">
            <HomeTab />
          </div>
          <PostGrid className="pt-[60px]">
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
            <div className="col-span-2 border h-[20rem]">ㅇㅇ</div>
          </PostGrid>
        </div>
      </PageGrid>
    </>
  );
}
