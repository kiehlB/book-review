import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { Create_Post, Edit_Post, RELOAD_COMMENTS } from '../../../lib/graphql/posts';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  CommentUpvotes,
  CreateComment,
  DeleteCommentUpvote,
  GET_SubComment,
  RemoveSub,
} from '../../../lib/graphql/comments';
import useBoolean from '../../../hooks/useBoolean';
import gql from 'graphql-tag';
import { RootState } from '../../../store/rootReducer';
import {
  CommentUpvotesMutation,
  DeleteCommentUpvoteMutation,
} from '../../../types/apolloComponent';

export default function useCommentUpvote() {
  const { auth } = useSelector((state: RootState) => state.auth);
  const commentId = useSelector((state: RootState) => state.book.commentId);

  const client = useApolloClient();

  const [UpvoteComment, { loading: loadingLike }] =
    useMutation<CommentUpvotesMutation>(CommentUpvotes);

  const [unupvoteComment, { loading: loadingUnlike }] =
    useMutation<DeleteCommentUpvoteMutation>(DeleteCommentUpvote);

  const replies = useQuery(GET_SubComment, {
    variables: {
      comment_id: commentId,
    },
    skip: commentId ? false : true,
  });
  const onLikeToggle = async id => {
    if (!auth?.id) {
      toast.error('로그인이 필요합니다', {
        position: 'bottom-right',
      });

      return;
    }

    if (loadingLike || loadingUnlike) return;

    const variables = {
      id,
    };
    const UpVoteFragment = gql`
      fragment sub on Sub {
        likedSub
        upvotes
      }
    `;

    try {
      if (replies?.data?.getSub?.likedSub) {
        client.writeFragment({
          id: `Sub:${id}`,
          fragment: UpVoteFragment,
          data: {
            vpvotes: replies?.data?.getSub.upvotes - 1,
            __typename: 'Sub',
          },
        });
        await unupvoteComment({
          variables,
        });
      } else if (!replies?.data?.getSub?.likedSub) {
        client.writeFragment({
          id: `Sub:${id}`,
          fragment: UpVoteFragment,
          data: {
            vpvotes: replies?.data?.getSub.upvotes + 1,
            __typename: 'Sub',
          },
        });
        await UpvoteComment({
          variables,
        });
      }

      await replies.refetch();
    } catch (e) {
      console.log(e);
    }
  };

  return { onLikeToggle };
}
