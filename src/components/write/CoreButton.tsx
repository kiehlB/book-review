import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsOpenSuccess, getPostTitle } from '../../store/book';
import { RootState } from '../../store/rootReducer';
import useCreateSavePost from './hooks/usecreateSavePost';

export type TapProps = {};

function CoreButton({}: TapProps) {
  const { onConfirmSave, posts, loading } = useCreateSavePost();
  const body = useSelector((state: RootState) => state.book.body);
  const tags = useSelector((state: RootState) => state.book.tags);
  const postId = useSelector((state: RootState) => state.book.postId);
  const title = useSelector((state: RootState) => state.book.title);
  const book = useSelector((state: RootState) => state.book.book);

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div
        onClick={() => onConfirmSave(postId, title, body, tags, book)}
        className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] mr-4 cursor-pointer">
        saved
      </div>
      <div
        onClick={() => dispatch(getIsOpenSuccess())}
        className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer">
        publish
      </div>
    </div>
  );
}

export default React.memo(CoreButton);
