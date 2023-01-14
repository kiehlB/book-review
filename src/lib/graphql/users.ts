import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      accessToken
      username
    }
  }
`;

export const registerMutation = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      id
    }
  }
`;

export const getUsersQuery = gql`
  query Users {
    users {
      id
      username
      follower {
        id
        follower_id
      }
    }
  }
`;

export const meQuery = gql`
  query Me {
    me {
      id
      username
    }
  }
`;

export const logoutMutation = gql`
  mutation Logout {
    logout
  }
`;

export const followMutation = gql`
  mutation FollowUser($username: String!) {
    followUser(username: $username) {
      id
      user_id
      follower_id
    }
  }
`;

export const unFollowMutation = gql`
  mutation UnFollowUser($username: String!) {
    unFollowUser(username: $username) {
      id
    }
  }
`;
