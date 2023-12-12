'use client';

import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import {
  GET_Post,
  GET_Posts,
  GET_recentPosts,
  Like_Post,
  UnLike_Post,
} from '../../../lib/graphql/posts';
import { toast } from 'react-toastify';
import gql from 'graphql-tag';

import {
  GetPostQuery,
  LikePostMutation,
  Post,
  UnlikePostMutation,
} from '../../../types/apolloComponent';

export default function usePostLike(id: string, auth: any) {
  const client = useApolloClient();
  const [likePost, { loading: loadingLike }] = useMutation<LikePostMutation>(
    Like_Post,
    {},
  );
  const [unlikePost, { loading: loadingUnlike }] = useMutation<UnlikePostMutation>(
    UnLike_Post,
    {},
  );

  const { data } = useQuery<{ post: Post }>(GET_Post, {
    variables: {
      id,
    },
  });

  const onLikeToggle = async () => {
    if (loadingLike || loadingUnlike) return;

    const variables = {
      id,
    };

    const likeFragment = gql`
      fragment post on Post {
        liked
        likes
      }
    `;

    try {
      if (!auth) {
        return;
      }

      if (data?.post?.liked) {
        client.writeFragment({
          id: `Post:${data?.post?.id}`,
          fragment: likeFragment,
          data: {
            liked: false,
            likes: data?.post?.likes! - 1,
            __typename: 'Post',
          },
        });
        await unlikePost({
          variables,
        });
      } else {
        client.writeFragment({
          id: `Post:${data?.post?.id}`,
          fragment: likeFragment,
          data: {
            liked: true,
            likes: data?.post?.likes! + 1,
            __typename: 'Post',
          },
        });
        await likePost({
          variables,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { data, onLikeToggle };
}
