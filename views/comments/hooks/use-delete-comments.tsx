'use client';

import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import useBoolean from '@/hooks/use-boolean';
import { GetSubCommentsQuery, RemoveCommentsMutation } from '@/types/apolloComponent';
import {
  GET_COMMENTS_COUNT,
  GET_SubComment,
  RemoveComments,
} from '@/lib/graphql/comments';

interface DeleteCommentArgs {
  id: string | undefined;
  hasChild: boolean | undefined;
}
export default function useDeleteComment({ id, hasChild }: DeleteCommentArgs) {
  const params = useParams();

  const [removeComment] = useMutation<RemoveCommentsMutation>(RemoveComments);

  const getCommentsCount = useQuery(GET_COMMENTS_COUNT, {
    variables: {
      id: params?.slug,
    },
  });

  const [askRemove, onToggleAskRemove] = useBoolean(false);
  const [comment, setComment] = useState('');
  const [removeId, setRemoveId] = useState('');
  const replies = useQuery<GetSubCommentsQuery>(GET_SubComment, {
    variables: {
      comment_id: id,
    },
    skip: hasChild ? false : true,
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
