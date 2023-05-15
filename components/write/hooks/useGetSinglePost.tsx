import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_Post } from '../../../lib/graphql/posts';
import { useRouter } from 'next/navigation';
import { Post } from '@/types/apolloComponent';

export default function useGetPost() {
  const router = useRouter();

  const {
    loading: singlePostLoding,
    error: singlePostError,
    data: singlePostData,
  } = useQuery<{ post: Post }>(GET_Post, {
    variables: { id: 1 },
    skip: !1,
  });

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
