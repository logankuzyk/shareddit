import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

import { Heading } from "../../typography/Heading";

export const Primary: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      // _focus={{ borderColor: "brand.focus" }}
      // _hover={{ borderColor: "button.600", backgroundColor: "button.600" }}
      alignItems="center"
      borderRadius={8}
      borderWidth={1}
      gap={2}
      justifyContent="center"
      padding={1}
      {...props}
    >
      <Heading>{children}</Heading>
    </Button>
  );
};
