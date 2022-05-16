import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Heading: React.FC<TextProps> = ({ ...props }) => {
  return <Text fontWeight={700} {...props} />;
};
