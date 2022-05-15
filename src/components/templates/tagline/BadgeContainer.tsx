import React from "react";
import { Flex, FlexProps } from "@chakra-ui/react";

export const BadgeContainer: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={2}
      borderWidth={1}
      borderRadius={8}
      paddingX={1}
      paddingY={0.5}
      shrink={1}
      {...props}
    >
      {children}
    </Flex>
  );
};
