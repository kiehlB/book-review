'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { onError } from '@apollo/client/link/error';

export const __prod__ = process.env.NODE_ENV === 'production';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions, ...details }) => {
      const locationsString = JSON.stringify(locations, null, 2);
      const extensionsString = JSON.stringify(extensions, null, 2);
      const detailsString = JSON.stringify(details, null, 2);

      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locationsString}, Path: ${path} extensions${extensionsString} ${detailsString}`,
      );
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function makeClient(token: any) {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: __prod__ ? process.env.API_URL : 'http://localhost:4000/graphql',
    credentials: 'include',
    fetchOptions: { cache: 'no-store' },
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  const link =
    typeof window === 'undefined'
      ? ApolloLink.from([new SSRMultipartLink({ stripDefer: true }), errorLink, httpLink])
      : ApolloLink.from([errorLink, httpLink]);

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link: link,
  });
}

export function ApolloWrapper({ children, token }: any) {
  return (
    <ApolloNextAppProvider makeClient={() => makeClient(token)}>
      {children}
    </ApolloNextAppProvider>
  );
}
