"use client";
import { ApolloProvider } from "@apollo/client";
import client from "@/store/apollo-client";

const ApolloProviderWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
