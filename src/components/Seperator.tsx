import { Flex } from "@chakra-ui/react";
import React from "react";

import { colors } from "../styles/colors";

export const Seperator: React.FC = () => {
  return <Flex backgroundColor={colors.grey["300"]} height="1px" />;
};
