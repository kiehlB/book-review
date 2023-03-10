import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  CreateComment,
  GET_COMMENTS_COUNT,
  GET_SubComment,
  RemoveSub,
} from '../../../lib/graphql/comments';
import useBoolean from '../../../hooks/useBoolean';
import { GetSubQuery, RemoveSubMutation } from '../../../types/apolloComponent';

export default function useDeleteComment(id, hasChild) {
  const router = useRouter();

  const [removeComment] = useMutation<RemoveSubMutation>(RemoveSub);

  const getCommentsCount = useQuery(GET_COMMENTS_COUNT, {
    variables: {
      id: router?.query?.id,
    },
  });

  const [askRemove, onToggleAskRemove] = useBoolean(false);
  const [comment, setComment] = useState('');
  const [removeId, setRemoveId] = useState('');
  const replies = useQuery<GetSubQuery>(GET_SubComment, {
    variables: {
      comment_id: id,
    },
    skip: hasChild ? false : true,
  });

  const onChange = e => {
    setComment(e.target.value);
  };

  const onConfirmRemove = useCallback(async () => {
    onToggleAskRemove();

    await removeComment({ variables: { id: removeId } });
    replies.refetch();
    getCommentsCount.refetch();
  }, [onToggleAskRemove, removeComment, removeId]);

  const onRemove = useCallback(
    (id: string) => {
      onToggleAskRemove();
      setRemoveId(id);
    },
    [onToggleAskRemove],
  );

  return {
    comment,
    onChange,
    onConfirmRemove,
    onRemove,
    askRemove,
    onToggleAskRemove,
    getCommentsCount,
  };
}
