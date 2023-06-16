'use client';

import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  NormalizedCacheObject,
  SuspenseCache,
  from,
} from '@apollo/client';
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

export const __prod__ = process.env.NODE_ENV === 'production';

function makeClient() {
  const httpLink = new HttpLink({
    uri: __prod__ ? process.env.API_URL : 'http://localhost:4000/graphql',
    credentials: 'include',
  });

  return new ApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
              cutoffDelay: 100,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

function makeSuspenseCache() {
  return new SuspenseCache();
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
      {children}
    </ApolloNextAppProvider>
  );
}
