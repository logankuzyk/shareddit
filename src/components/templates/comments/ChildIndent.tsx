import React from "react";
import { Flex } from "@chakra-ui/react";

import { colors } from "../../../styles/colors";

interface ChildIndentProps {
  depth: number;
  children: React.ReactNode;
}

export const ChildIndent: React.FC<ChildIndentProps> = ({
  depth,
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
      <Flex flexDirection="row">
        {indentColors.map((color) => (
          <Flex marginLeft={18} width={2} backgroundColor={color} />
        ))}
        {children}
      </Flex>
    );
  }
};
