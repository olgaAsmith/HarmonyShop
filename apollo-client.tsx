'use client';

import { ApolloLink, from, HttpLink } from '@apollo/client';
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/experimental-nextjs-app-support';

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('accessToken');
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  });

  return forward(operation);
});

function makeClient() {
  const httpLink = new HttpLink({
    uri: 'https://api.escuelajs.co/graphql',
    fetchOptions: { cache: 'no-store' },
  });
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
  });
}

export const client = makeClient();

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
