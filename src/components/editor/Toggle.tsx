import { Switch, SwitchProps } from "@chakra-ui/react";
import React from "react";

export const Toggle: React.FC<SwitchProps> = (props) => {
  return <Switch size="sm" {...props} />;
};
