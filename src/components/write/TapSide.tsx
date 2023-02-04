import { SearchInput } from 'evergreen-ui';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDebounce } from 'use-debounce';
import SavePost from './SavePost';

export type TapProps = {};

function TapSide({}: TapProps) {
  const [text, setText] = useState('');
  const [value] = useDebounce(text, 500);

  return (
    <>
      <div className="p-4">
        <SearchInput
          placeholder="임시 포스트를 검색해보세요"
          name="BookSearch"
          width={'240px'}
          className="text-xs"
          height={40}
          onChange={e => {
            setText(e.target.value);
          }}
          value={text}
          style={{ borderRadius: '1.5rem', fontSize: '12px' }}
        />
      </div>

      <PostContent className="sticky top-0 h-[calc(100vh-9.375rem)] min-h-[0] scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100 scrollbar-w-1">
        <SavePost value={value} />
      </PostContent>
    </>
  );
}

export default TapSide;

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
`;
