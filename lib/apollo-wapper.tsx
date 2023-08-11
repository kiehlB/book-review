'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
export const __prod__ = process.env.NODE_ENV === 'production';

function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: __prod__ ? process.env.API_URL : 'http://localhost:4000/graphql',
    credentials: 'include',
    fetchOptions: { cache: 'no-store' },
  });

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
  );
}
