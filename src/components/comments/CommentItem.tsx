import moment from 'moment';
import React from 'react';
import useBoolean from '../../hooks/useBoolean';
import { Sub } from '../../types/apolloComponent';
import CommentReplies from './CommentReplies';
import styled, { css } from 'styled-components';
import { CiCirclePlus } from 'react-icons/ci';
import { HiPlus } from 'react-icons/hi';
import { BiUpvote } from 'react-icons/bi';
import ProfileIcon from '../../svg/profile';

export type CommentItemProps = {
  comment: Sub | any;
  onRemove: any;
  isMine: boolean;
  ownComment: any;
};

const PostCommentItem = styled.div`
  padding-top: 1rem;
  & {
    border-top: 1px solid #f1f3f5;
  }
`;

function CommentItem({ comment, onRemove, isMine, ownComment }: CommentItemProps) {
  const [open, onToggleOpen] = useBoolean(false);

  return (
    <PostCommentItem className="py-1 mt-1">
      <div className="flex">
        {comment?.user?.profile?.id ? (
          <img
            src="/noImg.jpg"
            className="w-[48px] h-[48px] rounded-[50%] object-cover block mxs:w-[40px] mxs:h-[40px]"
          />
        ) : (
          <ProfileIcon className="w-[48px] h-[48px] rounded-[50%] object-cover block mxs:w-[40px] mxs:h-[40px]" />
        )}

        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <div>
              <div className="flex items-center mxs:flex-col mxs:items-baseline">
                <div className="font-bold text-[#212529] ml-2 mxs:text-sm dark:text-[#ececec]">
                  {comment.deleted ? '알 수 없음' : comment?.user?.username}
                </div>
                <div className="text-[#868E96] text-xs ml-2 dark:text-[#acacac]">
                  {moment(comment?.created_at).fromNow()}
                </div>
              </div>

              <div className="ml-2">
                <div className="mt-1 mxs:text-sm dark:text-[#ececec]">
                  {comment.deleted ? '삭제 되었습니다' : comment.text}
                </div>
                <div className="text-[#212529] text-sm mt-2 w-fit dark:text-[#ececec]">
                  <div className="flex items-center">
                    <div className="flex items-center mr-2 cursor-pointer">
                      <BiUpvote className="mr-[2px]" />

                      <div>0</div>
                    </div>
                    {!comment.deleted && comment?.level < 2 ? (
                      <div onClick={onToggleOpen}>답글</div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex text-[#868e96] text-sm h-full dark:text-[#acacac]">
            {ownComment == comment?.user?.id ? (
              <>
                <div className="mr-2 cursor-pointer">수정</div>
                <div className="cursor-pointer" onClick={() => onRemove(comment.id)}>
                  삭제
                </div>{' '}
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>

      <CommentReplies
        id={comment.id}
        onToggleOpen={onToggleOpen}
        open={open}
        isMine={isMine}
      />
    </PostCommentItem>
  );
}

export default React.memo(CommentItem);
