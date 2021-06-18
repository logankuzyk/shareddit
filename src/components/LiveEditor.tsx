import React, { useState, useEffect } from "react";
import { Box, Grid, VStack, Text } from "@chakra-ui/react";

import { SharedditLogo } from "../components/SharedditLogo";
import { getParams } from "../util/getParams";
import { Template } from "./Template";
import { FleshedRedditSubmission } from "../types";

const initialState: FleshedRedditSubmission = {
  author: "C1RRU5",
  score: "10 points",
  prettyDate: "1 year ago",
  bodyHTML: "Check it out.",
  awards: [],
  title: "shareddit.com is pretty sweet",
  link: "",
  comments: [],
  commentsCount: 0,
  type: "text",
  redact: false,
  sub: "/r/shareddit_com",
};

export const LiveEditor: React.FC = () => {
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
