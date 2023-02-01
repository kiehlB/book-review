import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CategoryInput = {
  __typename?: 'CategoryInput';
  name?: Maybe<Scalars['String']>;
};


export type Followers = {
  __typename?: 'Followers';
  id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  follower_id?: Maybe<Scalars['String']>;
};

export type Following = {
  __typename?: 'Following';
  id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
  following_id?: Maybe<Scalars['String']>;
};

export type ImageUrl = {
  __typename?: 'ImageUrl';
  public_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<User>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  createPost?: Maybe<Post>;
  uploadImage?: Maybe<UploadedImage>;
  createPostHistory?: Maybe<Post>;
  editPost?: Maybe<Post>;
  removePost?: Maybe<Post>;
  likePost?: Maybe<Post>;
  unlikePost?: Maybe<Post>;
  postView?: Maybe<Scalars['Boolean']>;
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreatePostArgs = {
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Scalars['String']>;
  bookTitle?: Maybe<Scalars['String']>;
  bookContent?: Maybe<Scalars['String']>;
  bookUrl?: Maybe<Scalars['String']>;
  bookIsbn?: Maybe<Scalars['String']>;
};


export type MutationUploadImageArgs = {
  body?: Maybe<Scalars['String']>;
};


export type MutationCreatePostHistoryArgs = {
  post_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
};


export type MutationEditPostArgs = {
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationRemovePostArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationLikePostArgs = {
  id: Scalars['String'];
};


export type MutationUnlikePostArgs = {
  id: Scalars['String'];
};


export type MutationPostViewArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
  url: Scalars['String'];
  user?: Maybe<User>;
  released_at?: Maybe<Scalars['Date']>;
  created_at?: Maybe<Scalars['Date']>;
  updated_at?: Maybe<Scalars['Date']>;
  comments?: Maybe<Array<Maybe<PostComment>>>;
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Tag>;
  post_id?: Maybe<Scalars['String']>;
  liked?: Maybe<Scalars['Boolean']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  endCursor?: Maybe<Scalars['String']>;
  bookInfo?: Maybe<PostBookInfo>;
};

export type PostBookInfo = {
  __typename?: 'PostBookInfo';
  bookTitle?: Maybe<Scalars['String']>;
  bookContent?: Maybe<Scalars['String']>;
  bookUrl?: Maybe<Scalars['String']>;
  bookIsbn?: Maybe<Scalars['String']>;
};

export type PostComment = {
  __typename?: 'PostComment';
  id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  likes?: Maybe<Scalars['Int']>;
  has_replies?: Maybe<Scalars['Boolean']>;
  deleted?: Maybe<Scalars['Boolean']>;
  user?: Maybe<User>;
  post_id?: Maybe<Scalars['String']>;
  reply?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Maybe<PostComment>>>;
  comment?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  whoami: User;
  user: User;
  users?: Maybe<Array<Maybe<User>>>;
  getImageUrl?: Maybe<ImageUrl>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  searchPosts?: Maybe<Array<Maybe<Post>>>;
  topFivePost?: Maybe<Array<Maybe<Post>>>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
};


export type QuerySearchPostsArgs = {
  searchInput?: Maybe<Scalars['String']>;
};


export type QueryTopFivePostArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
};

export type TagInput = {
  __typename?: 'TagInput';
  tag_name: Scalars['String'];
};

export type TransformImageOptionsInput = {
  __typename?: 'TransformImageOptionsInput';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  crop?: Maybe<Scalars['String']>;
};

export type UploadOptionsInput = {
  __typename?: 'UploadOptionsInput';
  public_id?: Maybe<Scalars['String']>;
  folder?: Maybe<Scalars['String']>;
  use_filename?: Maybe<Scalars['Boolean']>;
  unique_filename?: Maybe<Scalars['Boolean']>;
  resource_type?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  access_mode?: Maybe<Scalars['String']>;
  discard_original_filename?: Maybe<Scalars['Boolean']>;
  overwrite?: Maybe<Scalars['Boolean']>;
  tags?: Maybe<Array<Maybe<TagInput>>>;
  colors?: Maybe<Scalars['Boolean']>;
  faces?: Maybe<Scalars['Boolean']>;
  quality_analysis?: Maybe<Scalars['Boolean']>;
  cinemegraph_analysis?: Maybe<Scalars['Boolean']>;
  image_metadata?: Maybe<Scalars['Boolean']>;
  phash?: Maybe<Scalars['Boolean']>;
  auto_tagging?: Maybe<Scalars['Boolean']>;
  categorization?: Maybe<Array<Maybe<CategoryInput>>>;
};

