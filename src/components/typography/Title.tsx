import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Title: React.FC<TextProps> = ({ ...props }) => {
  return <Text fontSize={20} fontWeight={700} {...props} />;
};
