import React, { useCallback, useContext, useEffect, useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { PageLayout } from '../components/layout/PageLayout';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import { AppLayout, First, MainNav, Second } from '../components/layout/AppLayout';
import { AiFillEdit, AiFillLike, AiFillNotification } from 'react-icons/ai';
import SettingCard from '../components/setting/SettingInfoCard';
import HomeTitle from '../components/home/HomeTitle';

export default function Setting() {
  return (
    <>
      <NextSeo {...getNextSeo({ title: '셋팅', description: '책 리뷰 셋팅' })} />

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
                    icon: <RiBookOpenLine />,
                    text: '내가 쓴 글',
                    to: '/myPost',
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
                <HomeTitle title="내 정보 설정" />
              </First>
            }
            second={
              <Second>
                <SettingCard />
              </Second>
            }
          />
        </PageGrid>
      </PageLayout>
    </>
  );
}
