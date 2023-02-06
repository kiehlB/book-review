import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Edit_Post, GET_Posts, Remove_Post } from '../../../lib/graphql/posts';
import { RootState } from '../../../store/rootReducer';

export default function useEditPost() {
  const { auth } = useSelector((state: any) => state.auth);
  const [editPost] = useMutation(Edit_Post);
  const client = useApolloClient();

  const { data, loading, fetchMore } = useQuery(GET_Posts, {
    variables: {
      username: auth.username,
      temp_only: true,
    },
    skip: !auth,
    notifyOnNetworkStatusChange: true,
  });

  const posts = data?.posts;

  const onConfirmRemove = async id => {
    if (!id) return;
    try {
      await editPost({
        variables: {
          id: id,
        },
      });
      client.writeQuery({
        query: GET_Posts,
        variables: {
          username: auth.username,
          temp_only: true,
        },
        data: {
          posts: data.posts.filter(p => p.id !== id),
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
