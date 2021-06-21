import React, { useState } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";
import Helmet from "react-helmet";

import { SharedditLogo } from "../components/SharedditLogo";
import { getParams } from "../util/getParams";
import { Editor } from "../components/Editor";
import { useEffect } from "react";

export const ImageGenerator: React.FC = () => {
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <VStack maxW="lg" marginX="auto" spacing={4}>
          <SharedditLogo />
          <Editor />
        </VStack>
      </Grid>
    </Box>
  );
};
