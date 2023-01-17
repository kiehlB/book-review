import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_Post } from '../../../lib/graphql/posts';
import { useRouter } from 'next/router';

export default function useGetPost() {
  const router = useRouter();
  const {
    loading: singlePostLoding,
    error: singlePostError,
    data: singlePostData,
  } = useQuery(GET_Post, {
    variables: { id: '7a48a23f-9835-4d3a-b12d-72907f858a1b' },
  });

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
