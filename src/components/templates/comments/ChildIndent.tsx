import { Flex } from "@chakra-ui/react";
import React from "react";

import { useEditorData } from "../../../contexts/EditorContext";

interface ChildIndentProps {
  depth: number;
  id: string;
  children: React.ReactNode;
}

export const ChildIndent: React.FC<ChildIndentProps> = ({
  depth,
  id,
  children,
}) => {
  const { theme } = useEditorData();

  const replyColors = [
    theme.accents[500],
    theme.accents[400],
    theme.accents[300],
    theme.accents[200],
    theme.accents[100],
  ];

  const indentColors = [];

  for (let i = 0; i < depth; i++) {
    indentColors[i] = replyColors[i % replyColors.length];
  }

  if (depth === 0) {
    return <>{children}</>;
  } else {
    return (
      <Flex direction="row" gap={3}>
        {indentColors.map((color) => (
          <Flex
            backgroundColor={color}
            flexShrink={0}
            key={`${id}-${depth--}`}
            width="2px"
          />
        ))}
        {children}
      </Flex>
    );
  }
};
