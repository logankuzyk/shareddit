import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Paragraph: React.FC<TextProps> = ({ ...props }) => {
  return <Text fontSize={14} fontWeight={400} {...props} />;
};
