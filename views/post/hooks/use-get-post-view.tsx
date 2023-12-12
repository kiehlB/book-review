import { useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { Post_View } from '../../../lib/graphql/posts';
import { PostViewMutation } from '@/types/apolloComponent';

export default function useGetPostView(id: string) {
  const [postView] = useMutation<PostViewMutation>(Post_View);

  useEffect(() => {
    const updatePostView = async () => {
      try {
        await postView({
          variables: {
            id,
          },
        });
      } catch (error) {
        console.error('Error updating post view:', error);
      }
    };

    updatePostView();
  }, [id, postView]);

  return { postView };
}
