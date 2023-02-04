import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { GET_Posts, Remove_Post } from '../../../lib/graphql/posts';

export default function useSavedPosts() {
  const { auth } = useSelector((state: any) => state.auth);
  const [removeId, setRemoveId] = useState<string | null>(null);
  const [removePost] = useMutation(Remove_Post);
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

  const onAskRemove = useCallback((id: string) => {
    setRemoveId(id);
  }, []);

  const onCancelRemove = useCallback(() => {
    setRemoveId(null);
  }, []);

  const onConfirmRemove = useCallback(async () => {
    if (!removeId) return;
    try {
      await removePost({
        variables: {
          id: removeId,
        },
      });
      client.writeQuery({
        query: GET_Posts,
        variables: {
          username: auth.username,
          temp_only: true,
        },
        data: {
          posts: data.posts.filter(p => p.id !== removeId),
        },
      });
      toast.success('포스트가 삭제되었습니다.');
    } catch (e) {
      toast.error('포스트 삭제 실패');
    }

    setRemoveId(null);
  }, [client, data, removeId, removePost, auth]);

  const handlers = {
    onAskRemove,
    onCancelRemove,
    onConfirmRemove,
  };

  return {
    askRemove: !!removeId,
    ...handlers,
    posts,
    loading,
  };
}
