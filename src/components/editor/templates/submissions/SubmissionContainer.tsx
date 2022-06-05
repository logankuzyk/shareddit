import { Flex } from "@chakra-ui/react";
import React from "react";

export const SubmissionContainer: React.FC = ({ children }) => {
  return (
    <Flex direction="column" gap={2} paddingX={18} paddingY={4}>
      {children}
    </Flex>
  );
};