export type UploadedImage = {
  __typename?: 'UploadedImage';
  public_id: Scalars['String'];
  version: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
  format: Scalars['String'];
  created_at: Scalars['String'];
  resource_type: Scalars['String'];
  tags: Array<Maybe<Tag>>;
  bytes: Scalars['Int'];
  type: Scalars['String'];
  etag: Scalars['String'];
  url: Scalars['String'];
  secure_url: Scalars['String'];
  signature: Scalars['String'];
  original_filename: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  tokenVersion?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  auth?: Maybe<Array<Maybe<User>>>;
  follower?: Maybe<Followers>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  id?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body'>
  )> }
);

export type GetPostsQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'created_at' | 'views' | 'likes' | 'liked'>
    & { tags?: Maybe<(
      { __typename?: 'Tag' }
      & Pick<Tag, 'name'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, comments?: Maybe<Array<Maybe<(
      { __typename?: 'PostComment' }
      & Pick<PostComment, 'id' | 'text'>
    )>>> }
  )>>> }
);

export type TopFivePostQueryVariables = Exact<{ [key: string]: never; }>;


export type TopFivePostQuery = (
  { __typename?: 'Query' }
  & { topFivePost?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'thumbnail' | 'created_at' | 'body'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, comments?: Maybe<Array<Maybe<(
      { __typename?: 'PostComment' }
      & Pick<PostComment, 'id'>
    )>>> }
  )>>> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'accessToken'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
    & { follower?: Maybe<(
      { __typename?: 'Followers' }
      & Pick<Followers, 'id' | 'follower_id'>
    )> }
  )>>> }
);

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = (
  { __typename?: 'Query' }
  & { whoami: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);


export const GetPostDocument = gql`
    query GetPost($id: String!) {
  post(id: $id) {
    id
    title
    body
  }
}
    `;

/**
 * __useGetPostQuery__
 *
 * To run a query within a React component, call `useGetPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPostQuery(baseOptions: Apollo.QueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
      }
export function useGetPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($cursor: String) {
  posts(cursor: $cursor) {
    id
    title
    body
    thumbnail
    created_at
    views
    likes
    liked
    tags {
      name
    }
    user {
      id
      username
    }
    comments {
      id
      text
    }
  }
}
    `;

/**
 * __useGetPostsQuery__
 *
 * To run a query within a React component, call `useGetPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPostsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useGetPostsQuery(baseOptions?: Apollo.QueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
      }
export function useGetPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const TopFivePostDocument = gql`
    query TopFivePost {
  topFivePost {
    id
    title
    thumbnail
    created_at
    body
    user {
      id
      username
    }
    comments {
      id
    }
  }
}
    `;

/**
 * __useTopFivePostQuery__
 *
 * To run a query within a React component, call `useTopFivePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopFivePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopFivePostQuery({
 *   variables: {
 *   },
 * });
 */
export function useTopFivePostQuery(baseOptions?: Apollo.QueryHookOptions<TopFivePostQuery, TopFivePostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopFivePostQuery, TopFivePostQueryVariables>(TopFivePostDocument, options);
      }
export function useTopFivePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopFivePostQuery, TopFivePostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopFivePostQuery, TopFivePostQueryVariables>(TopFivePostDocument, options);
        }
export type TopFivePostQueryHookResult = ReturnType<typeof useTopFivePostQuery>;
export type TopFivePostLazyQueryHookResult = ReturnType<typeof useTopFivePostLazyQuery>;
export type TopFivePostQueryResult = Apollo.QueryResult<TopFivePostQuery, TopFivePostQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $password: String!) {
  register(email: $email, password: $password) {
    id
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    id
    username
    follower {
      id
      follower_id
    }
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export const WhoAmIDocument = gql`
    query whoAmI {
  whoami {
    id
    username
  }
}
    `;

/**
 * __useWhoAmIQuery__
 *
 * To run a query within a React component, call `useWhoAmIQuery` and pass it any options that fit your needs.
 * When your component renders, `useWhoAmIQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWhoAmIQuery({
 *   variables: {
 *   },
 * });
 */
export function useWhoAmIQuery(baseOptions?: Apollo.QueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
      }
export function useWhoAmILazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
        }
export type WhoAmIQueryHookResult = ReturnType<typeof useWhoAmIQuery>;
export type WhoAmILazyQueryHookResult = ReturnType<typeof useWhoAmILazyQuery>;
export type WhoAmIQueryResult = Apollo.QueryResult<WhoAmIQuery, WhoAmIQueryVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;