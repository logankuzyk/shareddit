import React from "react";
import { Box, Center, Grid, VStack } from "@chakra-ui/react";
import Helmet from "react-helmet";

import { SharedditLogo } from "../components/SharedditLogo";
import { Editor } from "../components/Editor";

export const ImageGenerator: React.FC = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Center>
            <Editor />
          </Center>
        </VStack>
      </Grid>
    </Box>
  );
};
