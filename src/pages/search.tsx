import React, { useCallback, useContext, useEffect, useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import { PageLayout } from '../components/layout/PageLayout';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import PostCard from '../components/post/PostCard';
import { AppLayout, First, MainNav, Second } from '../components/layout/AppLayout';
import useGetPosts from '../components/post/hooks/useGetPosts';
import Tags from '../components/tags/Tags';
import FloatingHeader from '../components/common/Floating';
import Header from '../components/base/Header';
import { AiFillNotification } from 'react-icons/ai';
import { BsTagFill } from 'react-icons/bs';

export default function Home() {
  const { data, loading } = useGetPosts();

  return (
    <>
      <NextSeo
        {...getNextSeo({ title: 'Book Review', description: '책 리뷰 메인 페이지' })}
      />
      <SiteLinksSearchBoxJsonLd
        url="https://www.bookreview.pro"
        potentialActions={[
          {
            target: 'https://www.bookreview.pro/search?q',
            queryInput: 'search_term_string',
          },
        ]}
      />
      <FloatingHeader>
        <Header />
      </FloatingHeader>
      <PageLayout>
        <PageGrid as="div" className="pt-[2rem] pb-[2rem]">
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
                    검색
                  </div>
                </div>
              </First>
            }
            second={
              <Second>
                <PostGrid className="mt-[1rem]">제작중</PostGrid>
              </Second>
            }
          />
        </PageGrid>
      </PageLayout>
    </>
  );
}
