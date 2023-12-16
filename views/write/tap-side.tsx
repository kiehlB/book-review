'use client';

import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useDebounce } from 'use-debounce';
import SavePost from './save-post';

export type TapProps = {
  getUser: string | null;
};

function TapSide({ getUser }: TapProps) {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 300);

  return (
    <>
      <div className="mx-2 py-4">
        <div className="relative mr-2">
          <div className="bg-[rgb(255 115 179)] absolute left-[16px] top-[50%] translate-y-[-50%]">
            <IoSearchOutline className="dark:text-[#D3D3D3]" />
          </div>
          <input
            placeholder="임시 포스트를 검색해보세요"
            name="BookSearch"
            width={'240px'}
            className="h-[40px] w-full rounded-full border-[1px] border-[#d8dae5] px-[2.5rem] py-[0.5rem] text-xs text-[#474d66] focus:outline-none dark:border-[#1a1b1e] dark:bg-dark-400 dark:text-[#e4e5e7]"
            height={40}
            onChange={e => {
              setText(e.target.value);
            }}
            value={text}
            style={{ borderRadius: '1.5rem', fontSize: '12px' }}
          />
        </div>
      </div>

      <PostContent className="sticky top-0 h-[calc(100vh-9.375rem)] min-h-[0] scrollbar scrollbar-track-gray-100 scrollbar-thumb-gray-400 scrollbar-w-1">
        <SavePost value={value} getUser={getUser} />
      </PostContent>
    </>
  );
}

export default React.memo(TapSide);

const PostContent = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar-track {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }
  .nextui-c-lfcDHB {
    padding: 0 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
`;
