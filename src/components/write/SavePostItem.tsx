import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PostIcon from '../../svg/post';
import { Popover, Pane, Button } from 'evergreen-ui';
import { getPostBody, getPostId } from '../../store/book';
import { useDispatch } from 'react-redux';
import { Post } from '../../types/apolloComponent';
import styled from 'styled-components';

export interface SavedPostItemProps {
  post: Post;
  onConfirmRemove: (e) => any;
}

function SavedPostItem({ post, onConfirmRemove }: SavedPostItemProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [IsClose, SetIsClose] = useState(true);
  const dispatch = useDispatch();

  const editUrl = `/write?id=${post.id}`;

  return (
    <div className="flex justify-between hover:bg-[#e2e8f0] py-[6px]">
      <div className="flex items-center" onClick={() => dispatch(getPostId(post.id))}>
        <div>
          <PostIcon className="w-6 cursor-pointer" />
        </div>
        <div className="ml-1">
          <SideTitle className="text-[#64748b] text-sm cursor-pointer w-[200px]">
            {post.title}
          </SideTitle>
        </div>
      </div>

      <section>
        <Popover
          content={({ close }) => (
            <Pane
              width={300}
              height={200}
              className="flex flex-col justify-center items-center">
              <div className="text-center font-bold text-lg">삭제</div>
              <div className="text-center mt-2 text-[#495057] text-sm ">
                정말 삭제 하시겠습니까?
              </div>
              <div className="text-center mt-2 text-[#495057] text-sm">
                삭제한 글은 복구할 수 없습니다.
              </div>
              <div className="flex justify-between w-[50%] mx-auto mt-4">
                <Button onClick={close}>Close</Button>
                <Button
                  className="text-red-500 shadow-2xl"
                  color="red"
                  onClick={() => {
                    onConfirmRemove(post.id);
                  }}>
                  삭제
                </Button>
              </div>
            </Pane>
          )}>
          <button className="text-[#64748b] text-sm">삭제</button>
        </Popover>
      </section>
    </div>
  );
}

export default SavedPostItem;

const SideTitle = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
