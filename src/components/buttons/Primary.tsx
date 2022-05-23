import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

import { lightTheme } from "../../styles/themes";
import { Heading } from "../typography/Heading";

export const Primary: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      _hover={{
        backgroundColor: lightTheme.accents[500],
        color: lightTheme.background[300],
      }}
      alignItems="center"
      backgroundColor={lightTheme.accents[500]}
      borderRadius={8}
      color={lightTheme.background[100]}
      gap={2}
      justifyContent="center"
      padding={1}
      {...props}
    >
      <Heading>{children}</Heading>
    </Button>
  );
};
