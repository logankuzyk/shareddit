import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Heading: React.FC<TextProps> = ({ ...props }) => {
  return <Text fontSize={16} fontWeight={500} {...props} />;
};
