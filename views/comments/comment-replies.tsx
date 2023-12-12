'use client';
import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';
import {
  CreateComment,
  GET_COMMENTS_COUNT,
  GET_SubComment,
} from '../../lib/graphql/comments';
import CommentList from './comment-list';
import CommentsWrite from './comment-write';
import { toast } from 'react-toastify';
import useDeleteComment from './hooks/use-delete-comments';
import PopUpContainer from '@/components/popup-container';
import { RELOAD_COMMENTS } from '@/lib/graphql/posts';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { GetSubCommentsQuery } from '@/types/apolloComponent';

export type CommentRepliesProps = {
  id: string;
  onToggleOpen: () => void;
  isMine: boolean;
  open: boolean;
  hasChild: boolean;
  auth: any;
};

function CommentReplies({
  id,
  onToggleOpen,
  isMine,
  open,
  hasChild,
  auth,
}: CommentRepliesProps) {
  const router = useParams();

  const { onRemove, askRemove, onConfirmRemove, onToggleAskRemove, getCommentsCount } =
    useDeleteComment({ id, hasChild });

  const replies = useSuspenseQuery(GET_SubComment, {
    variables: {
      comment_id: id,
    },
  }) as any;

  const [writeComment] = useMutation(CreateComment, {
    onCompleted({}) {
      onToggleOpen();
    },
  });

  const reloadComments = useQuery(RELOAD_COMMENTS, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      id,
    },
  });

  const [comment, setComment] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onWrite = async () => {
    if (comment === '') return;
    if (!auth) {
      toast.error('로그인이 필요합니다', {
        position: 'bottom-right',
      });
    }
    try {
      await writeComment({
        variables: {
          post_id: router?.slug,
          text: comment,
          comment_id: id,
        },
      });

      setComment('');

      await reloadComments.refetch();
      await replies.refetch();
      await getCommentsCount.refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const onCancel = () => {
    onToggleOpen();
  };

  return (
    <div>
      {open ? (
        <div className="ml-12 mt-4">
          <CommentsWrite
            comment={comment}
            onWrite={onWrite}
            onChange={onChange}
            onCancel={onCancel}
          />
        </div>
      ) : (
        ''
      )}

      <div className="ml-10 mxs:ml-6">
        <CommentList
          comments={replies?.data?.getSubComments}
          isMine={isMine}
          currentId={auth}
          onRemove={onRemove}
        />
      </div>

      <PopUpContainer
        visible={askRemove}
        title="댓글 삭제"
        onConfirm={onConfirmRemove}
        onCancel={onToggleAskRemove}>
        댓글을 삭제하시겠습니까?
      </PopUpContainer>
    </div>
  );
}

export default React.memo(CommentReplies);
