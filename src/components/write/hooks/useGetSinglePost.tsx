import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_Post } from '../../../lib/graphql/posts';
import { useRouter } from 'next/router';
import { GetPostQuery, Post } from '../../../types/apolloComponent';

export default function useGetPost() {
  const router = useRouter();

  const {
    loading: singlePostLoding,
    error: singlePostError,
    data: singlePostData,
  } = useQuery<{ post: Post }>(GET_Post, {
    variables: { id: router?.query?.id?.toString() },
    skip: !router?.query?.id,
  });

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
