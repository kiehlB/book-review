'use client';

import React, { useEffect, useState } from 'react';
import CommentReplies from './comment-replies';
import styled, { css } from 'styled-components';
import CommentEdit from './comment-edit';
import { formatDate } from '../../lib/utils';
import Image from 'next/image';
import { LiaComments } from 'react-icons/lia';
import clsx from 'clsx';
import useBoolean from '@/hooks/use-boolean';
import { ProfileIcon } from '@/components/icons';
import { Comments, Maybe } from '@/types/apolloComponent';
import { shortenID } from '@/lib/temporary-id';

export type CommentItemProps = {
  comment: Maybe<Comments>;
  onRemove: (id: string) => void;
  isMine: boolean;
  ownComment: string | undefined;
  getId: (id: string) => void;
  onLikeToggle: (id: string) => void;
  handleRefetch: () => void;
};

const PostCommentItem = styled.div`
  padding-top: 1rem;
  & {
    border-top: 1px solid #f1f3f5;
  }
`;

function CommentItem({
  comment,
  onRemove,
  isMine,
  ownComment,
  getId,
  onLikeToggle,
  handleRefetch,
}: CommentItemProps) {
  const [open, onToggleOpen] = useBoolean(false);
  const [editing, onToggleEditing] = useBoolean(false);
  const username =
    comment?.user?.profile?.profile_name ||
    comment?.user?.username ||
    shortenID(comment?.user?.id || '');
  return (
    <PostCommentItem className="comment mt-1 py-1">
      <div className="flex">
        {comment?.user?.profile?.thumbnail ? (
          <Image
            src={comment?.user?.profile?.thumbnail}
            alt="Profile thumbnail"
            width={48}
            height={48}
            className="block h-[48px] w-[48px] rounded-full object-cover mxs:h-[40px] mxs:w-[40px]"
          />
        ) : (
          <ProfileIcon className="block h-[48px] w-[48px] rounded-[50%] object-cover mxs:h-[40px] mxs:w-[40px]" />
        )}

        <div className="flex w-full items-center justify-between">
          <div className="flex w-full items-center">
            <div className="w-full">
              <div className="flex w-full items-center justify-between mxs:flex-col mxs:items-baseline">
                <div className="flex items-center">
                  <h3 className="ml-2 font-bold text-[#212529] dark:text-[#ececec] mxs:text-sm">
                    {comment && comment.deleted !== undefined && comment.deleted
                      ? '알 수 없음'
                      : username}
                  </h3>
                  <p
                    className={clsx('text-xs text-[#868E96] dark:text-[#acacac]', {
                      'ml-1': comment?.level ?? 0,
                    })}>
                    {formatDate(comment?.created_at)}
                  </p>
                </div>

                <div className="flex h-full text-sm text-[#868e96] dark:text-[#acacac] mxs:px-2">
                  {ownComment == comment?.user?.id && !comment?.deleted ? (
                    <>
                      <span onClick={onToggleEditing} className="mr-2 cursor-pointer">
                        수정
                      </span>
                      <span
                        className="cursor-pointer"
                        onClick={() => comment && onRemove(comment.id)}>
                        삭제
                      </span>
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div className="ml-2 w-[100%]">
                <div className="mt-1 dark:text-[#ececec] mxs:text-sm">
                  {editing ? (
                    <CommentEdit
                      id={comment?.id ?? ''}
                      defaultText={comment?.text || ''}
                      onCancel={onToggleEditing}
                    />
                  ) : comment?.deleted ? (
                    '삭제 되었습니다'
                  ) : (
                    comment?.text ?? ''
                  )}
                </div>
                <div className="mt-2 w-fit text-sm text-[#212529] dark:text-[#ececec]">
                  <div className="flex items-center">
                    <div className="flex cursor-pointer items-center">
                      {/* <div
                        className="flex items-center"
                        onClick={async () => {
                          getId(comment.id);
                          onLikeToggle(comment.id);
                        }}>
                        <BiUpvote className="mr-[3px]" />

                        <span>{comment?.upvotes}</span>
                      </div> */}
                    </div>

                    {!comment?.deleted && (comment?.level ?? 0) < 2 ? (
                      <div
                        onClick={onToggleOpen}
                        className="flex cursor-pointer  items-center">
                        <div className="mr-1">
                          <LiaComments size={16} />
                        </div>
                        <div>답글</div>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommentReplies
        id={comment?.id}
        handleRefetch={handleRefetch}
        onToggleOpen={onToggleOpen}
        isMine={isMine}
        open={open}
        hasChild={comment?.has_replies}
        auth={ownComment}
      />
    </PostCommentItem>
  );
}

export default React.memo(CommentItem);
