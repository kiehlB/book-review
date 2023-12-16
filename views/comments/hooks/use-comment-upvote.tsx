'use client';

import { useApolloClient, useMutation } from '@apollo/client';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  CommentUpvotes,
  CreateComment,
  DeleteCommentUpvote,
  GET_SubComment,
} from '../../../lib/graphql/comments';
import gql from 'graphql-tag';
import {
  CommentUpvotesMutation,
  DeleteCommentUpvoteMutation,
} from '../../../types/apolloComponent';
import { useAuthStore } from '@/store/auth';

export default function useCommentUpvote() {
  const { auth } = useAuthStore();
  const [CommentId, setId] = useState('');

  const getId = useCallback(
    (id: string) => {
      setId(id);
    },
    [CommentId],
  );

  // const client = initializeApollo();

  const [UpvoteComment, { loading: loadingLike }] =
    useMutation<CommentUpvotesMutation>(CommentUpvotes);

  const [unupvoteComment, { loading: loadingUnlike }] =
    useMutation<DeleteCommentUpvoteMutation>(DeleteCommentUpvote);

  // const replies = useQuery(GET_SubComment, {
  //   variables: {
  //     comment_id: CommentId,
  //   },
  //   skip: !CommentId,
  // });

  const onLikeToggle = (id: string) => {
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

    // try {
    //   const { data: repliesData } = await client.query({
    //     query: GET_SubComment,
    //     variables: {
    //       comment_id: id,
    //     },
    //   });
    //   if (repliesData?.getSub?.likedSub) {
    //     client.writeFragment({
    //       id: `Sub:${id}`,
    //       fragment: UpVoteFragment,
    //       data: {
    //         upvotes: repliesData?.getSub?.upvotes - 1,
    //         __typename: 'Sub',
    //       },
    //     });
    //     await unupvoteComment({
    //       variables,
    //       refetchQueries: [
    //         {
    //           query: GET_SubComment,
    //           variables: {
    //             comment_id: id,
    //           },
    //         },
    //       ],
    //     });
    //   } else if (!repliesData?.getSub?.likedSub) {
    //     client.writeFragment({
    //       id: `Sub:${id}`,
    //       fragment: UpVoteFragment,
    //       data: {
    //         upvotes: repliesData?.getSub?.upvotes + 1,
    //         __typename: 'Sub',
    //       },
    //     });
    //     await UpvoteComment({
    //       variables,
    //       refetchQueries: [
    //         {
    //           query: GET_SubComment,
    //           variables: {
    //             comment_id: id,
    //           },
    //         },
    //       ],
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
  };

  return { getId, onLikeToggle };
}
