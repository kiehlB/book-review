import React, { useCallback, useContext, useEffect, useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import { PageLayout } from '../components/layout/PageLayout';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import PostCard from '../components/post/PostCard';
import { AppLayout, First, MainNav, Second } from '../components/layout/AppLayout';
import useGetPosts from '../components/post/hooks/useGetPosts';
import { BsTagFill } from 'react-icons/bs';
import { AiFillEdit, AiFillLike, AiFillNotification } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { CiRead } from 'react-icons/ci';

export default function Home() {
  const { data, loading } = useGetPosts();

  return (
    <>
      <NextSeo
        {...getNextSeo({ title: '내가 읽은 목록', description: '내가 읽은 포스트 목록' })}
      />

      <PageLayout>
        <PageGrid as="div" className="pt-[2rem] pb-[2rem]">
          <MainNav className="col-span-2 mmd:hidden">
            <div className="sticky top-24">
              <Navbar
                primaryItems={[
                  {
                    icon: <AiFillEdit />,
                    text: '내 정보 수정',
                    to: '/profile',
                  },
                  {
                    icon: <TfiWrite />,
                    text: '임시 글',
                    to: '/temporaryPost',
                    sub: ['/search', '/search/[query]', '/trending'],
                  },
                  {
                    icon: <RiBookOpenLine />,
                    text: '내가 쓴 글',
                    to: '/myPost',
                    sub: ['/search', '/search/[query]', '/trending'],
                  },
                  {
                    icon: <CiRead />,
                    text: '내가 읽은 목록',
                    to: '/readPost',
                    sub: ['/search', '/search/[query]', '/trending'],
                  },
                  {
                    icon: <AiFillLike />,
                    text: '좋아요 글',
                    to: '/likedPost',
                  },
                ]}
              />
            </div>
          </MainNav>

          <AppLayout
            className="col-span-8 mmd:col-span-12"
            first={
              <First>
                <div className="flex justify-between items-center my-4">
                  <div className="text-lg text-[#18191b] font-semibold pb-[0.5rem] dark:text-[#e4e5e7]">
                    읽은 목록
                  </div>
                </div>
              </First>
            }
            second={
              <Second>
                <PostGrid className="mt-[1rem]">
                  {/* <PostCard posts={data?.recentPosts || []} loading={!data || loading} /> */}
                </PostGrid>
              </Second>
            }
          />
        </PageGrid>
      </PageLayout>
    </>
  );
}
