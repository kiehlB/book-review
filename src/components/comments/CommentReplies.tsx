import { useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useBoolean from '../../hooks/useBoolean';
import { CreateComment, GET_SubComment } from '../../lib/graphql/comments';
import { RELOAD_COMMENTS } from '../../lib/graphql/posts';
import PopUpContainer from '../common/PopupContainer';
import CommentList from './CommentList';
import CommentsWrite from './CommentWrite';
import useCommentRepliesWrite from './hooks/useCommentRepliesWrite';
import useDeleteComment from './hooks/useDeleteSub';
import { toast } from 'react-toastify';
import { RootState } from '../../store/rootReducer';

export type CommentRepliesProps = {
  id: string;
  onToggleOpen: () => void;
  isMine: boolean;
  open: boolean;
  hasChild: boolean;
};

function CommentReplies({
  id,
  onToggleOpen,
  isMine,
  open,
  hasChild,
}: CommentRepliesProps) {
  const router = useRouter();

  const { onRemove, askRemove, onConfirmRemove, onToggleAskRemove } = useDeleteComment(
    id,
    hasChild,
  );

  const replies = useQuery(GET_SubComment, {
    variables: {
      comment_id: id,
    },
    skip: hasChild ? false : true,
  });

  const { auth } = useSelector((state: RootState) => state.auth);

  const [writeComment] = useMutation(CreateComment, {
    onCompleted({}) {
      onToggleOpen();
    },
  });

  // const reloadComments = useQuery(RELOAD_COMMENTS, {
  //   skip: true,
  //   fetchPolicy: 'network-only',
  //   variables: {
  //     id: router?.query?.id,
  //   },
  // });

  const [comment, setComment] = useState('');

  const onChange = e => {
    setComment(e.target.value);
  };

  const onWrite = async () => {
    if (comment === '') return;
    if (!auth?.id) {
      toast.error('로그인이 필요합니다', {
        position: 'bottom-right',
      });
    }
    try {
      await writeComment({
        variables: {
          post_id: router?.query?.id,
          text: comment,
          comment_id: id,
        },
      });

      setComment('');

      // await reloadComments.refetch();
      await replies.refetch();

      const comments = document.querySelectorAll('.comment');
      if (comments.length === 0) return;
      const lastComment = comments.item(comments.length - 1);
      lastComment.scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  };

  const onCancel = () => {
    onToggleOpen();
  };

  if (replies.loading) return;
  return (
    <div>
      {open ? (
        <div className="mt-4 ml-12">
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
          comments={replies?.data?.getSub?.replies}
          isMine={isMine}
          currentId={auth?.id}
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
