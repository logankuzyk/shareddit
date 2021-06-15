import React from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { SharedditLogo } from "../components/SharedditLogo";
import { GoBackButton } from "../components/GoBackButton";

export const NotFound: React.FC = () => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit - error</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Text fontSize="5xl" fontWeight="semibold">
            404 - not found
          </Text>
          <GoBackButton />
        </VStack>
      </Grid>
    </Box>
  );
};
