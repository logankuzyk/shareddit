import { Flex } from "@chakra-ui/react";
import React from "react";

import { lightTheme } from "../styles/themes";

export const Seperator: React.FC = () => {
  return <Flex backgroundColor={lightTheme.background[400]} height="1px" />;
};
