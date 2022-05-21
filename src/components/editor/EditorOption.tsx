import { Flex } from "@chakra-ui/react";
import React from "react";

import { Heading } from "../typography/Heading";

interface EditorOptionProps {
  children: React.ReactNode;
  label: string;
}

export const EditorOption: React.FC<EditorOptionProps> = ({
  children,
  label,
}) => {
  return (
    <Flex alignItems="center" gap={1} justifyContent="center">
      <Heading>{label}</Heading>
      {children}
    </Flex>
  );
};
