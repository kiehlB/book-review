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
  follower_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Following = {
  __typename?: 'Following';
  following_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

export type ImageUrl = {
  __typename?: 'ImageUrl';
  public_id?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  commentUpvotes?: Maybe<Scalars['Boolean']>;
  createPost?: Maybe<Post>;
  createPostHistory?: Maybe<Post>;
  createProfile: UserProfile;
  createSub?: Maybe<Sub>;
  deleteCommentUpvote?: Maybe<Scalars['Boolean']>;
  editPost?: Maybe<Post>;
  editSub?: Maybe<Sub>;
  likePost?: Maybe<Post>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']>;
  mergeTag?: Maybe<Scalars['Boolean']>;
  postView?: Maybe<Scalars['Boolean']>;
  register?: Maybe<User>;
  removePost?: Maybe<Scalars['Boolean']>;
  removeSub?: Maybe<Scalars['Boolean']>;
  unlikePost?: Maybe<Post>;
  uploadImage?: Maybe<UploadedImage>;
};


export type MutationCommentUpvotesArgs = {
  id: Scalars['String'];
};


export type MutationCreatePostArgs = {
  body?: Maybe<Scalars['String']>;
  bookAuthors?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookContent?: Maybe<Scalars['String']>;
  bookIsbn?: Maybe<Scalars['String']>;
  bookTitle?: Maybe<Scalars['String']>;
  bookUrl?: Maybe<Scalars['String']>;
  is_private?: Maybe<Scalars['Boolean']>;
  is_temp?: Maybe<Scalars['Boolean']>;
  postbody?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationCreatePostHistoryArgs = {
  body?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationCreateProfileArgs = {
  bio?: Maybe<Scalars['String']>;
  profile_name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
};


export type MutationCreateSubArgs = {
  comment_id?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type MutationDeleteCommentUpvoteArgs = {
  id: Scalars['String'];
};


export type MutationEditPostArgs = {
  body?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  is_private?: Maybe<Scalars['Boolean']>;
  is_temp?: Maybe<Scalars['Boolean']>;
  postbody?: Maybe<Scalars['String']>;
  series_id?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type MutationEditSubArgs = {
  id?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};


export type MutationLikePostArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationMergeTagArgs = {
  merge_to?: Maybe<Scalars['String']>;
  selected?: Maybe<Scalars['String']>;
};


export type MutationPostViewArgs = {
  id: Scalars['String'];
};


export type MutationRegisterArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id?: Maybe<Scalars['String']>;
};


export type MutationRemoveSubArgs = {
  id: Scalars['String'];
};


export type MutationUnlikePostArgs = {
  id: Scalars['String'];
};


export type MutationUploadImageArgs = {
  body?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  bookInfo?: Maybe<PostBookInfo>;
  created_at?: Maybe<Scalars['Date']>;
  endCursor?: Maybe<Scalars['String']>;
  hasMore?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['String']>;
  is_private?: Maybe<Scalars['Boolean']>;
  is_temp?: Maybe<Scalars['Boolean']>;
  liked?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  postbody?: Maybe<Scalars['String']>;
  released_at?: Maybe<Scalars['Date']>;
  subs?: Maybe<Array<Maybe<Sub>>>;
  subs_count?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  upvotes?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  views?: Maybe<Scalars['Int']>;
};

export type PostBookInfo = {
  __typename?: 'PostBookInfo';
  bookAuthors?: Maybe<Array<Maybe<Scalars['String']>>>;
  bookContent?: Maybe<Scalars['String']>;
  bookIsbn?: Maybe<Scalars['String']>;
  bookTitle?: Maybe<Scalars['String']>;
  bookUrl?: Maybe<Scalars['String']>;
};

export type PostTag = {
  __typename?: 'PostTag';
  name?: Maybe<Scalars['String']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  profile_name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  user_id?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getImageUrl?: Maybe<ImageUrl>;
  getProfile?: Maybe<Profile>;
  getSub?: Maybe<Sub>;
  post?: Maybe<Post>;
  postHistories?: Maybe<Array<Maybe<Post>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  recentPosts?: Maybe<Array<Maybe<Post>>>;
  searchPosts?: Maybe<Array<Maybe<Post>>>;
  sub?: Maybe<Array<Maybe<Sub>>>;
  subcomments?: Maybe<Array<Maybe<Sub>>>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  trendingPosts?: Maybe<Array<Maybe<Post>>>;
  user: User;
  userTags?: Maybe<UserTags>;
  users?: Maybe<Array<Maybe<User>>>;
  whoami?: Maybe<User>;
};


export type QueryGetProfileArgs = {
  user_id?: Maybe<Scalars['String']>;
};


export type QueryGetSubArgs = {
  comment_id?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryPostHistoriesArgs = {
  post_id?: Maybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  istemp?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  tag?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type QueryRecentPostsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySearchPostsArgs = {
  searchInput?: Maybe<Scalars['String']>;
};


export type QuerySubcommentsArgs = {
  comment_id?: Maybe<Scalars['String']>;
};


export type QueryTagArgs = {
  name: Scalars['String'];
};


export type QueryTagsArgs = {
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  sort: Scalars['String'];
};


export type QueryTrendingPostsArgs = {
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  timeframe?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};


export type QueryUserTagsArgs = {
  username?: Maybe<Scalars['String']>;
};

export type Sub = {
  __typename?: 'Sub';
  created_at?: Maybe<Scalars['Date']>;
  deleted?: Maybe<Scalars['Boolean']>;
  has_replies?: Maybe<Scalars['Boolean']>;
  id: Scalars['String'];
  level?: Maybe<Scalars['Int']>;
  likedSub?: Maybe<Scalars['Boolean']>;
  likes?: Maybe<Scalars['Int']>;
  post_id?: Maybe<Scalars['String']>;
  replies?: Maybe<Array<Maybe<Sub>>>;
  replies_count?: Maybe<Scalars['Int']>;
  reply?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  upvotes?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<User>;
};

export type Tag = {
  __typename?: 'Tag';
  created_at?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['String']>;
  posts_count?: Maybe<Scalars['Int']>;
  tag?: Maybe<PostTag>;
  thumbnail?: Maybe<Scalars['String']>;
};

export type TagInput = {
  __typename?: 'TagInput';
  tag_name: Scalars['String'];
};

export type TransformImageOptionsInput = {
  __typename?: 'TransformImageOptionsInput';
  crop?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  width?: Maybe<Scalars['Int']>;
};

export type UploadOptionsInput = {
  __typename?: 'UploadOptionsInput';
  access_mode?: Maybe<Scalars['String']>;
  auto_tagging?: Maybe<Scalars['Boolean']>;
  categorization?: Maybe<Array<Maybe<CategoryInput>>>;
  cinemegraph_analysis?: Maybe<Scalars['Boolean']>;
  colors?: Maybe<Scalars['Boolean']>;
  discard_original_filename?: Maybe<Scalars['Boolean']>;
  faces?: Maybe<Scalars['Boolean']>;
  folder?: Maybe<Scalars['String']>;
  image_metadata?: Maybe<Scalars['Boolean']>;
  overwrite?: Maybe<Scalars['Boolean']>;
  phash?: Maybe<Scalars['Boolean']>;
  public_id?: Maybe<Scalars['String']>;
  quality_analysis?: Maybe<Scalars['Boolean']>;
  resource_type?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagInput>>>;
  type?: Maybe<Scalars['String']>;
  unique_filename?: Maybe<Scalars['Boolean']>;
  use_filename?: Maybe<Scalars['Boolean']>;
};

export type UploadedImage = {
  __typename?: 'UploadedImage';
  bytes: Scalars['Int'];
  created_at: Scalars['String'];
  etag: Scalars['String'];
  format: Scalars['String'];
  height: Scalars['Int'];
  original_filename: Scalars['String'];
  public_id: Scalars['String'];
  resource_type: Scalars['String'];
  secure_url: Scalars['String'];
  signature: Scalars['String'];
  tags: Array<Maybe<Tag>>;
  type: Scalars['String'];
  url: Scalars['String'];
  version: Scalars['String'];
  width: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']>;
  auth?: Maybe<Array<Maybe<User>>>;
  created_at?: Maybe<Scalars['String']>;
  follower?: Maybe<Followers>;
  id?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
  refreshToken?: Maybe<Scalars['String']>;
  tokenVersion?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  username_verified?: Maybe<Scalars['Boolean']>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  bio?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['Date']>;
  id?: Maybe<Scalars['String']>;
  profile_name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['Date']>;
  user_id?: Maybe<Scalars['String']>;
};

export type UserTags = {
  __typename?: 'UserTags';
  posts_count?: Maybe<Scalars['Int']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type CreateSubMutationVariables = Exact<{
  post_id: Scalars['String'];
  text: Scalars['String'];
  comment_id?: Maybe<Scalars['String']>;
}>;


export type CreateSubMutation = (
  { __typename?: 'Mutation' }
  & { createSub?: Maybe<(
    { __typename?: 'Sub' }
    & Pick<Sub, 'id'>
  )> }
);

export type RemoveSubMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemoveSubMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeSub'>
);

export type EditSubMutationVariables = Exact<{
  id: Scalars['String'];
  text: Scalars['String'];
}>;


export type EditSubMutation = (
  { __typename?: 'Mutation' }
  & { editSub?: Maybe<(
    { __typename?: 'Sub' }
    & Pick<Sub, 'id' | 'text' | 'level' | 'updated_at' | 'created_at'>
  )> }
);

export type GetSubQueryVariables = Exact<{
  comment_id: Scalars['String'];
}>;


export type GetSubQuery = (
  { __typename?: 'Query' }
  & { getSub?: Maybe<(
    { __typename?: 'Sub' }
    & Pick<Sub, 'id' | 'text' | 'likes' | 'has_replies' | 'deleted' | 'upvotes' | 'likedSub' | 'level' | 'reply' | 'created_at' | 'updated_at' | 'replies_count'>
    & { users?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, replies?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text' | 'level' | 'updated_at' | 'upvotes'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
        & { profile?: Maybe<(
          { __typename?: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'thumbnail'>
        )> }
      )> }
    )>>> }
  )> }
);

export type CommentUpvotesMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type CommentUpvotesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'commentUpvotes'>
);

export type DeleteCommentUpvoteMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteCommentUpvoteMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteCommentUpvote'>
);

export type GetPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'subs_count' | 'released_at' | 'created_at' | 'updated_at' | 'liked'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & { tag?: Maybe<(
        { __typename?: 'PostTag' }
        & Pick<PostTag, 'name'>
      )> }
    )>>>, bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
      & { profile?: Maybe<(
        { __typename?: 'UserProfile' }
        & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'thumbnail'>
      )> }
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text' | 'likes' | 'has_replies' | 'deleted' | 'level' | 'reply' | 'created_at' | 'updated_at' | 'upvotes' | 'replies_count'>
      & { replies?: Maybe<Array<Maybe<(
        { __typename?: 'Sub' }
        & Pick<Sub, 'id' | 'text' | 'updated_at'>
      )>>>, user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
        & { profile?: Maybe<(
          { __typename?: 'UserProfile' }
          & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'thumbnail'>
        )> }
      )> }
    )>>> }
  )> }
);

