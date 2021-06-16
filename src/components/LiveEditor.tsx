import React, { useState, useEffect } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";

import { SharedditLogo } from "../components/SharedditLogo";
import { getParams } from "../util/getParams";
import { Template } from "./Template";

export const Editor: React.FC = () => {
  const [params, setParams] = useState({});

  useEffect(() => {
    getParams().then((urlParams) => {
      if (urlParams !== null) setParams(urlParams);
      else
        setParams({
          message:
            "Something went wrong, make sure you copied the reddit URL correctly.",
        });
    });
  }, []);

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Template>{{ params }}</Template>
        </VStack>
      </Grid>
    </Box>
  );
};
