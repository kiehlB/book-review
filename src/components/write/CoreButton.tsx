import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getIsOpenSuccess,
  getPostBody,
  getPostSaveSuccess,
  getPostTitle,
} from '../../store/book';
import { RootState } from '../../store/rootReducer';
import useCreateSavePost from './hooks/usecreateSavePost';

export type TapProps = {
  StoreTag: string[];
};

function CoreButton({ StoreTag }: TapProps) {
  const { onConfirmSave, posts, loading } = useCreateSavePost();
  const body = useSelector((state: RootState) => state.book.body);

  const postId = useSelector((state: RootState) => state.book.postId);
  const title = useSelector((state: RootState) => state.book.title);
  const book = useSelector((state: RootState) => state.book.book);
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const handleClick = async () => {
    onConfirmSave(postId, title, body, StoreTag, book);
  };

  const handleTouchStart = () => {
    dispatch(getPostSaveSuccess());

    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div className="flex">
      <div
        onMouseOver={() => handleTouchStart()}
        onMouseOut={() => handleTouchEnd()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={handleClick}
        className="text-sm px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] hover:text-[#545b6d] mr-4 cursor-pointer ssm:mr-1">
        saved
      </div>
      <div
        onClick={() => dispatch(getIsOpenSuccess())}
        className="text-sm px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] hover:text-[#545b6d] cursor-pointer mr-1">
        publish
      </div>
    </div>
  );
}

export default React.memo(CoreButton);
