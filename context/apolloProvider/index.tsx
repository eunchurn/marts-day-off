import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "/api",
});

export function ApolloClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
