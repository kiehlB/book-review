import gql from 'graphql-tag';

export const loginMutation = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
    }
  }
`;

export const registerMutation = gql`
  mutation Register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
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

export const whoAmIQuery = gql`
  query whoAmI {
    whoami {
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

// export const followMutation = gql`
//   mutation FollowUser($username: String!) {
//     followUser(username: $username) {
//       id
//       user_id
//       follower_id
//     }
//   }
// `;

// export const unFollowMutation = gql`
//   mutation UnFollowUser($username: String!) {
//     unFollowUser(username: $username) {
//       id
//     }
//   }
// `;
