import gql from 'graphql-tag';

export const GET_Post = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export const GET_Posts = gql`
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

export const Get_TopPost = gql`
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

//thumbnail: $thumbnail,
export const Create_Post = gql`
  mutation CreatePost(
    $body: String!
    $title: String!
    # $thumbnail: String!
    $tags: [String]
  ) {
    createPost(body: $body, title: $title, tags: $tags) {
      id
      title
      body
    }
  }
`;

// export const GET_Search_Posts = gql`
//   query SearchPosts($searchInput: String) {
//     searchPosts(searchInput: $searchInput) {
//       id
//       title
//       thumbnail
//       created_at
//       views
//       body
//       likes
//       tags {
//         name
//       }
//       liked
//       user {
//         id
//         username
//         follower {
//           id
//         }
//       }
//     }
//   }
// `;

// export const GET_IMAGE_URL = gql`
//   query GetImageUrl($imageName: String!, $transformOptions: TransformImageOptionsInput) {
//     getImageUrl(imageName: $imageName, transformOptions: $transformOptions) {
//       imageLink
//     }
//   }
// `;

// export const UPLOAD_IMAGE_TO_CLOUDINARY = gql`
//   mutation UploadImageToCloudinary($body: String!) {
//     uploadImage(body: $body) {
//       public_id
//       url
//     }
//   }
// `;

// export const Create_Comment = gql`
//   mutation CreateComment($post_id: String!, $text: String!, $comment_id: String) {
//     createComment(post_id: $post_id, text: $text, comment_id: $comment_id) {
//       id
//       text
//     }
//   }
// `;

// export const Get_Comment = gql`
//   query Comment {
//     comment {
//       id
//       text
//       post_id
//       reply
//       has_replies
//       replies {
//         id
//         text
//         user {
//           id
//           username
//         }
//       }
//       user {
//         id
//         username
//       }
//     }
//   }
// `;

// export const Get_SubComment = gql`
//   query Subcomments($comment_id: String) {
//     subcomments(comment_id: $comment_id) {
//       id
//       text
//       user {
//         id
//         username
//       }
//     }
//   }
// `;

// export const Like_Post = gql`
//   mutation LikePost($id: String!) {
//     likePost(id: $id) {
//       liked
//     }
//   }
// `;

// export const UnLike_Post = gql`
//   mutation UnLikePost($id: String!) {
//     unLikePost(id: $id) {
//       liked
//     }
//   }
// `;

// export const Edit_Post = gql`
//   mutation EditPost($post_id: String!, $title: String, $body: String) {
//     editPost(post_id: $post_id, title: $title, body: $body) {
//       id
//       title
//     }
//   }
// `;

export const Remove_Post = gql`
  mutation RemovePost($id: String!) {
    removePost(id: $id)
  }
`;

// export const Edit_Comment = gql`
//   mutation EditComment($id: String, $text: String) {
//     editComment(id: $id, text: $text) {
//       id
//       text
//     }
//   }
// `;

// export const Remove_Comment = gql`
//   mutation RemoveComment($id: String!) {
//     removeComment(id: $id)
//   }
// `;
