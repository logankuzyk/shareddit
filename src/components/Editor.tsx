import React from "react";
import { Box, VStack } from "@chakra-ui/react";

import RedditContextProvider from "./RedditContext";
import { Template } from "./Template";
import { ImageOptions } from "./ImageOptions";

export const Editor: React.FC = () => {
  return (
    <Box textAlign="center" fontSize="xl" width="100%">
      <VStack maxW="lg" marginX="auto" spacing={4}>
        <RedditContextProvider>
          <Template />
          <ImageOptions />
        </RedditContextProvider>
      </VStack>
    </Box>
  );
};
