import React from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import Helmet from "react-helmet";

import { LinkForm } from "./components/LinkForm";
import { SharedditLogo } from "../shared/components/SharedditLogo";

export const Home: React.FC = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Text fontSize="4xl" fontWeight="semibold">
            The best way to screenshot reddit content.
          </Text>
          <LinkForm />
        </VStack>
      </Grid>
    </Box>
  );
};