export type GetPostsQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  istemp?: Maybe<Scalars['Boolean']>;
}>;


export type GetPostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { tags?: Maybe<Array<Maybe<(
      { __typename?: 'Tag' }
      & { tag?: Maybe<(
        { __typename?: 'PostTag' }
        & Pick<PostTag, 'name'>
      )> }
    )>>>, bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )>>> }
);

export type RecentPostsQueryVariables = Exact<{
  cursor?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type RecentPostsQuery = (
  { __typename?: 'Query' }
  & { recentPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'postbody' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )>>> }
);

export type TrendingPostsQueryVariables = Exact<{
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  timeframe?: Maybe<Scalars['String']>;
}>;


export type TrendingPostsQuery = (
  { __typename?: 'Query' }
  & { trendingPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'thumbnail' | 'likes' | 'postbody' | 'views' | 'is_temp' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )>>> }
);

export type CreatePostMutationVariables = Exact<{
  body: Scalars['String'];
  title: Scalars['String'];
  thumbnail?: Maybe<Scalars['String']>;
  postbody?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  is_temp?: Maybe<Scalars['Boolean']>;
  is_private?: Maybe<Scalars['Boolean']>;
  bookTitle?: Maybe<Scalars['String']>;
  bookContent?: Maybe<Scalars['String']>;
  bookUrl?: Maybe<Scalars['String']>;
  bookIsbn?: Maybe<Scalars['String']>;
  bookAuthors?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'postbody' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked'>
    & { bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  )> }
);

