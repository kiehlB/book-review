import React, { useContext, useEffect, useState } from 'react';
import { PageGrid, PostGrid } from '../components/layout/GridLayout';
import Navbar from '../components/navbar';
import { RiBookOpenLine } from 'react-icons/ri';
import { RiDashboard3Line } from 'react-icons/ri';
import { RiFileChartFill } from 'react-icons/ri';
import HomeTab from '../components/home/HomeTab';
import { PageLayout } from '../components/layout/PageLayout';
import AppLayout from '../components/layout/AppLayout';
import Modal from '../components/common/Modal';
import { NextSeo } from 'next-seo';
import { getNextSeo } from '../lib/nextSeo';
import AuthContainer from '../components/auth/AuthContainer';
import useGetPosts from '../components/post/hooks/useGetPosts';
import PostCard from '../components/post/PostCard';
import ModalContext from '../context/modalContext';
import BookTalble from '../components/booksTable';
import RatioImage from '../components/common/RatioImage';

export default function Home() {
  const { data, loading } = useGetPosts();
  const { BookIsClose, SetBookIsClose } = useContext(ModalContext);

  return (
    <>
      <NextSeo
        {...getNextSeo({ title: 'Book Review', description: '책 리뷰 메인 페이지' })}
      />

      <PageLayout>
        <AuthContainer />
        <Modal
          visible={BookIsClose}
          onClose={SetBookIsClose}
          className="max-w-[78.5rem] mx-auto w-full h-[100%] flex shadow-md bg-[#E9E9E9]">
          <BookTalble />
        </Modal>
        <PageGrid as="div" className="pt-[2.25rem]">
          <AppLayout.MainNav>
            <nav className="col-span-2">
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
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/noimg.jpg"
                      className="relative bg-slate-400"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/noimg.jpg"
                      className="relative bg-slate-400"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/noimg.jpg"
                      className="relative bg-slate-400"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/noimg.jpg"
                      className="relative bg-slate-400"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mxl:col-span-4">
                  <div className="flex flex-1 flex-col">
                    <RatioImage
                      alt="img"
                      widthRatio={1.644444444444444}
                      heightRatio={1}
                      src="/test.jpg"
                      className="relative"
                    />

                    <div className="flex justify-between items-center">
                      <div className="pt-[0.5rem] text-[#495057] font-semibold text-[0.8125rem]">
                        파인만 씨 농담도 잘하시네
                      </div>
                    </div>

                    {/* /{post.title} */}
                    <div className="text-[#212529] font-semibold text-base m-0 mb-[0.25rem] leading-normal mt-2">
                      파인만 농담 독후감
                    </div>

                    <div className="text-[13px] mt-1">
                      디자인 시스템을 만드는 과정에서 다른 디자인 시스템들을 참고하기
                      위하여 검색하고, 원하는 컴포넌트로 스크롤해서 원하는
                    </div>

                    <div className="flex justify-between mt-4 leading-normal">
                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>좋아요 4개</div>
                        <div>댓글 5개</div>
                      </div>

                      <div className="flex text-[#121212] font-semibold text-xs">
                        <div>2023.01.12</div>
                      </div>
                    </div>
                  </div>
                </div>
              </PostGrid>
            </AppLayout.Second>
          </main>
        </PageGrid>
      </PageLayout>
    </>
  );
}
