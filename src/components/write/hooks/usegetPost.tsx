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
    variables: { id: 'ddc762ba-5064-46e7-85a8-8cb61b6c9d95' },
  });

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
