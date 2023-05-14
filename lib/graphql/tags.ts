import { gql } from 'graphql-tag';

export const getTagsQuery = gql`
  query Tags($sort: String!) {
    tags(sort: $sort) {
      id
      name
      posts_count
    }
  }
`;
