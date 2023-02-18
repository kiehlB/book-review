import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { CreateComment, GET_SubComment, RemoveSub } from '../../../lib/graphql/comments';
import useBoolean from '../../../hooks/useBoolean';

export default function usedeleteComment(id) {
  const { auth } = useSelector((state: any) => state.auth);

  const [removeComment] = useMutation(RemoveSub);
  const [askRemove, onToggleAskRemove] = useBoolean(false);
  const [removeId, setRemoveId] = useState('');
  const replies = useQuery(GET_SubComment, {
    variables: {
      comment_id: id,
    },
  });

  const [comment, setComment] = useState('');

  const onChange = e => {
    setComment(e.target.value);
  };

  const onConfirmRemove = useCallback(async () => {
    onToggleAskRemove();

    await removeComment({ variables: { id: removeId } });
    replies.refetch();
  }, [onToggleAskRemove, replies, removeComment, removeId]);

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
  };
}
