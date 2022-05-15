import React from "react";
import { Flex } from "@chakra-ui/react";

import { colors } from "../../../styles/colors";

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
  const replyColors = [
    colors.purple["500"],
    colors.indigo["500"],
    colors.green["500"],
    colors.amber["500"],
    colors.deepOrange["500"],
    colors.red["500"],
  ];

  const indentColors = replyColors.slice(0, depth);

  if (depth === 0) {
    return <>{children}</>;
  } else {
    return (
      <Flex direction="row" gap={3}>
        {indentColors.map((color) => (
          <Flex
            width="2px"
            flexShrink={0}
            backgroundColor={color}
            key={`${id}-${color}`}
          />
        ))}
        {children}
      </Flex>
    );
  }
};
