import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { BackLink } from '../common/ArrowButton';
import { AppLayout, First, MainNav, Second } from '../layout/AppLayout';
import { PageGrid } from '../layout/GridLayout';
import TagsForm from '../tags/TagsForm';
import CoreButton from './CoreButton';
import useCreateSavePost from './hooks/usecreateSavePost';
import ImageAdd from './ImageAdd';
import Tap from './Tap';
import TapSide from './TapSide';
import WriterHead from './WriterHeader';

export type TapProps = {};

function WriteTemplate({}: TapProps) {
  const StoreTag = useSelector((state: RootState) => state.book.tags);
  const postId = useSelector((state: RootState) => state.book.postId);

  const { posts } = useCreateSavePost();

  return (
    <PageGrid as="main">
      <MainNav className="col-span-2 sticky top-0 h-[100vh] min-h-[0] overflow-hidden border-r mxl:hidden">
        <div className="flex px-4 py-4 border-b items-center justify-center h-[4.6875rem]">
          <div className="flex item py-2 px-4">
            <BackLink href="/">
              <div className="w-[240px] text-[#334155] text-base flex items-center justify-between font-semibold pl-3 dark:text-[#D3D3D3]">
                BookReview
              </div>
            </BackLink>
          </div>
        </div>
        <TapSide />
      </MainNav>
      <AppLayout
        className="col-span-8 mxl:col-span-12"
        first={
          <First>
            <div className="flex items-center justify-between">
              <WriterHead />
              <CoreButton StoreTag={StoreTag} />
            </div>
            <div className="px-4 py-4">
              <TagsForm StoreTag={StoreTag} postId={postId} posts={posts} />
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
