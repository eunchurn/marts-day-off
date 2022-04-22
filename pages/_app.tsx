import { ApolloClientProvider } from "../context";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloClientProvider>
      <Component {...pageProps} />
    </ApolloClientProvider>
  );
}

export default MyApp;
