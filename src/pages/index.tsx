import React, { useState } from 'react';
import Header from '../components/base/Header';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import Image from 'next/image';
import RatioImage from '../components/common/RatioImage';
import Modal from '../components/common/Modal';
import AuthForm from '../components/auth/authForm';

export default function Home() {
  return (
    <>
      <Modal />

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
            <div>포스트</div>
            <HomeTab />
          </div>
          {/* <div className="w-full h-auto">
            <Image
              alt="test"
              width={500}
              height={500}
              style={{ aspectRatio: 1200 / 630 }}
              src="/test.jpg"
              className="relative"
            />
          </div> */}

          <PostGrid className="pt-[60px]">
            <div className="col-span-2 h-[20rem] mxl:col-span-4">
              <div className="w-full">
                <RatioImage
                  alt="test"
                  widthRatio={1.916}
                  heightRatio={1.2}
                  src="/test.jpg"
                  className="relative"
                />
                <div>텍스트</div>
              </div>
            </div>{' '}
            <div className="col-span-2 h-[20rem] mxl:col-span-4">
              <div className="w-full">
                <RatioImage
                  alt="test"
                  widthRatio={1.916}
                  heightRatio={1.2}
                  src="/test.jpg"
                  className="relative"
                />
              </div>
            </div>
            <div className="col-span-2 h-[20rem] mxl:col-span-4">
              <div className="w-full">
                <RatioImage
                  alt="test"
                  widthRatio={1.916}
                  heightRatio={1.2}
                  src="/test.jpg"
                  className="relative"
                />
              </div>
            </div>
            <div className="col-span-2 h-[20rem] mxl:col-span-4">
              <div className="w-full">
                <RatioImage
                  alt="test"
                  widthRatio={1.916}
                  heightRatio={1.2}
                  src="/test.jpg"
                  className="relative"
                />
              </div>
            </div>
            <div className="col-span-2 h-[20rem] mxl:col-span-4">
              <div className="w-full">
                <RatioImage
                  alt="test"
                  widthRatio={1.916}
                  heightRatio={1.2}
                  src="/test.jpg"
                  className="relative"
                />
              </div>
            </div>
          </PostGrid>
        </div>
      </PageGrid>
    </>
  );
}
