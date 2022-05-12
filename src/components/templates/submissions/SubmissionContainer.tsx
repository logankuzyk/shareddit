import React from "react";
import { Flex } from "@chakra-ui/react";

export const SubmissionContainer: React.FC = ({ children }) => {
  return (
    <Flex paddingX={18} paddingY={4} flexDirection="column">
      {children}
    </Flex>
  );
};
