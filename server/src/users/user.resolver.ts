import { getRepository } from 'typeorm';
import User from './user.entitiy';
import gql from 'graphql-tag';

export const typeDef = gql`
  type User {
    id: String
    username: String
    email: String
    password: String
    email_verified: Boolean
    tokenVersion: String
    profile: UserProfile
    auth: [User]
    follower: Followers
    accessToken: String
    refreshToken: String
    created_at: String
  }
  type UserProfile {
    id: String
    bio: String
    user_id: String
  }
  type Followers {
    id: String
    user_id: String
    follower_id: String
  }
  type Following {
    id: String
    user_id: String
    following_id: String
  }
`;

export const resolvers = {
  Query: {
    me: (_, __, { req, res }) => {
      if (!res.locals.user_id) {
        return null;
      }

      const users = getRepository(User);

      return users.findOne({});
    },
  },
  Mutation: {
    logout: async (_, args, { res }) => {
      const accessToken = '';
      const refreshToken = '';
      const token = {
        accessToken,
        refreshToken,
      };

      return true;
    },
  },
};
