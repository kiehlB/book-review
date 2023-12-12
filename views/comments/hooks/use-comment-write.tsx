'use client';

import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { toast } from 'react-toastify';
import { useAuthStore } from '@/store/auth';
import useBoolean from '@/hooks/use-boolean';
import {
  CreateCommentsMutation,
  Maybe,
  ReloadCommentsQuery,
  RemoveCommentsMutation,
} from '@/types/apolloComponent';
import { CreateComment, RemoveComments } from '@/lib/graphql/comments';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default function useCreateCommentWrite(postId: string) {
  const { auth } = useAuthStore();

  const [writeComment] = useMutation<CreateCommentsMutation>(CreateComment, {});
  const [removeComment] = useMutation<RemoveCommentsMutation>(RemoveComments);
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

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
