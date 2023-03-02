import gql from 'graphql-tag';

export const GET_Post = gql`
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
          }
        }
      }
    }
  }
`;

export const GET_Posts = gql`
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

export const GET_recentPosts = gql`
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

export const GET_trendingPosts = gql`
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

export const Create_Post = gql`
  mutation CreatePost(
    $body: String!
    $title: String!
    $thumbnail: String
    $postbody: String
    $tags: [String]
    $is_temp: Boolean
    $is_private: Boolean
    $bookTitle: String
    $bookContent: String
    $bookUrl: String
    $bookIsbn: String
    $bookAuthors: [String]
  ) {
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

export const RELOAD_COMMENTS = gql`
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

export const GET_Search_Posts = gql`
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

export const Edit_Post = gql`
  mutation EditPost(
    $id: String!
    $title: String
    $body: String
    $thumbnail: String
    $tags: [String]
    $is_temp: Boolean
    $is_private: Boolean
  ) {
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

export const Remove_Post = gql`
  mutation RemovePost($id: String!) {
    removePost(id: $id)
  }
`;

export const Like_Post = gql`
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

export const UnLike_Post = gql`
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

export const UPLOAD_IMAGE_TO_CLOUDINARY = gql`
  mutation UploadImageToCloudinary($body: String!) {
    uploadImage(body: $body) {
      public_id
      url
    }
  }
`;
