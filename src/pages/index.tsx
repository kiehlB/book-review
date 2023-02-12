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
import { useDebounce, useDebouncedCallback } from 'use-debounce';

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

      <PageLayout>
        <PageGrid as="div" className="pt-[2.25rem]">
          <MainNav className="col-span-2 mmd:hidden">
            <Navbar
              primaryItems={[
                {
                  icon: <RiBookOpenLine />,
                  text: '포스트',
                  to: '/',
                },
                {
                  icon: <RiDashboard3Line />,
                  text: '게시판',
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
          </MainNav>

          <AppLayout
            className="col-span-8 mmd:col-span-12"
            first={
              <First>
                <div className="flex justify-between items-center">
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
                  <PostCard posts={data?.recentPosts || []} loading={!data || loading} />
                </PostGrid>
              </Second>
            }
          />
        </PageGrid>
      </PageLayout>
    </>
  );
}