export type ReloadCommentsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ReloadCommentsQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'subs_count' | 'released_at' | 'created_at' | 'updated_at' | 'liked'>
    & { bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text' | 'updated_at'>
    )>>> }
  )> }
);

export type SearchPostsQueryVariables = Exact<{
  searchInput?: Maybe<Scalars['String']>;
}>;


export type SearchPostsQuery = (
  { __typename?: 'Query' }
  & { searchPosts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { bookInfo?: Maybe<(
      { __typename?: 'PostBookInfo' }
      & Pick<PostBookInfo, 'bookTitle' | 'bookContent' | 'bookUrl' | 'bookIsbn' | 'bookAuthors'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )>>> }
);

export type EditPostMutationVariables = Exact<{
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  body?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  is_temp?: Maybe<Scalars['Boolean']>;
  is_private?: Maybe<Scalars['Boolean']>;
}>;


export type EditPostMutation = (
  { __typename?: 'Mutation' }
  & { editPost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )> }
);

export type RemovePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemovePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removePost'>
);

export type LikePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type LikePostMutation = (
  { __typename?: 'Mutation' }
  & { likePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )> }
);

export type UnlikePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnlikePostMutation = (
  { __typename?: 'Mutation' }
  & { unlikePost?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'body' | 'thumbnail' | 'likes' | 'views' | 'is_temp' | 'is_private' | 'released_at' | 'created_at' | 'updated_at' | 'liked' | 'subs_count'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, subs?: Maybe<Array<Maybe<(
      { __typename?: 'Sub' }
      & Pick<Sub, 'id' | 'text'>
    )>>> }
  )> }
);

