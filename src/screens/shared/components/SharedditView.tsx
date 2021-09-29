import React from "react";
import { Box, Center, Grid, VStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

import { SharedditLogo } from "./SharedditLogo";

interface SharedditViewProps {
  children: any;
}

export const SharedditView: React.FC<SharedditViewProps> = ({ children }) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z1Z9KMHZNX"
        ></script>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Center>
            <Box textAlign="center" fontSize="xl" width="100%">
              {children}
            </Box>
          </Center>
        </VStack>
      </Grid>
    </Box>
  );
};
