import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_Post } from '../../../lib/graphql/posts';
import {useParams } from 'next/navigation';
import { Post } from '@/types/apolloComponent';

export default function useGetPost() {
  const params = useParams();
 
  const {
    loading: singlePostLoding,
    error: singlePostError,
    data: singlePostData,
  } = useQuery<{ post: Post }>(GET_Post, {
    variables: { id:  params.slug },
    skip: !params.slug,
  });

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
