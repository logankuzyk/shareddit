import { Grid } from "@chakra-ui/react";
import React from "react";

import { SharedditLogo } from "../components/SharedditLogo";

export const SharedditView: React.FC = ({ children }) => {
  return (
    <Grid
      alignItems="center"
      gridTemplateRows="96px 1fr"
      maxHeight="100vh"
      paddingBottom="18px"
      textAlign="center"
    >
      <SharedditLogo />
      {children}
    </Grid>
  );
};
