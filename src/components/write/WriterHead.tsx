import { bindActionCreators, createDraftSafeSelector } from '@reduxjs/toolkit';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostTitle } from '../../store/book';
import { RootState } from '../../store/rootReducer';

export type TapProps = {
  children;
};

function WriteHead({ children }: TapProps) {
  const title = useSelector((state: RootState) => state.book.title);
  const dispatch = useDispatch();

  const handleChange = useCallback(
    e => {
      const { value } = e.target;
      dispatch(getPostTitle(value));
    },
    [dispatch],
  );

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

      {children}
    </div>
  );
}

export default React.memo(WriteHead);
