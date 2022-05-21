import React from "react";
import { Flex } from "@chakra-ui/react";

import { colors } from "../styles/colors";

interface SeperatorProps {}
export const Seperator: React.FC<SeperatorProps> = ({}) => {
  return <Flex height="1px" backgroundColor={colors.grey["300"]} />;
};
