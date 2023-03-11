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
import { AiFillEdit, AiFillLike, AiFillNotification } from 'react-icons/ai';
import { TfiWrite } from 'react-icons/tfi';
import { CiRead } from 'react-icons/ci';
import useGetPostsBy from '../components/post/hooks/useGetPostsBy';
import HomeTitle from '../components/home/HomeTitle';

export default function TemporaryPost() {
  const { data, loading } = useGetPostsBy({ isTemp: true });

  return (
    <>
      <NextSeo
        {...getNextSeo({ title: 'Book Review', description: '책 리뷰 메인 페이지' })}
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
                <HomeTitle title="임시 저장 글" />
              </First>
            }
            second={
              <Second>
                <PostGrid className="mt-[1rem]">
                  <PostCard posts={data?.posts || []} loading={!data || loading} />
                </PostGrid>
              </Second>
            }
          />
        </PageGrid>
      </PageLayout>
    </>
  );
}
