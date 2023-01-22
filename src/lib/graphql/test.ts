import gql from 'graphql-tag';

export const GetC = gql`
  query Me {
    me {
      c
    }
  }
`;

export const TC = gql`
  mutation Login($a: Int!, $b: Int!) {
    login(a: $a, b: $b) {
      c
    }
  }
`;
