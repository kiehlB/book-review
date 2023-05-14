import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      username
      accessToken
      refreshToken
      profile {
        id
        bio
        profile_name
        thumbnail
      }
    }
  }
`;

export const registerMutation = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      id
      username
      accessToken
      refreshToken
      profile {
        id
        bio
        profile_name
        thumbnail
      }
    }
  }
`;

export const getUsersQuery = gql`
  query Users {
    users {
      id
      username
      profile {
        id
        bio
        profile_name
        user_id
        created_at
        updated_at
      }
    }
  }
`;

export const whoAmIQuery = gql`
  query whoAmI {
    whoami {
      id
      username
      profile {
        id
        bio
        profile_name
        user_id
        thumbnail
        created_at
        updated_at
      }
    }
  }
`;

export const logoutMutation = gql`
  mutation Logout {
    logout
  }
`;
