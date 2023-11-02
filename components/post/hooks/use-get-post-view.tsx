'use client';

import { useMutation, useQuery } from '@apollo/client';
import { GET_Posts, GET_recentPosts, Post_View } from '../../../lib/graphql/posts';
import { useEffect } from 'react';

export default async function useGetPostView(id: any) {
  const [postView] = useMutation(Post_View);

  useEffect(() => {
    const e = async () => {
      await postView({
        variables: {
          id,
        },
      });
    };

    e();
  }, []);

  return { postView };
}
