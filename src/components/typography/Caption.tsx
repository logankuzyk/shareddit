import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

import { colors } from "../../styles/colors";

export const Caption: React.FC<TextProps> = ({ ...props }) => {
  return (
    <Text
      fontSize={12}
      fontWeight={200}
      color={colors.grey["500"]}
      {...props}
    />
  );
};
