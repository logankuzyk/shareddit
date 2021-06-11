import React from "react";
import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import Helmet from "react-helmet";

import { LinkForm } from "../components/LinkForm";
import { SharedditLogo } from "../components/SharedditLogo";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
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
            The best way to screenshot reddit content.
          </Text>
          <LinkForm />
        </VStack>
      </Grid>
    </Box>
  );
};
