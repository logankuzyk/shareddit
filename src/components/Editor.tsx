import React, { useState, useEffect } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";

import RedditContextProvider from "./RedditContext";
import { Template } from "./Template";
import { FleshedRedditSubmission } from "../types";

export const Editor: React.FC = () => {
  const [params, setParams] = useState<FleshedRedditSubmission | null>(null);
  const [error, setError] = useState<{ message: string }>({ message: "" });

  return (
    <Box textAlign="center" fontSize="xl" width="100%">
      <Grid p={3}>
        <RedditContextProvider>
          <Template />
        </RedditContextProvider>
      </Grid>
    </Box>
  );
};
