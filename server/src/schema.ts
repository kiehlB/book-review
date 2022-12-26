import { merge } from 'lodash';
import * as user from './users/user.resolver';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDef = `
  type Query {
    me: User!
  }
  type Mutation {
    logout: Boolean!
  }
`;

const resolvers = {
  Query: {},
  Mutation: {},
};

const schema = makeExecutableSchema({
  typeDefs: [typeDef, user.typeDef],
  resolvers: merge(resolvers, user.resolvers),
});

export default schema;
