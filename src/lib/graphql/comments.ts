import gql from 'graphql-tag';

export const CreateComment = gql`
  mutation CreateSub($post_id: String!, $text: String!) {
    createSub(post_id: $post_id, text: $text) {
      id
    }
  }
`;
