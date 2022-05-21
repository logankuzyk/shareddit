import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

export const Paragraph: React.FC<TextProps> = ({ ...props }) => {
  return <Text fontSize={14} fontWeight={400} {...props} />;
};
