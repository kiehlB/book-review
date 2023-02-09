import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostTitle } from '../../store/book';
import { RootState } from '../../store/rootReducer';

export type TapProps = {};

function WriteHead({}: TapProps) {
  const title = useSelector((state: RootState) => state.book.title);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    e => {
      const { value } = e.target;
      dispatch(getPostTitle(value));
    },
    [dispatch],
  );

  console.log('제목');

  return (
    <div className="flex justify-between items-center px-[1rem]">
      <div className="text-4xl font-bold focus:outline-none w-full mmd:text-[2rem] pt-[2rem] mxs:text-lg">
        <input
          name="title"
          placeholder="제목을 입력하세요"
          className="w-full"
          value={title}
          onChange={handleChange}
        />
        <hr className="border-2 w-6/12 mt-3.5 h-1" />
      </div>

      {/* <div className="flex">
            <div
              onClick={() => onConfirmSave(postId, title, body, tags)}
              className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] mr-4 cursor-pointer">
              saved
            </div>
            <div
              className="text-sm font-medium px-[20px] py-[10px] rounded-3xl bg-[#FCD535] text-[#181A20] cursor-pointer"
              onClick={() => SetisOpen(!isOpen)}>
              publish
            </div>
          </div> */}
    </div>
  );
}

export default React.memo(WriteHead);
