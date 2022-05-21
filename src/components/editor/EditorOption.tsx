import React from "react";
import { Flex } from "@chakra-ui/react";

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
    <Flex gap={1} alignItems="center" justifyContent="center">
      <Heading>{label}</Heading>
      {children}
    </Flex>
  );
};
