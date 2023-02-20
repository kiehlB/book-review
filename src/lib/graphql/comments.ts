import gql from 'graphql-tag';

export const CreateComment = gql`
  mutation CreateSub($post_id: String!, $text: String!, $comment_id: String) {
    createSub(post_id: $post_id, text: $text, comment_id: $comment_id) {
      id
    }
  }
`;

export const RemoveSub = gql`
  mutation RemoveSub($id: String!) {
    removeSub(id: $id)
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
