import { Input as _Input, InputProps } from "@chakra-ui/react";
import React from "react";

import { lightTheme } from "../styles/themes";

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <_Input
      backgroundColor={lightTheme.background[100]}
      textAlign="center"
      {...props}
    />
  );
};