export type UploadImageToCloudinaryMutationVariables = Exact<{
  body: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
}>;


export type UploadImageToCloudinaryMutation = (
  { __typename?: 'Mutation' }
  & { uploadImage?: Maybe<(
    { __typename?: 'UploadedImage' }
    & Pick<UploadedImage, 'public_id' | 'url'>
  )> }
);

export type CreateProfileMutationVariables = Exact<{
  bio?: Maybe<Scalars['String']>;
  profile_name?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
}>;


export type CreateProfileMutation = (
  { __typename?: 'Mutation' }
  & { createProfile: (
    { __typename?: 'UserProfile' }
    & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'thumbnail' | 'created_at' | 'updated_at'>
  ) }
);

export type GetProfileQueryVariables = Exact<{
  user_id?: Maybe<Scalars['String']>;
}>;


export type GetProfileQuery = (
  { __typename?: 'Query' }
  & { getProfile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'bio' | 'profile_name' | 'thumbnail' | 'created_at' | 'updated_at'>
  )> }
);

export type TagsQueryVariables = Exact<{
  sort: Scalars['String'];
}>;


export type TagsQuery = (
  { __typename?: 'Query' }
  & { tags?: Maybe<Array<Maybe<(
    { __typename?: 'Tag' }
    & Pick<Tag, 'id' | 'name' | 'posts_count'>
  )>>> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'accessToken' | 'refreshToken'>
    & { profile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'thumbnail'>
    )> }
  )> }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'accessToken' | 'refreshToken'>
    & { profile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'thumbnail'>
    )> }
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
    & { profile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'user_id' | 'created_at' | 'updated_at'>
    )> }
  )>>> }
);

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = (
  { __typename?: 'Query' }
  & { whoami?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
    & { profile?: Maybe<(
      { __typename?: 'UserProfile' }
      & Pick<UserProfile, 'id' | 'bio' | 'profile_name' | 'user_id' | 'thumbnail' | 'created_at' | 'updated_at'>
    )> }
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);


export const CreateSubDocument = gql`
    mutation CreateSub($post_id: String!, $text: String!, $comment_id: String) {
  createSub(post_id: $post_id, text: $text, comment_id: $comment_id) {
    id
  }
}
    `;
export type CreateSubMutationFn = Apollo.MutationFunction<CreateSubMutation, CreateSubMutationVariables>;

/**
 * __useCreateSubMutation__
 *
 * To run a mutation, you first call `useCreateSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubMutation, { data, loading, error }] = useCreateSubMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      text: // value for 'text'
 *      comment_id: // value for 'comment_id'
 *   },
 * });
 */
export function useCreateSubMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubMutation, CreateSubMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubMutation, CreateSubMutationVariables>(CreateSubDocument, options);
      }
export type CreateSubMutationHookResult = ReturnType<typeof useCreateSubMutation>;
export type CreateSubMutationResult = Apollo.MutationResult<CreateSubMutation>;
export type CreateSubMutationOptions = Apollo.BaseMutationOptions<CreateSubMutation, CreateSubMutationVariables>;
export const RemoveSubDocument = gql`
    mutation RemoveSub($id: String!) {
  removeSub(id: $id)
}
    `;
export type RemoveSubMutationFn = Apollo.MutationFunction<RemoveSubMutation, RemoveSubMutationVariables>;

