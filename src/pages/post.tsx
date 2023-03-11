import React, { useCallback, useContext, useEffect, useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import { PageLayout } from '../components/layout/PageLayout';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import { AppLayout, First, MainNav, Second } from '../components/layout/AppLayout';
import Tags from '../components/tags/Tags';
import { AiFillNotification } from 'react-icons/ai';
import { BsTagFill } from 'react-icons/bs';
import HomeTitle from '../components/home/HomeTitle';

export default function Post() {
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
                <HomeTitle title="자유게시판" />
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
