import React, { useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import RatioImage from '../components/common/RatioImage';
import PageLayout from '../components/layout/PageLayout';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/common/Modal';
import SignUp from '../components/auth/Register';

export default function Home() {
  return (
    <>
      <PageLayout>
        <SignUp />
        <PageGrid as="div" className="pt-[36px]">
          <AppLayout.MainNav>
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
          </AppLayout.MainNav>
          <div className="col-span-8">
            <AppLayout.First>
              <div className="flex justify-between">
                <div>포스트</div>
                <HomeTab />
              </div>
            </AppLayout.First>
            <AppLayout.Second>
              <PostGrid className="mt-[1rem]">
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
                </div>
              </PostGrid>
            </AppLayout.Second>
          </div>
        </PageGrid>
      </PageLayout>
    </>
  );
}
