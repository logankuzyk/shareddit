import React from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import Helmet from "react-helmet";

import { SharedditLogo } from "../components/SharedditLogo";
import { usePathnameQuery } from "../hooks/usePathnameQuery";

export const Editor: React.FC = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Text fontSize="5xl" fontWeight="semibold">
            Editor area goes here. Params: {usePathnameQuery()}
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};
