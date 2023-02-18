import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateComment, GET_SubComment } from '../../../lib/graphql/comments';

export default function useCommentRepliesWrite(postId, commendId) {
  const { auth } = useSelector((state: any) => state.auth);
  const [writeComment] = useMutation(CreateComment);
  const replies = useQuery(GET_SubComment, {
    variables: {
      comment_id: commendId,
    },
  });

  const [comment, setComment] = useState('');

  const onChange = e => {
    setComment(e.target.value);
  };

  const onWrite = async () => {
    if (comment === '') return;
    if (!auth.id) {
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
      await replies.refetch();

      const comments = document.querySelectorAll('.comment');
      if (comments.length === 0) return;
      const lastComment = comments.item(comments.length - 1);
      lastComment.scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  };

  return { onWrite, comment, onChange, replies };
}
