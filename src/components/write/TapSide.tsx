import { SearchInput } from 'evergreen-ui';
import React, { useEffect, useRef, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useDebounce } from 'use-debounce';
import Modal from '../common/Modal';
import SavePost from './SavePost';

export type TapProps = { isEditing: any; setEditing: any };

function TapSide({ isEditing, setEditing }: TapProps) {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 0);

  return (
    <>
      <div className="py-4 mx-2">
        <div className="relative">
          <div className="absolute top-[50%] left-[16px] translate-y-[-50%] bg-[rgb(255 115 179)] dark:text-[#e4e5e7] ">
            <IoSearchOutline />
          </div>
          <input
            placeholder="임시 포스트를 검색해보세요"
            name="BookSearch"
            width={'240px'}
            className="text-xs border-[#d8dae5] text-[#474d66] w-full rounded-full h-[40px] border-[1px] py-[0.5rem] px-[2.5rem] focus:outline-none dark:bg-[#2b3139] dark:border-[#1a1b1e] dark:text-[#e4e5e7]"
            height={40}
            onChange={e => {
              setText(e.target.value);
            }}
            value={text}
            style={{ borderRadius: '1.5rem', fontSize: '12px' }}
          />
        </div>
      </div>

      <PostContent className="sticky top-0 h-[calc(100vh-9.375rem)] min-h-[0] scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-1">
        <SavePost value={value} isEditing={isEditing} setEditing={setEditing} />
      </PostContent>
    </>
  );
}

export default React.memo(TapSide);

const Content = styled.div<{ isDark: string }>`
  p {
    color: ${props => (props.isDark == 'dark' ? 'blue' : 'red')};
  }
`;

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
    padding-top:0.5rem;
    padding-bottom:0.5rem;
`;
