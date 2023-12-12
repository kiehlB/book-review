import gql from 'graphql-tag';

// export const CORE_POST_FIELDS = gql`
//   fragment CorePostFields on Post {
//     id
//     title
//     body
//     thumbnail
//     likes
//     views
//     is_temp
//     is_private
//     released_at
//     created_at
//     updated_at
//     liked
//     tags {
//       tag {
//         name
//       }
//     }
//     bookInfo {
//       bookTitle
//       bookContent
//       bookUrl
//       bookIsbn
//       bookAuthors
//     }
//   }
// `;

// export const CORE_USER_FIELDS = gql`
//   fragment CoreUserFields on User {
//     id
//     username
//     profile {
//       id
//       bio
//       profile_name
//       thumbnail
//     }
//   }
// `;

// export const CORE_COMMENT_FIELDS = gql`
//   fragment CoreCommentFields on Comments {
//     id
//     text
//     likes
//     has_replies
//     deleted
//     level
//     reply
//     created_at
//     updated_at
//     user {
//       ...UserInfo
//     }
//     replies {
//       id
//       text
//       has_replies
//       created_at
//       updated_at
//     }
//   }
// `;

export const GET_Post = gql`
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
          id
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

export const GET_Posts = gql`
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

export const GET_recentPosts = gql`
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

export const GET_trendingPosts = gql`
  query TrendingPosts(
    $offset: Int
    $limit: Int
    $timeframe: String
    $from: Date
    $to: Date
  ) {
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

export const Create_Post = gql`
  mutation CreatePost(
    $title: String!
    $body: String!
    $postbody: String
    $tags: [String]!
    $is_temp: Boolean
    $is_private: Boolean
    $series_id: String
    $thumbnail: String
    $bookTitle: String
    $bookContent: String
    $bookUrl: String
    $bookIsbn: String
    $bookAuthors: String
    $publisher: String
    $pubDate: String
    $customerReviewRank: Int
    $priceStandard: Int
    $categoryName: String
    $categoryId: Int
  ) {
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

export const GET_Search_Posts = gql`
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

export const Edit_Post = gql`
  mutation EditPost(
    $id: String!
    $title: String
    $body: String
    $thumbnail: String
    $tags: [String]
    $is_temp: Boolean
    $is_private: Boolean
    $postbody: String
  ) {
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
      comments {
        id
        text
      }
      comments_count
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
      comments {
        id
        text
      }
      comments_count
    }
  }
`;

export const UPLOAD_IMAGE_TO_CLOUDINARY = gql`
  mutation UploadImageToCloudinary($body: String!, $width: Int!, $height: Int!) {
    uploadImage(body: $body, width: $width, height: $height) {
      public_id
      url
    }
  }
`;

export const Post_View = gql`
  mutation PostView($id: String!) {
    postView(id: $id)
  }
`;
