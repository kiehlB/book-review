import gql from 'graphql-tag';

export const CreateComment = gql`
  mutation CreateSub($post_id: String!, $text: String!, $comment_id: String) {
    createSub(post_id: $post_id, text: $text, comment_id: $comment_id) {
      id
      level
    }
  }
`;

export const RemoveSub = gql`
  mutation RemoveSub($id: String!) {
    removeSub(id: $id)
  }
`;

export const EditSub = gql`
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

export const GET_COMMENTS_COUNT = gql`
  query GetCommentsCount($id: String!) {
    post(id: $id) {
      id
      subs_count
    }
  }
`;

export const GET_SubComment = gql`
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
        created_at
        has_replies
        replies_count
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