/**
 * __useRemoveSubMutation__
 *
 * To run a mutation, you first call `useRemoveSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSubMutation, { data, loading, error }] = useRemoveSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSubMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSubMutation, RemoveSubMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSubMutation, RemoveSubMutationVariables>(RemoveSubDocument, options);
      }
export type RemoveSubMutationHookResult = ReturnType<typeof useRemoveSubMutation>;
export type RemoveSubMutationResult = Apollo.MutationResult<RemoveSubMutation>;
export type RemoveSubMutationOptions = Apollo.BaseMutationOptions<RemoveSubMutation, RemoveSubMutationVariables>;
export const EditSubDocument = gql`
    mutation EditSub($id: String!, $text: String!) {
  editSub(id: $id, text: $text) {
    id
    text
    level
    updated_at
    created_at
    updated_at
  }
}
    `;
export type EditSubMutationFn = Apollo.MutationFunction<EditSubMutation, EditSubMutationVariables>;

/**
 * __useEditSubMutation__
 *
 * To run a mutation, you first call `useEditSubMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditSubMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editSubMutation, { data, loading, error }] = useEditSubMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useEditSubMutation(baseOptions?: Apollo.MutationHookOptions<EditSubMutation, EditSubMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditSubMutation, EditSubMutationVariables>(EditSubDocument, options);
      }
export type EditSubMutationHookResult = ReturnType<typeof useEditSubMutation>;
export type EditSubMutationResult = Apollo.MutationResult<EditSubMutation>;
export type EditSubMutationOptions = Apollo.BaseMutationOptions<EditSubMutation, EditSubMutationVariables>;
export const GetSubDocument = gql`
    query GetSub($comment_id: String!) {
  getSub(comment_id: $comment_id) {
    id
    text
    likes
    has_replies
    deleted
    upvotes
    likedSub
    users {
      id
      username
    }
    level
    reply
    created_at
    updated_at
    replies_count
    replies {
      id
      text
      level
      updated_at
      upvotes
      user {
        id
        username
        profile {
          id
          bio
          profile_name
          thumbnail
        }
      }
    }
  }
}
    `;

/**
 * __useGetSubQuery__
 *
 * To run a query within a React component, call `useGetSubQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubQuery({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *   },
 * });
 */
export function useGetSubQuery(baseOptions: Apollo.QueryHookOptions<GetSubQuery, GetSubQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubQuery, GetSubQueryVariables>(GetSubDocument, options);
      }
export function useGetSubLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubQuery, GetSubQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubQuery, GetSubQueryVariables>(GetSubDocument, options);
        }
export type GetSubQueryHookResult = ReturnType<typeof useGetSubQuery>;
export type GetSubLazyQueryHookResult = ReturnType<typeof useGetSubLazyQuery>;
export type GetSubQueryResult = Apollo.QueryResult<GetSubQuery, GetSubQueryVariables>;
export const CommentUpvotesDocument = gql`
    mutation commentUpvotes($id: String!) {
  commentUpvotes(id: $id)
}
    `;
export type CommentUpvotesMutationFn = Apollo.MutationFunction<CommentUpvotesMutation, CommentUpvotesMutationVariables>;

