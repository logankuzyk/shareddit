import { Flex } from "@chakra-ui/react";
import React from "react";

import { SharedditLogo } from "../components/SharedditLogo";

export const SharedditView: React.FC = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      fontSize="xl"
      paddingBottom={18}
      textAlign="center"
    >
      <SharedditLogo />
      {children}
    </Flex>
  );
};
