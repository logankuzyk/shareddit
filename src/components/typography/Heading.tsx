import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

export const Heading: React.FC<TextProps> = ({ ...props }) => {
  return <Text marginY={16} fontSize={16} fontWeight={700} {...props} />;
};
