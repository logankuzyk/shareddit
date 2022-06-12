import { Flex } from "@chakra-ui/react";
import React from "react";

import { SharedditLogo } from "../components/SharedditLogo";
import { lightTheme } from "../styles/themes";

export const SharedditView: React.FC = ({ children }) => {
  return (
    <Flex
      backgroundColor={lightTheme.background[200]}
      fontSize="xl"
      paddingBottom={18}
      textAlign="center"
    >
      <Flex
        alignItems="center"
        direction="column"
        justifyContent="flex-start"
        minHeight="100vh"
        width="100vw"
      >
        <SharedditLogo />
        {children}
      </Flex>
    </Flex>
  );
};