/**
 * __useCommentUpvotesMutation__
 *
 * To run a mutation, you first call `useCommentUpvotesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCommentUpvotesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [commentUpvotesMutation, { data, loading, error }] = useCommentUpvotesMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCommentUpvotesMutation(baseOptions?: Apollo.MutationHookOptions<CommentUpvotesMutation, CommentUpvotesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CommentUpvotesMutation, CommentUpvotesMutationVariables>(CommentUpvotesDocument, options);
      }
export type CommentUpvotesMutationHookResult = ReturnType<typeof useCommentUpvotesMutation>;
export type CommentUpvotesMutationResult = Apollo.MutationResult<CommentUpvotesMutation>;
export type CommentUpvotesMutationOptions = Apollo.BaseMutationOptions<CommentUpvotesMutation, CommentUpvotesMutationVariables>;
export const DeleteCommentUpvoteDocument = gql`
    mutation DeleteCommentUpvote($id: String!) {
  deleteCommentUpvote(id: $id)
}
    `;
export type DeleteCommentUpvoteMutationFn = Apollo.MutationFunction<DeleteCommentUpvoteMutation, DeleteCommentUpvoteMutationVariables>;

/**
 * __useDeleteCommentUpvoteMutation__
 *
 * To run a mutation, you first call `useDeleteCommentUpvoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCommentUpvoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCommentUpvoteMutation, { data, loading, error }] = useDeleteCommentUpvoteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCommentUpvoteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCommentUpvoteMutation, DeleteCommentUpvoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCommentUpvoteMutation, DeleteCommentUpvoteMutationVariables>(DeleteCommentUpvoteDocument, options);
      }
export type DeleteCommentUpvoteMutationHookResult = ReturnType<typeof useDeleteCommentUpvoteMutation>;
export type DeleteCommentUpvoteMutationResult = Apollo.MutationResult<DeleteCommentUpvoteMutation>;
export type DeleteCommentUpvoteMutationOptions = Apollo.BaseMutationOptions<DeleteCommentUpvoteMutation, DeleteCommentUpvoteMutationVariables>;
export const GetPostDocument = gql`
    query GetPost($id: String!) {
  post(id: $id) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    subs_count
    released_at
    created_at
    updated_at
    liked
    tags {
      tag {
        name
      }
    }
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
      profile {
        id
        bio
        profile_name
        thumbnail
      }
    }
    subs {
      id
      text
      likes
      has_replies
      deleted
      level
      reply
      created_at
      updated_at
      upvotes
      replies {
        id
        text
        updated_at
      }
      replies_count
      user {
        id
        username
        profile {
          id
          bio
          profile_name
          thumbnail
        }
      }
    }
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
    query GetPosts($cursor: String, $username: String, $istemp: Boolean) {
  posts(cursor: $cursor, username: $username, istemp: $istemp) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    released_at
    created_at
    updated_at
    liked
    tags {
      tag {
        name
      }
    }
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
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
 *      username: // value for 'username'
 *      istemp: // value for 'istemp'
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
export const RecentPostsDocument = gql`
    query RecentPosts($cursor: String, $limit: Int) {
  recentPosts(cursor: $cursor, limit: $limit) {
    id
    title
    thumbnail
    likes
    views
    is_temp
    postbody
    is_private
    released_at
    created_at
    updated_at
    liked
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
  }
}
    `;

/**
 * __useRecentPostsQuery__
 *
 * To run a query within a React component, call `useRecentPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentPostsQuery({
 *   variables: {
 *      cursor: // value for 'cursor'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useRecentPostsQuery(baseOptions?: Apollo.QueryHookOptions<RecentPostsQuery, RecentPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RecentPostsQuery, RecentPostsQueryVariables>(RecentPostsDocument, options);
      }
export function useRecentPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RecentPostsQuery, RecentPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RecentPostsQuery, RecentPostsQueryVariables>(RecentPostsDocument, options);
        }
export type RecentPostsQueryHookResult = ReturnType<typeof useRecentPostsQuery>;
export type RecentPostsLazyQueryHookResult = ReturnType<typeof useRecentPostsLazyQuery>;
export type RecentPostsQueryResult = Apollo.QueryResult<RecentPostsQuery, RecentPostsQueryVariables>;
export const TrendingPostsDocument = gql`
    query TrendingPosts($offset: Int, $limit: Int, $timeframe: String) {
  trendingPosts(offset: $offset, limit: $limit, timeframe: $timeframe) {
    id
    title
    thumbnail
    likes
    postbody
    views
    is_temp
    is_private
    released_at
    created_at
    updated_at
    liked
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
  }
}
    `;

/**
 * __useTrendingPostsQuery__
 *
 * To run a query within a React component, call `useTrendingPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrendingPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrendingPostsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      timeframe: // value for 'timeframe'
 *   },
 * });
 */
export function useTrendingPostsQuery(baseOptions?: Apollo.QueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
      }
export function useTrendingPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
        }
export type TrendingPostsQueryHookResult = ReturnType<typeof useTrendingPostsQuery>;
export type TrendingPostsLazyQueryHookResult = ReturnType<typeof useTrendingPostsLazyQuery>;
export type TrendingPostsQueryResult = Apollo.QueryResult<TrendingPostsQuery, TrendingPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($body: String!, $title: String!, $thumbnail: String, $postbody: String, $tags: [String], $is_temp: Boolean, $is_private: Boolean, $bookTitle: String, $bookContent: String, $bookUrl: String, $bookIsbn: String, $bookAuthors: [String]) {
  createPost(
    body: $body
    title: $title
    tags: $tags
    thumbnail: $thumbnail
    postbody: $postbody
    is_temp: $is_temp
    is_private: $is_private
    bookTitle: $bookTitle
    bookContent: $bookContent
    bookUrl: $bookUrl
    bookIsbn: $bookIsbn
    bookAuthors: $bookAuthors
  ) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    postbody
    is_private
    released_at
    created_at
    updated_at
    liked
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      body: // value for 'body'
 *      title: // value for 'title'
 *      thumbnail: // value for 'thumbnail'
 *      postbody: // value for 'postbody'
 *      tags: // value for 'tags'
 *      is_temp: // value for 'is_temp'
 *      is_private: // value for 'is_private'
 *      bookTitle: // value for 'bookTitle'
 *      bookContent: // value for 'bookContent'
 *      bookUrl: // value for 'bookUrl'
 *      bookIsbn: // value for 'bookIsbn'
 *      bookAuthors: // value for 'bookAuthors'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const ReloadCommentsDocument = gql`
    query ReloadComments($id: String!) {
  post(id: $id) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    subs_count
    released_at
    created_at
    updated_at
    liked
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
    }
    subs {
      id
      text
      updated_at
    }
  }
}
    `;

/**
 * __useReloadCommentsQuery__
 *
 * To run a query within a React component, call `useReloadCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReloadCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReloadCommentsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReloadCommentsQuery(baseOptions: Apollo.QueryHookOptions<ReloadCommentsQuery, ReloadCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReloadCommentsQuery, ReloadCommentsQueryVariables>(ReloadCommentsDocument, options);
      }
