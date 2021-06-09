import React from "react";
import { Text } from "@chakra-ui/react";

interface SharedditLogoProps {}
export const SharedditLogo: React.FC<SharedditLogoProps> = ({}) => {
  return (
    <Text fontFamily="Signika" fontSize="5xl" fontWeight="semibold">
      shareddit
    </Text>
  );
};
