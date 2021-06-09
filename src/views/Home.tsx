import React, { useEffect } from "react";
import { Box, Text, VStack, Grid, Button } from "@chakra-ui/react";

import { GenerateButton } from "../components/GenerateButton";
import { RedditLinkInput } from "../components/RedditLinkInput";
import { SharedditLogo } from "../components/SharedditLogo";
import { ArrowDownIcon } from "@chakra-ui/icons";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  useEffect(() => {
    document.title = "shareddit";
  }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={8}>
          <SharedditLogo />
          <Text fontSize="5xl" fontWeight="semibold">
            The best way to screenshot reddit content.
          </Text>
          <RedditLinkInput />
          <GenerateButton />
          <Button marginTop="100%">
            How it works
            {<ArrowDownIcon />}
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
};
