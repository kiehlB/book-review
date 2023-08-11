// import { useQuery, gql, useMutation } from '@apollo/client';
// import { GET_Post } from '../../../lib/graphql/posts';
// import { useParams } from 'next/navigation';
// import { getClient } from '@/lib/client';
// import { Post } from '@/types/apolloComponent';

// export const dynamic = 'force-dynamic';

// export default async function useGetPost() {
//   const params = useParams();

//   const PostData = await getClient().query({
//     query: GET_Post,
//     variables: { id: '0ed2e5b9-decc-42fd-80d3-395ed1a75bb0' },
//   } as any);

//   const {
//     loading: singlePostLoding,
//     error: singlePostError,
//     data: singlePostData,
//   } = useQuery<{ post: Post }>(GET_Post, {
//     variables: { id: params.slug },
//     skip: !params.slug,
//   });

//   return {
//     singlePostLoding,
//     singlePostError,
//     singlePostData,
//   };
// }

import { useQuery, gql, useMutation } from '@apollo/client';
import { GET_Post } from '../../../lib/graphql/posts';
import { useParams } from 'next/navigation';
import { Post } from '@/types/apolloComponent';

export default function useGetPost() {
  const params = useParams();

  const {
    loading: singlePostLoding,
    error: singlePostError,
    data: singlePostData,
  } = useQuery<{ post: Post }>(GET_Post, {
    variables: { id: params.slug },
    skip: !params.slug,
  });

  return {
    singlePostLoding,
    singlePostError,
    singlePostData,
  };
}
