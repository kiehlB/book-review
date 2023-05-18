'use client';

import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateComment, RemoveSub } from '../../../lib/graphql/comments';
import useBoolean from '../../../hooks/useBoolean';
import { RootState } from '../../../store/rootReducer';
import {
  CreateSubMutation,
  ReloadCommentsQuery,
  RemoveSubMutation,
} from '../../../types/apolloComponent';

export default function useCreateCommentWrite(postId) {
  const { auth } = useSelector((state: RootState) => state.auth);
  const [writeComment] = useMutation<CreateSubMutation>(CreateComment, {});
  const [removeComment] = useMutation<RemoveSubMutation>(RemoveSub);
  const [askRemove, onToggleAskRemove] = useBoolean(false);
  const [removeId, setRemoveId] = useState('');

  const reloadComments = useQuery<ReloadCommentsQuery>(RELOAD_COMMENTS, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      id: postId,
    },
  });
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
          post_id: postId,
          text: comment,
        },
      });
      setComment('');
      await reloadComments.refetch();

      const comments = document.querySelectorAll('.comment');
      if (comments.length === 0) return;
      const lastComment = comments.item(comments.length - 1);
      lastComment.scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  };

  const onConfirmRemove = useCallback(async () => {
    onToggleAskRemove();

    await removeComment({ variables: { id: removeId } });
    reloadComments.refetch();
  }, [onToggleAskRemove, reloadComments, removeComment, removeId]);

  const onRemove = useCallback(
    (id: string) => {
      onToggleAskRemove();
      setRemoveId(id);
    },
    [onToggleAskRemove],
  );

  return {
    onWrite,
    comment,
    onChange,
    onConfirmRemove,
    onRemove,
    askRemove,
    onToggleAskRemove,
  };
}
