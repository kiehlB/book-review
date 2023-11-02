import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { SetStateAction, useCallback, useState } from 'react';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateComment, GET_SubComment } from '../../../lib/graphql/comments';
import useBoolean from '../../../hooks/useBoolean';
import { RootState } from '../../../store/rootReducer';
import { CreateSubMutation, GetSubQuery } from '../../../types/apolloComponent';

export default function useCommentRepliesWrite(postId: any, commendId: any) {
  const { auth } = useSelector((state: RootState) => state.auth) as any;
  const [writing, onToggle] = useBoolean(false);
  const [writeComment] = useMutation<CreateSubMutation>(CreateComment);
  // const replies = useQuery<GetSubQuery>(GET_SubComment, {
  //   variables: {
  //     comment_id: commendId,
  //   },
  // });

  const reloadComments = useQuery(RELOAD_COMMENTS, {
    skip: true,
    fetchPolicy: 'network-only',
    variables: {
      id: postId,
    },
  });

  const [comment, setComment] = useState('');

  const onChange = (e: { target: { value: SetStateAction<string> } }) => {
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
      await reloadComments.refetch();

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
