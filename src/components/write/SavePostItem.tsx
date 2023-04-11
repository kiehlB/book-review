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
    <div className="flex justify-between hover:bg-[#e2e8f0] py-[6px] transition-all dark:hover:bg-[#54565f33] rounded">
      <div className="flex items-center" onClick={() => dispatch(getPostId(post.id))}>
        <div>
          <PostIcon className="w-6 cursor-pointer" />
        </div>
        <div className="ml-1">
          <SideTitle className="text-[#64748b] text-sm cursor-pointer dark:text-[#CFCFCF]">
            {post.title}
          </SideTitle>
        </div>
      </div>

      <section>
        <button onClick={onOpen} className="text-[#64748b] text-sm dark:text-[#CFCFCF]">
          삭제
        </button>
        {isOpen && (
          <div className="fixed left-0 right-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-72 shadow-2xl mxl:w-[14rem]">
              <div className="text-center font-bold text-lg mb-4">삭제</div>
              <div className="text-center text-[#495057] text-sm mb-2">
                정말 삭제 하시겠습니까?
              </div>
              <div className="text-center text-[#495057] text-sm mb-4">
                삭제한 글은 복구할 수 없습니다.
              </div>
              <div className="flex justify-between">
                <button
                  onClick={onClose}
                  className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-200">
                  Close
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
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
