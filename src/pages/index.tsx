import React, { useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import RatioImage from '../components/common/RatioImage';
import { PageLayout } from '../components/layout/PageLayout';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/common/Modal';
import { NextSeo } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import AuthContainer from '../components/auth/AuthContainer';

export default function Home() {
  return (
    <>
      <NextSeo
        {...getNextSeo({ title: 'Book Review', description: '책 리뷰 메인 페이지' })}
      />
      <PageLayout>
        <AuthContainer />
        <PageGrid as="div" className="pt-[36px]">
          <AppLayout.MainNav>
            <nav className="col-span-2">
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
            </nav>
          </AppLayout.MainNav>
          <main className="col-span-8">
            <AppLayout.First>
              <div className="flex justify-between pt-[1.5rem]">
                <div className="text-lg text-[#18191b] font-semibold pb-[0.5rem]">
                  포스트
                </div>
                <HomeTab />
              </div>
            </AppLayout.First>
            <AppLayout.Second>
              <PostGrid className="mt-[1rem]">
                <div className="col-span-2 h-[20rem] mxl:col-span-4">
                  <div className="w-full">
                    <RatioImage
                      alt="test"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />
                    <div className="text-[#121212] font-semibold leading-6 text-lg py-[1rem]">
                      타이틀
                    </div>
                    <div className="text-[#2E2E2E] text-sm pb-[1rem]">바디</div>
                    <div className="flex justify-between">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>by 웅</div>
                        <div>2 개월전</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 h-[20rem] mxl:col-span-4">
                  <div className="w-full">
                    <RatioImage
                      alt="test"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />
                    <div>텍스트</div>
                  </div>
                </div>
                <div className="col-span-2 h-[20rem] mxl:col-span-4">
                  <div className="w-full">
                    <RatioImage
                      alt="test"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />
                    <div>텍스트</div>
                  </div>
                </div>
                <div className="col-span-2 h-[20rem] mxl:col-span-4">
                  <div className="w-full">
                    <RatioImage
                      alt="test"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />
                    <div>텍스트</div>
                  </div>
                </div>
                <div className="col-span-2 h-[20rem] mxl:col-span-4">
                  <div className="w-full">
                    <RatioImage
                      alt="test"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />
                    <div>텍스트</div>
                  </div>
                </div>
              </PostGrid>
            </AppLayout.Second>
          </main>
        </PageGrid>
      </PageLayout>
    </>
  );
}
