import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const __prod__ = process.env.NODE_ENV === 'production';

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),

    link: new HttpLink({
      uri: __prod__ ? process.env.API_URL : 'http://localhost:4000/graphql',
    }),
  });
});
