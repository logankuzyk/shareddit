import { Flex, FlexProps } from "@chakra-ui/react";
import React from "react";

export const BadgeContainer: React.FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      alignItems="center"
      borderRadius={8}
      borderWidth={1}
      gap={2}
      justifyContent="center"
      paddingX={1}
      paddingY={0.5}
      shrink={1}
      {...props}
    >
      {children}
    </Flex>
  );
};
