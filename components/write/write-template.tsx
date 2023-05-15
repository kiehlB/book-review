'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import useCreateSavePost from './hooks/usecreateSavePost';
import Tap from './Tap';
import TapSide from './tap-side';
import WriterHead from './WriterHeader';
import { PageGrid } from '../layout/grid-layout';
import { AppLayout, First, MainNav, Second } from '../layout/app-layout';
import { BackLink } from '../arrow-button';
import CoreButton from './core-button';

export type TapProps = {};

function WriteTemplate({}: TapProps) {
  const StoreTag = useSelector((state: RootState) => state.book.tags);
  const postId = useSelector((state: RootState) => state.book.postId);

  const { posts } = useCreateSavePost();

  return (
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
        <TapSide />
      </MainNav>
      <AppLayout
        className="col-span-8 mmd:col-span-10"
        first={
          <First>
            <div className="flex items-center justify-between">
              <WriterHead />
              <CoreButton StoreTag={StoreTag} />
            </div>
            <div className="px-4 py-4 mxs:px-2">
              {/* <TagsForm StoreTag={StoreTag} postId={postId} posts={posts} /> */}
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
  );
}

export default React.memo(WriteTemplate);
