import React from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import { PageLayout } from '../components/layout/PageLayout';
import PostCard from '../components/post/PostCard';
import { AppLayout, First, MainNav, Second } from '../components/layout/AppLayout';
import Tags from '../components/tags/Tags';
import { BsTagFill } from 'react-icons/bs';
import { AiFillNotification } from 'react-icons/ai';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineLocalFireDepartment } from 'react-icons/md';
import HomeTitle from '../components/home/HomeTitle';
import { GetServerSideProps } from 'next';
import { initializeApollo } from '../lib/apolloClient';
import { Post } from '../types/apolloComponent';
import { GET_recentPosts } from '../lib/graphql/posts';
import Head from 'next/head';

export default function Home({ post }) {
  return (
    <>
      <Head>
        <title>Book Reivew</title>
        <meta
          name="description"
          content="책 리뷰를 작성해 보세요 여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요."
        />
        <meta name="og:title" content="Book review Main" />
        <meta
          name="og:description"
          content="책 리뷰를 작성해 보세요 여러분들이 읽은 책의 소감과 감상을 공유하고, 다른 사람들의 서평도 함께 읽어보세요."
        />
      </Head>
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
                <HomeTitle
                  title="포스트"
                  primaryItems={[
                    {
                      svg: <IoMdTime />,
                      name: '최신',
                      href: '/',
                    },
                    {
                      svg: <MdOutlineLocalFireDepartment />,
                      name: '트렌딩',
                      href: '/trending',
                    },
                  ]}
                />
              </First>
            }
            second={
              <Second>
                <PostGrid className="mt-[1rem]">
                  <PostCard
                    posts={post?.data?.recentPosts || []}
                    loading={!post?.data || post?.loading}
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

export const getServerSideProps: GetServerSideProps = async () => {
  const client = initializeApollo();

  const postData = await client.query<{ recentPosts: Post[] }>({
    query: GET_recentPosts,
    variables: { limit: 24 },
  });

  return { props: { post: postData } };
};
