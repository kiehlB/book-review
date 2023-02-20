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
    variables: { id: router?.query?.id?.toString() },
    skip: !router?.query?.id,
  });
  console.log(singlePostData);

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
