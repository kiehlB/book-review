import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import PostIcon from '../../svg/post';
import { getPostBody, getPostId } from '../../store/book';
import { useDispatch } from 'react-redux';
import { Post } from '../../types/apolloComponent';
import styled from 'styled-components';

export interface SavedPostItemProps {
  post: Post;
  onConfirmRemove: (e) => any;
  isOpen;
  onOpen;
  onClose;
}

function SavedPostItem({
  post,
  onConfirmRemove,
  isOpen,
  onOpen,
  onClose,
}: SavedPostItemProps) {
  const dispatch = useDispatch();

  const editUrl = `/write?id=${post.id}`;

  return (
    <div className="flex justify-between rounded px-1 py-[6px] transition-all hover:bg-[#e2e8f0] dark:hover:bg-[#54565f33]">
      <div className="flex items-center" onClick={() => dispatch(getPostId(post.id))}>
        <div>
          <PostIcon className="w-6 cursor-pointer" />
        </div>
        <div className="ml-1">
          <SideTitle className="cursor-pointer text-sm text-[#64748b] dark:text-[#CFCFCF]">
            {post.title}
          </SideTitle>
        </div>
      </div>

      <section>
        <button onClick={onOpen} className="text-sm text-[#64748b] dark:text-[#CFCFCF]">
          삭제
        </button>
        {isOpen && (
          <div className="fixed left-0 right-0 z-50 flex items-center justify-center">
            <div className="w-[17.5rem] rounded-lg bg-white p-6 shadow-2xl mxl:w-[14rem]">
              <div className="mb-4 text-center text-lg font-bold">삭제</div>
              <div className="mb-2 text-center text-sm text-[#495057]">
                정말 삭제 하시겠습니까?
              </div>
              <div className="mb-4 text-center text-sm text-[#495057]">
                삭제한 글은 복구할 수 없습니다.
              </div>
              <div className="flex justify-between">
                <button
                  onClick={onClose}
                  className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 transition duration-200 hover:bg-gray-400">
                  Close
                </button>
                <button
                  className="rounded-lg bg-red-500 px-4 py-2 text-white shadow-md transition duration-200 hover:bg-red-600"
                  onClick={() => {
                    onConfirmRemove(post.id);
                    dispatch(getPostId(null));
                  }}>
                  삭제
                </button>
              </div>
            </div>
          </div>
        )}
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
