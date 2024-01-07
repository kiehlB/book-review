'use client';

import TapSide from './tap-side';
import CoreButton from './core-button';
import WriteHeader from './write-header';
import TagsForm from '../tags/tags-form';
import React, { useEffect, useState } from 'react';
import Tap from './tiptap';
import useBookStore from '@/store/book';
import useCreateSavePost from './hooks/use-create-save-post';
import { ToastContainer } from 'react-toastify';
import { PageGrid } from '@/components/layout/grid-layout';
import { AppLayout, First, MainNav, Second } from '@/components/layout/app-layout';
import { BackLink } from '@/components/arrow-button';
import useGetUser from '../setting/hooks/use-get-user';

export type TapProps = {};

function WriteTemplate({}: TapProps) {
  const { getUser } = useGetUser();

  const userId = getUser?.whoami?.id ?? null;

  const { tags, postId } = useBookStore(state => ({
    tags: state.tags,
    postId: state.postId,
  }));

  const { posts } = useCreateSavePost(userId);

  console.log(posts);

  return (
    <>
      <ToastContainer />
      <PageGrid as="main" className="mxl:max-w-[80rem]">
        <MainNav className="sticky top-0 col-span-2 h-[100vh] min-h-[0] overflow-hidden border-r mmd:hidden">
          <div className="flex h-[4.6875rem] items-center justify-center border-b px-4 py-4">
            <div className="item flex px-4 py-2">
              <BackLink href="/">
                <div className="flex w-[240px] items-center justify-between pl-3 font-Fredoka text-lg text-[#334155] mxl:w-[200px] dark:text-[#D3D3D3]">
                  BookReview
                </div>
              </BackLink>
            </div>
          </div>
          <TapSide getUser={userId} />
        </MainNav>
        <AppLayout
          className="col-span-8 mmd:col-span-10"
          first={
            <First>
              <div className="flex items-center justify-between">
                <WriteHeader />
                <CoreButton StoreTag={tags} getUser={userId} />
              </div>
              <div className="px-4 py-4 mxs:px-2">
                <TagsForm StoreTag={tags} postId={postId} posts={posts} />
              </div>
            </First>
          }
          second={
            <Second>
              <Tap postId={postId} posts={posts} />
            </Second>
          }
        />
      </PageGrid>
    </>
  );
}

export default React.memo(WriteTemplate);
