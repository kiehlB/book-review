import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type CategoryInput = {
  __typename?: 'CategoryInput';
  name?: Maybe<Scalars['String']['output']>;
};

export type Comments = {
  __typename?: 'Comments';
  created_at: Scalars['Date']['output'];
  deleted: Scalars['Boolean']['output'];
  has_replies: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  likedComments?: Maybe<Scalars['Boolean']['output']>;
  likes: Scalars['Int']['output'];
  post_id?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Maybe<Comments>>>;
  replies_count?: Maybe<Scalars['Int']['output']>;
  reply?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updated_at: Scalars['Date']['output'];
  upvotes?: Maybe<Scalars['Int']['output']>;
  user: User;
  users?: Maybe<User>;
};

export type CommentsTypes = {
  __typename?: 'CommentsTypes';
  created_at?: Maybe<Scalars['Date']['output']>;
  deleted?: Maybe<Scalars['Boolean']['output']>;
  has_replies?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  level?: Maybe<Scalars['Int']['output']>;
  likes?: Maybe<Scalars['Int']['output']>;
  post_id?: Maybe<Scalars['String']['output']>;
  replies?: Maybe<Array<Maybe<CommentsTypes>>>;
  reply?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  user?: Maybe<User>;
};

export type Followers = {
  __typename?: 'Followers';
  follower_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  user_id?: Maybe<Scalars['String']['output']>;
};

export type Following = {
  __typename?: 'Following';
  following_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  user_id?: Maybe<Scalars['String']['output']>;
};

export type ImageUrl = {
  __typename?: 'ImageUrl';
  public_id?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  commentUpvotes?: Maybe<Scalars['Boolean']['output']>;
  createComments?: Maybe<Comments>;
  createPost?: Maybe<Post>;
  createPostHistory?: Maybe<Post>;
  createProfile?: Maybe<Profile>;
  deleteCommentUpvote?: Maybe<Scalars['Boolean']['output']>;
  editComments?: Maybe<Comments>;
  editPost?: Maybe<Post>;
  likePost?: Maybe<Post>;
  login?: Maybe<User>;
  logout?: Maybe<Scalars['Boolean']['output']>;
  mergeTag?: Maybe<Scalars['Boolean']['output']>;
  postView?: Maybe<Scalars['Boolean']['output']>;
  register?: Maybe<User>;
  removeComments?: Maybe<Scalars['Boolean']['output']>;
  removePost?: Maybe<Scalars['Boolean']['output']>;
  unlikePost?: Maybe<Post>;
  unregister?: Maybe<Scalars['Boolean']['output']>;
  uploadImage?: Maybe<UploadedImage>;
};


export type MutationCommentUpvotesArgs = {
  id: Scalars['String']['input'];
};


