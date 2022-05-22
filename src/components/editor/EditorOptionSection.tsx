import { Flex } from "@chakra-ui/react";
import React from "react";

import { Heading } from "../typography/Heading";

interface EditorOptionSectionProps {
  label: string;
}

export const EditorOptionSection: React.FC<EditorOptionSectionProps> = ({
  label,
  children,
}) => {
  return (
    <Flex direction="column" gap={2}>
      <Heading>{label}</Heading>
      {children}
    </Flex>
  );
};
