'use client';

import useBookStore from '@/store/book';
import React, { ChangeEvent, useCallback } from 'react';

export type TapProps = {};

function WriteHead({}: TapProps) {
  const { title, setTitle } = useBookStore(state => ({
    title: state.title,
    setTitle: state.setTitle,
  }));

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setTitle(value);
    },
    [setTitle],
  );

  return (
    <div className="flex w-full items-center justify-between px-[1rem] mxs:px-2">
      <div className="w-full pt-[19px] text-4xl font-bold focus:outline-none mmd:text-[2rem] mxs:text-2xl">
        <input
          name="title"
          placeholder="제목을 입력하세요"
          className="w-full focus:outline-none dark:bg-dark-500 dark:text-[#ececec] dark:placeholder-[#D3D3D3]"
          value={title}
          onChange={handleChange}
        />
        <hr className="mt-3.5 w-6/12 border dark:border-[#D3D3D3] mmd:mt-2 mxs:mt-1" />
      </div>
    </div>
  );
}

export default React.memo(WriteHead);