export function useReloadCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReloadCommentsQuery, ReloadCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReloadCommentsQuery, ReloadCommentsQueryVariables>(ReloadCommentsDocument, options);
        }
export type ReloadCommentsQueryHookResult = ReturnType<typeof useReloadCommentsQuery>;
export type ReloadCommentsLazyQueryHookResult = ReturnType<typeof useReloadCommentsLazyQuery>;
export type ReloadCommentsQueryResult = Apollo.QueryResult<ReloadCommentsQuery, ReloadCommentsQueryVariables>;
export const SearchPostsDocument = gql`
    query SearchPosts($searchInput: String) {
  searchPosts(searchInput: $searchInput) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    released_at
    created_at
    updated_at
    liked
    bookInfo {
      bookTitle
      bookContent
      bookUrl
      bookIsbn
      bookAuthors
    }
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
  }
}
    `;

/**
 * __useSearchPostsQuery__
 *
 * To run a query within a React component, call `useSearchPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPostsQuery({
 *   variables: {
 *      searchInput: // value for 'searchInput'
 *   },
 * });
 */
export function useSearchPostsQuery(baseOptions?: Apollo.QueryHookOptions<SearchPostsQuery, SearchPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPostsQuery, SearchPostsQueryVariables>(SearchPostsDocument, options);
      }
export function useSearchPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPostsQuery, SearchPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPostsQuery, SearchPostsQueryVariables>(SearchPostsDocument, options);
        }
export type SearchPostsQueryHookResult = ReturnType<typeof useSearchPostsQuery>;
export type SearchPostsLazyQueryHookResult = ReturnType<typeof useSearchPostsLazyQuery>;
export type SearchPostsQueryResult = Apollo.QueryResult<SearchPostsQuery, SearchPostsQueryVariables>;
export const EditPostDocument = gql`
    mutation EditPost($id: String!, $title: String, $body: String, $thumbnail: String, $tags: [String], $is_temp: Boolean, $is_private: Boolean) {
  editPost(
    id: $id
    title: $title
    body: $body
    tags: $tags
    is_temp: $is_temp
    thumbnail: $thumbnail
    is_private: $is_private
  ) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    released_at
    created_at
    updated_at
    liked
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
  }
}
    `;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      thumbnail: // value for 'thumbnail'
 *      tags: // value for 'tags'
 *      is_temp: // value for 'is_temp'
 *      is_private: // value for 'is_private'
 *   },
 * });
 */
export function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const RemovePostDocument = gql`
    mutation RemovePost($id: String!) {
  removePost(id: $id)
}
    `;
export type RemovePostMutationFn = Apollo.MutationFunction<RemovePostMutation, RemovePostMutationVariables>;

