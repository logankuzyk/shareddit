import { Text, TextProps } from "@chakra-ui/react";
import React from "react";

export const Caption: React.FC<TextProps> = ({ ...props }) => {
  return (
    <Text fontSize={12} fontWeight={200} wordBreak="keep-all" {...props} />
  );
};
