import React, { useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import RatioImage from '../components/common/RatioImage';
import { TestPageLayout } from '../components/layout/PageLayout';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/common/Modal';
import SignUp from '../components/auth/Register';

export default function Test() {
  return (
    <>
      <TestPageLayout>
        <SignUp />
        <div className="flex">
          <AppLayout.MainNav>
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
          </AppLayout.MainNav>
          <div className="max-w-[1680px] w-full ml-auto">
            <div className="max-w-[1504px] w-full mx-auto">
              <AppLayout.First>
                <div className="flex justify-between pt-[1rem] items-center">
                  <div className="text-2xl text-[#18191b] font-semibold pb-[0.5rem]">
                    Post
                  </div>
                  <HomeTab />
                </div>
              </AppLayout.First>
              <AppLayout.Second>
                <div className="grid grid-cols-12 gap-[21.4px] mt-[1rem]">
                  <div className="col-span-3 h-[22rem] mxl:col-span-4">
                    <div className="w-full">
                      <RatioImage
                        alt="test"
                        widthRatio={1.777854602923746}
                        heightRatio={1}
                        src="/test.jpg"
                        className="relative"
                      />
                      <div>텍스트</div>
                    </div>
                  </div>
                  <div className="col-span-3 h-[22rem] mxl:col-span-4">
                    <div className="w-full">
                      <RatioImage
                        alt="test"
                        widthRatio={1.777854602923746}
                        heightRatio={1}
                        src="/test.jpg"
                        className="relative"
                      />
                      <div>텍스트</div>
                    </div>
                  </div>
                  <div className="col-span-3 h-[22rem] mxl:col-span-4">
                    <div className="w-full">
                      <RatioImage
                        alt="test"
                        widthRatio={1.777854602923746}
                        heightRatio={1}
                        src="/test.jpg"
                        className="relative"
                      />
                      <div>텍스트</div>
                    </div>
                  </div>
                  <div className="col-span-3 h-[22rem] mxl:col-span-4">
                    <div className="w-full">
                      <RatioImage
                        alt="test"
                        widthRatio={1.777854602923746}
                        heightRatio={1}
                        src="/test.jpg"
                        className="relative"
                      />
                      <div>텍스트</div>
                    </div>
                  </div>
                  <div className="col-span-3 h-[22rem] mxl:col-span-4">
                    <div className="w-full">
                      <RatioImage
                        alt="test"
                        widthRatio={1.777854602923746}
                        heightRatio={1}
                        src="/test.jpg"
                        className="relative"
                      />
                      <div>텍스트</div>
                    </div>
                  </div>
                  <div className="col-span-3 h-[22rem] mxl:col-span-4">
                    <div className="w-full">
                      <RatioImage
                        alt="test"
                        widthRatio={1.777854602923746}
                        heightRatio={1}
                        src="/test.jpg"
                        className="relative"
                      />
                      <div>텍스트</div>
                    </div>
                  </div>
                </div>
              </AppLayout.Second>
            </div>
          </div>
        </div>
      </TestPageLayout>
    </>
  );
}
