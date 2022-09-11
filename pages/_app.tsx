import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

import "../src/styles/fonts.css";
import "../src/styles/redditText.css";

import { SharedditView } from "../src/views/SharedditView";

const App = ({ Component, pageProps }: AppProps) => {
  const client = new QueryClient();

  return (
    <ChakraProvider>
      <Head>
        <head>
          <link href="%PUBLIC_URL%/favicon.ico" rel="icon" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="#000000" name="theme-color" />
          <meta
            content="The comprehensive reddit screenshot tool."
            name="description"
          />
          <link href="%PUBLIC_URL%/logo192.png" rel="apple-touch-icon" />

          <link href="%PUBLIC_URL%/manifest.json" rel="manifest" />

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

export default App;
