import React, { useState, useEffect } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";

import RedditContextProvider from "./RedditContext";
import { Template } from "./Template";

export const Editor: React.FC = () => {
  return (
    <Box textAlign="center" fontSize="xl" width="100%">
      <Grid p={3}>
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
        </RedditContextProvider>
      </Grid>
    </Box>
  );
};
