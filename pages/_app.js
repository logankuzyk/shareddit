import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";

import "../src/styles/fonts.css";
import "../src/styles/redditText.css";

import { SharedditView } from "../src/views/SharedditView";

export default ({ Component, pageProps }) => {
  const client = new QueryClient();

  return (
    <ChakraProvider>
      <Head>
        <head>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="The comprehensive reddit screenshot tool."
          />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

          <title>shareddit</title>
        </head>
      </Head>

      <QueryClientProvider client={client}>
        <SharedditView>
          <Component {...pageProps} />
        </SharedditView>
      </QueryClientProvider>
    </ChakraProvider>
  );
};
