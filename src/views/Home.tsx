import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import Helmet from "react-helmet";

import { LinkForm } from "../components/LinkForm";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <Box textAlign="center" fontSize="xl">
      <Helmet>
        <meta charSet="utf-8" />
        <title>shareddit</title>
      </Helmet>
      <Grid minH="100vh" p={3}>
        <LinkForm />
      </Grid>
    </Box>
  );
};
