import React, { useState, useEffect } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";

import { getParams } from "../util/getParams";
import { Template } from "./Template";
import { FleshedRedditSubmission } from "../types";

export const Editor: React.FC = () => {
  const [params, setParams] = useState<FleshedRedditSubmission | null>(null);
  const [error, setError] = useState({ message: "" });
  // maybe just start with null and don't render until it's resolved?

  useEffect(() => {
    getParams().then((urlParams) => {
      if (!(typeof urlParams == "string")) setParams(urlParams);
      else setError({ message: urlParams });
    });
  }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          {params ? (
            <Template content={params} />
          ) : (
            <Text>{error.message}</Text>
          )}
        </VStack>
      </Grid>
    </Box>
  );
};
