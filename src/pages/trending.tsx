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
import { AppLayout, First, MainNav, Second } from '../components/layout/AppLayout';
import { motion, useReducedMotion } from 'framer-motion';
import Tags from '../components/tags/Tags';
import FloatingHeader from '../components/common/Floating';
import Header from '../components/base/Header';
import useGetTrendingPosts from '../components/post/hooks/useGetTrending';
import { BsTagFill } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';

export default function Recent() {
  const { data, loading } = useGetTrendingPosts();

  return (
    <>
      <NextSeo
        {...getNextSeo({
          title: 'Book Review Trading',
          description: '책 리뷰 트렌딩 페이지',
        })}
      />

      <FloatingHeader>
        <Header />
      </FloatingHeader>
      <PageLayout>
        <PageGrid as="div" className="pt-[2rem]">
          <MainNav className="col-span-2 mmd:hidden">
            <div className="sticky top-24">
              <Navbar
                primaryItems={[
                  {
                    icon: <RiBookOpenLine />,
                    text: '포스트',
                    to: '/',
                    sub: ['/search', '/search/[query]', '/trending'],
                  },
                  {
                    icon: <AiFillNotification />,
                    text: '게시판',
                    to: '/post',
                  },
                  {
                    icon: <BsTagFill />,
                    text: '태그',
                    to: '/tags',
                  },
                ]}
                secondaryItems={[
                  {
                    icon: <RiFileChartFill />,
                    text: 'Trending tags',
                    to: '/Trending tags',
                  },
                ]}
              />
              <Tags />
            </div>
          </MainNav>

          <AppLayout
            className="col-span-8 mmd:col-span-12"
            first={
              <First>
                <div className="flex justify-between items-center my-4">
                  <div className="text-lg text-[#18191b] font-semibold pb-[0.5rem] dark:text-[#e4e5e7]">
                    포스트
                  </div>
                  <HomeTab />
                </div>
              </First>
            }
            second={
              <Second>
                <PostGrid className="mt-[1rem]">
                  <PostCard
                    posts={data?.trendingPosts || []}
                    loading={!data || loading}
                  />
                </PostGrid>
              </Second>
            }
          />
        </PageGrid>
      </PageLayout>
    </>
  );
}
