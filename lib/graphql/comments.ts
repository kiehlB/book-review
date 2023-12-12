import gql from 'graphql-tag';

export const CreateComment = gql`
  mutation CreateComments($post_id: String!, $text: String!, $comment_id: String) {
    createComments(post_id: $post_id, text: $text, comment_id: $comment_id) {
      id
      level
    }
  }
`;

export const RemoveComments = gql`
  mutation RemoveComments($id: String!) {
    removeComments(id: $id)
  }
`;

export const GET_COMMENTS_COUNT = gql`
  query GetCommentsCount($id: String!) {
    post(id: $id) {
      id
      comments_count
    }
  }
`;

export const EditComments = gql`
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

export const GET_SubComment = gql`
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

export const CommentUpvotes = gql`
  mutation commentUpvotes($id: String!) {
    commentUpvotes(id: $id)
  }
`;

export const DeleteCommentUpvote = gql`
  mutation DeleteCommentUpvote($id: String!) {
    deleteCommentUpvote(id: $id)
  }
`;
