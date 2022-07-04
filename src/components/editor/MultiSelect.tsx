import { Select, SelectProps } from "@chakra-ui/react";
import React from "react";

export const MultiSelect: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <Select maxWidth="max-content" size="sm" {...props}>
      {children}
    </Select>
  );
};
