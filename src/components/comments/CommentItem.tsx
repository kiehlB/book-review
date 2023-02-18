import moment from 'moment';
import React from 'react';
import useBoolean from '../../hooks/useBoolean';
import { Sub } from '../../types/apolloComponent';
import CommentReplies from './CommentReplies';
import styled, { css } from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';
import { HiPlus } from 'react-icons/hi';
import { BiUpvote } from 'react-icons/bi';

export type CommentItemProps = {
  comment: Sub | any;
  onRemove: any;
};

const PostCommentItem = styled.div`
  padding-top: 1rem;
  & + & {
    border-top: 1px solid #f1f3f5;
  }
`;

function CommentItem({ comment, onRemove }: CommentItemProps) {
  const [open, onToggleOpen] = useBoolean(false);

  return (
    <PostCommentItem className="py-1 mt-1">
      <div className="flex">
        <img
          src="/test.jpg"
          className="w-[48px] h-[48px] rounded-[50%] object-cover block"
        />

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
                <div className="font-bold text-[#212529] ml-2">
                  {comment?.user?.username}
                </div>
                <div className="text-[#868E96] text-xs ml-2 ">
                  {moment(comment?.created_at).fromNow()}
                </div>
              </div>

              <div className="ml-2">
                <div className="mt-1">{comment.text}</div>
                <div className="text-[#212529] text-sm mt-2 w-fit" onClick={onToggleOpen}>
                  <div className="flex items-center">
                    <div className="flex items-center mr-2">
                      <BiUpvote className="mr-[2px]" />

                      <div>0</div>
                    </div>

                    <div>답글</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex text-[#868e96] text-sm h-full">
            <div className="mr-2">수정</div>
            <div onClick={() => onRemove(comment.id)}>삭제</div>
          </div>
        </div>
      </div>

      <CommentReplies id={comment.id} onToggleOpen={onToggleOpen} open={open} />
    </PostCommentItem>
  );
}

export default React.memo(CommentItem);
