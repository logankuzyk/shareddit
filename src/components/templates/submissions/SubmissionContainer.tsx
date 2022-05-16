import React from "react";
import { Flex } from "@chakra-ui/react";

export const SubmissionContainer: React.FC = ({ children }) => {
  return (
    <Flex paddingX={18} paddingTop={4} gap={2} direction="column">
      {children}
    </Flex>
  );
};
