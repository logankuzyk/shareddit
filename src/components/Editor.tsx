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
          <Box
            style={{
              borderRadius: "12px",
              borderColor: "#0A9396",
              borderWidth: "4px",
            }}
          >
            <Template />
          </Box>
          <ImageOptions />
        </RedditContextProvider>
      </VStack>
    </Box>
  );
};
