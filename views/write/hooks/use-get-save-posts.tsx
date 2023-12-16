import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useEffect, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { GET_Posts, Remove_Post } from '../../../lib/graphql/posts';

import { GetPostsQuery, RemovePostMutation } from '../../../types/apolloComponent';
import { useAuthStore } from '@/store/auth';

export default function useSavedPosts() {
  const { auth } = useAuthStore();
  const [removePost] = useMutation<RemovePostMutation>(Remove_Post);
  const client = useApolloClient();

  const { data, loading, fetchMore } = useQuery(GET_Posts, {
    variables: {
      id: auth?.id,
      istemp: true,
    },
    skip: !auth,
    notifyOnNetworkStatusChange: true,
  });

  const posts = data?.posts;

  const onConfirmRemove = async (id: string) => {
    if (!id) return;
    try {
      await removePost({
        variables: {
          id: id,
        },
      });
      client.writeQuery({
        query: GET_Posts,
        variables: {
          id: auth?.id,
          temp_only: true,
        },
        data: {
          posts: data.posts.filter((p: { id: string }) => p.id !== id),
        },
      });
      toast.success('포스트가 삭제되었습니다.');
    } catch (e) {
      toast.error('포스트 삭제 실패');
    }
  };

  return {
    onConfirmRemove,
    posts,
    loading,
  };
}
