import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { getIsOpenSuccess } from '../../../store/book';
import { toast } from 'react-toastify';
import { CreateComment } from '../../../lib/graphql/comments';

export default function useCreateCommentWrite(postId) {
  const { auth } = useSelector((state: any) => state.auth);
  const [writeComment] = useMutation(CreateComment);
  const reloadComments = useQuery(RELOAD_COMMENTS, {
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
    try {
      await writeComment({
        variables: {
          post_id: postId,
          text: comment,
        },
      });
      setComment('');
      await reloadComments.refetch();
      // window.scrollTo({ top: document.body.scrollHeight });
      const comments = document.querySelectorAll('.comment');
      if (comments.length === 0) return;
      const lastComment = comments.item(comments.length - 1);
      lastComment.scrollIntoView();
    } catch (e) {
      console.log(e);
    }
  };

  return { onWrite, comment, onChange };
}
