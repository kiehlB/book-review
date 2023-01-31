import React, { useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import RatioImage from '../components/common/RatioImage';
import { PageLayout } from '../components/layout/PageLayout';
import Modal from '../components/common/Modal';
import SignUp from '../components/auth/Register';
import { NextSeo } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import AuthContainer from '../components/auth/AuthContainer';
import PostCard from '../components/post/PostCard';
import useGetPosts from '../components/post/hooks/useGetPosts';

export default function Home() {
  const { data, loading } = useGetPosts();
  return (
    <>
      <NextSeo
        {...getNextSeo({ title: 'Book Review', description: '책 리뷰 메인 페이지' })}
      />

      {/* <PageLayout>
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
              <div className="flex justify-between items-center">
                <div className="text-lg text-[#18191b] font-semibold pb-[0.5rem]">
                  포스트
                </div>
                <HomeTab />
              </div>
            </AppLayout.First>
            <AppLayout.Second>
              <PostGrid className="mt-[1rem]">
                <PostCard posts={data?.posts || []} loading={!data || loading} />
              </PostGrid>
            </AppLayout.Second>
          </main>
        </PageGrid>
      </PageLayout> */}
    </>
  );
}