export type MutationCreateCommentsArgs = {
  comment_id?: InputMaybe<Scalars['String']['input']>;
  post_id?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreatePostArgs = {
  body: Scalars['String']['input'];
  bookAuthors?: InputMaybe<Scalars['String']['input']>;
  bookContent?: InputMaybe<Scalars['String']['input']>;
  bookIsbn?: InputMaybe<Scalars['String']['input']>;
  bookTitle?: InputMaybe<Scalars['String']['input']>;
  bookUrl?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  customerReviewRank?: InputMaybe<Scalars['Int']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  is_temp?: InputMaybe<Scalars['Boolean']['input']>;
  postbody?: InputMaybe<Scalars['String']['input']>;
  priceStandard?: InputMaybe<Scalars['Int']['input']>;
  pubDate?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  series_id?: InputMaybe<Scalars['String']['input']>;
  tags: Array<InputMaybe<Scalars['String']['input']>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreatePostHistoryArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  post_id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateProfileArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  profile_name?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationDeleteCommentUpvoteArgs = {
  id: Scalars['String']['input'];
};


export type MutationEditCommentsArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};


export type MutationEditPostArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  is_temp?: InputMaybe<Scalars['Boolean']['input']>;
  postbody?: InputMaybe<Scalars['String']['input']>;
  series_id?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLikePostArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationMergeTagArgs = {
  merge_to?: InputMaybe<Scalars['String']['input']>;
  selected?: InputMaybe<Scalars['String']['input']>;
};


export type MutationPostViewArgs = {
  id: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationRemoveCommentsArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemovePostArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlikePostArgs = {
  id: Scalars['String']['input'];
};


export type MutationUnregisterArgs = {
  token: Scalars['String']['input'];
};


export type MutationUploadImageArgs = {
  body?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']['output']>;
  bookInfo?: Maybe<PostBookInfo>;
  comments?: Maybe<Array<Maybe<Comments>>>;
  comments_count?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  endCursor?: Maybe<Scalars['String']['output']>;
  hasMore?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['String']['output'];
  is_private?: Maybe<Scalars['Boolean']['output']>;
  is_temp?: Maybe<Scalars['Boolean']['output']>;
  liked?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  post_id?: Maybe<Scalars['String']['output']>;
  postbody?: Maybe<Scalars['String']['output']>;
  released_at?: Maybe<Scalars['Date']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  upvotes?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
  user?: Maybe<User>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type PostBookInfo = {
  __typename?: 'PostBookInfo';
  bookAuthors?: Maybe<Scalars['String']['output']>;
  bookContent?: Maybe<Scalars['String']['output']>;
  bookIsbn?: Maybe<Scalars['String']['output']>;
  bookTitle?: Maybe<Scalars['String']['output']>;
  bookUrl?: Maybe<Scalars['String']['output']>;
  categoryId?: Maybe<Scalars['String']['output']>;
  categoryName?: Maybe<Scalars['String']['output']>;
  customerReviewRank?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  post_id?: Maybe<Scalars['String']['output']>;
  priceStandard?: Maybe<Scalars['String']['output']>;
  pubDate?: Maybe<Scalars['String']['output']>;
  publisher?: Maybe<Scalars['String']['output']>;
};

export type PostTag = {
  __typename?: 'PostTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Profile = {
  __typename?: 'Profile';
  bio?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  profile_name?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type ProfileArgs = {
  __typename?: 'ProfileArgs';
  bio?: Maybe<Scalars['String']['output']>;
  profile_name?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Comments?: Maybe<Array<Maybe<Comments>>>;
  _empty?: Maybe<Scalars['String']['output']>;
  getComments?: Maybe<Comments>;
  getImageUrl?: Maybe<ImageUrl>;
  getProfile?: Maybe<Profile>;
  getSubComments?: Maybe<Array<Maybe<Comments>>>;
  post?: Maybe<Post>;
  postHistories?: Maybe<Array<Maybe<Post>>>;
  posts?: Maybe<Array<Maybe<Post>>>;
  readHistory: ReadingHistoryConnection;
  recentPosts?: Maybe<Array<Maybe<Post>>>;
  searchPosts?: Maybe<Array<Maybe<Post>>>;
  searchReadingHistory?: Maybe<ReadingHistoryConnection>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  trendingPosts?: Maybe<Array<Maybe<Post>>>;
  user: User;
  userMostReadTags?: Maybe<Array<Maybe<UserMostReadTag>>>;
  userReadHistory?: Maybe<Array<Maybe<UserReadHistory>>>;
  userReadingRank?: Maybe<UserReadingRank>;
  userTags?: Maybe<UserTags>;
  users?: Maybe<Array<Maybe<User>>>;
  whoami?: Maybe<User>;
};


export type QueryGetCommentsArgs = {
  comment_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetProfileArgs = {
  user_id: Scalars['String']['input'];
};


export type QueryGetSubCommentsArgs = {
  comment_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostArgs = {
  id: Scalars['String']['input'];
};


export type QueryPostHistoriesArgs = {
  post_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  istemp?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryReadHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isPublic?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryRecentPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchPostsArgs = {
  searchInput?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchReadingHistoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QueryTagArgs = {
  name: Scalars['String']['input'];
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort: Scalars['String']['input'];
};


export type QueryTrendingPostsArgs = {
  from?: InputMaybe<Scalars['Date']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  timeframe?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserMostReadTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserReadHistoryArgs = {
  after: Scalars['String']['input'];
  before: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QueryUserReadingRankArgs = {
  id: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserTagsArgs = {
  username?: InputMaybe<Scalars['String']['input']>;
};

export type ReadingHistory = {
  __typename?: 'ReadingHistory';
  post: Post;
  timestamp: Scalars['Date']['output'];
  timestampDb: Scalars['Date']['output'];
};

export type ReadingHistoryConnection = {
  __typename?: 'ReadingHistoryConnection';
  edges: Array<Maybe<ReadingHistoryEdge>>;
  pageInfo: PageInfo;
};

export type ReadingHistoryEdge = {
  __typename?: 'ReadingHistoryEdge';
  cursor: Scalars['String']['output'];
  node: ReadingHistory;
};

export type SearchReadingHistorySuggestion = {
  __typename?: 'SearchReadingHistorySuggestion';
  title: Scalars['String']['output'];
};

export type SearchReadingHistorySuggestionsResults = {
  __typename?: 'SearchReadingHistorySuggestionsResults';
  hits: Array<SearchReadingHistorySuggestion>;
  query: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  created_at?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  post_id?: Maybe<Scalars['String']['output']>;
  posts_count?: Maybe<Scalars['Int']['output']>;
  tag?: Maybe<PostTag>;
  thumbnail?: Maybe<Scalars['String']['output']>;
};

export type TagInput = {
  __typename?: 'TagInput';
  tag_name: Scalars['String']['output'];
};

export type TransformImageOptionsInput = {
  __typename?: 'TransformImageOptionsInput';
  crop?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadOptionsInput = {
  __typename?: 'UploadOptionsInput';
  access_mode?: Maybe<Scalars['String']['output']>;
  auto_tagging?: Maybe<Scalars['Boolean']['output']>;
  categorization?: Maybe<Array<Maybe<CategoryInput>>>;
  cinemegraph_analysis?: Maybe<Scalars['Boolean']['output']>;
  colors?: Maybe<Scalars['Boolean']['output']>;
  discard_original_filename?: Maybe<Scalars['Boolean']['output']>;
  faces?: Maybe<Scalars['Boolean']['output']>;
  folder?: Maybe<Scalars['String']['output']>;
  image_metadata?: Maybe<Scalars['Boolean']['output']>;
  overwrite?: Maybe<Scalars['Boolean']['output']>;
  phash?: Maybe<Scalars['Boolean']['output']>;
  public_id?: Maybe<Scalars['String']['output']>;
  quality_analysis?: Maybe<Scalars['Boolean']['output']>;
  resource_type?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<TagInput>>>;
  type?: Maybe<Scalars['String']['output']>;
  unique_filename?: Maybe<Scalars['Boolean']['output']>;
  use_filename?: Maybe<Scalars['Boolean']['output']>;
};

export type UploadedImage = {
  __typename?: 'UploadedImage';
  bytes: Scalars['Int']['output'];
  created_at: Scalars['String']['output'];
  etag: Scalars['String']['output'];
  format: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  original_filename: Scalars['String']['output'];
  public_id: Scalars['String']['output'];
  resource_type: Scalars['String']['output'];
  secure_url: Scalars['String']['output'];
  signature: Scalars['String']['output'];
  tags: Array<Maybe<Tag>>;
  type: Scalars['String']['output'];
  url: Scalars['String']['output'];
  version: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  accessToken?: Maybe<Scalars['String']['output']>;
  auth?: Maybe<Array<Maybe<User>>>;
  created_at?: Maybe<Scalars['Date']['output']>;
  follower?: Maybe<Followers>;
  id: Scalars['String']['output'];
  is_certified: Scalars['Boolean']['output'];
  password?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<UserProfile>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  tokenVersion?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  username_verified?: Maybe<Scalars['Boolean']['output']>;
};

export type UserMostReadTag = {
  __typename?: 'UserMostReadTag';
  count: Scalars['Int']['output'];
  percentage?: Maybe<Scalars['Float']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  value: Scalars['String']['output'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  bio?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['Date']['output']>;
  id: Scalars['String']['output'];
  profile_name?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['Date']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

export type UserReadHistory = {
  __typename?: 'UserReadHistory';
  date: Scalars['String']['output'];
  reads: Scalars['Int']['output'];
};

export type UserReadingRank = {
  __typename?: 'UserReadingRank';
  currentRank: Scalars['Int']['output'];
  lastReadTime?: Maybe<Scalars['Date']['output']>;
  progressThisWeek?: Maybe<Scalars['Int']['output']>;
  rankLastWeek?: Maybe<Scalars['Int']['output']>;
  rankThisWeek?: Maybe<Scalars['Int']['output']>;
  readToday?: Maybe<Scalars['Boolean']['output']>;
};

export type UserTags = {
  __typename?: 'UserTags';
  posts_count?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};

export type CreateCommentsMutationVariables = Exact<{
  post_id: Scalars['String']['input'];
  text: Scalars['String']['input'];
  comment_id?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateCommentsMutation = { __typename?: 'Mutation', createComments?: { __typename?: 'Comments', id: string, level: number } | null };

export type RemoveCommentsMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveCommentsMutation = { __typename?: 'Mutation', removeComments?: boolean | null };

export type GetCommentsCountQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCommentsCountQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, comments_count?: number | null } | null };

export type EditCommentsMutationVariables = Exact<{
  id: Scalars['String']['input'];
  text: Scalars['String']['input'];
}>;


export type EditCommentsMutation = { __typename?: 'Mutation', editComments?: { __typename?: 'Comments', id: string, text: string, level: number, updated_at: any, created_at: any } | null };

export type GetSubCommentsQueryVariables = Exact<{
  comment_id: Scalars['String']['input'];
}>;


export type GetSubCommentsQuery = { __typename?: 'Query', getSubComments?: Array<{ __typename?: 'Comments', id: string, text: string, likes: number, has_replies: boolean, deleted: boolean, upvotes?: number | null, likedComments?: boolean | null, level: number, reply?: string | null, created_at: any, updated_at: any, replies_count?: number | null, users?: { __typename?: 'User', id: string, username?: string | null } | null, replies?: Array<{ __typename?: 'Comments', id: string, text: string, level: number, updated_at: any, created_at: any, has_replies: boolean, replies_count?: number | null, upvotes?: number | null, users?: { __typename?: 'User', id: string, username?: string | null, profile?: { __typename?: 'UserProfile', id: string, bio?: string | null, profile_name?: string | null, thumbnail?: string | null } | null } | null } | null> | null } | null> | null };

export type CommentUpvotesMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type CommentUpvotesMutation = { __typename?: 'Mutation', commentUpvotes?: boolean | null };

export type DeleteCommentUpvoteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCommentUpvoteMutation = { __typename?: 'Mutation', deleteCommentUpvote?: boolean | null };

export type GetPostQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title?: string | null, body?: string | null, postbody?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, tags?: Array<{ __typename?: 'Tag', tag?: { __typename?: 'PostTag', name?: string | null } | null } | null> | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string, likes: number, has_replies: boolean, deleted: boolean, level: number, reply?: string | null, created_at: any, updated_at: any, upvotes?: number | null, replies_count?: number | null, user: { __typename?: 'User', id: string, username?: string | null, profile?: { __typename?: 'UserProfile', id: string, bio?: string | null, profile_name?: string | null, thumbnail?: string | null } | null }, replies?: Array<{ __typename?: 'Comments', id: string, text: string, has_replies: boolean, created_at: any, updated_at: any } | null> | null } | null> | null } | null };

export type GetPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
  istemp?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title?: string | null, body?: string | null, postbody?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, tags?: Array<{ __typename?: 'Tag', tag?: { __typename?: 'PostTag', name?: string | null } | null } | null> | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null> | null };

export type RecentPostsQueryVariables = Exact<{
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type RecentPostsQuery = { __typename?: 'Query', recentPosts?: Array<{ __typename?: 'Post', id: string, title?: string | null, body?: string | null, postbody?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, tags?: Array<{ __typename?: 'Tag', tag?: { __typename?: 'PostTag', name?: string | null } | null } | null> | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null> | null };

export type TrendingPostsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  timeframe?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['Date']['input']>;
  to?: InputMaybe<Scalars['Date']['input']>;
}>;


export type TrendingPostsQuery = { __typename?: 'Query', trendingPosts?: Array<{ __typename?: 'Post', id: string, title?: string | null, thumbnail?: string | null, likes?: number | null, postbody?: string | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null> | null };

export type CreatePostMutationVariables = Exact<{
  title: Scalars['String']['input'];
  body: Scalars['String']['input'];
  postbody?: InputMaybe<Scalars['String']['input']>;
  tags: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  is_temp?: InputMaybe<Scalars['Boolean']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  series_id?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  bookTitle?: InputMaybe<Scalars['String']['input']>;
  bookContent?: InputMaybe<Scalars['String']['input']>;
  bookUrl?: InputMaybe<Scalars['String']['input']>;
  bookIsbn?: InputMaybe<Scalars['String']['input']>;
  bookAuthors?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  pubDate?: InputMaybe<Scalars['String']['input']>;
  customerReviewRank?: InputMaybe<Scalars['Int']['input']>;
  priceStandard?: InputMaybe<Scalars['Int']['input']>;
  categoryName?: InputMaybe<Scalars['String']['input']>;
  categoryId?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id: string, title?: string | null, body?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, postbody?: string | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null } | null };

export type ReloadCommentsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type ReloadCommentsQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title?: string | null, body?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, comments_count?: number | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null };

export type SearchPostsQueryVariables = Exact<{
  searchInput?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPostsQuery = { __typename?: 'Query', searchPosts?: Array<{ __typename?: 'Post', id: string, title?: string | null, body?: string | null, postbody?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, bookInfo?: { __typename?: 'PostBookInfo', bookTitle?: string | null, bookContent?: string | null, bookUrl?: string | null, bookIsbn?: string | null, bookAuthors?: string | null } | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null> | null };

export type EditPostMutationVariables = Exact<{
  id: Scalars['String']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  body?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  is_temp?: InputMaybe<Scalars['Boolean']['input']>;
  is_private?: InputMaybe<Scalars['Boolean']['input']>;
  postbody?: InputMaybe<Scalars['String']['input']>;
}>;


export type EditPostMutation = { __typename?: 'Mutation', editPost?: { __typename?: 'Post', id: string, title?: string | null, body?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null };

export type RemovePostMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost?: boolean | null };

export type LikePostMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type LikePostMutation = { __typename?: 'Mutation', likePost?: { __typename?: 'Post', id: string, title?: string | null, body?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null };

export type UnlikePostMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type UnlikePostMutation = { __typename?: 'Mutation', unlikePost?: { __typename?: 'Post', id: string, title?: string | null, body?: string | null, thumbnail?: string | null, likes?: number | null, views?: number | null, is_temp?: boolean | null, is_private?: boolean | null, released_at?: any | null, created_at?: any | null, updated_at?: any | null, liked?: boolean | null, comments_count?: number | null, user?: { __typename?: 'User', id: string, username?: string | null } | null, comments?: Array<{ __typename?: 'Comments', id: string, text: string } | null> | null } | null };

export type UploadImageToCloudinaryMutationVariables = Exact<{
  body: Scalars['String']['input'];
  width: Scalars['Int']['input'];
  height: Scalars['Int']['input'];
}>;


export type UploadImageToCloudinaryMutation = { __typename?: 'Mutation', uploadImage?: { __typename?: 'UploadedImage', public_id: string, url: string } | null };

export type PostViewMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type PostViewMutation = { __typename?: 'Mutation', postView?: boolean | null };

export type CreateProfileMutationVariables = Exact<{
  bio?: InputMaybe<Scalars['String']['input']>;
  profile_name?: InputMaybe<Scalars['String']['input']>;
  thumbnail?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreateProfileMutation = { __typename?: 'Mutation', createProfile?: { __typename?: 'Profile', id?: string | null, bio?: string | null, profile_name?: string | null, thumbnail?: string | null, created_at?: any | null, updated_at?: any | null } | null };

export type GetProfileQueryVariables = Exact<{
  user_id: Scalars['String']['input'];
}>;


export type GetProfileQuery = { __typename?: 'Query', getProfile?: { __typename?: 'Profile', id?: string | null, bio?: string | null, profile_name?: string | null, thumbnail?: string | null, created_at?: any | null, updated_at?: any | null } | null };

export type TagsQueryVariables = Exact<{
  sort: Scalars['String']['input'];
}>;


export type TagsQuery = { __typename?: 'Query', tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null, posts_count?: number | null } | null> | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', id: string, username?: string | null, accessToken?: string | null, refreshToken?: string | null, profile?: { __typename?: 'UserProfile', id: string, bio?: string | null, profile_name?: string | null, thumbnail?: string | null } | null } | null };

export type RegisterMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'User', id: string, username?: string | null, accessToken?: string | null, refreshToken?: string | null, profile?: { __typename?: 'UserProfile', id: string, bio?: string | null, profile_name?: string | null, thumbnail?: string | null } | null } | null };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', id: string, username?: string | null, profile?: { __typename?: 'UserProfile', id: string, bio?: string | null, profile_name?: string | null, user_id?: string | null, created_at?: any | null, updated_at?: any | null } | null } | null> | null };

export type WhoAmIQueryVariables = Exact<{ [key: string]: never; }>;


export type WhoAmIQuery = { __typename?: 'Query', whoami?: { __typename?: 'User', id: string, username?: string | null, profile?: { __typename?: 'UserProfile', id: string, bio?: string | null, profile_name?: string | null, user_id?: string | null, thumbnail?: string | null, created_at?: any | null, updated_at?: any | null } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: boolean | null };


export const CreateCommentsDocument = gql`
    mutation CreateComments($post_id: String!, $text: String!, $comment_id: String) {
  createComments(post_id: $post_id, text: $text, comment_id: $comment_id) {
    id
    level
  }
}
    `;
export type CreateCommentsMutationFn = Apollo.MutationFunction<CreateCommentsMutation, CreateCommentsMutationVariables>;

/**
 * __useCreateCommentsMutation__
 *
 * To run a mutation, you first call `useCreateCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentsMutation, { data, loading, error }] = useCreateCommentsMutation({
 *   variables: {
 *      post_id: // value for 'post_id'
 *      text: // value for 'text'
 *      comment_id: // value for 'comment_id'
 *   },
 * });
 */
export function useCreateCommentsMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentsMutation, CreateCommentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentsMutation, CreateCommentsMutationVariables>(CreateCommentsDocument, options);
      }
export type CreateCommentsMutationHookResult = ReturnType<typeof useCreateCommentsMutation>;
export type CreateCommentsMutationResult = Apollo.MutationResult<CreateCommentsMutation>;
export type CreateCommentsMutationOptions = Apollo.BaseMutationOptions<CreateCommentsMutation, CreateCommentsMutationVariables>;
export const RemoveCommentsDocument = gql`
    mutation RemoveComments($id: String!) {
  removeComments(id: $id)
}
    `;
export type RemoveCommentsMutationFn = Apollo.MutationFunction<RemoveCommentsMutation, RemoveCommentsMutationVariables>;

/**
 * __useRemoveCommentsMutation__
 *
 * To run a mutation, you first call `useRemoveCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeCommentsMutation, { data, loading, error }] = useRemoveCommentsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveCommentsMutation(baseOptions?: Apollo.MutationHookOptions<RemoveCommentsMutation, RemoveCommentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveCommentsMutation, RemoveCommentsMutationVariables>(RemoveCommentsDocument, options);
      }
export type RemoveCommentsMutationHookResult = ReturnType<typeof useRemoveCommentsMutation>;
export type RemoveCommentsMutationResult = Apollo.MutationResult<RemoveCommentsMutation>;
export type RemoveCommentsMutationOptions = Apollo.BaseMutationOptions<RemoveCommentsMutation, RemoveCommentsMutationVariables>;
export const GetCommentsCountDocument = gql`
    query GetCommentsCount($id: String!) {
  post(id: $id) {
    id
    comments_count
  }
}
    `;

/**
 * __useGetCommentsCountQuery__
 *
 * To run a query within a React component, call `useGetCommentsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCommentsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCommentsCountQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCommentsCountQuery(baseOptions: Apollo.QueryHookOptions<GetCommentsCountQuery, GetCommentsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCommentsCountQuery, GetCommentsCountQueryVariables>(GetCommentsCountDocument, options);
      }
export function useGetCommentsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCommentsCountQuery, GetCommentsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCommentsCountQuery, GetCommentsCountQueryVariables>(GetCommentsCountDocument, options);
        }
export function useGetCommentsCountSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetCommentsCountQuery, GetCommentsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCommentsCountQuery, GetCommentsCountQueryVariables>(GetCommentsCountDocument, options);
        }
export type GetCommentsCountQueryHookResult = ReturnType<typeof useGetCommentsCountQuery>;
export type GetCommentsCountLazyQueryHookResult = ReturnType<typeof useGetCommentsCountLazyQuery>;
export type GetCommentsCountSuspenseQueryHookResult = ReturnType<typeof useGetCommentsCountSuspenseQuery>;
export type GetCommentsCountQueryResult = Apollo.QueryResult<GetCommentsCountQuery, GetCommentsCountQueryVariables>;
export const EditCommentsDocument = gql`
    mutation EditComments($id: String!, $text: String!) {
  editComments(id: $id, text: $text) {
    id
    text
    level
    updated_at
    created_at
    updated_at
  }
}
    `;
export type EditCommentsMutationFn = Apollo.MutationFunction<EditCommentsMutation, EditCommentsMutationVariables>;

/**
 * __useEditCommentsMutation__
 *
 * To run a mutation, you first call `useEditCommentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditCommentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editCommentsMutation, { data, loading, error }] = useEditCommentsMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useEditCommentsMutation(baseOptions?: Apollo.MutationHookOptions<EditCommentsMutation, EditCommentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditCommentsMutation, EditCommentsMutationVariables>(EditCommentsDocument, options);
      }
export type EditCommentsMutationHookResult = ReturnType<typeof useEditCommentsMutation>;
export type EditCommentsMutationResult = Apollo.MutationResult<EditCommentsMutation>;
export type EditCommentsMutationOptions = Apollo.BaseMutationOptions<EditCommentsMutation, EditCommentsMutationVariables>;
export const GetSubCommentsDocument = gql`
    query GetSubComments($comment_id: String!) {
  getSubComments(comment_id: $comment_id) {
    id
    text
    likes
    has_replies
    deleted
    upvotes
    likedComments
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
      created_at
      has_replies
      replies_count
      upvotes
      users {
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
 * __useGetSubCommentsQuery__
 *
 * To run a query within a React component, call `useGetSubCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubCommentsQuery({
 *   variables: {
 *      comment_id: // value for 'comment_id'
 *   },
 * });
 */
export function useGetSubCommentsQuery(baseOptions: Apollo.QueryHookOptions<GetSubCommentsQuery, GetSubCommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubCommentsQuery, GetSubCommentsQueryVariables>(GetSubCommentsDocument, options);
      }
export function useGetSubCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubCommentsQuery, GetSubCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubCommentsQuery, GetSubCommentsQueryVariables>(GetSubCommentsDocument, options);
        }
export function useGetSubCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetSubCommentsQuery, GetSubCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubCommentsQuery, GetSubCommentsQueryVariables>(GetSubCommentsDocument, options);
        }
export type GetSubCommentsQueryHookResult = ReturnType<typeof useGetSubCommentsQuery>;
export type GetSubCommentsLazyQueryHookResult = ReturnType<typeof useGetSubCommentsLazyQuery>;
export type GetSubCommentsSuspenseQueryHookResult = ReturnType<typeof useGetSubCommentsSuspenseQuery>;
export type GetSubCommentsQueryResult = Apollo.QueryResult<GetSubCommentsQuery, GetSubCommentsQueryVariables>;
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
    postbody
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
    comments {
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
      replies {
        id
        text
        has_replies
        created_at
        updated_at
      }
      replies_count
    }
    comments_count
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
export function useGetPostSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostQuery, GetPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostQuery, GetPostQueryVariables>(GetPostDocument, options);
        }
export type GetPostQueryHookResult = ReturnType<typeof useGetPostQuery>;
export type GetPostLazyQueryHookResult = ReturnType<typeof useGetPostLazyQuery>;
export type GetPostSuspenseQueryHookResult = ReturnType<typeof useGetPostSuspenseQuery>;
export type GetPostQueryResult = Apollo.QueryResult<GetPostQuery, GetPostQueryVariables>;
export const GetPostsDocument = gql`
    query GetPosts($cursor: String, $username: String, $istemp: Boolean) {
  posts(cursor: $cursor, username: $username, istemp: $istemp) {
    id
    title
    body
    postbody
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
    comments {
      id
      text
    }
    comments_count
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
export function useGetPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetPostsQuery, GetPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, options);
        }
export type GetPostsQueryHookResult = ReturnType<typeof useGetPostsQuery>;
export type GetPostsLazyQueryHookResult = ReturnType<typeof useGetPostsLazyQuery>;
export type GetPostsSuspenseQueryHookResult = ReturnType<typeof useGetPostsSuspenseQuery>;
export type GetPostsQueryResult = Apollo.QueryResult<GetPostsQuery, GetPostsQueryVariables>;
export const RecentPostsDocument = gql`
    query RecentPosts($cursor: String, $limit: Int) {
  recentPosts(cursor: $cursor, limit: $limit) {
    id
    title
    body
    postbody
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
    comments {
      id
      text
    }
    comments_count
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
export function useRecentPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RecentPostsQuery, RecentPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RecentPostsQuery, RecentPostsQueryVariables>(RecentPostsDocument, options);
        }
export type RecentPostsQueryHookResult = ReturnType<typeof useRecentPostsQuery>;
export type RecentPostsLazyQueryHookResult = ReturnType<typeof useRecentPostsLazyQuery>;
export type RecentPostsSuspenseQueryHookResult = ReturnType<typeof useRecentPostsSuspenseQuery>;
export type RecentPostsQueryResult = Apollo.QueryResult<RecentPostsQuery, RecentPostsQueryVariables>;
export const TrendingPostsDocument = gql`
    query TrendingPosts($offset: Int, $limit: Int, $timeframe: String, $from: Date, $to: Date) {
  trendingPosts(
    offset: $offset
    limit: $limit
    timeframe: $timeframe
    from: $from
    to: $to
  ) {
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
    comments {
      id
      text
    }
    comments_count
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
 *      from: // value for 'from'
 *      to: // value for 'to'
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
export function useTrendingPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TrendingPostsQuery, TrendingPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TrendingPostsQuery, TrendingPostsQueryVariables>(TrendingPostsDocument, options);
        }
export type TrendingPostsQueryHookResult = ReturnType<typeof useTrendingPostsQuery>;
export type TrendingPostsLazyQueryHookResult = ReturnType<typeof useTrendingPostsLazyQuery>;
export type TrendingPostsSuspenseQueryHookResult = ReturnType<typeof useTrendingPostsSuspenseQuery>;
export type TrendingPostsQueryResult = Apollo.QueryResult<TrendingPostsQuery, TrendingPostsQueryVariables>;
export const CreatePostDocument = gql`
    mutation CreatePost($title: String!, $body: String!, $postbody: String, $tags: [String]!, $is_temp: Boolean, $is_private: Boolean, $series_id: String, $thumbnail: String, $bookTitle: String, $bookContent: String, $bookUrl: String, $bookIsbn: String, $bookAuthors: String, $publisher: String, $pubDate: String, $customerReviewRank: Int, $priceStandard: Int, $categoryName: String, $categoryId: Int) {
  createPost(
    title: $title
    body: $body
    postbody: $postbody
    tags: $tags
    is_temp: $is_temp
    is_private: $is_private
    series_id: $series_id
    thumbnail: $thumbnail
    bookTitle: $bookTitle
    bookContent: $bookContent
    bookUrl: $bookUrl
    bookIsbn: $bookIsbn
    bookAuthors: $bookAuthors
    publisher: $publisher
    pubDate: $pubDate
    customerReviewRank: $customerReviewRank
    priceStandard: $priceStandard
    categoryName: $categoryName
    categoryId: $categoryId
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
 *      title: // value for 'title'
 *      body: // value for 'body'
 *      postbody: // value for 'postbody'
 *      tags: // value for 'tags'
 *      is_temp: // value for 'is_temp'
 *      is_private: // value for 'is_private'
 *      series_id: // value for 'series_id'
 *      thumbnail: // value for 'thumbnail'
 *      bookTitle: // value for 'bookTitle'
 *      bookContent: // value for 'bookContent'
 *      bookUrl: // value for 'bookUrl'
 *      bookIsbn: // value for 'bookIsbn'
 *      bookAuthors: // value for 'bookAuthors'
 *      publisher: // value for 'publisher'
 *      pubDate: // value for 'pubDate'
 *      customerReviewRank: // value for 'customerReviewRank'
 *      priceStandard: // value for 'priceStandard'
 *      categoryName: // value for 'categoryName'
 *      categoryId: // value for 'categoryId'
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
    comments_count
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
    comments {
      id
      text
    }
    comments_count
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
export function useReloadCommentsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReloadCommentsQuery, ReloadCommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReloadCommentsQuery, ReloadCommentsQueryVariables>(ReloadCommentsDocument, options);
        }
export type ReloadCommentsQueryHookResult = ReturnType<typeof useReloadCommentsQuery>;
export type ReloadCommentsLazyQueryHookResult = ReturnType<typeof useReloadCommentsLazyQuery>;
export type ReloadCommentsSuspenseQueryHookResult = ReturnType<typeof useReloadCommentsSuspenseQuery>;
export type ReloadCommentsQueryResult = Apollo.QueryResult<ReloadCommentsQuery, ReloadCommentsQueryVariables>;
export const SearchPostsDocument = gql`
    query SearchPosts($searchInput: String) {
  searchPosts(searchInput: $searchInput) {
    id
    title
    body
    postbody
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
    comments {
      id
      text
    }
    comments_count
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
export function useSearchPostsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SearchPostsQuery, SearchPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SearchPostsQuery, SearchPostsQueryVariables>(SearchPostsDocument, options);
        }
export type SearchPostsQueryHookResult = ReturnType<typeof useSearchPostsQuery>;
export type SearchPostsLazyQueryHookResult = ReturnType<typeof useSearchPostsLazyQuery>;
export type SearchPostsSuspenseQueryHookResult = ReturnType<typeof useSearchPostsSuspenseQuery>;
export type SearchPostsQueryResult = Apollo.QueryResult<SearchPostsQuery, SearchPostsQueryVariables>;
export const EditPostDocument = gql`
    mutation EditPost($id: String!, $title: String, $body: String, $thumbnail: String, $tags: [String], $is_temp: Boolean, $is_private: Boolean, $postbody: String) {
  editPost(
    id: $id
    title: $title
    body: $body
    tags: $tags
    is_temp: $is_temp
    thumbnail: $thumbnail
    is_private: $is_private
    postbody: $postbody
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
    comments {
      id
      text
    }
    comments_count
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
 *      postbody: // value for 'postbody'
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
    comments {
      id
      text
    }
    comments_count
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
    comments {
      id
      text
    }
    comments_count
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
export const PostViewDocument = gql`
    mutation PostView($id: String!) {
  postView(id: $id)
}
    `;
export type PostViewMutationFn = Apollo.MutationFunction<PostViewMutation, PostViewMutationVariables>;

/**
 * __usePostViewMutation__
 *
 * To run a mutation, you first call `usePostViewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostViewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postViewMutation, { data, loading, error }] = usePostViewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostViewMutation(baseOptions?: Apollo.MutationHookOptions<PostViewMutation, PostViewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostViewMutation, PostViewMutationVariables>(PostViewDocument, options);
      }
export type PostViewMutationHookResult = ReturnType<typeof usePostViewMutation>;
export type PostViewMutationResult = Apollo.MutationResult<PostViewMutation>;
export type PostViewMutationOptions = Apollo.BaseMutationOptions<PostViewMutation, PostViewMutationVariables>;
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
    query GetProfile($user_id: String!) {
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
export function useGetProfileQuery(baseOptions: Apollo.QueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
      }
export function useGetProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export function useGetProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetProfileQuery, GetProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProfileQuery, GetProfileQueryVariables>(GetProfileDocument, options);
        }
export type GetProfileQueryHookResult = ReturnType<typeof useGetProfileQuery>;
export type GetProfileLazyQueryHookResult = ReturnType<typeof useGetProfileLazyQuery>;
export type GetProfileSuspenseQueryHookResult = ReturnType<typeof useGetProfileSuspenseQuery>;
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
export function useTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsSuspenseQueryHookResult = ReturnType<typeof useTagsSuspenseQuery>;
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
export function useUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersSuspenseQueryHookResult = ReturnType<typeof useUsersSuspenseQuery>;
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
export function useWhoAmISuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<WhoAmIQuery, WhoAmIQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WhoAmIQuery, WhoAmIQueryVariables>(WhoAmIDocument, options);
        }
export type WhoAmIQueryHookResult = ReturnType<typeof useWhoAmIQuery>;
export type WhoAmILazyQueryHookResult = ReturnType<typeof useWhoAmILazyQuery>;
export type WhoAmISuspenseQueryHookResult = ReturnType<typeof useWhoAmISuspenseQuery>;
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