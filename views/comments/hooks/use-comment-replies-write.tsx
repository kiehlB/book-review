'use client';

import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { toast } from 'react-toastify';
import { useAuthStore } from '@/store/auth';
import useBoolean from '@/hooks/use-boolean';
import { CreateComment, GET_SubComment } from '@/lib/graphql/comments';
import { CreateCommentsMutation } from '@/types/apolloComponent';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

interface RepliesWriteArgs {
  postId: string;
  commendId: string;
}
export default function useCommentRepliesWrite({ postId, commendId }: RepliesWriteArgs) {
  const { auth } = useAuthStore();
  const [writing, onToggle] = useBoolean(false);
  const [writeComment] = useMutation<CreateCommentsMutation>(CreateComment);
  // const replies = useQuery<GetSubQuery>(GET_SubComment, {
  //   variables: {
  //     comment_id: commendId,
  //   },
  // });

  const [comment, setComment] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          comment_id: commendId,
        },
      });

      setComment('');
      // await replies.refetch();

      const comments = document.querySelectorAll('.comment');
      if (comments.length === 0) return;
      const lastComment = comments.item(comments.length - 1);
      lastComment.scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  };

  return { onWrite, comment, onChange, writing, onToggle };
}
