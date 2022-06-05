import { Flex } from "@chakra-ui/react";
import React from "react";

import { Paragraph } from "../typography/Paragraph";

interface EditorOptionProps {
  children: React.ReactNode;
  label: string;
}

export const EditorOption: React.FC<EditorOptionProps> = ({
  children,
  label,
}) => {
  return (
    <Flex alignItems="center" gap={1} justifyContent="space-between">
      <Paragraph>{label}</Paragraph>
      {children}
    </Flex>
  );
};
