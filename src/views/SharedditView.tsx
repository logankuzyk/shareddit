import { Flex } from "@chakra-ui/react";
import React from "react";

import { SharedditLogo } from "../components/SharedditLogo";
import { lightTheme } from "../styles/themes";

export const SharedditView: React.FC = ({ children }) => {
  return (
    <Flex
      backgroundColor={lightTheme.background[200]}
      fontSize="xl"
      height="100vh"
      paddingBottom={18}
      textAlign="center"
      width="100vw"
    >
      <Flex alignItems="center" direction="column" justifyContent="flex-start">
        <SharedditLogo />
        {children}
      </Flex>
    </Flex>
  );
};
