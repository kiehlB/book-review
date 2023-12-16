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
import useCoreStore from '@/store/core';
import { useTheme } from 'next-themes';
import { PageGrid } from '@/components/layout/grid-layout';
import { AppLayout, First, MainNav, Second } from '@/components/layout/app-layout';
import { BackLink } from '@/components/arrow-button';
import useGetUser from '../setting/hooks/use-get-user';

export type TapProps = { token: any };

function WriteTemplate({ token }: TapProps) {
  const [mounted, setMounted] = useState(false);
  const { getUser } = useGetUser(token);
  const { theme, setTheme } = useTheme();
  const { toggleDarkMode } = useCoreStore();

  useEffect(() => {
    setMounted(true);
    toggleDarkMode(theme);
  }, []);

  const { tags, postId } = useBookStore(state => ({
    tags: state.tags,
    postId: state.postId,
  }));

  const { posts } = useCreateSavePost(getUser);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <ToastContainer />
      <PageGrid as="main" className="mxl:max-w-[80rem]">
        <MainNav className="sticky top-0 col-span-2 h-[100vh] min-h-[0] overflow-hidden border-r mmd:hidden">
          <div className="flex h-[4.6875rem] items-center justify-center border-b px-4 py-4">
            <div className="item flex px-4 py-2">
              <BackLink href="/">
                <div className="flex w-[240px] items-center justify-between pl-3 font-Fredoka text-lg text-[#334155] dark:text-[#D3D3D3] mxl:w-[200px]">
                  BookReview
                </div>
              </BackLink>
            </div>
          </div>
          <TapSide getUser={getUser} />
        </MainNav>
        <AppLayout
          className="col-span-8 mmd:col-span-10"
          first={
            <First>
              <div className="flex items-center justify-between">
                <WriteHeader />
                <CoreButton StoreTag={tags} getUser={getUser} />
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
