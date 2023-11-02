import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookInfo, getIsOpenSuccess, getPostTitle } from '../../store/book';
import { RootState } from '../../store/rootReducer';
import { Button } from '../button';
import useCreatePost from './hooks/use-create-post';

export type PublishCoreButtonProps = {
  fileInputState: string;
  isPrivate: boolean;
  book: BookInfo;
};

function PublishCoreButton({ fileInputState, isPrivate, book }: PublishCoreButtonProps) {
  const body = useSelector((state: RootState) => state.book.body);
  const tags = useSelector((state: RootState) => state.book.tags);
  const postId = useSelector((state: RootState) => state.book.postId);
  const title = useSelector((state: RootState) => state.book.title);
  const thumbnail = useSelector((state: RootState) => state.book.thumbnail);

  const { handleSubmit } = useCreatePost();

  const dispatch = useDispatch();

  return (
    <div className="flex justify-end ">
      <Button
        size="medium"
        className="font-bold text-[#191919]"
        onClick={() => dispatch(getIsOpenSuccess())}>
        취소
      </Button>
      <Button
        size="medium"
        className="rounded border border-[#FCd545] bg-[#FCd545] font-bold text-[#191919]  shadow-sm"
        onClick={e => {
          handleSubmit(
            e,
            postId,
            title,
            body,
            tags,
            fileInputState,
            isPrivate,
            book,
            thumbnail,
          );
        }}>
        작성 완료
      </Button>
    </div>
  );
}

export default React.memo(PublishCoreButton);
