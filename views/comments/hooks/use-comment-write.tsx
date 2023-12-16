'use client';

import { useApolloClient, useMutation } from '@apollo/client';
import { startTransition, useCallback, useState } from 'react';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { toast } from 'react-toastify';
import useBoolean from '@/hooks/use-boolean';
import {
  CreateCommentsMutation,
  Maybe,
  ReloadCommentsQuery,
  RemoveCommentsMutation,
} from '@/types/apolloComponent';
import { CreateComment, RemoveComments } from '@/lib/graphql/comments';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

export default function useCreateCommentWrite(
  postId: string,
  handleRefetch: () => void,
  currentId: string | undefined,
) {
  const [writeComment] = useMutation<CreateCommentsMutation>(CreateComment, {});
  const [removeComment] = useMutation<RemoveCommentsMutation>(RemoveComments);
  const [askRemove, onToggleAskRemove] = useBoolean(false);
  const [removeId, setRemoveId] = useState('');

  const [comment, setComment] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const onWrite = async () => {
    if (comment === '') return;
    if (!currentId) {
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
      startTransition(() => {
        handleRefetch();
        const comments = document.querySelectorAll('.comment');
        if (comments.length === 0) return;
        const lastComment = comments.item(comments.length - 1);
        lastComment.scrollIntoView();
      });
    } catch (e) {
      console.log(e);
    }
  };

  const onConfirmRemove = useCallback(async () => {
    onToggleAskRemove();
    startTransition(() => {
      handleRefetch();
    });
    await removeComment({ variables: { id: removeId } });
  }, [onToggleAskRemove, removeComment, removeId]);

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
