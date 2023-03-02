import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsOpenSuccess, getPostTitle } from '../../store/book';
import { RootState } from '../../store/rootReducer';
import useCreateSavePost from './hooks/usecreateSavePost';
import { Button } from '../common/Button';
import useCreatePost from './hooks/useCreatePost';

export type PublishCoreButtonProps = {
  fileInputState;
  isPrivate;
  book;
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
        className="text-[#191919] font-bold border bg-[#FCd545] rounded border-[#FCd545]  shadow-sm"
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
