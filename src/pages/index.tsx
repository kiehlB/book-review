import React, { useContext, useEffect, useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import { PageLayout } from '../components/layout/PageLayout';
import AppLayout from '../components/layout/AppLayout';
import { NextSeo, SiteLinksSearchBoxJsonLd } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import AuthContainer from '../components/auth/AuthContainer';
import useGetPosts from '../components/post/hooks/useGetPosts';
import PostCard from '../components/post/PostCard';
import ModalContext from '../context/modalContext';
import BookTalble from '../components/booksTable';
import BookModal from '../components/booksTable/BookModal';

export default function Home() {
  const { data, loading } = useGetPosts();
  const { BookIsClose, SetBookIsClose } = useContext(ModalContext);

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
        <AuthContainer />
        <BookModal
          visible={BookIsClose}
          onClose={SetBookIsClose}
          className="flex max-w-[80rem] mx-auto w-full h-[100%] shadow-md bg-[#E9E9E9] mmd:max-w-full">
          <BookTalble />
        </BookModal>
        <PageGrid as="div" className="pt-[2.25rem]">
          <AppLayout.MainNav>
            <nav className="col-span-2 mmd:hidden">
              <Navbar
                primaryItems={[
                  {
                    icon: <RiBookOpenLine />,
                    text: 'Book',
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
          <main className="col-span-8 mmd:col-span-12">
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
      </PageLayout>
    </>
  );
}