/**
 * __useRemovePostMutation__
 *
 * To run a mutation, you first call `useRemovePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemovePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removePostMutation, { data, loading, error }] = useRemovePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemovePostMutation(baseOptions?: Apollo.MutationHookOptions<RemovePostMutation, RemovePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemovePostMutation, RemovePostMutationVariables>(RemovePostDocument, options);
      }
export type RemovePostMutationHookResult = ReturnType<typeof useRemovePostMutation>;
export type RemovePostMutationResult = Apollo.MutationResult<RemovePostMutation>;
export type RemovePostMutationOptions = Apollo.BaseMutationOptions<RemovePostMutation, RemovePostMutationVariables>;
export const LikePostDocument = gql`
    mutation LikePost($id: String!) {
  likePost(id: $id) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    released_at
    created_at
    updated_at
    liked
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
  }
}
    `;
export type LikePostMutationFn = Apollo.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: Apollo.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, options);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = Apollo.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = Apollo.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const UnlikePostDocument = gql`
    mutation UnlikePost($id: String!) {
  unlikePost(id: $id) {
    id
    title
    body
    thumbnail
    likes
    views
    is_temp
    is_private
    released_at
    created_at
    updated_at
    liked
    user {
      id
      username
    }
    subs {
      id
      text
    }
    subs_count
  }
}
    `;
export type UnlikePostMutationFn = Apollo.MutationFunction<UnlikePostMutation, UnlikePostMutationVariables>;

/**
 * __useUnlikePostMutation__
 *
 * To run a mutation, you first call `useUnlikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikePostMutation, { data, loading, error }] = useUnlikePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnlikePostMutation(baseOptions?: Apollo.MutationHookOptions<UnlikePostMutation, UnlikePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnlikePostMutation, UnlikePostMutationVariables>(UnlikePostDocument, options);
      }
export type UnlikePostMutationHookResult = ReturnType<typeof useUnlikePostMutation>;
export type UnlikePostMutationResult = Apollo.MutationResult<UnlikePostMutation>;
export type UnlikePostMutationOptions = Apollo.BaseMutationOptions<UnlikePostMutation, UnlikePostMutationVariables>;
export const UploadImageToCloudinaryDocument = gql`
    mutation UploadImageToCloudinary($body: String!, $width: Int!, $height: Int!) {
  uploadImage(body: $body, width: $width, height: $height) {
    public_id
    url
  }
}
    `;
export type UploadImageToCloudinaryMutationFn = Apollo.MutationFunction<UploadImageToCloudinaryMutation, UploadImageToCloudinaryMutationVariables>;

/**
 * __useUploadImageToCloudinaryMutation__
 *
 * To run a mutation, you first call `useUploadImageToCloudinaryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadImageToCloudinaryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadImageToCloudinaryMutation, { data, loading, error }] = useUploadImageToCloudinaryMutation({
 *   variables: {
 *      body: // value for 'body'
 *      width: // value for 'width'
 *      height: // value for 'height'
 *   },
 * });
 */
export function useUploadImageToCloudinaryMutation(baseOptions?: Apollo.MutationHookOptions<UploadImageToCloudinaryMutation, UploadImageToCloudinaryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadImageToCloudinaryMutation, UploadImageToCloudinaryMutationVariables>(UploadImageToCloudinaryDocument, options);
      }
export type UploadImageToCloudinaryMutationHookResult = ReturnType<typeof useUploadImageToCloudinaryMutation>;
export type UploadImageToCloudinaryMutationResult = Apollo.MutationResult<UploadImageToCloudinaryMutation>;
export type UploadImageToCloudinaryMutationOptions = Apollo.BaseMutationOptions<UploadImageToCloudinaryMutation, UploadImageToCloudinaryMutationVariables>;
export const CreateProfileDocument = gql`
    mutation CreateProfile($bio: String, $profile_name: String, $thumbnail: String) {
  createProfile(bio: $bio, profile_name: $profile_name, thumbnail: $thumbnail) {
    id
    bio
    profile_name
    thumbnail
    created_at
    updated_at
  }
}
    `;
export type CreateProfileMutationFn = Apollo.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

/**
 * __useCreateProfileMutation__
 *
 * To run a mutation, you first call `useCreateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProfileMutation, { data, loading, error }] = useCreateProfileMutation({
 *   variables: {
 *      bio: // value for 'bio'
 *      profile_name: // value for 'profile_name'
 *      thumbnail: // value for 'thumbnail'
 *   },
 * });
 */
export function useCreateProfileMutation(baseOptions?: Apollo.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, options);
      }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = Apollo.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = Apollo.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const GetProfileDocument = gql`
    query GetProfile($user_id: String) {
  getProfile(user_id: $user_id) {
    id
    bio
    profile_name
    thumbnail
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetProfileQuery__
 *
 * To run a query within a React component, call `useGetProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileQueryResult = Apollo.QueryResult<GetProfileQuery, GetProfileQueryVariables>;
export const TagsDocument = gql`
    query Tags($sort: String!) {
  tags(sort: $sort) {
    id
    name
    posts_count
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTagsQuery(baseOptions: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    id
    username
    accessToken
    refreshToken
    profile {
      id
      bio
      profile_name
      thumbnail
    }
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
 *      username: // value for 'username'
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
    mutation Register($username: String!, $password: String!) {
  register(username: $username, password: $password) {
    id
    username
    accessToken
    refreshToken
    profile {
      id
      bio
      profile_name
      thumbnail
    }
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
 *      username: // value for 'username'
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
    profile {
      id
      bio
      profile_name
      user_id
      created_at
      updated_at
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
    profile {
      id
      bio
      profile_name
      user_id
      thumbnail
      created_at
      updated_at
    }
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