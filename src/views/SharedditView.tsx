import { Box, Center, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import { Helmet } from "react-helmet";

import { SharedditLogo } from "../components/SharedditLogo";

interface SharedditViewProps {
  children: any;
}

export const SharedditView: React.FC<SharedditViewProps> = ({ children }) => {
  return (
    <Box fontSize="xl" textAlign="center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack marginX="auto" maxW="lg" spacing={4}>
          <SharedditLogo />
          <Center>
            <Box fontSize="xl" textAlign="center" width="100%">
              {children}
            </Box>
          </Center>
        </VStack>
      </Grid>
    </Box>
  );
};
