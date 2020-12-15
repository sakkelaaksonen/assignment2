import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";

import Head from "next/head";
import Link from "next/link";

// TODO proptypes

export default function Layout({ title, children }) {
  const client = new ApolloClient({
    uri: "/api/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div className="base-width mx-auto">
        <Head>
          <title>{title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {children}
      </div>
    </ApolloProvider>
  );
}
