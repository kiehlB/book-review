import { useMutation, useQuery } from '@apollo/client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import useBoolean from '../../hooks/useBoolean';
import {
  CreateComment,
  GET_COMMENTS_COUNT,
  GET_SubComment,
} from '../../lib/graphql/comments';
import CommentList from './comment-list';
import CommentsWrite from './comment-write';
import useDeleteComment from './hooks/useDeleteSub';
import { toast } from 'react-toastify';
import { RootState } from '../../store/rootReducer';
import PopUpContainer from '../popup-container';

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
  const router = useParams();

  const { onRemove, askRemove, onConfirmRemove, onToggleAskRemove, getCommentsCount } =
    useDeleteComment(id, hasChild);

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
          post_id: router?.slug,
          text: comment,
          comment_id: id,
        },
      });

      setComment('');

      // await reloadComments.refetch();
      await replies.refetch();
      await getCommentsCount.refetch();
    } catch (e) {
      console.log(e);
    }
  };

  const onCancel = () => {
    onToggleOpen();
  };

  if (replies.loading) return null;
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
